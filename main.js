let nameSection = document.getElementById('name');
let taskListSection = document.getElementById('Tasklist');
let submitButton = document.getElementById('btn');
let todoHeading = document.getElementById('todo');
let checkboxes = document.querySelectorAll('.act input[type="checkbox"]');
let showSection = document.getElementById('show');
let closeBillboard = document.getElementById('close-billb');
let checkActivity = document.getElementById('check-act');

    // Hide the task list and show the name input section by default
    taskListSection.style.display = 'none';

    // Submit button click event
    submitButton.addEventListener('click', function () {
        let enteredName = document.getElementById('enter').value;

        if (enteredName) {
            nameSection.style.display = 'none';
            taskListSection.style.display = 'block';
            todoHeading.textContent = `${enteredName}'s Task List`;
        }
    });

    // Checkbox click event
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            updateCompletedActivities();
        });
    });

    // Close button click event
    closeBillboard.addEventListener('click', function () {
        showSection.style.display = 'none';
    });

    // Function to update completed activities
    function updateCompletedActivities() {
        let completedCheckboxes = document.querySelectorAll('.act input[type="checkbox"]:checked');
        
        checkboxes.forEach(function (checkbox) {
            let activityText = checkbox.nextElementSibling;
            
            if (checkbox.checked) {
                activityText.style.textDecoration = 'line-through';
                activityText.style.opacity = '0.5';
            } else {
                activityText.style.textDecoration = 'none';
                activityText.style.opacity = '1';
            }
        });

        let completedActivityNames = Array.from(completedCheckboxes).map(checkbox => {
            return checkbox.nextElementSibling.textContent;
        });

        if (completedActivityNames.length > 0) {
            showSection.style.display = 'block';
            checkActivity.innerHTML = `To Do List Completed: ${completedActivityNames.join('! , ')}`;
        } else {
            showSection.style.display = 'none';
        }
    }

