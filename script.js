const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");


function checkBirthDateLucky(){
    const bdate = dateOfBirth.value;
    const sum = calculateSum(bdate);
    console.log(sum);
}


function calculateSum(bdate){
   bdate = bdate.replaceAll("-","");
   let sum=0;
   for(i=0; i<bdate.length; i++){
       sum = sum + Number(bdate.charAt(i)); //typecasting
   }
   return sum;
}

checkNumberButton.addEventListener('click',  checkBirthDateLucky)
