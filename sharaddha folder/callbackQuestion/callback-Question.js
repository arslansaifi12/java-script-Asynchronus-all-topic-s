

function operation(a , b) {
    console.log( a * b);
    
}


function calculate(name , callback) {

    

    console.log(name);
    callback(2,2);

}

calculate("ho gaya" ,operation);

// ============================================================================//====================================================

function nameuppercase(arr) {
    
    for(let i =0; i<arr.length; i++){
       let capital = arr[i].toUpperCase()
       
       console.log(capital);
    }
    
    
    
}

// let rv = nameuppercase( ["Arslan", "Saifi", "Rahul"] );
// console.log(rv);


function porcessname( name,callback) {
    callback(name);
}

porcessname(["Arslan", "Saifi", "Rahul"],nameuppercase)


