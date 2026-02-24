function generateReport() {
    // 1. Get DOM Elements
    const nameInput = document.getElementById("username");
    const emailInput = document.getElementById("useremail");
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const reportContainer = document.getElementById("report-container");

    // 2. Extract Values
    const userName = nameInput.value.trim();
    const userEmail = emailInput.value.trim();
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    // 3. Validation UI
    if (!userName || !userEmail || isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please fill out all fields with valid information to generate your report.");
        return;
    }

    // 4. BMI Logic
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters ** 2)).toFixed(1); // One decimal point is cleaner

    // Determine Category and UI Colors
    let category = "";
    let colorCode = "";

    if (bmi < 18.5) {
        category = "Underweight";
        colorCode = "#3b82f6"; // Blue
    } else if (bmi < 24.9) {
        category = "Healthy Weight";
        colorCode = "#10b981"; // Emerald Green
    } else if (bmi < 29.9) {
        category = "Overweight";
        colorCode = "#f59e0b"; // Amber
    } else {
        category = "Obese";
        colorCode = "#ef4444"; // Red
    }

    // 5. Inject Modern UI Report
    reportContainer.innerHTML = `
        <div class="report-card">
            <div class="report-header">
                <h3 style="color: var(--text-main); font-size: 18px;">Analysis for ${userName}</h3>
                <p style="color: var(--text-muted); font-size: 14px;">Report sent to: ${userEmail}</p>
            </div>
            
            <p style="font-weight: 500; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">Your Body Mass Index</p>
            <div class="bmi-score" style="color: ${colorCode};">${bmi}</div>
            
            <div style="display: inline-block; padding: 6px 12px; border-radius: 20px; font-weight: 600; font-size: 14px; background-color: ${colorCode}15; color: ${colorCode};">
                ${category}
            </div>

            <h4 style="margin-top: 32px; font-size: 16px; color: var(--text-main);">Recommendations</h4>
            <ul class="tips-list">
                <li>Maintain a balanced diet rich in whole foods.</li>
                <li>Aim for at least 150 minutes of moderate activity weekly.</li>
                <li>Stay hydrated—drink at least 2 liters of water daily.</li>
                <li>Consult a healthcare provider for personalized advice.</li>
            </ul>
        </div>
    `;
}

// Clear inputs on load
window.onload = function () {
    document.getElementById("username").value = "";
    document.getElementById("useremail").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
};
