const chooseCountry = prompt("Выберите страну для доставки");
let cost;
let message;
const chooseCountryUpperCase = chooseCountry.toLocaleUpperCase();

switch (chooseCountryUpperCase) {
  case "КИТАЙ": {
    cost = 100;
    message = `'Доставка в ${chooseCountry} будет стоить ${cost} кредитов'`;
    break;
  }

  case "ЧИЛИ": {
    cost = 250;
    message = `'Доставка в ${chooseCountry} будет стоить ${cost} кредитов'`;
    break;
  }

  case "АВСТРАЛИЯ": {
    cost = 170;
    message = `'Доставка в ${chooseCountry} будет стоить ${cost} кредитов'`;
    break;
  }

  case "ИНДИЯ": {
    cost = 80;
    message = `'Доставка в ${chooseCountry} будет стоить ${cost} кредитов'`;
    break;
  }

  case "ЯМАЙКА": {
    cost = 120;
    message = `'Доставка в ${chooseCountry} будет стоить ${cost} кредитов'`;
    break;
  }

  default:
    alert("В вашей стране доставка не доступна");
}
