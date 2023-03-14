
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
  .then(response => response.json())
  .then(data => {
    console.log(data);
    window.location.href = "http://127.0.0.1:5500/student.html";
  })
  .catch(error => console.error(error));
});