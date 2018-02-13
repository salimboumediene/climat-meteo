import { City } from "./components/city/city.component";
import { Climat } from "./components/climat/climat.component";
import { Temperature } from "./components/temperature/temperature.component";
import { Meteopolution } from "./components/meteo-polution/meteo-polution.component";
import { ApiOpenWeather } from "./models/apis/api-open-weather.api.model";
import { Polution } from "./components/polution/polution.component";

import { Climat as ClimatModel } from "./models/climat.model";
import { City as CityModel } from "./models/city.model";
import { Polution as PolutionModel } from "./models/polution.model";
import { Temperature as TemperatureModel} from "./models/temperature.model";



let cityModel = new CityModel(
    new PolutionModel,
    new ClimatModel(
        new TemperatureModel
    )
);

let apiOpenWeather = new ApiOpenWeather("a8326e919a5401e942787b4ffca6c0b1");

let city = new City(cityModel, apiOpenWeather);


let meteopolution = new Meteopolution(
    new Temperature, 
    new Climat,
    new Polution
    );




city.render();
meteopolution.render();