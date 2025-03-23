function checkIfPalindrome() {
    let textInput = document.getElementById("textInput").value.toLowerCase().replace(/[^a-z0-9]/g, '');
    let textInputReversed = reverseString(textInput);
    
    if (textInput === textInputReversed) {
        document.getElementById("result").textContent = "✅ It's a palindrome!";
    } else {
        document.getElementById("result").textContent = "❌ Not a palindrome.";
    }
}

function reverseString(string){
    let stringChars = string.split('');
    let reversedString = '';
    while (stringChars.length > 0){
        reversedString += stringChars.pop()
    }
    return reversedString;
}
