

const showDate = document.querySelector('button');



const output = document.querySelector('.output');


output.setAttribute('style',"color:red; height:400px; width:400px; font-size:50px;")


showDate.addEventListener('click',todayDate);




function todayDate(){

 const date = new Date();

 let cur = date.getHours();

 let message;

 console.log(cur);


 if(cur > 17){

    message = 'its evening';
    
    output.style.backgroundColor = 'blue';
 }

 else if(cur > 12){
       message = 'its afternoon';

       output.style.backgroundColor = 'green';
 }


 else if(cur > 0){

     message ='its morning';

     output.style.backgroundColor = 'orange';
 }
  
 else{
     message =' something is wrong witht he time'
 }

 output.innerHTML = message;
}