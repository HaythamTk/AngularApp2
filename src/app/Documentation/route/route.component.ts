import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route',
  standalone: false,
  
  templateUrl: './route.component.html',
  styleUrl: './route.component.scss'
})
export class RouteComponent implements OnInit {
 userName:string;
 constructor(private router:Router,private activatedRoute:ActivatedRoute) {
  
 }
 //navigate to products
 onClick(id:number)
 {
   this.router.navigate(['/products',id]);
 }

 ngOnInit()
 {
   //this.userName = this.activatedRoute.snapshot.params['name'];
   
 }
  
}
