function calculateSquare(number) {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof number !== "number") {
                return reject(new Error("Arguments is not valid"))
            }
            const result = number * 2;
            resolve(result)
        }, 1000);
    });
    return promise;
}
calculateSquare(2)
    .then(value => {
        console.log("Success:" + value)
    }, reason => {
        console.log("Error " + reason)
    }
    );