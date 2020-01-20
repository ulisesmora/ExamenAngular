import { Component, OnInit, NO_ERRORS_SCHEMA} from "@angular/core";
import { Character} from "../model/character";
import { RickandMorthyService } from "../service/ram.service";

@Component({
    selector: "character",
    templateUrl: './character.component.html',
    styleUrls: [ './character.component.css'],
    providers: [RickandMorthyService]
})
export class CharacterComponent implements OnInit {
   public character:Array<Character>;
   public numMax: number;

   constructor(private _rickandmortyService: RickandMorthyService){
       
     
   };


   ngOnInit(){
       //console.log(this.character);
      
        this._rickandmortyService.getMaximElementCharacter().subscribe(
            result => {
               this.numMax =  parseInt(result.info.count);
                console.log(this.numMax);
                
      for(let i=1;i<= this.numMax;i++){
        this._rickandmortyService.getJsonCharacter(i.toString()).subscribe(
            
            result=> {
                    this.character.push(new Character(result.image,result.name,result.status,result.location.name));
    
               
            },
            error =>{
                console.log(error);
    
            }
        );
    }
    this.character =  this._rickandmortyService.getCharacter();
    this.character.pop();
            },
            error=>{
                console.log(error);

            }
        );


 
   }

  

   pageActual:number = 1;
   
   filterPost = ""
   filterStatus = ""
   filterLocation = ""
   


}