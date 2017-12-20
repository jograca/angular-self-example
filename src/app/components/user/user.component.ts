import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string; 
  age: number;
  email: string;
  address: Address;
  hobbies: string[]; 

  constructor() { 
    console.log("Constructor Ran ... ");
  }

  ngOnInit() {
    console.log("Constructor NGOnInit ... ");
    
    this.name = "Jon";
    this.age = 32;
    this.email = "jon.graca@gmail.com"; 
    this.address = {
      street: "110 Penhallow St",
      city: "Portsmouth",
      state: "NH",
    }
    this.hobbies = ['Backpacking', 'Beers', 'Your Mom'];
  }

  onClick() {
    console.log("Hello " + this.name);
    this.hobbies.push("Hockey");
  }

  addHobby(hobby) {
    console.log("Hobby Added: " + hobby);
    this.hobbies.push(hobby);
    return false; 
  }

  deleteHobby(hobby) {
    console.log("Hobby Removed" + hobby);
    for(let i = 0; i < this.hobbies.length; i ++) {
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}

interface Address{
  street: string,
  city: string,
  state: string, 
}