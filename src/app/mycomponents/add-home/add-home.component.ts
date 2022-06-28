import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Home } from 'src/app/Home';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css']
})
export class AddHomeComponent implements OnInit {

  title: string
  desc: string
  
  @Output() homeAdd: EventEmitter<Home> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    const home={
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.homeAdd.emit(home);
  }

}
