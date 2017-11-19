import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'order-confirmed',
    template: `
      <h1>Thank you for your order!</h1>
      <a routerLink="/">Continue Shopping!</a>
    `
})
export class OrderConfirmedComponent {}
