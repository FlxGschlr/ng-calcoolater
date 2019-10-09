import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  text = 'Hellooooo';
  input = 'placeholder';
  history = ['nothing'];

  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

  submit() {
    this.service.do(this.input).then( result => {
      this.history = [result, ...this.history];
      this.text = result;
    });
  }

}
