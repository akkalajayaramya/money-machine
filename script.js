// -----------------------------
// Interest Calculator
// -----------------------------

function calculateInterest() {

    let amount = Number(document.getElementById("amount").value);
    let rate = Number(document.getElementById("rate").value);
    let months = Number(document.getElementById("months").value);
    let days = Number(document.getElementById("days").value);

    if (
        amount <= 0 ||
        rate <= 0 ||
        (months < 0 && days < 0)
    ) {
        alert("Please enter valid values.");
        return;
    }

    // Convert days into month fraction
    let totalMonths = months + (days / 30);

    // Simple Interest
    let interest = (amount * rate * totalMonths) / 100;

    let total = amount + interest;

    document.getElementById("interest").innerHTML =
        interest.toFixed(2);

    document.getElementById("total").innerHTML =
        total.toFixed(2);

}



// -----------------------------
// Interest Percentage Finder
// -----------------------------

function findInterest() {

    let principal =
        Number(document.getElementById("principal").value);

    let interestAmount =
        Number(document.getElementById("interestAmount").value);

    let months =
        Number(document.getElementById("findMonths").value);

    let days =
        Number(document.getElementById("findDays").value);

    if (
        principal <= 0 ||
        interestAmount <= 0 ||
        (months < 0 && days < 0)
    ) {

        alert("Please enter valid values.");

        return;

    }

    let totalMonths = months + (days / 30);

    let percentage =
        (interestAmount / principal / totalMonths) * 100;

    document.getElementById("percentage").innerHTML =
        percentage.toFixed(2);

}



// -----------------------------
// Reset Interest Calculator
// -----------------------------

function resetCalculator() {

    document.getElementById("amount").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("months").value = "";
    document.getElementById("days").value = "";

    document.getElementById("interest").innerHTML = "0";
    document.getElementById("total").innerHTML = "0";

}



// -----------------------------
// Reset Percentage Finder
// -----------------------------

function resetFinder() {

    document.getElementById("principal").value = "";
    document.getElementById("interestAmount").value = "";
    document.getElementById("findMonths").value = "";
    document.getElementById("findDays").value = "";

    document.getElementById("percentage").innerHTML = "0";

}