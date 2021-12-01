import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
name : 'currency'
})
export class currencyPipe implements PipeTransform {
transform(value : string, deviseD:String , deviseA:String) : any {
    let symbole=""
    let valeur=0
    let display=false
    let k=3
    if(symbole==""){
        display=true
        if(deviseA=="USD"){
            symbole="$"
        }else if(deviseA=="FCFA"){
            symbole="FCFA"
        }else if(deviseA=="EUR"){
            symbole="£"
        }

        if(deviseD=="FCFA" && deviseA=="USD"){
            valeur=parseFloat(((parseFloat(value)/655.9570)*1.134122).toPrecision(k))
        }else if(deviseD=="FCFA" && deviseA=="EUR"){
            valeur=parseFloat((parseFloat(value)/655.9570).toPrecision(k))
        }else if(deviseD=="EUR" && deviseA=="USD"){
            valeur=parseFloat((parseFloat(value)*1.134122).toPrecision(k))
        }else if(deviseD=="EUR" && deviseA=="FCFA"){
            valeur=parseFloat((parseFloat(value)*655.9570).toPrecision(k))
        }else if(deviseD=="USD" && deviseA=="FCFA"){
            valeur=parseFloat(((parseFloat(value)/1.134122)*655.9570).toPrecision(k))
        }else if(deviseD=="USD" && deviseA=="EUR"){
            valeur=parseFloat(((parseFloat(value))/1.134122).toPrecision(k))
        }else if(deviseD=="EUR" && deviseA=="EUR"){
            valeur=parseFloat(value)
        }else if(deviseD=="USD" && deviseA=="USD"){
            valeur=parseFloat(value) 
        }else if(deviseD=="FCFA" && deviseA=="FCFA"){
            valeur=parseFloat(value)
        }
    }
    return valeur;
    
}
}