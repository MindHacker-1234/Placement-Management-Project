const upcomingBtn = document.getElementById('upcomingBtn');
const completedBtn = document.getElementById('completedBtn');
const visitList = document.getElementById('visitList');

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  window.location.href = 'addVisit.html';
});

function displayUpcomingVisits() {
    fetch('http://localhost:8080/Placement/visit/display')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        visitList.innerHTML = '';
        const upcomingVisits = data.filter(visit => new Date(visit.scheduleDate) >= new Date());
        upcomingVisits.forEach(visit => {
            const visitId = visit.id;
            const date = visit.scheduleDate;
          const companyName = visit.company.companyName;
          const companyDescription = visit.company.companyDescription;
          const ctc = visit.ctc;
          const jobProfile = visit.jobProfile;
          const visitItem = `
            <div class="visit-item">
            <div class="col1">${visitId}</div>
              <div class="col1">${companyName}</div>
              <div class="col2">${companyDescription}</div>
              <div class="col3">${ctc}</div>
              <div class="col4">${date}</div>
              <div class="col4">${jobProfile}</div>
            </div>
          `;
          visitList.insertAdjacentHTML('beforeend', visitItem);
        });
      })
      .catch(error => console.error(error));
  }
  
  displayUpcomingVisits(); // call the function on page load
  
  upcomingBtn.addEventListener('click', () => {
    displayUpcomingVisits(); // call the function on button click
  });
  



completedBtn.addEventListener('click', () => {
  fetch('http://localhost:8080/Placement/visit/display')
    .then(response => response.json())
    .then(data => {
      visitList.innerHTML = '';
      const completedVisits = data.filter(visit => new Date(visit.scheduleDate) < new Date());
      completedVisits.forEach(visit => {
        const visitId = visit.id;
        const companyName = visit.company.companyName;
        const companyDescription = visit.company.companyDescription;
        const ctc = visit.ctc;
        const jobProfile = visit.jobProfile;
        const visitItem = `
          <div class="visit-item">
            <div class="col1">${visitId}</div>
            <div class="col1">${companyName}</div>
            <div  class="col2">${companyDescription}</div>
            <div class="col3">${ctc}</div>
            <div class="col4">${jobProfile}</div>
          </div>
        `;
        visitList.insertAdjacentHTML('beforeend', visitItem);
      });
    })
    .catch(error => console.error(error));
});
// var visitItem = document.getElementsByClassName("visit-item")[0];
visitList.addEventListener('click', event => {
  const target = event.target;
  if (target.classList.contains('col1')) {
    // const visitId = target.parentElement.querySelector('.col1').textContent;
    // window.location.href = `http://127.0.0.1:5500/student.html?visitid=${visitId}`;
    const visitId = target.parentElement.querySelector('.col1').textContent;
    sessionStorage.setItem('visitId', visitId);
    window.location.href = 'http://127.0.0.1:5500/student.html';
  }
});



