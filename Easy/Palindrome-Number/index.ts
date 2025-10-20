// Palindrome Number

function isPalindrome(x: number): boolean {
  const num:string = String(x);

  for (let i = 0; i < num.length; i++) {
    if (num[i] !== num[num.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

isPalindrome(10); // false
isPalindrome(121); // true
isPalindrome(-121); // false

// Site: LeetCode
// Date: 20/11/2025
// Language: TypeScript
// Author: Ismoil Abdujalilov
// Telegram Channel: @leetcode_issues
