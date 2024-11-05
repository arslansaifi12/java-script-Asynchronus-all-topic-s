
console.log('one');

console.log('two');

// setTimeout(() => {
//     console.log("three");
    
// }, 4000);


console.log('four');

console.log('five');



function name(a , b) {
        console.log(a * b);
        
}


function mutiply(name , back) {
    back (3,2);
    return name;
}

let rv = mutiply("arslan",name)
console.log(rv);


// -----------------------------------------------------//-------------------------------------------------------------------------------


function getdata(dataId , callback) {

    setTimeout(() => {
        console.log("data" , dataId);
        if (callback) {
            callback()
        }
        
    }, 4000);

    
    
}

getdata(1 , function () {

    console.log("getting data ");
    getdata(2 , function () {

        console.log("getting data");
        getdata(3 , function () {

            console.log("getting data");
            getdata(4,function () {

                console.log("getting data"); 
                getdata(5 , function () {
                    
                    getdata(6 , function () {
                        
                        getdata(7 , function () {
                            
                            getdata(8)
                        })
                    })
                });

            })
        })
    })
})
