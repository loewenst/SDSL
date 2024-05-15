// Given an array, return the second to highest array

const secondHighest = (arr) => {
  //if the array is one or zero elements, return
  if (!(arr instanceof Array)) {
    console.log('Only arrays can be submitted!')
    return
  }
  //if the input is not an array, return
  if (arr.length < 2) {
    console.log('Only arrays of two elements or greater can be entered!')
    return
  }
  //create two variables, one for max and one for second max, initialize max to arr[0] and second to arr[1]
  let highest = arr[0]
  let secondHighest = arr[1]
  let allNums = true
  //iterate through array, for each element if element is more than max, set second to max, and set element to max
  //else if element is more than second, set second to element
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      allNums = false
    }
    if (arr[i] > highest) {
      secondHighest = highest
      highest = arr[i]
    } else if (arr[i] > secondHighest) {
      secondHighest = arr[i]
    }
    console.log('Highest: ' + highest)
    console.log('Second Highest: ' + secondHighest)
  }

  if (!allNums) console.log('Array includes non-numbers!')
  return secondHighest
}

const arr = [34, 0, 2, 60]
console.log(secondHighest(arr))

//Given a string, return the index and length of the longest uniform substring

const longestSubstring = (str) => {
  //if input is not a string, return
  if (typeof str !== 'string') {
    console.log('Only strings can be submitted!')
    return
  }
  //depending upon parameters, set all to lowercase
  console.log(str)
  const lowString = str.toLowerCase()
  //solution variable set to array of index and length, starting at [0,0]
  let solution = [0, 0]
  //current array variable initialized to [0,0]
  let current = [0, 0]
  //for string[i], if string[i-1] is the same
  for (let i = 0; i < str.length; i++) {
    if (lowString[i] === lowString[i - 1]) {
      current[1] = current[1] + 1
      console.log(
        `${lowString[i]} matches ${lowString[i - 1]}. Tally is now ${
          current[1]
        }.`
      )
    } else {
      current = [i, 1]
    }
    if (current[1] > solution[1]) {
      solution = current
    }
  }
  //current[1] should be ++ed
  //if it's not the same, current array should be set to [current index, 1]
  //if current[1] is greater than solution[1], solution = current
  console.log(solution)
}

const str = 'aa'
console.log(longestSubstring(str))

var merge = function (nums1, m, nums2, n) {
  //nums1, from index m and on, should be replaced with the elements in nums2
  //i.e. splice from index m through n, and then use spread operator

  nums1.splice(m, n)
  nums1 = [...nums1, ...nums2]
  nums1.sort()
  console.log(nums1)
}

merge([0], 0, [1], 1)

var removeElement = function (nums, val) {
  console.log(nums.length)
  for (let i = nums.length; i > 0; i--) {
    console.log(`Comparing ${val} and ${nums[i - 1]}`)
    if (nums[i - 1] === val) {
      nums.splice(i - 1, 1)
    }
  }
  console.log(nums)
  return nums.length
}

console.log(removeElement([1, 2, 3, 4, 3, 5, 6, 0, 3, 4], 3))

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
  setNext(data) {
    if (data instanceof Node) {
      this.next = data
    }
  }
  getNext() {
    return this.next
  }
}

const first = new Node(4)
const second = new Node(5)
const third = new Node(12)

class LL {
  constructor() {
    this.head = null
    this.tail = null
  }
  addToTail(data) {
    if (data instanceof Node) {
      if (!this.head) {
        this.head = data
      }
      if (!this.tail) {
        this.tail = data
      } else {
        this.tail.setNext(data)
        this.tail = data
      }
    }
  }

  removeHead() {
    const removedHead = this.head
    const newHead = this.head.getNext()
    this.head = newHead
    return removedHead
  }
}

const myList = new LL()
console.log(myList)
myList.addToTail(first)
myList.addToTail(second)
myList.addToTail(third)
console.log(myList)
myList.removeHead()
console.log(myList)

class Queue {
  constructor() {
    this.queue = new LL()
    this.size = 0
  }
  enqueue(data) {
    if (data instanceof Node) {
      this.queue.addToTail(data)
      this.size++
    }
  }
  dequeue() {
    this.queue.removeHead()
  }
}
