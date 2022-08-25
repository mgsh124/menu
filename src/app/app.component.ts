import { Component } from '@angular/core';
import { Category } from './enums/category';
import { MenuItem } from './interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';

  menuItem: MenuItem[] = [
    {item: 'Chicken Fingers', category: Category[Category.Dinner], price: 11.99},
    {item: 'Pizza', category: Category[Category.Dinner], price: 11.99},
    {item: 'Wings', category: Category[Category.Sides], price: 8.99},
    {item: 'Breadsticks', category: Category[Category.Sides], price: 4.99},
    {item: 'Ceasar Salad', category: Category[Category.Salads], price: 5.99},
    {item: 'Cinnamon Rolls', category: Category[Category.Dessert], price: 8.99}
  ];
}
