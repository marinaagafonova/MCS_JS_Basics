class User {
	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}
	sayHi() {
		return 'Hello, ' + this.name;
	}
}

class Female extends User {
	sayHi() {
		return 'Hello, ' + this.name + '. You are registered';
	}
}

const Man = new User('someone', '123@gmail.com', '1234');
console.log(Man);

const Anna = new Female('Anna', 'anna@gmail.com', 'qwerty');
console.log(Anna);
