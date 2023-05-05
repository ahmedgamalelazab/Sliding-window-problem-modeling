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
  result: number[];
  updateWindow: (
    window: ISlidingWindow,
    capturedItem: number,
    capturedItemIndex: number
  ) => void; // update index, sum, result, capture state
}

// given array : [1, 3, 2, 6, -1, 4, 1, 8, 2]
// required find the avr of each subarray in the list if the k is = 5

let k = 5;
let arr: number[] = [1, 3, 2, 6, -1, 4, 1, 8, 2];

let SlidingWindow: ISlidingWindow = {
  start: 0,
  locked: false,
  locakWindowAtIndex: 4,
  sum: 0,
  result: [],
  updateWindow: (window, capturedItem, capturedItemIndex) => {
    //if the window is not locked and the loop is currenly running
    window.sum += capturedItem;

    // if the window is about to be locked
    // when to lock the window
    if (capturedItemIndex >= window.locakWindowAtIndex) {
      window.locked = true;
    }

    if (window.locked) {
      let avrg = window.sum / 5;
      window.result.push(avrg);
      window.sum -= arr[window.start];
      window.start++;
    }
  },
};

for (let i = 0; i < arr.length; i++) {
  SlidingWindow.updateWindow(SlidingWindow, arr[i], i);
}

console.log(SlidingWindow.result);
