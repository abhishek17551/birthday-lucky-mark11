const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");


function calculateSum(bdate){
    bdate = bdate.replaceAll("-","");
    let sum=0;
    for(i=0; i<bdate.length; i++){
        sum = sum + Number(bdate.charAt(i)); //typecasting
    }
    return sum;
 }


function checkBirthDateLucky(){
    const bdate = dateOfBirth.value;
    const sum = calculateSum(bdate);
    if (sum && bdate){                     // to validate if both fields are entered 
        compareValues(sum,luckyNumber.value);
    }else {
        outputBox.innerText = "Please enter both the fields";
    }
}

function compareValues(sum, luckyNumber){
    if(luckyNumber <= 0){
        outputBox.innerText = "Please enter positive values"
    }
    else if(sum % (luckyNumber) === 0){                            // do not use .value here as we have already used in line 19 while calling the fucntion
        outputBox.innerText = "Your birth date is lucky!!!" ;
    } else{
        outputBox.innerText = "Your birth date is not lucky";
    }
}


checkNumberButton.addEventListener('click',  checkBirthDateLucky)
