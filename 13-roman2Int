var romanToInt = function (s) {
  let roman = s.split("");
  let out = [];
  let sum = 0;

  for (let i = 0; i < roman.length; i++) {
    if (roman[i] == "M") {
      out.push(1000);
    } else if (roman[i] == "D") {
      out.push(500);
    } else if (roman[i] == "C") {
      out.push(100);
    } else if (roman[i] == "L") {
      out.push(50);
    } else if (roman[i] == "X") {
      out.push(10);
    } else if (roman[i] == "V") {
      out.push(5);
    } else if (roman[i] == "I") {
      out.push(1);
    }
  }
  let previous = 0;
  for (let j = 0; j < out.length; j++) {

    if (previous >= out[j]) {
      sum += out[j];

    } else {
      sum += out[j] - (previous * 2);
    }
    previous = out[j];
  }
  return(sum);
};