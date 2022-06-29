import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  no_of_users: { name: string, email: string, password: string; phoneNumber: number; address: string, address_2: string, country: string, city: string, state: string, zipCode: string, id: number }[] = []
  isEdit: boolean = false
  id: number = 1


  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
    })

    this.no_of_users = JSON.parse(localStorage.getItem("users") || '[]')


  }


  edit(index: number) {
    this.isEdit = true
    this.userService.edit(this.isEdit)
    this.userService.id(index)

    this.router.navigateByUrl("user/edit/" + index)

  }

  removeList(id: number) {

    this.no_of_users = this.no_of_users.filter(l => l.id !== id);
    for (let i = 0; i < this.no_of_users.length; i++) {
      if (i !== this.no_of_users[i].id)
        this.no_of_users[i].id = i
    }
    localStorage.setItem("users", JSON.stringify(this.no_of_users))

  }

}
