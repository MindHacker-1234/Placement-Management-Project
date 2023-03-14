const apiUrl = 'http://localhost:8080/Placement/visit/display';
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const jobProfiles = data.map(visit => visit.jobprofile);
    const ctc = data.map(visit => visit.ctc);
    const backgroundColors = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)'
      
    ];
    const borderColors = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)'
     
    ];
    const pieChart = new Chart(document.getElementById('pieChart'), {
      type: 'pie',
      data: {
        labels: jobProfiles,
        datasets: [{
          label: 'CTC',
          data: ctc,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
          text: 'CTC by Job Profile'
        },
        legend: {
          labels: {
            filter: function (legendItem, data) {
              return legendItem.text != undefined;
            }
          }
        }
      }
    });
  })
  .catch(error => console.error(error));