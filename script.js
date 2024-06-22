function display(num) {
   result.value=result.value+num  // numbers must be printed one by one 
}
function allClear() {
   result.value=""
}
function evaluateexp() {
   result.value = eval(result.value); //result is the id of input
   //eval() is a function in js that calcualte the expression with data type string
   
   //we give the input type as text
   //    <input id="result" type="text" class="form-control">
  
}

function backSpace() {
   result.value=result.value.slice(0,-1)
   //slice() function is used for slicing strings
   //slice(0,-1) here (0,-1) are index and -1 is used 
   // to remove last character if a string
}
