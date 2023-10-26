// 3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string
// yang diinputkan maka return true jika tidak return false

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
}

module.exports = isPalindrome;
