var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function($routeProvider) {
	$routeProvider
		.when("/books", {
			templateUrl: "partials/book-list.html",
			controller: "BookListCtrl"
		})
		.when("/kart", {
			templateUrl: "partials/kart-list.html",
			controller: "KartListCtrl"
		})
	.otherwise({
		redirectTo: "/books"
	});
});

myApp.factory("kartService", function() {
	var kart = [];
	
	return {
		getKart: function() {
			return kart;
		},
		addToKart: function(book) {
			kart.push(book);
			alert(book.name+" added to kart");
		},
		remove: function(index){
			kart.splice(index,1);
		},
		buy: function(book) {
			alert("Thanks for buying: " + book.name);
		}
	}
});

myApp.factory("bookService", function() {
	
	var books = [
		{
			imgUrl: "adultery.jpeg",
			name: "Adultery",
			price: 205,
			rating: 4,
			binding: "Paperback",
			publisher: "Random House India",
			releaseDate: "12-08-2014",
			details: "Linda, in her thirties, begins to question the routine and predictability of her days. In everybodys eyes, she has a perfect life-happy marriage, children and a career. Yet what she feels is an enough."
		},
		{
			imgUrl: "geronimo.jpeg",
			name: "Geronimo Stilton Spacemice#2 : You're Mine, Captain!",
			price: 168,
			rating: 5,
			binding: "Paperback",
			publisher: "Scholastic",
			releaseDate: "01-07-2014",
			details: "Geronimo Stilton meets outer space in this cosmically fun spin-off series!Meet Geronimo StiltonixHe is a spacemouse - the Geronimo Stilton of a parallel universe! He is captain of the spaceship ."
		},
		{
			imgUrl: "life-or-death.jpeg",
			name: "Life or Death",
			price: 339,
			rating: 4,
			binding: "Paperback",
			publisher: "Hachette India",
			releaseDate: "01-04-2014",
			details: "Why would a man escape from prison the day before he's due to be released? Audie Palmer has spent a decade in prison for an armed robbery in which four people died, including two of his gang. Five."
		},
		{
			imgUrl: "playing.jpeg",
			name: "Playing It My Way : My Autobiography",
			price: 599,
			rating: 5,
			binding: "Hardcover",
			publisher: "Hodder & Stoughton",
			releaseDate: "01-08-2014",
			details: "I knew that if I agreed to write my story, I would have to be completely honest, as thats the way I have always played the game and that would mean talking about a number of things I have not addressed."
		},
		{
			imgUrl: "the-fault.jpeg",
			name: "The Fault in Our Stars",
			price: 227,
			rating: 4.5,
			binding: "Paperback",
			publisher: "Penguin Books Ltd",
			releaseDate: "25-01-2013",
			details: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist ."
		},
		{
			imgUrl: "wings-of-fire.jpeg",
			name: "Wings of Fire: An Autobiography",
			price: 124,
			rating: 5,
			binding: "Paperback",
			publisher: "Universities Press",
			releaseDate: "25-08-2000",
			details: "Wings of Fire traces the life and times of India's former president A.P.J. Abdul Kalam. It gives a glimpse of his childhood as well as his growth as India's Missile Man. Summary of the Book Wings."
		},
		{
			imgUrl: "thewhitetiger.jpeg",
			name: "The White Tiger",
			price: 128,
			rating: 3.7,
			binding: "Paperback",
			publisher: "Free Press",
			releaseDate: "14-10-2008",
			details: " The White Tiger offers a story of coruscating wit, blistering suspense, and questionable morality, told by the most volatile, captivating."
		},
		{
			imgUrl: "sacredgames.jpeg",
			name: "Sacred Games",
			price: 130,
			rating: 3.9,
			binding: "Paperback",
			publisher: "HarperCollins",
			releaseDate: "12-11-2007",
			details: "Ganesh Gaitonde, the most wanted gangster in India. It is is a story of friendship and betrayal, of terrible violence, of an astonishing modern city and its dark side."
		},
		{
			imgUrl: "sleepingonjupiter.jpeg",
			name: "Sleeping on Jupiter",
			price: 98,
			rating: 3.3,
			binding: "Paperback",
			publisher: "Hachette",
			releaseDate: "26-04-2015",
			details: " A train stops at a railway station. A young woman jumps off. She has wild hair, sloppy clothes, a distracted air. She looks Indian, yet she is somehow not. The sudden violence of what happens next leaves the other passengers gasping."
		}
	];
	
	return {
		getBooks: function() {
			return books;
		},
		addToKart: function(book) {
			
		}
	}
});

myApp.controller("KartListCtrl", function($scope, kartService) {
	$scope.kart = kartService.getKart();
	
	$scope.buy = function(book) {
		//console.log("book: ", book);
		kartService.buy(book);
	}
	$scope.remove = function(book){
		kartService.remove(book);
	}
	
});

myApp.controller("HeaderCtrl", function($scope, $location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "BooKart";
	$scope.appDetails.tagline = "We have collection of 1 Million books";
	
	$scope.nav = {};
	$scope.nav.isActive = function(path) {
		if (path === $location.path()) {
			return true;
		}
		
		return false;
	}
});

myApp.controller("BookListCtrl", function($scope, bookService, kartService) {
	$scope.books = bookService.getBooks();
	
	$scope.addToKart = function(book) {
		kartService.addToKart(book);
	}
});