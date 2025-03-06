/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarit

Things to reflect on:
  - Why is it important to use meaningful variable names?
    Meaningful variable names help with readability and make the code more self-explainatory.
    They reduce confusion and errors, especially in lager teams or when somebody is revisiting code later.
  
  - What are the common pitfalls to avoid when naming variables?
   Should avoid vague or single-letter variable names and complex abbreviations.
   Ignoring camelCase conventions in JavaScript.

  - How do clear variable names benefit team collaboration?
   Clear names make the code easier to everyone and keeps organized different parts of the project.
   New team members can speed up with other team members quickly to contributte effectively.
   Clear variable names help larger teams to collaborate and make the work more managable and scalable.
  
*/

let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);

let customerName = "Alice"
let itemsBought = 5;
let itemPrice = 4;
let totalCost = itemsBought * itemPrice;
let discount = 2;
let discountedTotalCost = totalCost - discount;
let purchaseMessage = Alice + "bought" + 5 + "items for $" + discountedTotalCost;
console.log(purchaseMessage);