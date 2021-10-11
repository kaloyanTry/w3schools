async function mySAsyncFunc() {
    return 'Hello!'; 
}
//the same as:
// async function mySAsyncFunc() {
//     return Promise.resolve('Hello!');
// }

async function myDisplay() {
    let myPromise = new Promise(function (resolve, reject) {
        resolve("Hello, is it me you looking for?");
    });
    await myPromise;
}

console.log(myDisplay());