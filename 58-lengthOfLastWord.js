var lengthOfLastWord = function (s) {
  const myArray = s.split(" ");

  while (myArray[myArray.length - 1].length == 0) {
    myArray.pop();
  }

  return myArray[myArray.length - 1].length;
};
