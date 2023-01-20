const items = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// ランダムにカードを二枚提示する
// Math.floor関数　与えられた数値板の最大の整数を返す。
// Marh.random関数　0以上1未満の範囲でランダムな浮動小数点の乱数を返す。
// splice関数　https://dotinstall.com/questions/177zruy
// 非復元抽出で重複除外できる

// 配列　中身　全部　足す（reduceが使える）
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


for(let i =0; i < 2; i++){
    const random = Math.floor( Math.random() * items.length );
    const newArray = items.filter(i => i !== items[random]);
    // 参考　https://into-the-program.com/javascript-get-delete-random-element-array/
    console.log( items[random] );
    console.log( newArray );
    // Array.isArrayで配列かどうかのチェックができる。Falseは配列じゃない。
}
// const sum = random.reduce((sum,x)=>{
//     return sum + x 
// }, 0)

// if(items[random1]+items[random2]>21){
//     console.log("--負け--");
// }else if(items[random1]+items[random2] === 21){
//     console.log("!!BLACK JACK!!");
// }else{
//     console.log(`現在の合計は${items[random1]+items[random2]}です。`);
//     const readlineSync = require('readline-sync');
//     let anser =['はい','いいえ']
//https://dotstud.io/blog/nodejs-npm-readline-sync/
//     let index = readlineSync.keyInSelect(anser, '続けますか');
//         if(anser[index] === 'はい'){
//             const random3 = Math.floor( Math.random() * items.length );
//             if(items[random1]+items[random2]+items[random3] < 21){
//                 console.log( items[random1],items[random2],items[random3] );
//                 console.log(`現在の合計は${items[random1]+items[random2]+items[random3]}です。`);
//             }else if(items[random1]+items[random2]+items[random3] === 21){
//                 console.log( items[random1],items[random2],items[random3] );
//                 console.log(`現在の合計は${items[random1]+items[random2]+items[random3]}です。`);
//                 console.log("!!BLACK JACK!!");
//             }else{
//                 console.log( items[random1],items[random2],items[random3] );
//                 console.log(`現在の合計は${items[random1]+items[random2]+items[random3]}です。`);
//                 console.log( "--負け--" );
//             }
//         }else if(anser[index] === 'いいえ'){
//             console.log("終わり！");
//         }else{
//             console.log("終わり！");

//         }
// }