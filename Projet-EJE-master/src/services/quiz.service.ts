export class Quicard {

    idcard:string;
    isOn: boolean;
    constructor(public name:string ) {
        this.idcard = name;
        this.isOn = false;
    }  


}