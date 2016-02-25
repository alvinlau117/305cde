// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');
    
    // For the output:
    var message = '';

    if(!checkDuplicates(tasks,task)){
        if (task.value) {
        
            // Add the item to the array:
            tasks.push(task.value);
            
            // Update the page:
            message = '<h2>To-Do</h2><ol>';
            for (var i = 0, count = tasks.length; i < count; i++) {
                message += '<li>' + tasks[i] + '</li>';
            }
            message += '</ol>';
            output.innerHTML = message;
            
        } // End of task.value IF.
    
        // Return false to prevent submission:
        return false;
    }else{
        alert('The list already have what you entered!')
        return false;
    }
    
} // End of addTask() function.

function checkDuplicates(array,item){
    for(i=0;i<array.length; i++){
        if(item=array[i]){
            return true;
        }
    }
    return false;
}
// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;