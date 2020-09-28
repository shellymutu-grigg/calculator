//JS
//Define global variables
//Use JQuery to determine action onclick of a button
//Check if the input is a number or not and if OK add to the temp string variable
//Use JQuery to assign to the answer element in HTML using the .val
//Check for selection of either AC or CE buttons and empty answer element
//Define multiply functionality using text versus mathematical operator
//Define division functionality using text versus mathematical operator
//Define equals functionality
//  using addition
//  using minus
//  using multiplication
//  using division
//Cater for - symbol

document.addEventListener('DOMContentLoaded', startCalculator)

/*
# Global variables
*/
var answer = ""

/*
# Initiate game
*/
function startCalculator(){
  
}
function calculate(value){
  console.log("calculate(): value:" + value)
  var isInteger = Number.isInteger(value)
  if(Number.isInteger(parseInt(value)) || value === "."){
    answer += value
    console.log("value is Int or . : " + value)
    document.getElementById("calculator_output").innerHTML = answer.toString()
  }else{
    switch(value){
      case "AC":
        console.log("case AC: " + document.getElementById("calculator_output").value)
        answer = ""
        document.getElementById("calculator_output").innerHTML = answer.toString()
        break  
      case "√":
        answer = Math.sqrt(answer)
        document.getElementById("calculator_output").innerText = answer.toString()
        answer =""
        break   
      case "%":
        answer = answer/100
        document.getElementById("calculator_output").innerText = answer.toString()
        answer =""
        break
      case "÷":
        answer += "÷"
        document.getElementById("calculator_output").innerText = answer.toString()
        break
      case "CE":
        answer = "0"
        document.getElementById("calculator_output").innerText = answer.toString()
        break 
      case "x":
        answer += "*"
        document.getElementById("calculator_output").innerText = answer.toString()
        break 
      case "-":
        answer += "-"
        document.getElementById("calculator_output").innerText = answer.toString()
        break  
      case "+":
        answer += "+"
        console.log("case + : " + answer)
        document.getElementById("calculator_output").innerText = answer.toString()
        break
      case "=":
        document.getElementById("calculator_output").innerText = assessAnswer()
        answer = ""
        break     
    }
  } 
}
function assessAnswer(){
  if(answer.charAt(0) === "."){
    answer = "0"+answer
    console.log("assessAnswer() answer: "+ answer)
    assessAnswer()
  } else if(!isNaN(eval(answer))){
    return eval(answer)
  }else
    return "NaN"
}