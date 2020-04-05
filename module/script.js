let money = +prompt('Ваш бюджет за месяц?', '');
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

for (let i = 0; i < 2; i++) {
  let expenseItem, cost;
  while (true) {
    expenseItem = prompt('Ввеgitдите обязательную статью расходов в этом месяце');
    if (!expenseItem || expenseItem > 50) {
      alert('Введите корректное название строки расходов!');
    } else {
      break;
    }
  }

  while (true) {
    cost = prompt('Во сколько обойдется?', '');
    if (!cost || cost === '0' || !+cost) {
      alert('Введите корректное значение затрат!');
    } else {
      break;
    }
  }

  appData.expenses[expenseItem] = cost;
}
/* let i = 0; */
/* while (i < 2) {

  let expenseItem, cost;
  while (true) {
    expenseItem = prompt('Введите обязательную статью расходов в этом месяце');
    if (!expenseItem || expenseItem > 50) {
      alert('Введите корректное название строки расходов!');
    } else {
      break;
    }
  }

  while (true) {
    cost = prompt('Во сколько обойдется?', '');
    if (!cost || cost === '0' || !+cost) {
      alert('Введите корректное значение затрат!');
    } else {
      break;
    }
  }

  appData.expenses[expenseItem] = cost;

  i++;

} */

/* do  {
  let expenseItem, cost;
  while (true) {
    expenseItem = prompt('Введите обязательную статью расходов в этом месяце');
    if (!expenseItem || expenseItem > 50) {
      alert('Введите корректное название строки расходов!');
    } else {
      break;
    }
  }

  while (true) {
    cost = prompt('Во сколько обойдется?', '');
    if (!cost || cost === '0' || !+cost) {
      alert('Введите корректное значение затрат!');
    } else {
      break;
    }
  }

  appData.expenses[expenseItem] = cost;

} while( i++ < 2); */

appData.moneyPerDay = appData.budget / 30;
console.log(appData);
