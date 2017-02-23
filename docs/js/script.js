// from [Array - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)

var fruits = new MyArray("りんご", "バナナ");

console.log(fruits.length);
// 2


var first = fruits[0];
console.log(first);
// りんご

var last = fruits[fruits.length - 1];
console.log(last);
// バナナ


var a = fruits.forEach(function (item, index, array) {
  console.log(item, index);
});
// りんご 0
// バナナ 1


var newLength = fruits.push("みかん");
console.log(fruits);
// ["りんご", "バナナ", "みかん"]

console.log(fruits.length);
// 3


var fruits = new MyArray("りんご", "バナナ", "みかん");
var last = fruits.pop(); // 配列の末尾の要素 "みかん" を削除
console.log(last);
// みかん

console.log(fruits);
// ["りんご", "バナナ"];

console.log(fruits.length);
// 2


var fruits = new MyArray("りんご", "バナナ");
var first = fruits.shift(); // 配列の先頭の要素"りんご" を削除

console.log(first);
// "りんご"

console.log(fruits);
// ["バナナ"];


var fruits = new MyArray("バナナ");
var newLength = fruits.unshift("いちご") // 配列の先頭に追加

console.log(fruits);
// ["いちご", "バナナ"];

console.log(newLength);
// 2


var fruits = new MyArray("いちご", "バナナ");
fruits.push("マンゴー");

console.log(fruits);
// ["いちご", "バナナ", "マンゴー"]

var pos = fruits.indexOf("バナナ");

console.log(pos);
// 1
