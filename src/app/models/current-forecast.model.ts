import { ICurrentForecast } from '../interfaces/current-forecast.interface';
export class CurrentForecast implements ICurrentForecast{
   
    constructor(
        public city: string,
        public description: string,
        public icon: string,
        public temperature: number,
        public high: number,
        public low: number,
        public ready: boolean
        ){
            this.city = city;
            this.description = description;
            this.icon = icon;
            this.temperature = temperature;
            this.high = high;
            this.low = low;
            this.ready = ready;
        }
}
        
