// Set Up Varialbes for Totals (lines 1-3)
let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0



// Your Code Here
//https://github.com/Torinox89/FSI-Create-a-Personal-Budget-Tracker


//---question on the browser:
  //asking the user the first question from the weekly ExpenseQuestions array:
  //The questions answer is not goint to store it anywhere.
  //window.prompt(weeklyExpenseQuestions[0])


//---Collection the user's Answer:
    //assigning the user's anser to a ariable.
    //Confirm the answer using dev tools, with console.log: answer apper in the dev tools.
    // answer is a string.
    // taking the question, adding it to a variable and then reflecting 
    // that variable out to the console.
    // that we can make sure that it's actually happening.

//let answer = window.prompt(weeklyExpenseQuestions[0])
//console.log(answer)


//---Answer is a string.: Calculate totals: turn it into a number:
   // https://www.w3schools.com/jsref/jsref_parsefloat.asp
   //We're getting it as a string but in order to turn it into a number,
   //first capture it as a string: line one.
   //taking that string answer and converting it to a numeric answer; line two.
   //reflect out the numeric answer: line three.

//let stringAnswer = window.prompt(weeklyExpenseQuestions[0])
//let numberAnswer = parseFloat(stringAnswer) 
//console.log(numberAnswer)

//or
    //let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
    //console.log(answer)

//---ADD to the TOTALS
   //In the browser: see both the weekly Expenses and Total Annual Expenses updated.

//let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
//weeklyExpenses = weeklyExpenses + answer   //generator


//---ADD AN ITERATION
   //Succesfully asked the user, the first question.
   //Repeat this code for each question in the array of Questions, 
   //but that would be a lot of duplicated code, and..
   //Some day in the furure may want to get our questions from somewhere else (maybe a databaese we can maintain separately from our codebase, for example)
   //Instead, we will use iteration to ask each question in the weeklExpenseQuestions array.
   
   //lines 5 to 6:
   //let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
   //weeklyExpenses = weeklyExpenses + answer

   //First identify the part of our code that we want to repeat.
   //Lines 1-3 only need to run once.
   //lines 5 and 6; ask the user a question, then add the  user's answer to the appropriate varialbe.
     //we wan to do this for each of the questions we are going to ask about the user's weekly expenses, so 
     // we will put them inside of our loop:
     
  // for(){ 
   //   let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
   //   weeklyExpenses = weeklyExpenses + answer  //generator
   // }

    //Fill out the three clauses of the 'for loop'
    //loop start at the fist index in the array, with
    //initializer: i = 0
    
    // for(let i = 0;){ 
   //   let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
   //   weeklyExpenses = weeklyExpenses + answer  //generator
   // }

   //loop to go to the end of the array with
   //contition: to check if i is still less than the array length.
       // for(let i = 0; i < weeklyExpenseQuestions.length;){ 
   //   let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
   //   weeklyExpenses = weeklyExpenses + answer  //generator
   // }

   // Loop, at theend of each cicle, we want o move to the next index in the array.
   //with increment i:

 for(let i = 0; i < weeklyExpenseQuestions.length;  i++){ 
      let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
      weeklyExpenses = weeklyExpenses + answer  //generator
    }

    for(let i = 0; i < monthlyExpenseQuestions.length;  i++){ 
      let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
      monthlyExpenses = monthlyExpenses + answer  //generator
    }
    
    for(let i = 0; i < annualExpenseQuestions.length;  i++){ 
      let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
      annualExpenses = annualExpenses + answer  //generator
    }
