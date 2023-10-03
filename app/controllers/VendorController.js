import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";





function _drawSnacks() {
    const snacks = AppState.snacks
    console.log('here are the snacks', snacks);
    let content = ''
    snacks.forEach(snack => content += snack.SnackCards)
    setHTML('snack cards', content)
}




export class VendorController {
    constructor() {
        console.log('vendor controller works');
        _drawSnacks()
    }
}