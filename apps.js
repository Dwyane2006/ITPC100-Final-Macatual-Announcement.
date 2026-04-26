function postAnnouncement(){

    let input = document.getElementById("announcementInput").value;
    let output = document.getElementById("outputBox");

    if(input.trim() === ""){
        alert("Please type announcement first.");
        return;
    }

    output.innerText = `
        ${input}
    `;

    document.getElementById("announcementInput").value = "";
}