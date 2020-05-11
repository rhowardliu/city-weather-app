export class City {
    name:string;
    weatherMain:string;
    weatherDesc:string;
    default:boolean;

    constructor(){
        this.name = 'City';
        this.weatherMain = '';
        this.weatherDesc = '';
        this.default = true;
    }
}