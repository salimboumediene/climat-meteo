import{City} from "./components/city/city.component";
import{Climat} from "./components/climat/climat.component";
import{Temperature} from "./components/temperature/temperature.component";
import { Polution } from "./components/polution/polution.component";
import { Meteopolution } from "./components/meteopolution/meteopolution.component";
import { ApiOpenWeather } from "./models/apis/api-openweather.api.model";

import { Climat as ClimatModel } from "./models/climat.model";
import { Polution as PolutionModel } from "./models/polution.model";
import { City as CityModel } from "./models/city.model";
import { Temperature as TemperatureModel } from "./models/temperature.model";
import { Weather } from "./hydrators/apis/weather.api.hydrator";
import { ApiWaqi } from "./models/apis/api-waqi.api.model";
import { Waqi } from "./hydrators/apis/waqi.api.hydrator";



let openWeather = new ApiOpenWeather("92ca15e469e17a4efada67662c31a78e");

let cityModel = new CityModel(
    new PolutionModel,
    new ClimatModel(
    new TemperatureModel
    )
);

new Meteopolution(
    new Temperature(cityModel),
    new Climat(cityModel.get("climat")),
    new Polution(
        cityModel,
        new ApiWaqi("8ba3fde564baff835c88cbe7b752290a3a87d583"),
        new Waqi
    ),
    cityModel
).render();

new City(
    cityModel, 
    openWeather, 
    new Weather
).render();
