
const visitId = sessionStorage.getItem('visitId');

const visitList = document.getElementById('visitList');
const studentList = document.getElementById('studentList');

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  window.location.href = "addstudent.html";
});

const deleteBtn = document.getElementById('deleteBtn');
deleteBtn.addEventListener('click', () => {
  window.location.href = 'deletestudent.html';
});
const emailBtn = document.getElementById('emailBtn');
emailBtn.addEventListener('click', () => {
  fetch(`http://localhost:8080/Placement/student/display`)
    .then(response => response.json())
    .then(data => {
      data.forEach(student => {
        const email = student.email;
        const message = {
          "From": "virri.praneeth@wavemaker.com",
          "To": email,
          "Subject": "Regarding placement",
          "TextBody": "You are still eligible to apply for companies"
        };
        fetch('http://localhost:9000/email', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Postmark-Server-Token': 'bebaa614-d55b-4119-822a-d52574d48e93'
          },
          body: JSON.stringify(message)
        })
        .then(response => console.log(`Email sent to ${email}: ${response.status} ${response.statusText}`))
        .catch(error => console.error(`Error sending email to ${email}: ${error}`));
      });
  
      alert("Emails have been sent to all the students.");
    })
    .catch(error => console.error(error));
});




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


