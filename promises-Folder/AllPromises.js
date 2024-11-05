
let promiseone = new Promise((kaamhogaya , nhihua)=>{
    kaamhogaya( 

        setTimeout(function() {
            console.log("mein 2 sec baad chala hu");
            
        },2000)
    )

})

console.log(promiseone);


promiseone.then((maal)=>{
    console.log(maal);
    
})