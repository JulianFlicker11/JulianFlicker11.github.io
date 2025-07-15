const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.static('public')); // Folder for gradebook.html/js

// Mock API endpoint (replace with real DB logic)
app.get('/api/grades', (req, res) => {
  res.json([
    { first_name: "John", last_name: "Doe", total_grade: 90 },
    { first_name: "Jane", last_name: "Smith", total_grade: 85 }
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



// Server Communication
function fetchGradeData() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "/api/grades", true);
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      if(xhr.status === 200) {
        populateGradebook(JSON.parse(xhr.responseText));
      } else {
        console.error(`Request failed: ${xhr.status}`);
      }
    }
  };
  xhr.send();
}

// Table Population
function populateGradebook(data) {
  const table = document.getElementById("gradebook");
  data.forEach(item => {
    const row = table.insertRow();
    row.insertCell().textContent = `${item.last_name}, ${item.first_name}`;
    row.insertCell().textContent = item.total_grade;
  });
}