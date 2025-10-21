// Search a 2D Matrix

function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    let left: number = 0;
    let right: number = matrix[i].length - 1;

    while (left <= right) {
      let midIndex: number = Math.floor((left + right) / 2);

      if (matrix[i][midIndex] === target) {
        return true;
      } else if (matrix[i][midIndex] < target) {
        left = midIndex + 1;
      } else {
        right = midIndex - 1;
      }
    }
  }

  return false;
}

searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  3
); // true
searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  13
); // false

// Site: LeetCode
// Date: 21/07/2025
// Language: Typescript
// Author: Abdujalilov Ismoil
// Telegram channel: @leetcode_issues
