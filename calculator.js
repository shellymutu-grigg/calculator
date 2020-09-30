/*
# JS
# Define global variables
# Action onclick of a button
# Check if the input is a number or not and if OK add to the temp string variable
# Assign to the calculator_output element in HTML
# Check for selection of either AC or CE buttons and empty answer element
# Cater for special symbols and use correct mathematical operators
# Define equals functionality
*/

/*
# Global variables
*/
var answer = []

/*
# Assess button click
*/

function calculate(value){
  var temp =""
  if(Number.isInteger(parseInt(value)) || value === "."){
    if((value === "." && !answer.includes("."))||Number.isInteger(parseInt(value))){
      answer.push(value)
    }
    document.getElementById("calculator_output").innerHTML = answer.join("")
  }else{
    switch(value){
      case "AC":
        answer = []
        document.getElementById("calculator_output").innerHTML = answer.join("")
        break  
      case "√":
        //Special character
        temp = calcSquareRoot()
        document.getElementById("calculator_output").innerText = temp
        answer =[]
        if(temp !== "NaN"){
          answer.push(temp)
        }
        break   
      case "%":
        //Special character
        temp = calcPercentage()
        document.getElementById("calculator_output").innerText = temp
        answer =[]
        if(temp !== "NaN"){
          answer.push(temp)
        }
        break
      case "÷":
        //Special character
        answer.push("/")
        document.getElementById("calculator_output").innerText = answer.join("")
        break
      case "CE":
        answer = []
        answer.push("0")
        document.getElementById("calculator_output").innerText = answer.join("")
        answer = []
        break 
      case "x":
        //Special character
        answer.push("*")
        document.getElementById("calculator_output").innerText = answer.join("")
        break 
      case "-":
        answer.push("-")
        document.getElementById("calculator_output").innerText = answer.join("")
        break  
      case "+":
        answer.push("+")
        document.getElementById("calculator_output").innerText = answer.join("")
        break
      case "=":
        temp = assessAnswer()
        document.getElementById("calculator_output").innerText = temp
        answer = []
        if(temp !== "NaN"){
          answer.push(temp)
        }
        break     
    }
  } 
}
/*
# Check if first and last numbers in the answer array are numbers 
*/
function firstInArrayIsNumber(){
  if (answer.length == 0 || answer === undefined || isNaN(Number(answer[0]))){
    return false
  }else
  return true  
}
function lastInArrayIsNumber(){
  if (answer.length == 0 || answer === undefined || isNaN(Number(answer[answer.length-1]))){
    return false
  }else 
  return true  
}
/*
# Calculate square root of number 
*/
function calcSquareRoot(){
  if (!firstInArrayIsNumber()){
    array = []
    return "NaN"
  }else if (!isNaN(Math.sqrt(answer.join("")))){
    return Math.sqrt(answer.join(""))
  }else 
    array = []
    return "NaN"
}
/*
# Calculate percentage of number 
*/
function calcPercentage(){
  if(!firstInArrayIsNumber()){
    array = []
    return "NaN"
  }else if(!isNaN(answer.join("")/100)){
    return answer.join("")/100
  }else 
    array = []
    return "NaN"  
}
/*
# Calculate answer 
*/
function assessAnswer(){
  var expression = answer.join("")
  if(answer.join("").charAt(0) === "."){
    answer.unshift("0")
  }
  if(firstInArrayIsNumber() && lastInArrayIsNumber()){
    if(!isNaN(eval(expression)) && eval(expression) !== undefined){
      if(!isNaN(Number(answer.join("")))){
        return answer.join("")
      }
      return eval(expression)
    }else
    array = []
    return "NaN"
  }else
    array = []
    return "NaN"
}