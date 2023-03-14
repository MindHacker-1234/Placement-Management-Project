

const studentForm = document.getElementById('studentForm');
studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(studentForm);
  const data = {
    // id: formData.get('id'),
    studentName: formData.get('studentName'),
    rollNumber: formData.get('rollNumber'),
    email: formData.get('email'),
    presentSemester: formData.get('presentSemester'),
    cgpa: formData.get('cgpa'),
    isPlaced: formData.get('isPlaced'),
  };
  fetch('http://localhost:8080/Placement/student/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    window.location.href = "http://127.0.0.1:5500/student.html";
  })
  .catch(error => console.error(error));
});