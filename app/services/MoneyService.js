import { AppState } from "../AppState.js";




class MoneyService {
    addMoney() {
        AppState.money += 0.25
        console.log('Money Amount', AppState.money);
    }
}

export const moneyService = new MoneyService()