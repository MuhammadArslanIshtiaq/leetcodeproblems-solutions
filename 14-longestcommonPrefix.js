function longestCommonPrefix(strs) {
    let sortArr = strs.sort(function (a, b) {
      return a.length - b.length;
    });
  
    let shortestStr = sortArr[0];
  
    while (!strs.every((string) => string.startsWith(shortestStr))) {
      
      if (shortestStr.length === 0) return;
      shortestStr = shortestStr.slice(0, -1);
    }
  
    return shortestStr;
  }
  