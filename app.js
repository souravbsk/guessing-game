const inputField = document.getElementById('inputField');
const resultBtn = document.getElementById('resultBtn');
const messageResult = document.getElementById('messageResult');
const remainId = document.getElementById('remainId');
const won = document.getElementById('won');
const lost = document.getElementById('lost');



const numberGenerate = () => {
    const randomNumber = Math.random()*5;
    const roundNumber = Math.ceil(randomNumber);
    return roundNumber;
}

const textToNumberValue = (idName)=> {
    const valueText = idName.innerText;
    const valueNumber = parseInt(valueText);
    return valueNumber;
}

resultBtn.addEventListener('click',() => {
    messageResult.textContent = '';
    const inputValueText = inputField.value;
    const inputValueNumber = parseInt(inputValueText);
    if(inputValueNumber < 0 || inputValueNumber>5){
        alert('Enter a value 0-5')
        return;
    }
    if(!inputValueText){
        alert('Enter positive value');
        return
    }


    if(textToNumberValue(remainId) > 0){
        remainId.innerText = textToNumberValue(remainId)-1
    }
    else{
        return
    }

    const generateValue = numberGenerate();

    if(inputValueNumber === generateValue){
        messageResult.innerHTML = `Congress !!! your are right.. random number was: <span>${generateValue}</span>`;
        won.innerText = textToNumberValue(won)+1;
    }
    else{
        console.log('false')
        messageResult.innerHTML = `You have lost; random number was: <span>${generateValue}</span>`
        lost.innerText = textToNumberValue(lost)+1
    }
    inputField.value = '';
    

  
   
    
    
    
})