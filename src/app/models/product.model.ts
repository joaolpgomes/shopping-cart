export class Product {
  private _code: string;
  private _name: string;
  private _price: number;
  private _image: string;

  constructor(code: string, name: string, price: number, image: string) {
    this._code = code;
    this._name = name;
    this._price = price;
    this._image = image;
  }

  /*
  * @description
  * Returns code of the product
  */
  get code() {
    return this._code;
  }

   /*
  * @description
  * Returns price of the product
  */
  get price() {
    return this._price;
  }

  /*
  * @description
  * Returns name of the product
  */
  get name() {
    return this._name;
  }

   /*
  * @description
  * Returns image of the product
  */
  get image() {
    return this._image;
  }
}
