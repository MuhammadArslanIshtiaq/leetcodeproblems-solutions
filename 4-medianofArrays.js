var findMedianSortedArrays = function(nums1, nums2) {

    
    if (Math.max(...nums1) == 0 && Math.max(...nums2) == 0)  
    {
      return 0;
    }
    else {
      let num3 = nums1.concat(nums2);
      num3.sort(function(a,b){return a - b});
      let middle = Math.floor(num3.length/2);
      let ans = num3[middle];
      let ans1 = num3[middle-1];
    
      if (num3.length % 2 !== 0){
        return (Math.round(ans * 100) / 100).toFixed(5);
      }
      else{
        let ans2 = (ans + ans1)/2;
        return (Math.round(ans2 * 100) / 100).toFixed(5);
      }
    
      };
    }