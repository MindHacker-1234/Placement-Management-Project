const port = "localhost:8080";


fetch(`http://${port}/Placementlocal/services/placement/display`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    studentList.innerHTML = '';
    data.forEach(placements => {
      const studentId = placements.student.id;
      const studentName = placements.student.studentName;
      const rollNo = placements.student.rollNumber;
      const email = placements.student.email;
      const presentSemester = placements.student.presentSemester;
      const cgpa = placements.student.cgpa;
      const isPlaced = placements.student.isPlaced;
      const companyName = placements.company.companyName
      const studentItem = `
        <div class="student-item">
        <div class="col9 col-label">${studentId}</div>
          <div class="col-label col6">${studentName}</div>
          <div class="col-label col7">${rollNo}</div>
          <div class="col-value col8">${email}</div>
          <div class="col14 col-label">${cgpa}</div>
          <div class="col10 col-label">${presentSemester}</div>
          <div class="col11 col-label">${isPlaced}</div>
          <div class="col12 col-label">${companyName}</div>
        </div>
      `;
      studentList.insertAdjacentHTML('beforeend', studentItem);
    });
  })
  .catch(error => console.error(error));


  const emailBtn = document.getElementById("emailBtn");
emailBtn.addEventListener("click", openDialog);

function openDialog() {
  const dialog = document.createElement("dialog");

dialog.innerHTML = `
<head>
<style>
.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  width: 500px;
}

.dialog form {
  display: flex;
  flex-direction: column;
}
.dialog form {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.dialog label {
  margin-bottom: 0;
  font-weight: bold;
}

.dialog input[type="email"],
.dialog input[type="text"],
.dialog textarea {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 16px;
  margin-bottom: 10px;
}

.dialog input[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.dialog input[type="submit"]:hover {
  background-color: #3e8e41;
}


</style>
</head>
<body>

<div id="dialog" class="dialog">
  <form>
    <label for="emailInput">Enter Email:</label><br>
    <input type="email" id="emailInput" name="emailInput"><br>

    <label for="subjectInput">Subject:</label><br>
    <input type="text" id="subjectInput" name="subjectInput"><br>

    <label for="bodyInput">Body:</label><br>
    <textarea id="bodyInput" name="bodyInput"></textarea><br>

    <input type="submit" id="submitBtn" onclick="sendEmail(event)" value="Submit">
  </form>
</div>
</body>

`;
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
    dialog.remove();
  }
});


document.body.appendChild(dialog);

dialog.showModal();
}

function sendEmail(event) {
  event.preventDefault();

  const email = document.getElementById("emailInput").value;
  const subject = document.getElementById("subjectInput").value;
  const body = document.getElementById("bodyInput").value;

  Email.send({
    // SecureToken: "8f4cb8b3-4599-4520-a81f-16ca388df2f3",
    Host : "smtp.elasticemail.com",
    Username : "virri.praneeth@wavemaker.com",
    Password : "E20EFAEFC0F46E8FD7D65D7B7A601AA5D48F",
    To: email,
    From: "virri.praneeth@wavemaker.com",
    Subject: subject,
    Body: body,
  }).then((message) => {
  
    alert("Email sent successfully");

    console.log(message);
  });
}

function closeDialog() {
  const dialog = document.querySelector("dialog");
  dialog.close();
}
