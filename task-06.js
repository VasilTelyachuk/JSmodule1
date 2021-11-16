// let input;
let total = 0;
while (true) {
    let input = promt('Введите число');
    
    if (input === null) {
        alert('Отменено пользоватилем');
    }

    input = Number(input);

    total += input ;

}
alert(`Общая сумма ${total}`);