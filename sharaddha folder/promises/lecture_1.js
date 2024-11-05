

function getdata1(dataId , callback) {
    return new Promise((resolve , reject)=>{

    setTimeout(() => {

        console.log("data" , dataId);

        resolve("succesfully")

        if (callback) {
            callback()
        }
        
    }, 4000);
    })

}

//-------------------------------------------------------------------------------------------------------------------

function getdata2(dataId , callback) {
    return new Promise((resolve , reject)=>{

    setTimeout(() => {

        console.log("data" , dataId);

        resolve("succesfully")

        if (callback) {
            callback()
        }
        
    }, 4000);
    })

}




let rv1 = getdata1(1235 , function () {
    
});


rv1.then((maal)=>{
    console.log(maal);
    
})

//---------------------------------------------2-------------------




let rv2 = getdata2(13635 , function () {
    
});


rv2.then((maal)=>{
    console.log(maal);
    
})