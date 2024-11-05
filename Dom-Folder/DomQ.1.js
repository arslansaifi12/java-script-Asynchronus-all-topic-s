

let heading = document.querySelector('h1');

heading.innerText 

heading.innerHTML = heading.innerHTML + "KIng"

console.log(heading);



let acces = document.querySelectorAll(".child");




let ind = 0;
for (let maal of acces) {
   acces.innerText ;

   maal.innerText = maal.innerText + `add some ${ind}` ;
   ind++;
}
console.log(acces);





// acces[0].innerText 

// acces[0].innerText = acces[0].innerText + " text add"

// acces[1].innerHTML;

// acces[1].innerText = acces[1].innerText + " doosra add"

// acces[2].innerText

// acces[2].innerText = acces[2].innerText + "     teesra add"

// console.log(acces);


let apre = document.querySelector(".parent")

apre.style.backgroundColor = "yellow"

// apre.style.visibility = "hidden"