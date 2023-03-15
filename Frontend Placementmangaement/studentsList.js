
fetch(`http://localhost:8080/Placement/placement/display`)
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
          <div class="col-value col6">${studentName}</div>
          <div class="col-value col7">${rollNo}</div>
          <div class="col-value col8">${email}</div>
          <div class="col9 col-label">${cgpa}</div>
          <div class="col10 col-label">${presentSemester}</div>
          <div class="col11 col-label">${isPlaced}</div>
          <div class="col12 col-label">${companyName}</div>
        </div>
      `;
      studentList.insertAdjacentHTML('beforeend', studentItem);
    });
  })
  .catch(error => console.error(error));