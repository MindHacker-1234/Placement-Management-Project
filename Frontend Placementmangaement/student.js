
const visitId = sessionStorage.getItem('visitId');

const visitList = document.getElementById('visitList');
const studentList = document.getElementById('studentList');

// const addBtn = document.getElementById('addBtn');
// addBtn.addEventListener('click', () => {
//   window.location.href = "addstudent.html";
// });

// const deleteBtn = document.getElementById('deleteBtn');
// deleteBtn.addEventListener('click', () => {
//   window.location.href = 'deletestudent.html';
// });
// const emailBtn = document.getElementById('emailBtn');
// emailBtn.addEventListener('click', () => {
//   fetch(`http://localhost:8080/Placement/student/display`)
//     .then(response => response.json())
//     .then(data => {
//       data.forEach(student => {
//         const email = student.email;
//         const message = {
//           "From": "virri.praneeth@wavemaker.com",
//           "To": email,
//           "Subject": "Regarding placement",
//           "TextBody": "You are still eligible to apply for companies"
//         };
//         fetch('http://localhost:25/email', {
//           method: 'POST',
//           mode: 'cors',
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'X-Postmark-Server-Token': 'bebaa614-d55b-4119-822a-d52574d48e93'
//           },
//           body: JSON.stringify(message)
//         })
//         .then(response => console.log(`Email sent to ${email}: ${response.status} ${response.statusText}`))
//         .catch(error => console.error(`Error sending email to ${email}: ${error}`));
//       });
  
//       // alert("Emails have been sent to all the students.");
//     })
//     .catch(error => console.error(error));
// });




fetch(`http://localhost:8080/Placement/visit/${visitId}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const companyName = data.company.companyName;
    const companyDescription = data.company.companyDescription;
    const ctc = data.ctc;
    const jobProfile = data.jobProfile;
    const companyItem = `
      <div class="visit-item">
        <div class="col1">${companyName}</div>
        <div class="col2">${companyDescription}</div>
   
        <div class="col3">${ctc}</div>
        <div class="col4">${jobProfile}</div>
      </div>
    `;
    visitList.innerHTML = companyItem;
  })
  .catch(error => console.error(error));

fetch(`http://localhost:8080/Placement/student/display`)
  .then(response => response.json())
  .then(data => {
    studentList.innerHTML = '';
    data.forEach(student => {
      const studentId = student.id;
      const studentName = student.studentName;
      const rollNo = student.rollNumber;
      const email = student.email;
      const presentSemester = student.presentSemester;
      const cgpa = student.cgpa;
      const isPlaced = student.isPlaced;
      const studentItem = `
        <div class="student-item">
        <div class="col9">${studentId}</div>
          <div class="col6">${studentName}</div>
          <div class="col7">${rollNo}</div>
          <div class="col8">${email}</div>
          <div class="col9">${cgpa}</div>
          <div class="col9">${presentSemester}</div>
          <div class="col10">${isPlaced}</div>
        </div>
      `;
      studentList.insertAdjacentHTML('beforeend', studentItem);
    });
  })
  .catch(error => console.error(error));


const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', searchById);

function searchById() {
  const searchTerm = searchInput.value.toLowerCase();
  const studentItems = document.querySelectorAll('.student-item');
  studentItems.forEach(item => {
    const id = item.querySelector('.col8').textContent.toLowerCase();
    if (id.includes(searchTerm)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", openDialog);

function openDialog() {

  const dialog = document.createElement("dialog");


  dialog.innerHTML = `
  <head>
    <style>
      label {
        display: inline-block;
        width: 150px;
        text-align: right;
        margin-right: 20px;
        padding: 10px;
      }

      /* Style for form inputs */
      input[type="text"],
      input[type="email"],
      input[type="number"] {
        display: inline-block;
        width: 200px;
        padding: 5px;
        margin-bottom: 10px;
      }

      /* Style for form submit button */
      input[type="submit"] {
        display: block;
        margin-top: 10px;
      }

      /* Style for dialog box */
      dialog {
        width: 50%;
        height: auto;
        max-height: calc(100% - 25%);
        margin: auto;
        padding: 20px;
        border: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

      /* Style for dialog container */
      .dialog-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }
      .button {
          display: flex;
          justify-content: center;
        }
        .error {
        color: red;
        font-size: 12px;
        display: block;
        z-index: 100000;
        }
    </style>
  </head>
  <body>
    <form id="studentForm">
    <h1>Add Student Details</h1>
    <label for="studentName">student Name:</label>
          <input type="text" id="studentName" name="studentName"><br>
          <span class="error" id="studentNameError"></span>
  
           <label for="rollno">rollNumber:</label>
          <input type="number" id="rollNumber" name="rollNumber"><br>
          <span class="error" id="rollNumberError"></span> 
        
          <label for="Email">Email:</label>
          <input type="email" id="email" name="email"><br>
          <span class="error" id="emailError"></span> 
  
           <label for="presentSemester">presentSemester:</label>
           <input type="number" id="presentSemester" name="presentSemester"><br>
           <span class="error" id="presentSemesterError"></span> 
  
          <label for="cgpa">cgpa:</label>
           <input type="number" id="cgpa" name="cgpa"><br>
           <span class="error" id="cgpaError"></span> 
  
           <label for="isPlaced">isPlaced:</label>
          <input type="number" id="isPlaced" name="isPlaced"><br>
          <span class="error" id="isPlacedError"></span> 
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

  const studentForm = document.getElementById("studentForm");
  studentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(studentForm);
    
    // Get form values
    const studentName = document.getElementById("studentName").value;
    const rollNumber = document.getElementById("rollNumber").value;
    const email = document.getElementById("email").value;
    const presentSemester = document.getElementById("presentSemester").value;
    const cgpa = document.getElementById("cgpa").value;
    const isPlaced = document.getElementById("isPlaced").value;

const studentNameError = document.getElementById('studentNameError');
const rollNumberError = document.getElementById('rollNumberError');
const emailError = document.getElementById('emailError');
const presentSemesterError = document.getElementById('presentSemesterError');
const cgpaError = document.getElementById('cgpaError');
const isPlacedError = document.getElementById('isPlacedError');


studentNameError.textContent = '';
rollNumberError.textContent = '';
emailError.textContent = '';
cgpaError.textContent = '';
presentSemesterError.textContent = '';
isPlacedError.textContent = '';

    
    // Validate form inputs
    if (studentName === '') {
    studentNameError.textContent='studentName is Required';
    return;
    }
    if (rollNumber === '') {
    rollNumberError.textContent = 'rollNumber is Required'
    return;
    }
    if (email === '') {
    emailError.textContent='Email is Required'
    return;
    }
    if (presentSemester === '') {
    presentSemesterError.textContent = 'presentSemester is Required'
    return;
    }
    if (cgpa === '') {
    cgpaError.textContent = 'cgpa is Required';
    return;
    }
    if (isPlaced === '') {
    isPlacedError.textContent = 'isPlaced is Required';
    return;
    }
    
    // Create student object
    const student = {
      studentName: formData.get('studentName'),
      rollNumber: formData.get('rollNumber'),
      email: formData.get('email'),
      presentSemester: formData.get('presentSemester'),
      cgpa: formData.get('cgpa'),
      isPlaced: formData.get('isPlaced'),
    // studentName: studentName,
    // rollNumber: rollNumber,
    // email: email,
    // presentSemester: presentSemester,
    // cgpa: cgpa,
    // isPlaced: isPlaced,
    };
    dialog.remove();
    // Send POST request to server
    fetch("http://localhost:8080/Placement/student/create", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
    })
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      const dialog = document.createElement('dialog');
      dialog.innerHTML = '<p>Student created successfully</p>';
      document.body.appendChild(dialog);
      dialog.showModal();
      setTimeout(() => {
        dialog.close();
        dialog.remove();
        window.location.href = `http://127.0.0.1:5500/student.html`;
      }, 2000);
    })
    .catch((error) => console.error(error));
    

    });
 
}


