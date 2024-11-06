
// Asyn _ Await se

let catdata1 = async () =>{

const url = "//api.coindesk.com/v1/bpi/currentprice.json";


console.log("getting data");

let promise = await fetch(url);

console.log(promise);


let data = await promise.json()

console.log(data);


}


catdata1();


// callback se

 function catdata(url) {
   
   fetch(url).then((res)=>{

    return res.json()

   }).then((data)=>{
    console.log(data);
    
   })

  
   


}

catdata('//api.coindesk.com/v1/bpi/currentprice.json');

//promisses se 

let promise = new Promise((resolve , reject) =>{
    const url = '//api.coindesk.com/v1/bpi/currentprice.json';
      fetch(url)
    .then((res)=>{
      return  res.json()
    }).then((data)=>{
        resolve(data)
        console.log(data);
        
    }).catch((error)=>{
        console.log(error);
        
    })
  

})