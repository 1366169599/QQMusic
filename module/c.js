function demo1() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(1)
            resolve('a');
        }, 1000)
    })
  
}
function demo2(data) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(data)
            resolve('b');
        }, 1000)
    })
  
}
function demo3(data) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(data)
            // resolve();
        }, 1000)
    })
  
}
demo1().then(demo2).then(demo3);
