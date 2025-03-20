let selectedOption = "";

window.onload = function () {
    selectEmoji(); 
    loadMoodLogs(); 
};

function selectEmoji() {
    const select = document.getElementById("emoj");
    selectedOption = select.selectedOptions[0];
    console.log(selectedOption.innerText);  
}

function moodTracker() {
    const box = document.getElementById("box");
    const innerbox = document.createElement("div");
    const currentTime = time();
    innerbox.innerText = `${selectedOption.innerText} - ${currentTime}`;
    innerbox.classList.add("moodlog");
    box.append(innerbox);
    
    saveMoodLog(innerbox.innerText); 
}

function time() {
    const d = new Date();
    let Time = d.toLocaleString();  
    return Time;
}

function saveMoodLog(moodEntry) {
    let moodLogs = JSON.parse(localStorage.getItem("moodLogs")) || [];
    moodLogs.push(moodEntry);
    localStorage.setItem("moodLogs", JSON.stringify(moodLogs));
}

function loadMoodLogs() {
    const box = document.getElementById("box");
    let moodLogs = JSON.parse(localStorage.getItem("moodLogs")) || [];
    moodLogs.forEach(moodEntry => {
        const innerbox = document.createElement("div");
        innerbox.innerText = moodEntry;
        innerbox.classList.add("moodlog");
        box.append(innerbox);
    });
}
