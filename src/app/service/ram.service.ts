import {Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Character} from "../model/character";
import { Locate} from "../model/locates";

@Injectable()
export class RickandMorthyService{
    public url:string;
    public urlLocates:string;
    public urlCount:string;

    public character: Array<Character>;
    public locate:Array<Locate>;
    
    
    constructor( public _http: HttpClient){
        this.url ="https://rickandmortyapi.com/api/character/";
        this.urlLocates = "https://rickandmortyapi.com/api/location/";
        this.urlCount = "https://rickandmortyapi.com/api/character/";
        
        this.character = [ new Character("","","","")];
        this.locate = [ new Locate("","","","")];
        
        
    }

    



    getJsonCharacter(page:string):Observable<any>{
        
        return this._http.get(this.url +page );
        
    }
    
    getCharacter(): Array<Character>{
        //console.log(this.character);
        return this.character;

    }


    getJsonLocate(page:string):Observable<any>{
        return this._http.get(this.urlLocates + page);
    }

    handleError(err){
        if(err instanceof HttpErrorResponse){

            return throwError(err);
        }else{

        }

    }

    getLocation(): Array<Locate>{
        //console.log(this.locate);
        return this.locate;
    }

    getMaximElementCharacter(): Observable<any>{
        return this._http.get(this.urlCount);
    }

    getMaximElementLocate():Observable<any>{
        return this._http.get(this.urlLocates);
    }
}