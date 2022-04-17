var plusOne = function (digits) {
  let dl = digits.length;

  if (dl == 1) {
    digits++;
    return Array.from(String(digits), Number);
  } else {
    let dgt = digits.toString();
    dgt = dgt.replaceAll(",", "");
    dgt = BigInt(dgt);
    dgt++;
    return Array.from(String(dgt));
  }
};

let d = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
plusOne(d);
