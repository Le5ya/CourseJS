
'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
start = function(){
money = +prompt('Ваш месячный доход?');

while (!isNumber(money)) {
  money = +prompt('Ваш месячный доход?');
   }
};

start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 50000,
  period:3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  monthTarget:0,
  asking: function(){

     if(confirm('Усть ли дополнительный источник заработка?')){
      let itemIncome = prompt('Какой у вас дополнительный заработок','Такси');
      let cashIncome = prompt('Сколько в месяц на этом зарабатываете?', 10000);
      appData.income[itemIncome] = cashIncome;
     }

   let addExpenses = 
       prompt('Перечислите возможные расходы через запятую');
       appData.addExpenses = addExpenses.toLowerCase().split(',');
       appData.deposit = confirm('Есть ли у вас депозит в банке?');
       
   let sum = 0,
       question,
       a_title;
     for (let i=0; i<2; i++){
        a_title = prompt('Введите обязательную статью расходов', 'foods');
        question = prompt('Во сколько это обойдётся?', 2500);
        appData.expenses[a_title] = question;
        while (isNaN(question) || question === '' || question === null || typeof a_title !== 'string' ){
              sum += +question;
          }
       }
     return sum;

  },
  getExpensesMonth: function () {
    for(let key in appData.expenses) {
      appData.expensesMonth  += +appData.expenses[key];
         }
      return appData.expensesMonth; 
 },
  getBudget: function(){
     appData.budgetMonth = appData.budget - appData.expensesMonth;
     appData.budgetDay = appData.budgetMonth / 30;
     return appData.budgetMonth
 },
  getTargetMonth: function(){
    return appData.mission / appData.budgetMonth;
    // let accum = appData.getBudget();
    // appData.monthTarget = Math.ceil(appData.mission /accum);
    //  return appData.monthTarget;
 },
  getStatusIncome: function () {
  
 if (appData.budgetDay > 1200) {
  return ("У вас высокий уровень дохода");
} else if (appData.budgetDay > 600 && appData.budgetDay <= 1200) {
   return ("У вас средний уровень дохода");
 } else if (appData.budgetDay >= 0 && appData.budgetDay < 600) {
   return ("К сожалению у вас уровень дохода ниже среднего");
 } else if (appData.budgetDay < 0) {
    return ("Что то пошло не так");
      }
  },

  getInfoDeposit: function(){
    if(appData.deposit){
      appData.percentDeposit = prompt('Какой годовой процент?','10');
      appData.moneyDeposit = prompt = prompt('Какая сумма заложена?', 10000);
    }
  },
  calcSaveMoney: function(){
    return appData.budgetMonth * appData.period;
  }

};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

 console.log('Расходы за месяц '+ appData.expensesMonth);
appData.getTargetMonth(); 

console.log(appData.expensesMonth);



    if (appData.getTargetMonth() >= 0){
     console.log('Цель будет достигнута через ' + Math.ceil (appData.getTargetMonth()) + ' месяцев'); 
    }else {
      console.log('Цель не будет достигнута');
    } 

console.log(appData.getStatusIncome());

for(let key in appData){
console.log('Наша программа включает в себя данные: ' + appData[key]);  
}


