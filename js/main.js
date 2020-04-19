function validatedPromptNumber(question, defaultQestion = '') {
    let validatedValue = +prompt(question, defaultQestion);
    while (!validatedValue) {
        alert('Введите корректное значение');
        validatedValue = +prompt(question, defaultQestion);
    }
    return parseInt(validatedValue, 10);
};

function validatedPromptString(question, defaultQestion = '') {
    let validatedValue = prompt(question, defaultQestion);
    while (!validatedValue || !isNaN(+validatedValue)) {
        alert('Введите корректное значение');
        validatedValue = prompt(question, defaultQestion);
    }
    return validatedValue;
};

function daysInMonth(date) {
    let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate()),
        date2 = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
    return Math.round((date2 - date1) / 1000 / 3600 / 24);
}

let btnStart = document.querySelector('#start'),

    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),

    expensesItem = document.getElementsByClassName('expenses-item'),

    approveExpenses = document.querySelector('.expenses-item-btn'),
    approveOptionalExpenses = document.querySelector('.optionalexpenses-btn'),
    calculateDailyBudget = document.querySelector('.count-budget-btn'),

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    persent = document.querySelector('#percent'),

    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    appData = {
        expenses: {},
        optionalExpenses: [],
        savings: false,
    };


btnStart.addEventListener('click', () => {
    appData.time = new Date();
    appData.budget = validatedPromptNumber('Введите бюджет на месяц в рублях');
    budgetValue.textContent = appData.budget.toLocaleString() + ' руб';
    yearValue.value = appData.time.getFullYear();
    monthValue.value = appData.time.getMonth() + 1;
    dayValue.value = appData.time.getDate();

    approveExpenses.addEventListener('click', () => {
        let sumOfExpenses = 0;
        for (let i = 0; i < expensesItem.length; i++) {
            let fieldName = expensesItem[i].value,
                fieldValue = +expensesItem[++i].value;
            if (!fieldName || !isNaN(+fieldName) || !fieldValue) {
                alert('Введите корректные значения полей');
                return;
            }
            appData.expenses[fieldName] = fieldValue;
            sumOfExpenses += fieldValue;
        }
        expensesValue.textContent = sumOfExpenses;
    })

    approveOptionalExpenses.addEventListener('click', () => {
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            appData.optionalExpenses[i] = optionalExpensesItem[i].value;
        }
        optionalexpensesValue.textContent = appData.optionalExpenses.reduce((result, entry) => result += entry + ' ', '');
    })

    calculateDailyBudget.addEventListener('click', () => {
        if (!appData.budget || !appData.time) {
            daybudgetValue.textContent = 'Для расчета необходимо указать доход и дату';
        } else {
            let moneyPerDay = parseInt(appData.budget / daysInMonth(appData.time));
            daybudgetValue.textContent = moneyPerDay;
            if (moneyPerDay < 100) {
                levelValue.textContent = 'U r bomjick =)';
            } else if (moneyPerDay > 100 && moneyPerDay < 2000) {
                levelValue.textContent = 'Congratulate! U can buy a few doshiraks';
            } else if (moneyPerDay > 2000) {
                levelValue.textContent = 'Wow! R u Jeff Bezos?';
            } else {
                levelValue.textContent = 'Возникла ошибка';
            }
        }
    })

    chooseIncome.addEventListener('input', function () {
        let incomes = this.value;
        appData.income = incomes.split(', ');
        incomeValue.textContent = incomes;
    });

    savings.addEventListener('click', () => {
        appData.savings = !appData.savings;
        if (appData.savings) {
            sum.removeAttribute("readonly")
            persent.removeAttribute("readonly")
        }
        if (!appData.savings) {
            monthsavingsValue.textContent = '';
            yearsavingsValue.textContent = '';
            sum.value = '';
            persent.value = '';
        }
    })
    sum.addEventListener('input', () => {
        if (appData.savings) {
            let sumRes = sum.value,
                persentRes = persent.value;
            appData.monthIncome = sumRes / 100 / 12 * persentRes;
            appData.yearIncome = sumRes / 100 * persentRes;
            if (!persentRes) {
                monthsavingsValue.textContent = 'Введите корректные размеры накоплений и процентной ставки';
            } else {
                monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
                yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
            }
        }
    })
    persent.addEventListener('input', () => {
        if (appData.savings) {
            let sumRes = sum.value,
                persentRes = persent.value;
            appData.monthIncome = sumRes / 100 / 12 * persentRes;
            appData.yearIncome = sumRes / 100 * persentRes;
            if (!sum.value) {
                monthsavingsValue.textContent = 'Введите корректные размеры накоплений и процентной ставки';
            } else {
                monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
                yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
            }
        }
    })
})
    


sum.addEventListener('focus', () => {
    if (!appData.savings) sum.setAttribute("readonly", "readonly")
})

persent.addEventListener('focus', () => {
    if (!appData.savings) persent.setAttribute("readonly", "readonly")
})