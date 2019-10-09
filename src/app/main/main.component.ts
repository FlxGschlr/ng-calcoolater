import {Component} from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  text = '...';
  inputtext = 'placeholder';
  history = ['nothing'];

  constructor(private service: ServiceService) { }

  submit() {
    this.service.sendRequest(this.inputtext).subscribe(result => {
      this.history = [result, ...this.history];
      this.text = result;
    });
  }

}
