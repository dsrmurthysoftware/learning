import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Http} from '@angular/http';

//RXJS
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: "app-http",
    template: `
    <div class="container">
      <h2>Live Weather Forecast by Murthy</h2>
      
      City:<input type="text"
            [formControl]="searchInput">

      <h3>Current Temperature in {{temperature}}F </h3>
      <h3>Humidity {{humidity}}% </h3>
     <h2 class="text-success">Status : {{description}}</h2>
     </div>
    `
})
export class WeatherComponent {
    //http://api.openweathermap.org/data/2.5/weather?q=chennai&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73
    
    private baseWeatherURL: string =
    'http://api.openweathermap.org/data/2.5/weather?q=';

    private urlSuffix: string =
    "&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73";

   // FormControl comes from ReactiveFormsModule
    searchInput: FormControl = new FormControl();
    temperature: string;
    description: string = '';
    humidity: string = '';

    constructor(private http: Http) {
        //Observable form       
        this.searchInput.valueChanges
            .debounceTime(4000)
            .switchMap((city: string) => this.getWeather(city))
            .subscribe(    (res: any) => {
                this.description = res.weather[0].description;
                this.temperature = res.main.temp;
                this.humidity = res.main.humidity;
            },
            (err: any) =>
                console.log(
                `Can't get weather. Error code: %s, URL: %s`, err.message, err.url
                ),
            () => console.log('made request to openweather map')
            );
    }
    ngOnInit() {
        this.searchInput.setValue("Hyderabad");
    }
    //Ajax call here (write this code in service)
    getWeather(city: string): Observable<Array<string>> {
        return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
            .map((data:any) => {
                console.log(data);
                return data.json()
            });
    }
}
// end

