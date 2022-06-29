import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  add(){
    const isEdit=false
    this.userService.edit(isEdit)

  }

}
