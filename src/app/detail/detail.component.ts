import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Result } from '../models/game';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  result:Result | undefined;
  id:any;
  id2:any;
  Detail$:Observable<Result> | undefined
  // Detail!:Result;
  constructor(
    private route:ActivatedRoute,
    private api :ApiService
  ) { }

  ngOnInit(): void {
    //now need to get id which is gaming in routing to show the component detail
    //using paraMap observable
    this.route.paramMap.subscribe(
      data=>{
        this.id = data.get('id')
        console.log('id iis ',this.id)
        this.getDetail(this.id)

      }
    )

 //Using params observable
//  this.route.params.subscribe((data) => {
//   // data is type of params [https://angular.io/api/router/Params]
//   this.id2 = data['id'];
//   console.log(this.id2)
// });

  }

  // getDetail(id:number){
  //    this.api.getDetail(id).subscribe(
  //     res=>{
  //       this.Detail = res
  //       console.log(this.Detail)
  //     }
      
  //    )
    
  // }

  getDetail(id:number){
    this.Detail$  = this.api.getDetail(id)
  }

}
