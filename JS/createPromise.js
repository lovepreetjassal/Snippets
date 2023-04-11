//create promise javascript
var promise = new Promise(function (resolve, reject) {
    // do a thing, possibly async, then…
    if (true) {
        resolve("Stuff worked!");
    }
    else {
        reject("It broke");
    }
});

// //create promise javascript
async function test() {
    var result = await promise;
    console.log(result); // "Stuff worked!"
}

test();