
function fetchGradeData() {
    console.log("Fetching grade data...");
    
    // Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    
    // Define the API endpoint (matches your server route)
    let apiRoute = "/api/grades";
    
    // Set up the callback for when request state changes
    xhr.onreadystatechange = function() {
        // Check if request is complete (readyState 4)
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // Check if request was successful (status 200)
            if (xhr.status === 200) {
                try {
                    // Parse the JSON response
                    const gradeData = JSON.parse(xhr.responseText);
                    console.log("Successfully fetched grade data:", gradeData);
                    
                    // Call function to populate the table
                    populateGradebook(gradeData);
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                }
            } else {
                // Handle HTTP errors
                console.error(`Could not get grades. Status: ${xhr.status}`);
                console.error("Response text:", xhr.responseText);
            }
        }
    };
    
    // Configure and send the GET request
    xhr.open("GET", apiRoute, true);
    xhr.send();
}


function populateGradebook(data) {
    console.log("Populating gradebook with data:", data);
    
    // Get reference to the table body (not the whole table)
    let tableBody = document.getElementById("gradebook-body");
    
    // Clear any existing rows (in case of refresh)
    tableBody.innerHTML = '';
    
    // Check if data is empty
    if (!data || data.length === 0) {
        console.warn("No grade data received");
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.colSpan = 2;
        cell.textContent = "No grade data available";
        row.appendChild(cell);
        tableBody.appendChild(row);
        return;
    }
    
    // Process each assignment record
    data.forEach(function(assignment) {
        // Create a new table row
        let row = document.createElement("tr");
        
        // Create and populate name cell
        let nameCell = document.createElement("td");
        nameCell.textContent = `${assignment.last_name}, ${assignment.first_name}`;
        
        // Create and populate grade cell
        let gradeCell = document.createElement("td");
        gradeCell.textContent = assignment.total_grade;
        
        // Add cells to the row
        row.appendChild(nameCell);
        row.appendChild(gradeCell);
        
        // Add row to the table
        tableBody.appendChild(row);
    });
}
// Call the stubs to test
fetchGradeData();
populateGradebook();
