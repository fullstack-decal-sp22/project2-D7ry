/* HINTS DOCUMENT
Disclaimer: FEEL FREE TO DEVIATE FROM THE FILL IN THE BLANKS OR WRITE OVER
SKELETON CODE. THEY ARE JUST TO PROVIDE HINTS TO THE COURSE STAFF SOLUTION BUT THERE
ARE MANY WAYS TO APPROACH ANYTHING IN WEB DEVELOPMENT. YOU DO NOT HAVE TO 
COMPLETE FROM TOP TO BOTTOM (in fact we encourage you not to). */

/* Assign/declare variables. We started you off with some variables to help you.
Hint: We need:
      (1) a variable for keeping track of the total number,
      (2) the string value that is shown on the display screen
      (3) the operator (+, x, -, and ÷) that is selected.  */

      let total = 0;
      let strbuffer = "0";
      let operator = null;
      let lastOperator = null;

      function update() {
          operator = null;
          strbuffer = total;
          total = 0;
      }
      /*  FUNC DESCRIPTION: Operator calculations. Create the in +, x, -, and ÷ operator calculations. The plus operator is done for you!
          Uncomment and fill in the blank spaces. */
      function calculations(a_operator) {
          const intBuffer = parseInt(strbuffer); // Hint: Use parseInt to convert string to integer
          if (a_operator === "+") {
              total += intBuffer;
          }
          else if (a_operator === "-") {
              total -= intBuffer;
          }
          else if (a_operator === "x") {
              total *= intBuffer;
          }
          else if (a_operator === "÷") {
              total /= intBuffer;
          }
          lastOperator = a_operator;
      }

      /*   FUNC DESCRIPTION: If user input is a number, create the function. */
      function makesNumber(value) {
          if (isNaN(strbuffer) || strbuffer === "0") {
              strbuffer = value;
          } else {
              /*Append the value*/
              strbuffer = strbuffer + value;
          }
      }

      /*  FUNC DESCRIPTION: If user input is not a number, create the function. Create the functionality for "C", "←", "=", and operators. */

      function makesSymbol(symbol) {
          if (symbol === "C") {
              update();
              strbuffer = "poggers";
              lastOperator = null;
          } else if (symbol === "←") {
              if (strbuffer.length <= 1) {
                  strbuffer = "poggers";
              } else {
                  strbuffer = strbuffer.substring(0, strbuffer.length - 1);
              }
          } else if (symbol === "=") {
              if (operator === null) {
                  update();
                  update();
                  return; //do nothing
              } else {
                  calculations(operator);
                  update();
              }
          }
          else { //make functionality if symbol is an operator
            const intBuffer = parseInt(strbuffer);
            if (total === 0) {
                total = intBuffer;
            } else {
                calculations(operator);
            }
            operator = symbol;
            strbuffer = "0";
            }
      }

      /*  FUNC DESCRIPTION: Write the function to set listeners. This is how we will make the HTML interactive with the JS!
          This is where we sense when a user clicks a certain button and send this information to our buttonClicked function. */
      function sinkListeners() {
      //Hint: We want to select all buttons from html and make it so that something happens when you click on the buttons! querySelectorAll might be helpful
          let buttons = document.querySelectorAll(".buttons"); 
          for (button of buttons) {
              button.addEventListener("click", function(button) {
                  buttonClicked(button.target.innerText);
              })
          }
      }

      //Make sure to call setListeners!!!
      sinkListeners();

      /*  FUNC DESCRIPTION: Now we will write the function that takes care of when a button is clicked. */
      function buttonClicked(valueClicked) {
          if (isNaN(parseInt(valueClicked))) { //NaN means "Not a Number"
              makesSymbol(valueClicked);
          } else {
              makesNumber(valueClicked);
          }
          document.querySelector(".result-screen").innerText = strbuffer;
      // Hint: we need to change what number appears on the screen! to change html, one listener you could use is querySelector
      }