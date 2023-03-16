// given an array, and a target number which will be k, find the longest substring that is <= k. return the length

// [1,2,3,4] k = 4 return 2

const longestSubarray = (a, k) => {
    // sliding window
  
    let maxLength = 0
    let count = 0
    let sum = 0
    let n = a.length
  
    for (let i = 0; i < a.length; i++) {
      sum += a[i]
      count++
      console.log('start', "maxLength:" + maxLength, 'count:' + count, "sum:" + sum)
      if (sum <= k) {
        maxLength = Math.max(maxLength, count)
        console.log('if', "maxLength:" + maxLength, 'count:' + count, "sum:" + sum)
        // count = 0
      } else {
        if (i === 0) {
          sum = sum - a[i]
        } else {
          sum -= a[i - 1]
        }
  
        count--
        console.log('else2', "maxLength:" + maxLength, 'count:' + count, "sum:" + sum)
  
      }
    }
    return maxLength
  
  }
  
  
  
  const arr = [6, 1, 2, 3] // k = 4 [1], [2], [3], [4], [1,2], [1,2,3], [2,3], [2,3,4], [3,4] return 2
  const arr2 = [62, 34, 1, 2, 6, 5, 12] // k = 34 return 5
  const arr3 = [73, 69, 7, 5, 1, 2, 34, 15, 92] // k = 20 return 4
  
  console.log(longestSubarray(arr3, 20))
  