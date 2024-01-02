let findmaxadnmin = [1, 2, 3, 4, 5, 6, 7];
let newarr = findmaxadnmin;
let maxarr = newarr[0];
let minarr = newarr[0];

function findMaxAndMin() {
  for (let i = 0; i < newarr.length; i++) {
    switch (true) {
      case newarr[i] === 0:
        console.log([null, null]);
        break;
      case newarr[i] > maxarr:
        maxarr = newarr[i];
        break;
      case newarr[i] < minarr:
        minarr = newarr[i];
        break;
      default:
        console.log("not valid");
    }
  }

  console.log("Max: " + maxarr);
  console.log("Min: " + minarr);
}

findMaxAndMin();
