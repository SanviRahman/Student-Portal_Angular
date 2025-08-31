import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  name:string='';
  id:string='';

  constructor( private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      this.name=params['name'];
      this.id=params['id'];
    })
  }
}
