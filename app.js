document.addEventListener("DOMContentLoaded", function () {
  const leftButton = document.getElementById("menubuttonLeft");
  const rightButton = document.getElementById("menubuttonRight");
  const leftNavWrap = document.getElementById("leftNavWrap");
  const rightNavWrap = document.getElementById("RightNavWrap");
  const notepadForm = document.querySelector(".notepadForm");
  const displayData = document.getElementById("displayData");
  const notepadTextarea = document.getElementById("notepadTextarea");

  leftButton.addEventListener("click", function () {
    leftNavWrap.classList.toggle("show");
  });

  rightButton.addEventListener("click", function () {
    rightNavWrap.classList.toggle("show");
  });

  notepadForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if the current time is between 9:00 AM and 10:00 AM
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    if (currentHour < 9 || currentHour >= 10) {
      alert("You can only add data between 9:00 AM and 10:00 AM.");
      return;
    }

    // Retrieve the text from the textarea
    const notepadText = document.getElementById("notepadTextarea").value;
    // Display the submitted data in the div
    displayData.innerHTML += `
      <span>${notepadText}</span>
      <button class="delete" onclick="deleteData(this)">Delete</button> <br/>
    `;
    
    // Empty the textarea
    notepadTextarea.value = "";
  });
});

// Function to delete the corresponding data
function deleteData(button) {
  const mySpan = button.previousElementSibling;
  mySpan.remove();
  button.remove();
}
