function isStrictlyPalindromic(n: number): boolean {
  let num: string = "";
  const strictNum: number = n - 1;

  if (strictNum < 2) return false;

  for (let i = strictNum - (strictNum - 2); i <= strictNum; i++) {
    let digit: string = i.toString(2);

    for (let j = digit.length - 1; j >= 0; j--) {
      num += digit[j];
    }

    if (num !== digit) return false;

    num = "";
  }

  return true;
}

isStrictlyPalindromic(9); // false
isStrictlyPalindromic(4); // false