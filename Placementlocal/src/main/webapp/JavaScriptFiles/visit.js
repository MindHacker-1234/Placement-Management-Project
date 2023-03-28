const upcomingBtn = document.getElementById('upcomingBtn');
const completedBtn = document.getElementById('completedBtn');
const visitList = document.getElementById('visitList');
const port = "localhost:8080";
// const addBtn = document.getElementById('addBtn');
// addBtn.addEventListener('click', () => {
//   window.location.href = 'addVisit.html';
// });

function displayUpcomingVisits() {
    fetch(`http://${port}/Placementlocal/services/visit/display`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        visitList.innerHTML = '';
        const upcomingVisits = data.filter(visit => new Date(visit.scheduleDate) >= new Date());
        upcomingVisits.forEach(visit => {
            const visitId = visit.id;
            const date = visit.scheduleDate;
          const companyName = visit.company.companyName;
          const companyDescription = visit.company.companyDescription;
          const ctc = visit.ctc;
          const jobProfile = visit.jobProfile;
          const visitItem = `
          <div class="companycontainer">
            <div class="visit-item">
            <div class="col5">${visitId}</div>
              <div class="col6">${companyName}</div>
              <div class="col7">${companyDescription}</div>
              <div class="col8">${ctc}</div>
              <div class="col9">${date}</div>
              <div class="col10">${jobProfile}</div>
            </div>
            </div>
          `;
          visitList.insertAdjacentHTML('beforeend', visitItem);
        });
      })
      .catch(error => console.error(error));
  }
  
  displayUpcomingVisits(); // call the function on page load
  
  upcomingBtn.addEventListener('click', () => {
    displayUpcomingVisits(); // call the function on button click
  });
  



completedBtn.addEventListener('click', () => {
  fetch(`http://${port}/Placementlocal/services/visit/display`)
    .then(response => response.json())
    .then(data => {
      visitList.innerHTML = '';
      const completedVisits = data.filter(visit => new Date(visit.scheduleDate) < new Date());
      completedVisits.forEach(visit => {
        const visitId = visit.id;
        const date = visit.scheduleDate;
        const companyName = visit.company.companyName;
        const companyDescription = visit.company.companyDescription;
        const ctc = visit.ctc;
        const jobProfile = visit.jobProfile;
        const visitItem = `
        <div class="companycontainer">
          <div class="visit-item ">
            <div class="col5">${visitId}</div>
            <div class="col6">${companyName}</div>
            <div  class="col7">${companyDescription}</div>
            <div class="col8">${ctc}</div>
            <div class="col9">${date}</div>
            <div class="col10">${jobProfile}</div>
          </div>
          </div>
        `;
        visitList.insertAdjacentHTML('beforeend', visitItem);
      });
    })
    .catch(error => console.error(error));
});

visitList.addEventListener('click', event => {
  const target = event.target;
  if (target.closest('.visit-item')) {
    const visitId = target.closest('.visit-item').querySelector('.col5').textContent;
    sessionStorage.setItem('visitId', visitId);
    window.location.href = 'student.html';
  }
});


const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", openDialog);

