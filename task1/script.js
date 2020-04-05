let money = prompt('Ваш бюджет за месяц?', '');
let time = prompt('Введите даиу в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {

  },
  optionalExpenses: {

  },
  income: [],
  savings: false,
};
let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце');
let secondQuestion = prompt('Во сколько обойдется?', '');
appData.expenses[firstQuestion] = secondQuestion;

alert(appData.budget / 30);
