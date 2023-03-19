

const studentForm = document.getElementById('studentForm');
const studentNameInput = document.getElementById('studentName');
const rollNumberInput = document.getElementById('rollNumber');
const emailInput = document.getElementById('email');
const presentSemesterInput = document.getElementById('presentSemester');
const cgpaInput = document.getElementById('cgpa');
const isPlacedInput = document.getElementById('isPlaced');
studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(studentForm);
  if (!validateForm()) {
    return;
  }
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

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


function validateForm() {
  let isValid = true;
  
  if (studentNameInput.value.trim() === '') {
    setErrorFor(studentNameInput, 'Student name cannot be blank');
    isValid = false;
  } else {
    setSuccessFor(studentNameInput);
  }
  
  if (rollNumberInput.value.trim() === '') {
    setErrorFor(rollNumberInput, 'Roll number cannot be blank');
    isValid = false;
  } else {
    setSuccessFor(rollNumberInput);
  }
  const email = emailInput.value.trim();
  if (email  === '') {
    setErrorFor(emailInput, 'Email cannot be blank');
    isValid = false;
  } else if (!validateEmail(email)) {
    setErrorFor(emailInput, 'Email is not valid');
    isValid = false;
  } else {
    setSuccessFor(emailInput);
  }
  
  if (presentSemesterInput.value.trim() === '') {
    setErrorFor(presentSemesterInput, 'Present semester cannot be blank');
    isValid = false;
  } else if (isNaN(presentSemesterInput.value.trim())) {
    setErrorFor(presentSemesterInput, 'Present semester must be a number');
    isValid = false;
  } else {
    setSuccessFor(presentSemesterInput);
  }
  
  if (cgpaInput.value.trim() === '') {
    setErrorFor(cgpaInput, 'CGPA cannot be blank');
    isValid = false;
  } else if (isNaN(cgpaInput.value.trim())) {
    setErrorFor(cgpaInput, 'CGPA must be a number');
    isValid = false;
  } else {
    setSuccessFor(cgpaInput);
  }
  
  if (isPlacedInput.value.trim() === '') {
    setErrorFor(isPlacedInput, 'Is placed cannot be blank');
    isValid = false;
  } else if (isNaN(isPlacedInput.value.trim())) {
    setErrorFor(isPlacedInput, 'Is placed must be a number');
    isValid = false;
  } else {
    setSuccessFor(isPlacedInput);
  }
  
  return isValid;
}

function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const errorMessage =  formGroup.querySelector('.error');
  errorMessage.innerText = message;
  errorMessage.style.display = 'block'
  formGroup.classList.add('error');
}