let validatedPromptNumber = validatedPrompt('number');
let validatedPromptString = validatedPrompt('string');



let money = validatedPromptNumber('Введите бюджет на месяц');
let time = validatedPromptNumber('Введите дату в формате YYYY-MM-DD');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

appDataInternalObjSetNTimes(2, 'expenses', 'Введите обязательную статью расходов в этом месяце');
appDataInternalObjSetNTimes(3, 'optionalExpenses', 'Статья необязательных расходов?');
alert(detectDayBudget());

function appDataInternalObjSetNTimes(n, nameOfInternalObj, question) {
  for (let i = 0; i < n; i++) {
    let expenseItem = validatedPromptString(question);
    let cost = validatedPromptNumber('Во сколько обойдется?');
    appData[nameOfInternalObj][expenseItem] = cost;
  }
}

//return function which calls prompt(question, '') in accordance with expected type of value 
function validatedPrompt(expectedType) {
  if (expectedType === 'number') {
    return function (question) {
      let validatedValue = +prompt(question, '');
      while (!validatedValue) {
        alert('Введите корректное значение')
        validatedValue = +prompt(question, '');
      }
      return validatedValue;
    };
  }

  if (expectedType === 'string') {
    return function (question) {
      let validatedValue = prompt(question, '');
      while (!validatedValue || !isNaN(+validatedValue)) {
        alert('Введите корректное значение')
        validatedValue = prompt(question, '');
      }
      return validatedValue;
    };
  }
}

function  detectDayBudget() {
  let n = validatedPromptNumber('Введите количество дней в этом месяце');
  return parseInt(appData.budget / n);
}


