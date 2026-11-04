
// ======================================
// SPENDWISE - WEEK 6
// Interactive Budget Application
// ======================================

// 1. Starting balance
const startingBalance = 28000;

// 2. Array to store expenses
let expenses = [];

// 3. Get HTML elements
const expenseForm = document.getElementById("expenseForm");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");

const startingBalanceDisplay = document.getElementById("startingBalance");
const totalExpensesDisplay = document.getElementById("totalExpenses");
const availableBalanceDisplay = document.getElementById("availableBalance");

const budgetMessage = document.getElementById("budgetMessage");
const expensesContainer = document.getElementById("expenses");

// 4. Format money
function formatMoney(amount) {
    return "KSh " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// 5. Calculate total expenses using a loop
function calculateTotal() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// 6. Update dashboard
function updateDashboard() {

    const total = calculateTotal();
    const balance = startingBalance - total;

    startingBalanceDisplay.textContent =
        formatMoney(startingBalance);

    totalExpensesDisplay.textContent =
        formatMoney(total);

    availableBalanceDisplay.textContent =
        formatMoney(balance);

    // Conditional statements
    if (balance < 0) {

        budgetMessage.textContent =
            "Warning! You have exceeded your budget.";

        budgetMessage.style.color = "red";

    } else if (total >= startingBalance * 0.75) {

        budgetMessage.textContent =
            "Caution! You have used 75% or more of your budget.";

        budgetMessage.style.color = "orange";

    } else {

        budgetMessage.textContent =
            "Good job! Your budget is healthy.";

        budgetMessage.style.color = "green";
    }

    // Refresh expense history
    displayExpenses();
}

// 7. Display expenses on the webpage
function displayExpenses() {

    expensesContainer.innerHTML = "";

    if (expenses.length === 0) {

        const message = document.createElement("p");
        message.textContent = "No expenses recorded yet.";

        expensesContainer.appendChild(message);

        return;
    }

    // Loop through all expenses
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        const expenseItem = document.createElement("div");
        expenseItem.className = "expense-item";

        const details = document.createElement("span");

        details.textContent =
            expense.description + " - " +
            formatMoney(expense.amount);

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        // Delete button event
        deleteButton.addEventListener("click", function () {

            deleteExpense(expense.id);

        });

        expenseItem.appendChild(details);
        expenseItem.appendChild(deleteButton);

        expensesContainer.appendChild(expenseItem);
    }
}

// 8. Add expense through form submission
expenseForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = Number(amountInput.value);

    // Check description
    if (description === "") {

        alert("Please enter an expense description.");

        return;
    }

    // Check amount
    if (!Number.isFinite(amount) || amount <= 0) {

        alert("Please enter a valid amount greater than zero.");

        return;
    }

    // Create expense object
    const newExpense = {

        id: Date.now(),

        description: description,

        amount: amount

    };

    // Add expense to array
    expenses.push(newExpense);

    // Clear form
    expenseForm.reset();

    // Update dashboard
    updateDashboard();

    alert("Expense added successfully!");
});

// 9. Delete expense
function deleteExpense(id) {

    expenses = expenses.filter(function (expense) {

        return expense.id !== id;

    });

    // Update dashboard after deletion
    updateDashboard();
}

// 10. Display initial dashboard
function initializeApp() {

    updateDashboard();

}

// Start application
initializeApp();
