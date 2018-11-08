new Promise(function(resolve, reject){
    $.ajax('http://segmentfault.com', function(resp) {
        if(resp.code === 200) {
            resolve(resp);
        }
    }); 
}).then(function(data) {
    new Promise(function(){
        $.ajax('http://segmentfault.com', function(resp) {
            resolve(resp);
        })
    }).then(function() {
        
    })
  
})
 