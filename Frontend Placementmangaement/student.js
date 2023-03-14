// const params = new URLSearchParams(window.location.search);
// const visitId = params.get('visitid');
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
