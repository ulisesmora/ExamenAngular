import { Component, OnInit } from '@angular/core';
import { Locate } from "../model/locates";
import { RickandMorthyService } from "../service/ram.service";
import { Character } from '../model/character';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [RickandMorthyService]
})
export class LocationComponent implements OnInit {
  public location: Array<Locate>;
  public numMax: number;


  constructor(private _rickandmortyService: RickandMorthyService) {

   };


  ngOnInit() {

    this._rickandmortyService.getMaximElementLocate().subscribe(
      result => {
         this.numMax =  parseInt(result.info.count);
         
          console.log(this.numMax);
          for(let i=1; i <= this.numMax; i++){
            this._rickandmortyService.getJsonLocate(i.toString()).subscribe(
              result => {
                this.location.push( new Locate(result.id.toString(),result.name.toString(),result.type.toString(),result.dimension.toString()));


              }, error =>{
                console.log(error);

              }
            );

          }

           
    this.location =  this._rickandmortyService.getLocation();
    this.location.pop();
  }, error => {
    console.log(error);
  }

    );


  }

  pageActual:number = 1;
  
  filter2Id = "";
  filter2Name= "";
  filter2Type = "";
  filter2Dimension = "";
   


  


}
