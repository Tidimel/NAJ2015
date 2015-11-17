(function (global) {
    var mapArray;

    if (!global.UAM) {
        global.UAM = {};
    }

    global.UAM.aircrafts = [];

    /*global.UAM.aircrafts.push({
        code: 'SP-ABC',
        services: []
    });

    global.UAM.aircrafts[0].services.push({
        name: 'smth1',
        timeToExecute: 120
    });*/

    global.UAM.addAircraft = function (newAircraftCode) {
        if (typeof newAircraftCode !== "string") {
            return;
        }
        $("#airs").append("<tr data-id='"+this.aircrafts.length+"' data-code='"+newAircraftCode+"' id='air"+this.aircrafts.length+"' class='air'><td>"+newAircraftCode+"</td><td class='state'><div class='label label-success'>OK</div></td><td><div class='label label-success add_service'>Dodaj</div><div class='label label-danger remove_air'>Usuń</div></td></tr>");
        var aircraft = { code: newAircraftCode, services: [] };
        this.aircrafts.push(aircraft);

        return aircraft;
    };

    global.UAM.removeAircraft = function (aircraftObj) {
        var index = this.aircrafts.indexOf(aircraftObj);


        if (index >= 0) {
           $("#air"+index).remove();
            this.aircrafts.splice(index, 1);
            return true;
        } else {
            return false;
        }
    };

    global.UAM.addWorkToAircraft = function(aircraftObj, name, timeToExecute) {

        timeToExecute = parseInt(timeToExecute);
        if (aircraftObj == null ||
            typeof aircraftObj !== "object" ||
            typeof name !== "string" ||
            isNaN(timeToExecute)) {
            return;
        }
        var index = this.aircrafts.indexOf(aircraftObj);
        $("#airs #air"+index+" .state").html("<div class='label label-danger'>W NAPRAWIE</div>");
        $("#services").append("<tr id='service"+index+"_"+aircraftObj.services.length+"'><td>"+aircraftObj.code+"</td><td>"+name+"</td><td><div class='time label label-success'>"+timeToExecute+"</div></td></tr>");
        var work = { name: name, timeToExecute: timeToExecute };
        aircraftObj.services.push(work);

        return work;
    };

    global.UAM.reduceTimeToExecute = function(aircraftObj, time) {
        time = parseInt(time);
        if (aircraftObj == null ||
            typeof aircraftObj !== "object" ||
            !(aircraftObj.services instanceof Array) ||
            isNaN(time)) {
            return;
        }
        var index = this.aircrafts.indexOf(aircraftObj);

        aircraftObj.services.forEach(function(service) {
            var index_service = aircraftObj.services.indexOf(service);

            service.timeToExecute -= time;
            $("#service"+index+"_"+index_service+" .time").html(service.timeToExecute);
            if (service.timeToExecute <= 0){
                aircraftObj.services.splice(index_service, 1);
                $("#service"+index+"_"+index_service).remove();
                if (aircraftObj.services.length == 0){
                    $("#airs #air"+index+" .state").html("<div class='label label-success'>OK</div>");

                }
            }

        });
    };

    global.UAM.getAircraftsForRepairs = function(maxTimeToExecute) {
        maxTimeToExecute = parseInt(maxTimeToExecute);
        if (isNaN(maxTimeToExecute)) {
            return;
        }

        var aircraftsForRepairs = [];

        this.aircrafts.forEach(function(aircraft) {
            if (aircraft.services instanceof Array) {
                aircraft.services.forEach(function(service) {
                    if (service.timeToExecute <= maxTimeToExecute &&
                        aircraftsForRepairs.indexOf(aircraft) < 0) {
                        aircraftsForRepairs.push(aircraft);
                    }
                });
            }
        });

        return aircraftsForRepairs;
    };

}(window));

/*

 Przykład użycia:

 var newAircraft1 = UAM.addAircraft('SP-XY1');
 var newAircraft2 = UAM.addAircraft('SP-XY2');

 UAM.addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
 UAM.addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
 UAM.reduceTimeToExecute(newAircraft1, 20);

 var sxy2a = UAM.addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
 var sxy2b = UAM.addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
 UAM.reduceTimeToExecute(newAircraft2, 20);

 UAM.getAircraftsForRepairs(100); // [ newAircraft1 ]

 UAM.removeAircraft(newAircraft1);

 UAM.getAircraftsForRepairs(100); // []

 UAM.reduceTimeToExecute(newAircraft2, 20);

 UAM.getAircraftsForRepairs(100); // [ newAircraft2 ]

 */
