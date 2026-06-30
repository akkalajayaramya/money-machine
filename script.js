// ===============================
// Interest Calculator
// ===============================

function calculateInterest() {

    let amount = Number(document.getElementById("amount").value);
    let rate = Number(document.getElementById("rate").value);

    let startDate = new Date(document.getElementById("startDate").value);
    let endDate = new Date(document.getElementById("endDate").value);

    if (
        amount <= 0 ||
        rate <= 0 ||
        isNaN(startDate) ||
        isNaN(endDate)
    ) {
        alert("Please fill all fields correctly.");
        return;
    }

    if (endDate <= startDate) {
        alert("End Date should be greater than Start Date.");
        return;
    }

    // Difference in Days

    let difference = endDate - startDate;

    let totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));

    // Convert Days into Months

    let totalMonths = totalDays / 30;

    // Simple Interest

    let interest =
        (amount * rate * totalMonths) / 100;

    let totalAmount =
        amount + interest;

    document.getElementById("days").innerHTML =
        totalDays;

    document.getElementById("interest").innerHTML =
        interest.toFixed(2);

    document.getElementById("total").innerHTML =
        totalAmount.toFixed(2);

}



// ===============================
// Interest Rate Finder
// ===============================

function findRate() {

    let principal =
        Number(document.getElementById("principal").value);

    let interest =
        Number(document.getElementById("interestAmount").value);

    let startDate =
        new Date(document.getElementById("startDate2").value);

    let endDate =
        new Date(document.getElementById("endDate2").value);

    if (
        principal <= 0 ||
        interest <= 0 ||
        isNaN(startDate) ||
        isNaN(endDate)
    ) {

        alert("Please fill all fields correctly.");

        return;

    }

    if (endDate <= startDate) {

        alert("End Date should be greater than Start Date.");

        return;

    }

    let difference =
        endDate - startDate;

    let totalDays =
        Math.floor(difference / (1000 * 60 * 60 * 24));

    let totalMonths =
        totalDays / 30;

    let rate =
        (interest / principal / totalMonths) * 100;

    document.getElementById("days2").innerHTML =
        totalDays;

    document.getElementById("percentage").innerHTML =
        rate.toFixed(2);

}



// ===============================
// Reset Calculator
// ===============================

function resetCalculator() {

    document.getElementById("amount").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";

    document.getElementById("days").innerHTML = "0";
    document.getElementById("interest").innerHTML = "0";
    document.getElementById("total").innerHTML = "0";

}



// ===============================
// Reset Finder
// ===============================

function resetFinder() {

    document.getElementById("principal").value = "";
    document.getElementById("interestAmount").value = "";
    document.getElementById("startDate2").value = "";
    document.getElementById("endDate2").value = "";

    document.getElementById("days2").innerHTML = "0";
    document.getElementById("percentage").innerHTML = "0";

}