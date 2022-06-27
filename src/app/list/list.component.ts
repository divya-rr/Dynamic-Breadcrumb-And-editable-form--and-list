import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  
  no_of_users:{name:string,email:string,address:string,address_2:string,country:string,city:string,state:string,zipCode:string,id:number}[]=[]
  isEdit=false
  id:number=1


  constructor(private userService:UserService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.id=params['id']
    })
   

    //this.getVideo();
   
    this.no_of_users= JSON.parse(localStorage.getItem("users") || '{}')
    console.log(this.no_of_users);
    
    
    
    
    
    
  }
  data:any
  edit(index:number){
    this.isEdit=true
    this.userService.edit(this.isEdit)
    this.userService.id(index)
    this.data = this.no_of_users.find((info) => this.id == info.id);
    
 
    console.log(this.no_of_users);
    
    console.log(this.data);
    
    this.router.navigateByUrl("user/edit/"+index)

  }

}
