// javascript基礎編問題

// ---Q1---
// 変数ニックネーム、年齢に自分の名前と年齢を入力し、文字列連結で以下のようにコンソールに出力してください。
let nickname = 'さら';
let age = 23;

console.log('私のニックネームは' + nickname + 'です。' + '年齢は' + age + 'です。');

// ---Q2---
// 変数言語に JavaScript, PHP, Ruby, Python, Go の 5 つの値を持つ配列を代入し、その中から JavaScript, Python を取得し、テンプレートリテラルを用いて以下のようにコンソールに出力してください。
let code = ['Javascript', 'PHP', 'Rudy', 'Python', 'Go'];

console.log(`私の好きな言語は${code[0]}です。次は${code[3]}を勉強してみたいです。`)

// ---Q3---
// 下記の変数 user を使用し 26 をコンソールに出力してください。

let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
};

console.log(user.age);