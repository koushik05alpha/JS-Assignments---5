function checkEvenOrOdd() {
    const number = Number(document.getElementById('numberInput').value);
    
    // Check if the number is even or odd
    if (number % 2 === 0) {
        console.log("The number is positive.");

        let output = document.getElementById('output')
        output.textContent = "Even Number"
        output.style.color = "lightgreen"

        let box = document.querySelector(".box")
        box.style.boxShadow = "0 4px 8px rgba(9, 253, 1, 0.74), 0 6px 20px rgba(59, 247, 21, 0.884)"
    } else {
        console.log("The number is negative.");

        let output = document.getElementById('output')
        output.textContent = "Odd Number"
        output.style.color = "red"

        let box = document.querySelector(".box")
        box.style.boxShadow = "0 4px 8px rgba(243, 1, 1, 0.973), 0 6px 20px rgba(255, 0, 0, 0.692)"
    }
}


function reset() {
    document.getElementById('numberInput').value = ''
    document.getElementById('output').textContent = ''

    let box = document.querySelector(".box")
    box.style.boxShadow = "0 4px 8px rgba(255, 255, 255, 0.6), 0 6px 20px rgba(255, 255, 255, 0.4)"
}
