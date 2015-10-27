(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}
	var Cat = null, Bird = null, Worm = null;
	
	var Animal = {
		eat: function(ani2){
			var cat = Object.create(Cat);
			var bird = Object.create(Bird);
			var worm = Object.create(Worm);
			
			if (Object.getPrototypeOf(this) === Object.getPrototypeOf(ani2)){
				return "Blee!";
			}
			if (Object.getPrototypeOf(this) === Object.getPrototypeOf(cat) && Object.getPrototypeOf(ani2) === Object.getPrototypeOf(bird)){
				return "Mniam!";
			}
			
			if (Object.getPrototypeOf(this) === Object.getPrototypeOf(bird) && Object.getPrototypeOf(ani2) === Object.getPrototypeOf(worm)){
				return "Mniam!";
			}
			
			return "Blee!";
		}
	};
	Cat = Object.create(Animal);
	Bird = Object.create(Animal);
	Worm = Object.create(Animal);
	
	
	
	

	global.UAM.Cat = Cat;
	global.UAM.Bird = Bird;
	global.UAM.Worm = Worm;
	
	
	var cat1 = Object.create(Cat);
	var cat2 = Object.create(Cat);
	var bird = Object.create(Bird);
	var worm = Object.create(Worm);
	
	console.log(cat1.eat(bird)); // "Mniam!"
	console.log(cat2.eat(bird)); // "Mniam!"
	console.log(bird.eat(worm)); // "Mniam!"
	console.log(worm.eat(cat1)); // "Blee!"
	console.log(cat1.eat(cat2)); // "Blee!"

}(window));

/*
	W zadaniu mamy 3 rodzaje zwierząt: koty, ptaki i robaki. Respektując prawa natury koty jedzą ptaki, a ptaki robaki.
	Zaimplementuj obiekty Cat, Bird i Worm tak, aby poniższy kod zwracał prawidłowe rezultaty:

	var cat1 = Object.create(Cat);
	var cat2 = Object.create(Cat);
	var bird = Object.create(Bird);
	var worm = Object.create(Worm);

	cat1.eat(bird); // "Mniam!"
	cat2.eat(bird); // "Mniam!"
	bird.eat(worm); // "Mniam!"
	worm.eat(cat1); // "Blee!"
	cat1.eat(cat2); // "Blee!"

	Dodatkowo wszystkie obiekty mają korzystać ze wspólnej metody eat.
*/


