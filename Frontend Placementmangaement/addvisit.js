
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
  console.log(data);
  fetch('http://localhost:8080/Placement/visit/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    window.location.href = `http://127.0.0.1:5500/visit.html`
  })
  .catch(error => console.error(error));
});