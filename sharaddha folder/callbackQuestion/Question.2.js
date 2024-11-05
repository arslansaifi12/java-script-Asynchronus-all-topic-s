

function checkarr(arr) {
    
    for(let i =0; i<arr.length; i++){
        if (i%2==0) {
            console.log(i);
            
        }
    }
}

function filterarr(arr , callback) {
    
    callback(arr)
}

filterarr([10,20,3,20,40,40,60,8,9,,5,10,70,2,0,20,60] , checkarr);

// ---------------------------------------------------------------------------------------------------------------------------------------

// function maparr(arr) {
    
//     let map =arr.map((maal)=>{
//         return maal*maal;
        
//     })
//     console.log(map);

// }


function newfun(arr , callback) {
    callback(arr)
};

newfun([1,2,3,4,5,6] , function maparr(arr) {
        
        let map =arr.map((maal)=>{
            return maal*maal;
            
        })
        console.log(map);
    
    }
    )


//