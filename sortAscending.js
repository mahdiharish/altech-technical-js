// 2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil
// dengan manual tanpa fungsi bawaan javascript,

function sortNumbersAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const numbers = [11, 4, 2, 5, 8, 6, 20, 14];
sortNumbersAscending(numbers);

module.exports = sortNumbersAscending;
