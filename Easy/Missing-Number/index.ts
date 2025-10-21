// Missing Number

function missingNumber(nums: number[]): number | undefined {
  const newObj: { [key: string]: number } = {};
  const newArr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    newObj[nums[i]] = nums[i];
  }

  for (const num in newObj) {
    newArr.push(Number(num));
  }

  for (let i = 0; i < nums.length + 1; i++) {
    if (newArr[i] !== i) {
      return i;
    }
  }
}

missingNumber([0, 1]); // 2
missingNumber([3, 0, 1]); // 2
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1, 10]); // 8

// Site: LeetCode
// Date: 21/11/2025
// Language: TypeScript
// Author: Ismoil Abdujalilov
// Telegram channel: @leetcode_issues
