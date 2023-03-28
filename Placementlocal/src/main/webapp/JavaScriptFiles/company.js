const companyList = document.getElementById("company-list");
const companyCount = document.getElementById("company-count");
const port = "localhost:8080";



fetch(`http://${port}/Placementlocal/services/company/display`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let row = null;
    companyCount.textContent = `(${data.length})`;





    data.forEach((company, index) => {
      if (index % 3 === 0) { // create new row for every 3rd company
        row = document.createElement("div");
        row.classList.add("row");
        companyList.appendChild(row);
      }

      const companyContainer = document.createElement("div");
      companyContainer.classList.add("company-container");

      const companyInfo = document.createElement("div");
      companyInfo.classList.add("company-info");

      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");

      const image = document.createElement("img");
      image.src = `images/${company.companyName}.png`;

      const branchesAndOfficerContainer = document.createElement("div");
      branchesAndOfficerContainer.classList.add("branches-officer-container");

      const branches = document.createElement("div");
      branches.classList.add("branches");
      branches.textContent = "Applicable Branches: " + company.applicableBranches;

      const placementOfficer = document.createElement("div");
      placementOfficer.classList.add("placement-officer");
      placementOfficer.textContent = "Placement Officer: " + company.placementOfficer;

      branchesAndOfficerContainer.appendChild(placementOfficer);
      branchesAndOfficerContainer.appendChild(branches);

      imageContainer.appendChild(image);
      companyInfo.appendChild(imageContainer);
      companyInfo.appendChild(branchesAndOfficerContainer);
      companyContainer.appendChild(companyInfo);

      const companyDesc = document.createElement("div");
      companyDesc.classList.add("company-description");
      companyDesc.textContent = company.companyDescription;

      companyContainer.appendChild(companyDesc);

      const col4 = document.createElement("div");
      col4.classList.add("col4");
      col4.appendChild(companyContainer);
      row.appendChild(col4);
    });
  })
  .catch(error => console.error(error));


  const addCompanyBtn = document.getElementById("addCompany");
  addCompanyBtn.addEventListener("click", openDialog);

  function openDialog() {
  // Create a dialog box element
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
  <head>
  <style>
  dialog {
    width: 50%;
    height: 75%;
    margin: auto;
    padding: 20px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow-y: hidden;
  }
form {
   margin-left: 10%;
}

      label {
        display: inline-block;
        width: 150px;
        text-align: right;
        margin-right: 20px;
        padding: 10px;
      }

      /* Style for form inputs */
      input[type="text"]
      {
        margin-top: 10px;
        display: inline-block;
        width: 200px;
        padding: 5px;
        margin-bottom: 10px;
      }
       input[type="submit"] {
              display: block;
              margin-top: 10px;

            }


            .button1 {
                      display: flex;
                      justify-content: center;
                      margin-left: 50%;
                      background-color: green;
                      padding: 5px;
                      height: 10%;
                      color: white;
                      border-radius: 10px;
                    }

  </style>
  </head>
  <body>
  <form id="companyForm">
  <h1 style="text-align: center; color: black;"> Enter Company Details</h1>
  <label for="companyName">Company Name:</label>
  <input type="text" id="companyName" name="companyName"><br><br>
  <label for="placementOfficer">Placement Officer:</label>
    <input type="text" id="placementOfficer" name="placementOfficer"><br><br>

    <label for="contact">Contact:</label>
    <input type="text" id="contact" name="contact"><br><br>

    <label for="applicableBranches">Applicable Branches:</label>
    <input type="text" id="applicableBranches" name="applicableBranches"><br><br>

    <label for="companyDescription">Company Description:</label>
    <textarea id="companyDescription" name="companyDescription"></textarea><br><br>

    <button class="button1" style="margin-left: 50%; background-color: green; padding: 5px;" type="submit">Save</button>
  </form>
  </body>
`;




  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
      dialog.remove();
    }
  });

document.body.appendChild(dialog);

// Show the dialog box
dialog.showModal();

  const companyForm = document.getElementById('companyForm');
  companyForm.addEventListener('submit', (event) => {

    event.preventDefault();
    const formData = new FormData(companyForm);

    // Get form values
    const companyNameInput = document.getElementById('companyName');
    const placementOfficerInput = document.getElementById('placementOfficer');
    const contactInput = document.getElementById('contact');
    const applicableBranchesInput = document.getElementById('applicableBranches');
    const companyDescriptionInput = document.getElementById('companyDescription');

    // Store company details in the database
    const data = {
      companyName: formData.get('companyName'),
      placementOfficer: formData.get('placementOfficer'),
      contact: formData.get('contact'),
      applicableBranches: formData.get('applicableBranches'),
      companyDescription: formData.get('companyDescription'),
    };

    fetch('http://localhost:8080/Placementlocal/services/company/create', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    .then(data => {
         // Display success toaster
         const toaster = document.createElement('div');
         toaster.style.position = 'fixed';
         toaster.style.bottom = '10px';
         toaster.style.left = '10px';
         toaster.style.backgroundColor = 'green';
         toaster.style.color = 'white';
         toaster.style.padding = '10px';
         toaster.innerText = 'Company added successfully';
         document.body.appendChild(toaster);

         // Remove toaster after 2 seconds
         setTimeout(() => {
           document.body.removeChild(toaster);
         }, 2000);

         // Close dialog box
         dialog.close();
       })
       .catch(error => {
         alert('An error occurred while saving the company details');
       });
     });

}








