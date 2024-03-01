
// To get the user input and check if the word is a palindrome


const input = document.getElementById('user-input');
const submitBtn = document.getElementById('btn');
const resultDisplay = document.getElementById('result');
const forms = document.getElementById('form-user');
// console.log(submitbtn);
function wrongAnswer(){
    // Add the "shake" class to the element
    document.getElementById("btn").classList.add("shake"); 
}

function resetForm() {
    setTimeout(function(){
        // Your custom actions after the form is reset
        // For example, clear additional fields or perform other tasks
    }, 50);
    return true;
}

submitBtn.addEventListener('click',(e) =>{
    // stops the default behaviour of the button element
   e.preventDefault();
    // store the user input value
    const userValue = input.value;
    // convert our strings to an array
    const stringToArray = userValue.split('');
// reversed the element of the array using the reverse() method
    const reversedArray = stringToArray.reverse();
    // converting the reversed array back to string
    const reversedstring = reversedArray.join('');
// check if the uservalue is correct
    if(userValue === reversedString){
        resultDisplay.style.Display = 'block';
        resultDisplay.textContent = 'You Won!! Congratulations!!'
        resultDisplay.style.backgroundColor = 'green'
        
    } else {
        resultDisplay.style.Display = 'block';
        resultDisplay.textContent = 'Incorrect Try Again'
        resultDisplay.style.backgroundColor = 'red' 
        // Element.classList.add('shake');
        forms.classList.add('shake')
        console.log(forms)
    }
    

    // console.log(reversedString.join(97865432e54321~`"|"    \\console.log(stringToArray)
})

const numbers = [1,2,3,4,5,6,7,8,9]
console.log(numbers);
console.log(numbers.shift(2,5))
console.log(numbers.push(1,9))

