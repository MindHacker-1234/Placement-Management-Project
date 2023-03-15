const companyList = document.getElementById("company-list");

fetch("http://localhost:8080/Placement/company/display")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let row = null;
    data.forEach((company, index) => {
      if (index % 3 === 0) { // create new row for every 3rd company
        row = document.createElement("div");
        row.classList.add("row");
        companyList.appendChild(row);
      }
      const col4 = document.createElement("div");
      col4.classList.add("col-4");
	 
	
      const companyContainer = document.createElement("div");
      companyContainer.classList.add("company-container");

      const companyId = document.createElement("div");
      companyId.classList.add("company-id")
      companyId.textContent = company.id;

      const companyName = document.createElement("div");
      companyName.classList.add("company-name");
      companyName.textContent = company.companyName;

      const companyDesc = document.createElement("div");
      companyDesc.classList.add("company-description");
      companyDesc.textContent = company.companyDescription;

      const branches = document.createElement("div");
      branches.classList.add("branches");
      branches.textContent = "Applicable Branches: " + company.applicableBranches;

      const placementOfficer = document.createElement("div");
      placementOfficer.classList.add("placement-officer");
      placementOfficer.textContent = "Placement Officer: " + company.placementOfficer;

      companyContainer.appendChild(companyId);
      companyContainer.appendChild(companyName);
      companyContainer.appendChild(companyDesc);
      companyContainer.appendChild(branches);
      companyContainer.appendChild(placementOfficer);

      col4.appendChild(companyContainer);
      row.appendChild(col4);
    });
  })
  .catch(error => console.error(error));