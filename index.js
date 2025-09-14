document.getElementById('check-btn').onclick = function () {
    const inputValue = document.getElementById('text-input').value.trim();
    const resultElement = document.getElementById('result');
    resultElement.style.fontSize = "30px";

    if (!inputValue) {
        alert("Please input a value");
        return;
    }

    // Clean the input by removing all non-alphanumeric characters and converting to lowercase
    const cleanedInput = inputValue.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the cleaned input
    const reversedInput = cleanedInput.split('').reverse().join('');

    // Check if the cleaned input is a palindrome
    if (cleanedInput === reversedInput) {
        resultElement.innerText = `${inputValue} is a palindrome`;
    } else {
        resultElement.innerText = `${inputValue} is not a palindrome`;
    }
};
