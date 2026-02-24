// Calculate BMI function
function calculateBMI() {
    // 1. Get all input elements
    const nameInput = document.getElementById("username");
    const emailInput = document.getElementById("useremail");
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const resultDiv = document.getElementById("result");

    // 2. Get values from inputs
    const userName = nameInput.value.trim();
    const userEmail = emailInput.value.trim();
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    // reset result style
    resultDiv.style.color = "#333";

    // 3. Validate Name and Email first
    if (userName === "" || userEmail === "") {
        resultDiv.innerHTML = "<p>Please enter your Name and Email to get the report.</p>";
        resultDiv.style.color = "#b71c1c"; // Use the dark red brand color
        return;
    }

    // 4. Validate numeric inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.innerHTML = "<p>Please enter valid positive numbers for weight and height!</p>";
        resultDiv.style.color = "#b71c1c";
        return;
    }

    // 5. Calculate BMI
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters ** 2)).toFixed(2);

    // Determine Category and Color
    let category = "";
    let categoryColor = "";

    if (bmi < 18.5) {
        category = "Underweight";
        categoryColor = "#1E88E5"; // Blue
    } else if (bmi < 24.9) {
        category = "Normal weight";
        categoryColor = "#43A047"; // Green
    } else if (bmi < 29.9) {
        category = "Overweight";
        categoryColor = "#FB8C00"; // Orange
    } else {
        category = "Obesity";
        categoryColor = "#E53935"; // Red
    }

    // 6. Display Personalized Report
    // We use backticks (`) for template literals to easily insert variables like ${userName}
    resultDiv.innerHTML = `
        <div style="border-top: 2px solid #eee; padding-top: 20px;">
            <h3 style="color: #b71c1c; margin-bottom: 10px;">Health Report for ${userName}</h3>
            <p style="font-size: 1.1em; margin-bottom: 5px;">Your BMI Score: <strong style="font-size: 1.4em;">${bmi}</strong></p>
            <p style="font-size: 1.1em;">Category: <strong style="color: ${categoryColor};">${category}</strong></p>
            <p style="font-size: 0.9em; color: #777; margin-top: 15px; font-style: italic;">
                A copy of this report will be sent to: ${userEmail} <br>(Note: Email sending requires backend integration).
            </p>
        </div>
    `;
}

// Clear all inputs when page loads
window.onload = function () {
    document.getElementById("username").value = "";
    document.getElementById("useremail").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").textContent = "";
};
