const credits = 23580;
const pricePerDroid = 3000;
let pageUses = prompt ('Какое количество дроидов вы бы хотели купить?')
if (pageUses === null || isNaN(pageUses)) {
console.log('Отменено пользователем!')
} else {
const totalPrice = pageUses*pricePerDroid;
if (totalPrice>credits) {
    console.log('Недостаточно средств на счету!')
} else {
    console.log(`Вы купили ${pageUses} дроидов, на счету осталось ${credits-totalPrice} кредитов.`)
}
}