let decorators = {
  //return function which calls prompt(question, '') in accordance with expected type of value 
  validatePrompt(expectedType) {
    if (expectedType === 'number') {
      return function (question, defaultQestion = '') {
        let validatedValue = +prompt(question, defaultQestion);
        while (!validatedValue) {
          alert('Введите корректное значение');
          validatedValue = +prompt(question, defaultQestion);
        }
        return validatedValue;
      };
    }
    if (expectedType === 'string') {
      return function (question, defaultQestion = '') {
        let validatedValue = prompt(question, defaultQestion);
        while (!validatedValue || !isNaN(+validatedValue)) {
          alert('Введите корректное значение');
          validatedValue = prompt(question, defaultQestion);
        }
        return validatedValue;
      };
    }
  }
};

let validatedPromptNumber = decorators.validatePrompt('number');
let validatedPromptString = decorators.validatePrompt('string');

let appData = {
  budget: validatedPromptNumber('Введите бюджет на месяц'),
  timeData: validatedPromptNumber('Введите дату в формате YYYY-MM-DD'),
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
  chooseExpenses() {
    for (let i = 0; i < 2; i++) {
      let fieldName = validatedPromptString('Введите обязательную статью расходов в этом месяце'),
        fieldValue = validatedPromptNumber('Во сколько это обойдется?');
      this.expenses[fieldName] = fieldValue;
    }
  },
  chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
      this.optionalExpense[i + 1] = validatedPromptString('Введите необязательную статью расходов');
    }
  },
  detectDayBudget(daysCount) {
    return this.moneyPerDay = parseInt(this.budget / daysCount);
  },
  detectedLevel() {
    if (this.moneyPerDay < 100) {
      console.log('U r bomjick =)');
    }
    if (this.moneyPerDay > 100 && this.moneyPerDay < 2000) {
      console.log('Congratulate! U can buy a few doshiraks');
    }
    if (this.moneyPerDay > 2000) {
      console.log('Wow! R u Jeff Bezos?');
    }
    console.log('Возникла ошибка');
  },
  checkSaving() {
    if (savings) {
      let save = validatedPromptNumber('Какова сумма накоплений?'),
        percent = validatedPromptNumber('Под какой процент?');
      return this.monthIncome = save / 100 / 12 * percent;
    }
  },
  chooseIncome() {
    let incomesValues = validatedPromptString('Перечислите дополнительные доходы? (перечислите через запятую)');
    this.income = incomesValues.split(', ').sort();
    console.log('Способы доп. заработка: ');
    this.income.forEach((element, index) => {
      console.log((index + 1) + ': ' + element);
    });
  }
};
console.log("Наша программа включает в себя данные: ");
for (const key in appData) {
  console.log(key);
}