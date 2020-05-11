export class City {
    name:string;
    weatherMain:string;
    weatherDesc:string;
    cityFound:boolean;

    constructor(){
        this.name = 'City';
        this.weatherMain = '';
        this.weatherDesc = '';
        this.cityFound = false;
    }
}