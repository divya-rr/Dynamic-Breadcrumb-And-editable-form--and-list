import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  server!: { id: number; name: string;  };

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  
  this.server={
    id:this.route.snapshot.params['id'],
    name:this.route.snapshot.params['name']
   
  }
this.route.snapshot.queryParams['allowEdit']




  this.route.params.subscribe((params:Params)=>{
    this.server.id=params['id']
    this.server.name=params['name']
    
  })
  // this.route.queryParams.subscribe((queryParams:Params)=>{
  //   this.allowEdit=queryParams['allowEdit']===1?true:false
  // })
}

}
