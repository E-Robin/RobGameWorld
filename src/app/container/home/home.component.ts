import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, Games, Result } from 'src/app/models/game';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  game$:Observable<Games> | undefined 
  constructor(
  private apiService:ApiService
  ) { }

  ngOnInit(): void {
    this.game$ = this.apiService.getData()
    // console.log(this.game$)

  }

}
