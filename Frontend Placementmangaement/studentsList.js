
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