// Two Sum

function twoSum(nums: number[], target: number): number[] | undefined {
    for(let i = 0; i < nums.length; i++){
      for(let j = 0; j < nums.length; j++){
        if(i === j && nums[i] === nums[j]){
          continue;
        }

        let calculate = nums[i] + nums[j];
        
        if(calculate === target){
          return [i,j];
        }
      }
    }
};

twoSum([3,3],6); // [0,1]
twoSum([3,2,4],6); // [1,2]
twoSum([2,7,11,15],9); // [0,1]

// Site: LeetCode
// Date: 19/11/2025
// Language: TypeScript
// Author: Ismoil Abdujalilov
// Telegram channel: @leetcode_issues