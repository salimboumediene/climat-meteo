export default (polution) => {

    return `
    <br>
    <br>
    ${
        polution.get("aqi") ? "" : '<div style="width:100%;" id="p2" class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>'
   }

<ul class="ui col-v-4 mdl-list grey-50">
        <div class="ui col-12 center grey-50 mdl-list__item">
            <span class="ui left col-5 smaller mdl-list__item-primary-content">
                Aix Quality Index
            </span>
            <div class="ui col-3 col-sm-2 right">
                <span class="ui lighter">
                ${polution.get("aqi") 
                ? polution.get("aqi") 
                : "-"}
                </span>
                <span class="ui smaller icon material-icons"> 
                    thumb_up
                </span>
            </div>
        </div>
        <br>
        <br>
        <div class="ui col-12 center grey-50 mdl-list__item">
        <span class="ui left col-5 smaller mdl-list__item-primary-content">
        Fine Particle
        </span>
            <div class="ui col-3 col-sm-2 col-2 right">
                <span class="ui lighter">
                ${polution.get("pm25") 
                ? polution.get("pm25") 
                : "-"}
                </span>
                <span class="ui smaller icon material-icons">
                    thumb_down
                </span>
            </div>
        </div>
        <br>
        <br>
        <div class="ui col-12 center grey-50 mdl-list__item">
        <span class="ui left col-5 col-sm-5 smaller mdl-list__item-primary-content">
        Ozone
        </span>
            <div class="ui col-3 col-sm-2 right">
                <span class="ui lighter">
                ${polution.get("ozone") 
                ? polution.get("ozone") 
                : "-"}
                </span>
                <span class="ui smaller icon material-icons">
                    thumb_up
                </span>
            </div>
        </div>
        <br>
        <br>
    </ul>

    `;
}
