// index.js

// When DOM loads, attach event listeners for forms & initialize charts
document.addEventListener('DOMContentLoaded', () => {
    // Show the logged-in user name
    const storedUser = localStorage.getItem('loggedInUser') || 'Guest';
    const profileNameDiv = document.getElementById('profileUserName');
    if (profileNameDiv) {
      profileNameDiv.innerText = storedUser;
    }
  
    initForms();
    initCharts();
  });
  
  // Show/hide pages
  function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((p) => p.classList.remove('active'));
  
    const target = document.getElementById(pageId);
    if (target) {
      target.classList.add('active');
    }
  }
  
  // Toggle entire sidebar collapse
  function toggleSidebar() {
    document.body.classList.toggle('sidebar-collapsed');
  }
  
  // Toggle submenus
  function toggleSubmenu(menuId) {
    const submenu = document.getElementById(menuId);
    submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
  }
  
  // Toggle profile dropdown
  function toggleProfileDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  }
  
  function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  }
  
  // Initialize forms so new data is appended to the table on the same page
  function initForms() {
    // Add Employee
    const addEmployeeForm = document.getElementById('addEmployeeForm');
    if (addEmployeeForm) {
      addEmployeeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = e.target.fullName.value.trim();
        const dept = e.target.department.value;
        const role = e.target.role.value;
        // Make an ID
        const randomId = 'EMP-' + Math.floor(Math.random() * 900 + 100);
  
        const row = `
          <tr>
            <td>${randomId}</td>
            <td>${fullName}</td>
            <td>${dept}</td>
            <td>${role}</td>
          </tr>
        `;
        const tbody = document.querySelector('#addEmployeeTable tbody');
        tbody.insertAdjacentHTML('afterbegin', row);
  
        addEmployeeForm.reset();
      });
    }
  
    // Assign Task Form submission handler
const assignTaskForm = document.getElementById('assignTaskForm');
if (assignTaskForm) {
  assignTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const client = e.target.client.value;
    const checklist = e.target.checklist.value; // Manual checklist input
    const taskDate = e.target.taskDate.value;
    const taskDuration = e.target.taskDuration.value; // in HH:MM format
    const employee = e.target.employee.value;
    
    const row = `
      <tr>
        <td>${employee}</td>
        <td>${client}</td>
        <td>${checklist}</td>
        <td>${taskDate}</td>
        <td>${taskDuration}</td>
      </tr>
    `;
    const tbody = document.querySelector('#assignTaskTable tbody');
    if (tbody) {
      tbody.insertAdjacentHTML('afterbegin', row);
    }
    assignTaskForm.reset();
  });
}
   // Track Location Form Submission
const trackLocationForm = document.getElementById('trackLocationForm');
if (trackLocationForm) {
  trackLocationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const employee = e.target.employee.value;
    const locationInput = e.target.location.value.trim();
    const timestamp = new Date().toLocaleString();
    
    // Insert a new row in the location updates table
    const row = `
      <tr>
        <td>${employee}</td>
        <td>${locationInput}</td>
        <td>${timestamp}</td>
      </tr>
    `;
    const tbody = document.querySelector('#trackLocationTable tbody');
    if (tbody) {
      tbody.insertAdjacentHTML('afterbegin', row);
    }
    trackLocationForm.reset();
  });
}
   // Checklist Form Submission Handler
const checklistForm = document.getElementById('checklistForm');
if (checklistForm) {
  checklistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const checklistName = e.target.checklistName.value.trim();
    const items = e.target.items.value.trim();
    
    const row = `
      <tr>
        <td>${checklistName}</td>
        <td>${items}</td>
      </tr>
    `;
    const tbody = document.querySelector('#checklistTable tbody');
    if (tbody) {
      tbody.insertAdjacentHTML('afterbegin', row);
    }
    checklistForm.reset();
  });
}

   // Clients Form Submission Handler
const clientsForm = document.getElementById('clientsForm');
if (clientsForm) {
  clientsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const clientName = e.target.clientName.value.trim();
    const purifierName = e.target.purifierName.value;
    const purifierId = e.target.purifierId.value.trim();
    const installDate = e.target.installDate.value;
    const serviceDate = e.target.serviceDate.value;
    
    const row = `
      <tr>
        <td>${clientName}</td>
        <td>${purifierName}</td>
        <td>${purifierId}</td>
        <td>${installDate}</td>
        <td>${serviceDate}</td>
      </tr>
    `;
    
    const tbody = document.querySelector('#clientsTable tbody');
    if (tbody) {
      tbody.insertAdjacentHTML('afterbegin', row);
    }
    
    clientsForm.reset();
  });
}

   //Payments 
    const paymentsForm = document.getElementById('paymentsForm');
    if (paymentsForm) {
      paymentsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const client = e.target.client.value.trim();
        const date = e.target.date.value;
        const mode = e.target.mode.value;
        const amount = e.target.amount.value;
        const txnId = e.target.txnId.value.trim();
        const status = e.target.status.value;
  
        const row = `
          <tr>
            <td>${client}</td>
            <td>${date || 'N/A'}</td>
            <td>${mode}</td>
            <td>₹${amount}</td>
            <td>${txnId || 'N/A'}</td>
            <td>${status}</td>
          </tr>
        `;
        const tbody = document.querySelector('#paymentsTable tbody');
        tbody.insertAdjacentHTML('afterbegin', row);
  
        paymentsForm.reset();
      });
    }
    // Purifier Form Submission Handler
const purifierForm = document.getElementById('purifierForm');
if (purifierForm) {
  purifierForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const purifierId = e.target.purifierId.value.trim();
    const purifierName = e.target.purifierName.value.trim();
    const purifierManufacturer = e.target.purifierManufacturer.value.trim();
    
    const row = `
      <tr>
        <td>${purifierId}</td>
        <td>${purifierName}</td>
        <td>${purifierManufacturer}</td>
      </tr>
    `;
    
    const tbody = document.querySelector('#purifierTable tbody');
    if (tbody) {
      tbody.insertAdjacentHTML('afterbegin', row);
    }
    purifierForm.reset();
  });
}
}
  
  // Initialize charts
  function initCharts() {
    const empCtx = document.getElementById('employeeChart').getContext('2d');
    new Chart(empCtx, {
      type: 'bar',
      data: {
        labels: ['Employees', 'Clients', 'Payments'],
        datasets: [
          {
            label: 'Count',
            data: [120, 80, 30],
            backgroundColor: ['green', 'yellow', 'orange']
          }
        ]
      }
    });
  
    const pieCtx = document.getElementById('taskPieChart').getContext('2d');
    new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels: ['Completed Tasks', 'In Progress Tasks'],
        datasets: [
          {
            data: [60, 40],
            backgroundColor: ['green', 'red']
          }
        ]
      }
    });
  }
  