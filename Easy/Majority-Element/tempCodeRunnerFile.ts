// Majority Element

function majorityElement(nums: number[]): number | undefined {
  const newObjNums: { [key: string]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (newObjNums[nums[i]]) {
      newObjNums[nums[i]]++;
    } else {
      newObjNums[nums[i]] = 1;
    }
  }

  const values: number[] = Object.values(newObjNums);

  const max: number = Math.max(...values);

  for (const num in newObjNums) {
    if (newObjNums[num] === max && nums.length / 2 < max) {
      return Number(num);
    }
  }
}

majorityElement([3, 2, 3]); // 3
majorityElement([2, 2, 1, 1, 1, 2, 2]); // 2

// Site: LeetCode
// Date: 16/07/2025
// Language: Typescript
// Author: Abdujalilov Ismoil
// Telegram channel: @leetcode_issues