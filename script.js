// Example script to show a server status message
window.onload = function() {
    let serverStatus = document.getElementById("server-status");

    // Example of checking server status (could be linked to a backend API)
    let isServerOnline = true; // Replace this with actual server status logic

    if (isServerOnline) {
        serverStatus.innerHTML = "Server is online!";
        serverStatus.style.color = "green";
    } else {
        serverStatus.innerHTML = "Server is offline.";
        serverStatus.style.color = "red";
    }
};
