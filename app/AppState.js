import { Snack } from "./models/Snacks.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }
  snacks = [
    new Snack({ name: 'chips', price: 3.50, imgUrl: 'https://media.istockphoto.com/id/175012912/photo/crisps.webp?b=1&s=170667a&w=0&k=20&c=aBLO96Vk6fAPR0ERWB_Y3EyWwSax-nlIhdrymtYPo58=' }),
    new Snack({ name: 'oreo', price: 2.50, imgUrl: 'https://media.istockphoto.com/id/687935710/photo/sandwich-cocoa-cookie-with-crema-inside.webp?b=1&s=170667a&w=0&k=20&c=26TEqgKjIwm2aTwEu4x8FwOSgStbc347vP17g9z87CA=' }),
    new Snack({ name: 'candy bar', price: 1.00, imgUrl: 'https://media.istockphoto.com/id/157580943/photo/candy-in-colorful-foil.webp?b=1&s=170667a&w=0&k=20&c=r_ZIUFRVOwRW0EWurHRVwO81Q3Lw1RJ3Zq-3I4rFRhA=' }),
    new Snack({ name: 'fries', price: 5.00, imgUrl: 'https://media.istockphoto.com/id/1459331535/photo/french-fries-isolated-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=9VWz4pAGIBunxrScg8LSQJyDcp47dU5RAew1VzzS9NU=' }),
    new Snack({ name: 'nos', price: 1.00, imgUrl: 'https://media.istockphoto.com/id/1292022133/photo/energy-drink-5-black-background-front-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=bmxJy7kyEKHOPWQAJkMKw-x6JJhHBfLVKN8mb9_bFEU=' }),
    new Snack({ name: 'pizza', price: 5.00, imgUrl: 'https://media.istockphoto.com/id/1413684626/photo/classic-pepperoni-pizza-with-cut-slices-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=CsgGcV2GQsmBC3DqHg2ySv3JxkzXPkzce5WLRXG5v4k=' }),

  ]

  money = 0
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
