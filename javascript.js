


const button = document.querySelector('.button');

const output = document.querySelector(".output");

const cost = document.querySelector('input');


// const allButtons = document.querySelectorAll('.button');

button.addEventListener('click',function(){

    const costValue = parseFloat(cost.value *0.15).toFixed(2)

   console.log(costValue);

   let temp = `<h1> you should tip ${costValue} on ${cost.value} </h1>`
    
   output.innerHTML= temp;
    
})




// let classValue = document.querySelector('.price');


// const submit = document.querySelector('.submit');

// let showPrice = document.querySelector('#showPrice');




// submit.addEventListener('click',tipPrice);



// function tipPrice (e) {

//     e.preventDefault();

//  let grabtheValue =(classValue.value);


    
// let saleIntoNumber = parseInt(grabtheValue);
      
// if(saleIntoNumber > 0){

//  finalPrice(saleIntoNumber);



//   }

//   else{
//       return false;
//   }
// }


// function finalPrice(sale){

//   console.log('hey');


//   let tipMe = sale * 0.01;


//    let finalPrice = tipMe + sale ;


//   console.log(finalPrice); 



//    createElement(finalPrice);


// }


// function createElement(price){

//     classValue.value = '';

//     while(showPrice.firstChild){

//         showPrice.firstChild.remove();
//     }

//     const element = document.createElement('div');

    
//      element.textContent = price;

//      element.classList = 'center'




//    return   showPrice.appendChild(element);

// }