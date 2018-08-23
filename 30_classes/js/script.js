let users = {
	hasAccesToProfile: true,
	approved: true,
	sayHi:function() {return 'Привет'}
}

function User (name, email, password) {
	//констуктор
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = users;
}

const Alex = new User('Alex', 'alex@gmail.com', 'qwerty');
console.log(Alex);

function FUser (name, email, password) {
	//констуктор
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = users;
	this.sayHi = function() {return this.name+', you are registered'}
}

const Emily = new FUser('Emily', 'emily@gmail.com', '1234');
console.log(Emily);
console.log(Emily.sayHi());