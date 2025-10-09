function doWork(){
    let pro = new Promise((resolve, reject) => {
        resolve("Immediately resolved")
    })
    return pro
}

let dummy = doWork()
dummy.then(function (data){
    console.log(data);
})
