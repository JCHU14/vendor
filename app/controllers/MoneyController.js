import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";



function _drawMoney() {
    let totalMoney = AppState.money
    setText('totalMoney', totalMoney)


}

export class MoneyController {
    constructor() {
        console.log('Money Controller works');
        AppState.on('money', _drawMoney)
    }
    addMoney() {
        console.log('you clicked button')
        moneyService.addMoney()
    }

}