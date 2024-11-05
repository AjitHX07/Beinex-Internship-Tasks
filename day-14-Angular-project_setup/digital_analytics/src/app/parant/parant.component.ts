import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parant',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parant.component.html',
  styleUrl: './parant.component.scss'
})
export class ParantComponent {

  color_2: string = "green"

  img_1: string = "./header/logo.png"

  change_value() {
    console.log("demo");

  }

}
