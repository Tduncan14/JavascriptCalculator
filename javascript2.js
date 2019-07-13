

const output = document.querySelector('.output');


const name = document.querySelector('.name');


const submit = document.querySelector('.submit');



submit.addEventListener('click',addName);




function addName (){
 
    let dog = name.value;


    addString(dog);
}


function addString(string){

    if(output.firstChild){

        output.firstChild.remove()
    }


else{
     let template = `Hello ${string} i hope you are having fun`



     return output.textContent = template;

}
}