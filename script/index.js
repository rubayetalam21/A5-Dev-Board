const btnComplete01 = document.getElementById("btn-complete-01");
btnComplete01.addEventListener('click', function () {
    alert("Board Updated Successfully");
    const taskAssigned = document.getElementById("task-assigned").innerText;
    if(taskAssigned==='1'){
        alert("congrates!!!You have complete all the current tasks.");
    }
    document.getElementById("task-assigned").innerText = parseInt(taskAssigned) - 1;
    const taskCompete = document.getElementById("task-complete").innerText;
    document.getElementById("task-complete").innerText = parseInt(taskCompete) + 1;
    const fixMobile = document.getElementById("fix-mobile").innerText;
    const activityLog = document.getElementById("activity-log");
    const now = new Date();
    const timeTask = now.toLocaleTimeString();
    const p = document.createElement("p");
    p.innerText = `
    You have completed the task ${fixMobile} at ${timeTask}.
    `
    activityLog.appendChild(p);
    btnComplete01.disabled = true;
});

const btnComplete02 = document.getElementById("btn-complete-02"); btnComplete02.addEventListener('click', function () {
    alert("Board Updated Successfully");
    const taskAssigned = document.getElementById("task-assigned").innerText;
    if(taskAssigned==='1'){
        alert("congrates!!!You have complete all the current tasks.");
    }
    document.getElementById("task-assigned").innerText = parseInt(taskAssigned) - 1;
    const taskCompete = document.getElementById("task-complete").innerText;
    document.getElementById("task-complete").innerText = parseInt(taskCompete) + 1;
    const addDark = document.getElementById("add-dark").innerText;
    const activityLog = document.getElementById("activity-log");
    const now = new Date();
    const timeTask = now.toLocaleTimeString();
    const p = document.createElement("p");
    p.innerText = `
    You have completed the task ${addDark} at ${timeTask}.
    `
    activityLog.appendChild(p);
    btnComplete02.disabled = true;
});

const btnComplete03 = document.getElementById("btn-complete-03");
btnComplete03.addEventListener('click', function () {
    alert("Board Updated Successfully");
    const taskAssigned = document.getElementById("task-assigned").innerText;
    if(taskAssigned==='1'){
        alert("congrates!!!You have complete all the current tasks.");
    }
    document.getElementById("task-assigned").innerText = parseInt(taskAssigned) - 1;
    const taskCompete = document.getElementById("task-complete").innerText;
    document.getElementById("task-complete").innerText = parseInt(taskCompete) + 1;
    const optimizeHome = document.getElementById("optimize-home").innerText;
    const activityLog = document.getElementById("activity-log");
    const now = new Date();
    const timeTask = now.toLocaleTimeString();
    const p = document.createElement("p");
    p.innerText = `
    You have completed the task ${optimizeHome} at ${timeTask}.
    `
    activityLog.appendChild(p);
    btnComplete03.disabled = true;
});

const btnComplete04 = document.getElementById("btn-complete-04");
btnComplete04.addEventListener('click', function () {
    alert("Board Updated Successfully");
    const taskAssigned = document.getElementById("task-assigned").innerText;
    if(taskAssigned==='1'){
        alert("congrates!!!You have complete all the current tasks.");
    }
    document.getElementById("task-assigned").innerText = parseInt(taskAssigned) - 1;
    const taskCompete = document.getElementById("task-complete").innerText;
    document.getElementById("task-complete").innerText = parseInt(taskCompete) + 1;
    const meta = document.getElementById("meta").innerText;
    const activityLog = document.getElementById("activity-log");
    const now = new Date();
    const timeTask = now.toLocaleTimeString();
    const p = document.createElement("p");
    p.innerText = `
    You have completed the task ${meta} at ${timeTask}.
    `
    activityLog.appendChild(p);
    btnComplete04.disabled = true;
});

const btnComplete05 = document.getElementById("btn-complete-05");
btnComplete05.addEventListener('click', function () {
    alert("Board Updated Successfully");
    const taskAssigned = document.getElementById("task-assigned").innerText;
    if(taskAssigned==='1'){
        alert("congrates!!!You have complete all the current tasks.");
    }
    document.getElementById("task-assigned").innerText = parseInt(taskAssigned) - 1;
    const taskCompete = document.getElementById("task-complete").innerText;
    document.getElementById("task-complete").innerText = parseInt(taskCompete) + 1;
    const googleLLC = document.getElementById("googleLLC").innerText;
    const activityLog = document.getElementById("activity-log");
    const now = new Date();
    const timeTask = now.toLocaleTimeString();
    const p = document.createElement("p");
    p.innerText = `
    You have completed the task ${googleLLC} at ${timeTask}.
    `
    activityLog.appendChild(p);
    btnComplete05.disabled = true;
});

const btnComplete06 = document.getElementById("btn-complete-06");
btnComplete06.addEventListener('click', function () {
    alert("Board Updated Successfully");
    const taskAssigned = document.getElementById("task-assigned").innerText;
    if(taskAssigned==='1'){
        alert("congrates!!!You have complete all the current tasks.");
    }
    document.getElementById("task-assigned").innerText = parseInt(taskAssigned) - 1;
    const taskCompete = document.getElementById("task-complete").innerText;
    document.getElementById("task-complete").innerText = parseInt(taskCompete) + 1;
    const glassdoar = document.getElementById("glassdoar").innerText;
    const activityLog = document.getElementById("activity-log");
    const now = new Date();
    const timeTask = now.toLocaleTimeString();
    const p = document.createElement("p");
    p.innerText = `
    You have completed the task ${glassdoar} at ${timeTask}.
    `
    activityLog.appendChild(p);
    btnComplete06.disabled = true;
});

const clearHistory = document.getElementById("clear-history");
clearHistory.addEventListener('click', function () {
    const activityLog = document.getElementById("activity-log");
    activityLog.innerText = '';
});

const blog = document.getElementById("blog");
blog.addEventListener('click', function () {
    window.location.href = "blogs.html";
});

document.addEventListener("DOMContentLoaded", function () {
    const now = new Date();
    const options = { weekday: "short", day: "numeric", month: "long", year: "numeric" };
    const formattedDate = now.toLocaleDateString(undefined, options);
    document.getElementById("current-date").innerText = formattedDate;
});

const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener('click', function () {
    const rColor = Math.floor(Math.random() * 256);
    const gColor = Math.floor(Math.random() * 256);
    const bColor = Math.floor(Math.random() * 256);
    document.getElementById("body-background").style.backgroundColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
});