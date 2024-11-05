
function asyncfun1() {
    
    return new Promise((resolve , reject)=>{

        setTimeout(() => {
                console.log("data1");
                resolve("succesfully")
                
        }, 5000);

    })
}




function asyncfun2() {
    
    return new Promise((resolve , reject)=>{

        setTimeout(() => {
                console.log("data2");
                resolve("succesfully again")
                
        }, 5000);

    })
}

//second fun

function asyncfun3() {
    
    return new Promise((resolve , reject)=>{

        setTimeout(() => {
                console.log("data3");
                resolve("succesfully again and again")
                
        }, 5000);

    })
}



let promisepakad = asyncfun1();

promisepakad.then((val)=>{
    console.log(val);

    let pakad2 = asyncfun2();

    pakad2.then((val)=>{
        console.log(val);

        let pakad3 = asyncfun3();
        
        pakad3.then((val)=>{
            console.log(val);
            
        })
    })
    
})
