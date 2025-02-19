function showTab(tabId) {
    // Hide all form sections
    document.querySelectorAll('.form-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(tabId).style.display = 'block';

    // Remove active class from all tabs
    document.querySelectorAll('.nav-item').forEach(tab => {
        tab.classList.remove('active');
    });

    // Add active class to the selected tab
    event.target.classList.add('active');
}

// Set default tab to Basic Information on page load
document.addEventListener("DOMContentLoaded", function () {
    showTab('basic');
});
function toggleAdvancedSearch() {
    document.getElementById("advancedSearch").classList.toggle("d-none");
}
document.querySelectorAll(".column-toggle").forEach(checkbox => {
    checkbox.addEventListener("change", function () 
   
    {
        let columnIndex = this.getAttribute("data-column");
        let table = document.querySelector("table");
        let cells = table.querySelectorAll(`th:nth-child(${+columnIndex + 1}), td:nth-child(${+columnIndex + 1})`);
        
        if (this.checked) 
        {
            cells.forEach(cell => cell.style.display = "");
        } else 
        {
            cells.forEach(cell => cell.style.display = "none");
        }
    });
});