function openDialog() {
  // Create a dialog box element
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
  <head>
  <style>
  dialog {
    width: 50%;
    height: 50%;
    margin: auto;
    padding: 20px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  
  .input-container {
    display: flex;
    flex-direction: row;
    gap: 3px;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }
  
  label {
    
    width: 120px;
    font-size: 16px;
    flex: 1;
    margin-right: 0;
    margin-left: 30px;
  }
  
  input {
    width: calc(100% - 120px);
    flex: 1;
    font-size: 16px;
    
    border: none;
    border-bottom: 1px solid #999;
  }
  
  .error {
    color: red;
    font-size: 14px;
  }
  .button {
    margin-left: 22vw;
    
    align-items: center;
  }
  input[type="submit"] {
    margin-top: 20px;
    padding: 10px;
    width: auto;
    font-size: 16px;
    background-color: #0066cc;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    align-self: center;
    align-items: center
  }
  
  input[type="submit"]:hover {
    background-color: #0059b3;
  }

  </style>
  </head>
  <body>
  <form id="visitForm">
  <h1 style="text-align: center; font-size: 30px;">Add Event Details</h1>

    <div class="input-container">
      <label for="driveName">Drive Name:</label>
      <input type="text" id="driveName" name="driveName">
      <span class="error" id="driveNameError"></span>

      <label for="ctc">CTC:</label>
      <input type="number" id="ctc" name="ctc">
      <span class="error" id="ctcError"></span>
    </div>
  
    <div class="input-container">
      <label for="jobProfile">Job Profile:</label>
      <input type="text" id="jobProfile" name="jobProfile">
      <span class="error" id="jobProfileError"></span>

      <label for="scheduleDate">Schedule Date:</label>
      <input type="date" id="scheduleDate" name="scheduleDate">
      <span class="error" id="scheduleDateError"></span>
    </div>
  
    <div class="input-container">
      <label for="companyId">Company ID:</label>
      <input type="number" id="companyId" name="companyId">
      <span class="error" id="companyIdError"></span> 
    </div>
  <div class="button">
    <input type="submit" value="Submit">
    </div>
  </form>
  </body>
  `;
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
      dialog.remove();
    }
  });
  // Add the dialog box to the page
  document.body.appendChild(dialog);

  // Show the dialog box
  dialog.showModal();

  
const visitForm = document.getElementById('visitForm');
visitForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(visitForm);

  const driveNameInput = document.getElementById('driveName');
const ctcInput = document.getElementById('ctc');
const jobProfileInput = document.getElementById('jobProfile');
const scheduleDateInput = document.getElementById('scheduleDate');
const companyIdInput = document.getElementById('companyId');

const driveNameError = document.getElementById('driveNameError');
const ctcError = document.getElementById('ctcError');
const jobProfileError = document.getElementById('jobProfileError');
const scheduleDateError = document.getElementById('scheduleDateError');
const companyIdError = document.getElementById('companyIdError');


driveNameError.textContent = '';
ctcError.textContent = '';
jobProfileError.textContent = '';
scheduleDateError.textContent = '';
companyIdError.textContent = '';

if (driveNameInput.value.trim() === '') {
driveNameError.textContent = 'Drive name is required';
return;
}

if (isNaN(ctcInput.value) || ctcInput.value.trim() === '') {
ctcError.textContent = 'CTC must be a number';
return;
}

if (jobProfileInput.value.trim() === '') {
jobProfileError.textContent = 'Job profile is required';
return;
}

if (scheduleDateInput.value.trim() === '') {
scheduleDateError.textContent = 'Schedule date is required';
return;
}

if (isNaN(companyIdInput.value) || companyIdInput.value.trim() === '') {
companyIdError.textContent = 'Company ID must be a number';
return;
}

  const data = {
    // id: formData.get('id'),
    driveId: formData.get('driveId'),
    driveName: formData.get('driveName'),
    ctc: formData.get('ctc'),
    jobProfile: formData.get('jobProfile'),
    scheduleDate: formData.get('scheduleDate'),
    company:{id: formData.get('companyId'),
    companyName: formData.get('companyName'),
    companyDescription: formData.get('companyDescription'),
    placementOfficer: formData.get('placementOfficer'),
    contact: formData.get('contact'),
    applicableBranches: formData.get('applicableBranches')
  }
    
  };
  dialog.remove();
  console.log(data);
  fetch(`http://${port}/Placementlocal/services/visit/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const dialog = document.createElement('dialog');
    dialog.innerHTML = '<p>Event created successfully</p>';
    document.body.appendChild(dialog);
    dialog.showModal();
    setTimeout(() => {
      dialog.close();
      window.location.href = `visit.html`;
    }, 2000);
  })
  .catch(error => console.error(error));
});
}

function closeDialog() {
  const dialog = document.querySelector("dialog");
  dialog.close();
}
