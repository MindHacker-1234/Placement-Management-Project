
const visitForm = document.getElementById('visitForm');
visitForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(visitForm);
  if (
    !formData.get('driveId') ||
    !formData.get('driveName') ||
    !formData.get('ctc') ||
    !formData.get('jobProfile') ||
    !formData.get('scheduleDate') ||
    !formData.get('companyId') 
    // !formData.get('companyName') ||
    // !formData.get('companyDescription') ||
    // !formData.get('placementOfficer') ||
    // !formData.get('contact') ||
    // !formData.get('applicableBranches')
  ) {
    alert('Please fill up all details.');
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