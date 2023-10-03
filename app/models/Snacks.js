




export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }
  get SnackCards() {
    return `
          <div class="col-5 m-5">
            <div class="box text-center">
              <p class="fs-3">${this.name}</p>
              <img class="img-fluid"
                src="${this.imgUrl}"
                alt="${this.name}">
              <div>
                <p class="fs-4">$${this.price}</p>
                <button class="btn btn-success" type="button">Buy</button>
              </div>
            </div>
          </div>
        `
  }
}


