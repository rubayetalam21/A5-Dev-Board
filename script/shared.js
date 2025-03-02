function getInnerText(taskID) {
    alert("Board Updated Successfully");
    const taskAssigned = document.getElementById(taskID).innerText;
    const convertedTaskAssigned = parseInt(taskAssigned);
    if (convertedTaskAssigned === 1) {
        alert("congrates!!!You have complete all the current tasks.");
    }
    document.getElementById(taskID).innerText = convertedTaskAssigned - 1;
   
}

function getTaskComplete(taskCompleteID){
    const taskComplete = document.getElementById(taskCompleteID).innerText;
    const convertedTaskComplete = parseInt(taskComplete);

    document.getElementById(taskCompleteID).innerText = convertedTaskComplete + 1;
}


