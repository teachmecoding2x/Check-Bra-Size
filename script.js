document.getElementById("bra-size-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    let underbust = parseFloat(document.getElementById("underbust").value);
    let overbust = parseFloat(document.getElementById("overbust").value);
    let activity = document.getElementById("activity").value;

    if (!underbust || !overbust) {
        alert("Please enter valid measurements.");
        return;
    }

    // Calculate band size
    let bandSize = Math.round(underbust);

    // Calculate cup size
    let difference = overbust - underbust;
    let cupSize;

    if (difference < 1) {
        cupSize = "A";
    } else if (difference < 2) {
        cupSize = "B";
    } else if (difference < 3) {
        cupSize = "C";
    } else if (difference < 4) {
        cupSize = "D";
    } else {
        cupSize = "D+";
    }

    // Adjust size based on activity type
    let finalSize = bandSize + cupSize;

    // Display result
    let resultText = `Suggested Bra Size: ${finalSize}`;

    if (activity === "sport") {
        resultText += " (For active use, try sport bras for better support).";
    } else if (activity === "sleepwear") {
        resultText += " (Consider comfortable sleep bras or bralettes).";
    }

    document.getElementById("bra-size").textContent = resultText;
});
