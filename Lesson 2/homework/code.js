(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.aircrafts = [];
    
    //////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Sample aircraft with sample service  /////////////// 
    
    global.UAM.aircrafts.push({
        code: 'SP-ABC',
        services: []
    });
    
    global.UAM.aircrafts[0].services.push({
        name: 'smth1',
        timeToExecute: 120
    });
    
    //////////////////////////////////////////////////////////////////////////////////////

    global.UAM.addAircraft = function (newAircraftCode) {
        // function should return new aircraft object
		global.UAM.aircrafts.push({
			name: newAircraftCode,
			services: []
		});
    };

    global.UAM.removeAircraft = function (aircraftObj) {
        for (var i=0;i<=global.UAM.aircrafts.length;i++){
			if (global.UAM.aircrafts[i].code == aircraftObj.code){
				global.UAM.aircrafts[i] = {};
				return false;
			}
		}
		
		
    };

    global.UAM.addWorkToAircraft = function(aircraftObj, name, timeToExecute) {
        for (var i=0;i<=global.UAM.aircrafts.length;i++){
			if (global.UAM.aircrafts[i].code == aircraftObj.code){
				global.UAM.aircrafts[i].services.push({name:name,timeToExecute:timeToExecute});
			}
		}
    };
        
    global.UAM.reduceTimeToExecute = function(time) {
        for (var i=0;i<=global.UAM.aircrafts.length;i++){
			for (var j=0;j<=global.UAM.aircrafts[i].services.length;j++){
				global.UAM.aircrafts[i].services[j].timeToExecute = time;
				
			}}
		}
    };
    
    global.UAM.getAircraftsForRepairs = function(maxTimeToExecute) {
		var arr = [];
       for (var i=0;i<=global.UAM.aircrafts.length;i++){
			for (var j=0;j<=global.UAM.aircrafts[i].services.length;j++){
				
				if (global.UAM.aircrafts[i].services[j].timeToExecute <= maxTimeToExecute){
						arr.push(global.UAM.aircrafts[i].code);
				}
				
			}
	   }
	   return arr;
    };

}(window));

/*

Przykład użycia:

var newAircraft1 = addAircraft('SP-XY1');
var newAircraft2 = addAircraft('SP-XY2');

addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
reduceTimeToExecute(newAircraft1, 20);

var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft1 ]

removeAircraft(newAircraft1);

getAircraftsForRepairs(100); // []

reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft2 ]

*/
