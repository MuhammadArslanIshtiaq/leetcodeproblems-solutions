var reverse = function(x) {
     
        
const limit = 2147483648;
  let y = 0;
  while (x != 0) {
    
    if (x < 0) {
      x = x * -1 ;
      x = x + "";    
      y = x.split("").reverse().join("");

        return ( y < limit ? y * -1 : 0 );
    }
    
    else {

      x = x + "";    
      y = x.split("").reverse().join("");
        return ( y < limit ? y : 0 );
    }
     
  }
    return 0;

};