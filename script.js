document.addEventListener('DOMContentLoaded', function () {
  const appButton = document.getElementById('addJobs');
  appButton.addEventListener('click', showApp);
});

function showApp() {
  const appContent = document.getElementById('appContent');
  appContent.style.display =
    appContent.style.display === 'none' ? 'block' : 'none';
}

let jobArray = [];

// Function to save a new job to the array
function saveJob() {
  const companyName = document.getElementById('compname').value;
  const position = document.getElementById('posname').value;
  const description = document.getElementById('desctext').value;

  // Create a new job object
  const newJob = {
    companyName: companyName,
    position: position,
    description: description,
  };

  // Push the new job object to the jobArray
  jobArray.push(newJob);

  // Log the newly saved job to the console
  console.log('Saved Job:', newJob);
}

// Example of saving a new job when a button is clicked (you can trigger this function as needed)
document.getElementById('saveButton').addEventListener('click', saveJob);
