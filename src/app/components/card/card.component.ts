import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone:true,
  imports:[MatCardModule,TableComponent]
})
export class CardComponent {

}
