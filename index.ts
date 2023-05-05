// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

interface ISlidingWindow {
  start: number;
  locked: boolean;
  locakWindowAtIndex: number;
  sum: number;
  store?: number;
  result: number[];
  updateWindow: (
    window: ISlidingWindow,
    capturedItem: number,
    capturedItemIndex: number,
    targetArr: number[]
  ) => void; // update index, sum, result, capture state
}

//problem 1
// given array : [1, 3, 2, 6, -1, 4, 1, 8, 2]
// required find the avr of each subarray in the list if the k is = 5

//problem 2
//given array [2, 1, 5, 1, 3, 2]
// required to calculate the maximum subarray

//problem 1
let k = 5;
let arr: number[] = [1, 3, 2, 6, -1, 4, 1, 8, 2];

// problem 2
let k3 = 3;
let arr2 = [2, 1, 5, 1, 3, 2];

let SlidingWindow: ISlidingWindow = {
  start: 0,
  locked: false,
  locakWindowAtIndex: 4,
  sum: 0,
  result: [],
  updateWindow: (window, capturedItem, capturedItemIndex, targetArr) => {
    //if the window is not locked and the loop is currenly running
    window.sum += capturedItem;

    // when to lock the window
    if (capturedItemIndex >= window.locakWindowAtIndex) {
      window.locked = true;
    }

    if (window.locked) {
      let avrg = window.sum / 5;
      window.result.push(avrg);
      window.sum -= targetArr[window.start];
      window.start++;
    }
  },
};

for (let i = 0; i < arr.length; i++) {
  SlidingWindow.updateWindow(SlidingWindow, arr[i], i, arr);
}

console.log(SlidingWindow.result);

let maxSumSubArraySlidingWindow: ISlidingWindow = {
  locakWindowAtIndex: 2,
  locked: false,
  result: [],
  start: 0,
  sum: 0,
  store: 0, // we will store here the maximum subarray
  updateWindow: (window, capturedItem, capturedIndex, targetArr) => {
    window.sum += capturedItem;

    //when to lock the window ?
    if (capturedIndex >= window.locakWindowAtIndex) {
      window.locked = true;
    }

    //calculate the sum
    if (window.locked) {
      // what to do ?
      window.result.push(window.sum);
      if (window.sum > window.store) {
        window.store = window.sum;
      }
      window.sum -= targetArr[window.start];
      window.start++;
    }
  },
};

for (let i = 0; i < arr2.length; i++) {
  maxSumSubArraySlidingWindow.updateWindow(
    maxSumSubArraySlidingWindow,
    arr2[i],
    i,
    arr2
  );
}

console.log(maxSumSubArraySlidingWindow.store);
