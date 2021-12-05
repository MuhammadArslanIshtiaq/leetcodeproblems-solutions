var twoSum = function(nums, target) {
    
    let lock = 0;
    let rem = 0;
    let out = [];
    
    for(let i = 0; i < nums.length; i++){
        
        
          lock = nums[i];
          rem = target - lock;           
          nums[i] = 'lol';
          if (nums.includes(rem) ){
            
            let out2 =nums.indexOf(rem);
              nums[i] = lock;  
            let out1 =nums.indexOf(lock);
            out.push(out1);
            out.push(out2);
            break;
          }
          nums[i] = lock;  
          
        
      }
return out;

};