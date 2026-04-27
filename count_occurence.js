// Input: arr = [1,1,2,2,2,3,3,4,4,5,5,5]
// 	Expected Output: [{1:2,2:3,3:2,4:2,5:3}]

function countOcc() {
    let arr = [1,1,2,2,2,3,3,4,4,5,5,5];
    let result = {};

  for (let num of arr) {
    result[num] = (result[num] || 0) + 1;
  }

  console.log(result);
  }

  countOcc();
