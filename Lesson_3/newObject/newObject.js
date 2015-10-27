(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function newObject(constructor) {
	
		var newObj = Object.create(constructor.prototype);
		var args = Array.prototype.slice.call(arguments,1);
		var newObjArgs = constructor.apply(newObj,args);
		
		if (newObjArgs){
   			return newObjArgs;
		}
		else{
			 return newObj;
		}
	}
	
	
	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/


