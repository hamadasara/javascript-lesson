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

// ---Q4---
// 下記の変数 playerList を使用してゼルダの伝説をコンソールに出力してください。
let playerList = [
    {
        name: 'John',
        age: 26,
        favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
        name: 'Bob',
        age: 33,
        favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
        name: 'Michael',
        age: 22,
        favorites: ['Football', 'Smash Bros.'],
    },
];

console.log(playerList[1].favorites[1]);


// ---Q5---
// Q4で定義した変数 playerList を使用し、John、Bob、Michael の年齢の平均値を計算した結果をコンソールに出力してください。
let toAge = playerList[0].age + playerList[1].age + playerList[2].age;
let averageAge = toAge / playerList.length;

console.log(averageAge);

// ---Q6---
// Hello とコンソールに出力する関数 SayHello を定義し、実行してください。
function SayHello() {
    console.log('Hello');
}

SayHello();

// 変数 SayWorld に World とコンソールに出力する無名関数を代入し、実行してください。
let SeyWord = function () {
    console.log('Wold');
}

SeyWord();

// ---Q7---
// Q3 で定義した変数 user に '2000-09-27' を値とする誕生日プロパティを追加してください。
user.birthday = '2000-09-27';
console.log(user);

// Q3 で定義した変数 user に Hello! とコンソールに出力するメソッド SayHello を追加し、実行してください。
user.SayHello = function () {
    console.log('Hello');
}

user.SayHello();


// ---Q8---
let calc = {};

// 和
calc.add = function (x, y) {
    console.log(x + y);
}

calc.add(3, 4);

// 差
calc.difference = function (x, y) {
    console.log(x - y);
}

calc.difference(16, 6);

// 積
calc.product = function (x, y) {
    console.log(x * y);
}

calc.product(7, 7);

// 商
calc.quotient = function (x, y) {
    console.log(x / y);
}

calc.quotient(10, 2);

// ---Q9---
// 2つの引数 x,yを受け取り、xをyで割った剰余を返り値とする関数remainderを定義し、
// 5と3を引数に渡して実行した返り値を用いて文字列連結で以下のようにコンソールに出力してください。
function remainder(x, y) {
    return x % y;
}

let result = remainder(5, 3);
console.log(5 + 'を' + 3 + 'で割った余りは' + result + 'です。');

// ---Q10---
// 下記の console.log(x); においてコンソールに 1 が出力されることはなく、
// x is not defined（変数 x が定義されていない）というエラーが出力されます。
// その理由を以下 2 つの単語を使用し app.js にコメントアウトで回答してください。

// function foo() {
//     let x = 1;
// }
// console.log(x);

// -理由-
// console.logで指定した変数xは、foo関数の中だけのスコープである。
// そのため、関数の外でconsole.logを指示しても参照されす、エラーが出てしまう。


// -JavaScript応用編問題

// ---Q1---
// 標準組み込みオブジェクト Math を使用し、0 ~ 9 のランダムな整数をコンソールに出力してください。

let random = Math.floor(Math.random() * 10);
console.log(random);

// ---Q2---
// 関数 setTimeout を使用し、3 秒後に以下のようにコンソールに出力してください。
setTimeout(function () {
    console.log("Hello Wold");
}, 3000);
