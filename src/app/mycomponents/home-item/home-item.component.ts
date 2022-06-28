import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { Home } from 'src/app/Home';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {

  @Input() home: Home;
  @Output() homeDelete: EventEmitter<Home> =new EventEmitter();
  @Output() homeCheckBox: EventEmitter<Home> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(home: Home){
    this.homeDelete.emit(home);
    console.log("Click method call has been triggered.")
  }
  onCheckBoxClick(home){
    this.homeCheckBox.emit(home);
  }
}
