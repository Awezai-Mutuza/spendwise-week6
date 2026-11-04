
# SpendWise - Interactive Budget Application

## Project Overview

SpendWise is a simple budgeting application that helps users
manage their money, record expenses, and monitor their available
balance.

This project was improved during Week 6 using JavaScript
to make the application interactive.

## Starting Balance

The application starts with a balance of KSh 28,000.

## Improvements Made This Week

- Added the ability to record new expenses.
- Added automatic calculation of total expenses.
- Added automatic balance updates.
- Added the ability to delete expenses.
- Added budget warnings.
- Improved dashboard interaction.
- Added expense history.

## 1. Conditional Statements

Conditional statements are used to make decisions based on
the user's spending.

For example:

- If the balance is below zero, the application displays
  an overspending warning.
- If expenses reach 75% of the starting balance, it displays
  a caution message.
- Otherwise, it displays a healthy budget message.

## 2. Arrays

An array called `expenses` stores multiple expense records.

Each expense contains:

- An ID
- An expense description
- An expense amount

The `push()` method adds new expenses, while the `filter()`
method removes deleted expenses.

## 3. Loops

A `for` loop processes all expense records to calculate
the total amount spent.

Another `for` loop displays all recorded expenses on the
dashboard.

## 4. DOM Manipulation

DOM manipulation is used to update the webpage dynamically.

JavaScript updates:

- Starting balance
- Total expenses
- Available balance
- Budget status
- Expense history

The application uses methods such as:

- `textContent`
- `createElement()`
- `appendChild()`

## 5. Event Listeners

Event listeners allow users to interact with the application.

The `submit` event adds a new expense when the user submits
the form.

The `click` event allows users to delete an expense.

The `preventDefault()` method prevents the form from
reloading the webpage.

## 6. Challenges and Solutions

### Challenge 1: Updating the balance automatically

Solution: Created a function to calculate total expenses
and update the available balance.

### Challenge 2: Managing multiple expenses

Solution: Used an array to store expense records.

### Challenge 3: Displaying expenses on the webpage

Solution: Used DOM manipulation to create and display
expense elements dynamically.

### Challenge 4: Preventing invalid expense entries

Solution: Used conditional statements to validate expense
descriptions and amounts.

## Technologies Used

- HTML
- CSS
- JavaScript
- GitHub

## Conclusion

SpendWise demonstrates how JavaScript can make a budgeting
application interactive through conditional statements,
arrays, loops, DOM manipulation, and event listeners.
