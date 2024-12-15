// Calculate BMI function
function calculateBMI() {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const resultDiv = document.getElementById("result");

    // Input validation
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.textContent = "Please enter valid values for weight and height!";
        resultDiv.style.color = "red";
        return;
    }

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters ** 2)).toFixed(2);

    // Display result with category
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
        resultDiv.style.color = "#1E88E5";
    } else if (bmi < 24.9) {
        category = "Normal weight";
        resultDiv.style.color = "#43A047";
    } else if (bmi < 29.9) {
        category = "Overweight";
        resultDiv.style.color = "#FB8C00";
    } else {
        category = "Obesity";
        resultDiv.style.color = "#E53935";
    }

    resultDiv.innerHTML = `
        <p>Your BMI is <strong>${bmi}</strong></p>
        <p>Category: <strong>${category}</strong></p>
    `;
}

// Clear inputs when page loads
window.onload = function () {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").textContent = "";
};

// Add hover effect for button
const calculateButton = document.querySelector("button");
calculateButton.addEventListener("mouseenter", () => {
    calculateButton.style.transform = "scale(1.05)";
});
calculateButton.addEventListener("mouseleave", () => {
    calculateButton.style.transform = "scale(1)";
});
