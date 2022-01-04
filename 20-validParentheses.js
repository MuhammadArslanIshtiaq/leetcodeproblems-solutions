/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = s.split("");
  let myStack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(" || arr[i] == "{" || arr[i] == "[") 
    {
      
      myStack.push(arr[i]);
      
    } 
    else if (arr[i] == ")" || arr[i] == "}" || arr[i] == "]") 
    {

      if(myStack.length == 0){
        return false;
       
      }
      
      
        if (arr[i] == ")" && myStack[myStack.length - 1] == "(" )
       {
        myStack.pop();
      
        } else if (arr[i] == "}" && myStack[myStack.length - 1] == "{") 
        {
          myStack.pop();
        } else if (arr[i] == "]" && myStack[myStack.length - 1] == "[") 
        {
          myStack.pop();
        }
        else{
          console.log('FF');
          return false;
        }
      }
      
    }
      
    if(myStack.length == 0){
      return true;
     
    }
    else{
      return false;
    }

  
};