Ultimate Footvolley Scoreboard

//Short Project Description//

A responsive digital scoreboard inspired by the concept of a customizable pinboard.
It allows users to rename teams, update scores, save match results, and switch between two different layouts (horizontal and vertical).
Simple interactions, instant feedback, and easy usability.

//Functional Logic and Interaction Modalities
The web app simulates a footvolley match scoreboard//

Users can:

- Increase or decrease each team’s score in real time.

- Rename teams by typing directly in the input fields.

- Reset all scores with one button.

- Save multiple match results inside the interface.

- Clear saved results when needed.

- Switch between two views (horizontal / vertical) for a better responsive layout experience.

- The layout automatically adapts to smartphones, tablets, and desktops using Flexbox and media queries.

// Functions List //
incrementA / incrementB: 
  - Increases the score of the selected team by 1 and updates the displayed value;
  - Updated score value;

decrementA / decrementB:
  - Decreases the score (if greater than 0) and updates the displayed value;
  - Updated score value;

resetButton:
 - Resets both teams’ scores to 0;

toggleViewButton:
  - Toggles between horizontal and vertical scoreboard layouts by adding/removing a CSS class;

saveButton:
 - Creates and appends a new list item displaying the current scores of both teams;

clearButton:
 - Clears all saved results from the list;
