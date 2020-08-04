// global variable declaration

let randomNumberTextBox = document.getElementById('txtRandomNumber');
let inputedValue = document.getElementById('txtInputField');
let submitButton = document.getElementById('btnSubmit');
let matchNotification = document.getElementById('matchNotification');
let notMatchNotification = document.getElementById('notMatchNotification');
let tryLeft = document.getElementById('numOfTry');
let totalTry = 3;

// Random Pin Generator

function generatePin(){   
    let randomNumber = Math.floor(1000 + Math.random()*9000);
    randomNumberTextBox.value = randomNumber;
}

// Append user input

function appendNumber(num){
    inputedValue.value += num;
}

// Varify User Input
submitButton.addEventListener('click', function(){
    let randomNumber = randomNumberTextBox.value;
    let inputNumber = inputedValue.value;

    // Check Invalid Input
    if(inputNumber.length != 4 || isNaN(inputNumber) || inputNumber < 0){
        alert("Please Enter Four Digit Positive Number Pin");
    }
  
    else{

        // Check Match Input
        if( randomNumber == inputNumber){
                          
            matchNotification.style.display = 'block';
            matchNotification.style.backgroundColor ='green'
            matchNotification.style.color ='#fff'
            notMatchNotification.style.display = 'none';
            inputedValue.value = '';
            randomNumberTextBox.value = '';
        }
        // For Not Match Input
        else{
            notMatchNotification.style.display = 'block';
            notMatchNotification.style.backgroundColor ='red'
            notMatchNotification.style.color ='#fff'
            matchNotification.style.display = 'none';
            inputedValue.value = '';              

            totalTry--;
            tryLeft.innerText = totalTry;

            if (totalTry == 0) {
                submitButton.disabled = true;
                submitButton.style.backgroundColor = '#4f6146';
            }
        }
    }

})

// Clear all digit
function clearAllValue(){
    inputedValue.value = '';
}

// Clear single digit
function clearSingleValue(){
    let userInput = inputedValue;
    let backspaceValue = userInput.value;
    if(backspaceValue >= 0){
        backspaceValue = backspaceValue.substr(0, backspaceValue.length-1);
        userInput.value = backspaceValue;
    }
}