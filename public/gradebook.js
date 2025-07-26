function fetchGradeData() {
    console.log("Fetching gradebook data...");
    let xhr =new XMLHttpRequest();
    let apiRout = "/api/grades";
    xhr.onreadystatechange = function() {
        let results; 
        if(xhr.readyState === xhr.DONE){
            if(xhr.status !== 200){
                console.error(`Could not get grades.
                     Status: ${xhr.status}`);
            }
            populateGradebook(JSON.parse(xhr.responseText));
        }

}.bind(this);
    xhr.open("get", apiRout, true);
    xhr.send();
}

function populateGradebook(data) {
    console.log("Populating gradebook UI with data:", data);
    let tableElm = document.getElementById("gradebook");
        data.forEach(function(assignment){
            let row = document.createElement("tr");
            let colums = []
            colums.name = document.createElement("td");
            colums.name.appendChild(
                document.createTextNode(assignment.last_name + ", " + assignment.first_name)
            );
            colums.grade = document.createElement('td');
            colums.grade.appendChild(
                document.createTextNode(assignment.total_grade)
            );
            row.appendChild(colums.name);
            row.appendChild(colums.grade);
            tableElm.appendChild(row);
        });
}

fetchGradeData();