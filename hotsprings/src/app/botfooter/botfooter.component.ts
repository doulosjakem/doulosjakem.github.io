import { Component } from '@angular/core';


const date = new Date().getFullYear();
@Component({
  selector: 'app-botfooter',
  templateUrl: './botfooter.component.html',
  styleUrls: ['./botfooter.component.css']
})
export class BotfooterComponent {
  year = date;
}
