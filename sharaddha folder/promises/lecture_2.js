

function getdata(dataId) {
    
    return new Promise((resolve , reject)=>{
        
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success")
            
        }, 5000);
    })
}


console.log("getting data 1");

getdata(12345).then(()=>{
    console.log("getting data 2");
    
    return getdata(1);
}).then(()=>{

    console.log("getting data 3");
    
    return getdata(2)
}).then(()=>{
    console.log("getting data 4");
    
    return getdata(4)
}).then(()=>{
    return getdata(5)
}).then(()=>{
    getdata(6)
})






//   getdata(93100).then((val)=>{
//     console.log(val);
//     getdata(789).then((val)=>{
//         console.log(val);
        

//     })


    
// })