function closeDialog() {
  const dialog = document.querySelector("dialog");
  dialog.close();
}

const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", openDialog1);

function openDialog1() {
  const dialog1 = document.createElement("dialog");

  dialog1.innerHTML = `
    <head>
      <style>
        dialog {
          width: 50%;
          height: 50%;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: none;
          background-color: white;
          z-index: 9999;
          padding: 20px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        label {
          margin-bottom: 10px;
        }
        
        input[type="number"] {
          border-color: black;
          padding: 5px;
          margin-bottom: 20px;
        }
        
        input[type="submit"] {
          padding: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <form id="studentForm">
      <h1>Enter Student Id</h1>
        <label for="id">ID:</label>
        <input type="number" id="id" name="id">
        <br>
        <input type="submit" value="Submit">
      </form>
    </body>
  `;
  dialog1.addEventListener("click", (event) => {
    if (event.target === dialog1) {
      dialog1.close();
      dialog1.remove();
    }
  });

  // Add the dialog box to the page
  document.body.appendChild(dialog1);

  
  dialog1.showModal();

  
  const studentForm = document.getElementById('studentForm');
  studentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(studentForm);
    const id = formData.get('id');

    fetch(`http://localhost:8080/Placement/student/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log(data);
      const dialog = document.createElement('dialog');
      dialog.innerHTML = '<p>Student deleted successfully</p>';
      document.body.appendChild(dialog);
      dialog.showModal();
      setTimeout(() => {
        dialog.close();
        window.location.href = `http://127.0.0.1:5500/student.html`;
      }, 2000);
    })
    .catch(error => console.error(error));
  });

}

