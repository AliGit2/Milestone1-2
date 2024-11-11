// Select the toggle button and skills list
const toggleSkillsButton = document.getElementById("toggleSkills") as HTMLButtonElement;
const skillsList = document.getElementById("skillsList") as HTMLElement;

// Add event listener to the button
toggleSkillsButton.addEventListener("click", () => {
    // Toggle display of skills list
    if (skillsList.style.display === "none") {
        skillsList.style.display = "block";
    } else {
        skillsList.style.display = "none";
    }
});
