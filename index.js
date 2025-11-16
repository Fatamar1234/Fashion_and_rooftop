/*** You will not need this file until Unit 5 ***/

/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
let rsvpButton = document.getElementById("rsvp-button");


// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    document.body.classList.toggle("dark-mode");

    // This section will run whenever the button is clicked
}
// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);




//*** Form Handling ***/

// Step 1: Query for the submit RSVP button
let addP = document.getElementById("rsvp-button");

// Step 2: Create the callback function
const addParticipant = () => {

    let name = document.getElementById('name').value;
    console.log(name);

    let email = document.getElementById('email').value;
    console.log(email);

    let phone = document.getElementById('numbers').value;
    console.log(phone);

    // 1. Create the new <p>
    let newP = document.createElement("p");

    // 2. Set its text
    newP.textContent = ` 🎟️${name} has graciously confirmed attendance..`;

    // 3. Find the rsvp-participants section
    let participantsDiv = document.querySelector(".rsvp-participants");

    // 4. Add the <p> to the page
    participantsDiv.appendChild(newP);
};




/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function

const validateForm = () => {
  console.log("validateForm is running!");


  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  // TODO: Loop through all inputs
  for (let i = 0; i < rsvpInputs.length; i++) {
    if(rsvpInputs[i].value.length < 2){
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
    }
    else{
        rsvpInputs[i].classList.remove("error");
    }
}

  // TODO: Inside loop, validate the value of each input

  // TODO: If no errors, call addParticipant() and clear fields
  if(containsErrors == false){
    addParticipant();
    for(let u = 0; u < rsvpInputs.length; u++){
      rsvpInputs[u].value = "";
    }
  }

};
addP.addEventListener("click", validateForm);


// Step 3: Replace the form button's event listener with a new one that calls validateForm()

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/