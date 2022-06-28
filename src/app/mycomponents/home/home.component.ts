import { Component, OnInit } from '@angular/core';
import {Home} from "../../Home";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

    homes:Home[];
    localItem:string;
    
  constructor() {
   this.localItem=localStorage.getItem("homes");
   if(this.localItem==null){ 

     
   this.homes =[];
     }
     else{
      this.homes=JSON.parse(this.localItem);
     }
   
    }

  ngOnInit(): void {
  }

  deleteHome(home:Home){
    const index =this.homes.indexOf(home);
     this.homes.splice(index,1);   
    localStorage.setItem("homes",JSON.stringify(this.homes));
     console.log(home);
  }
  addHome(home:Home){
    //const index =this.homes.indexOf(home);
     this.homes.push(home);   
     localStorage.setItem("homes",JSON.stringify(this.homes));
    console.log(home);
  }
  toggleHome(home:Home){
    //const index =this.homes.indexOf(home);
    const index =this.homes.indexOf(home);
     this.homes[index].active=!this.homes[index].active;
     localStorage.setItem("homes",JSON.stringify(this.homes));
    console.log(home);
  }
}
