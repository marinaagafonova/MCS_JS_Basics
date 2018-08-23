class Customer {
	constructor(name) {
		this.name = name;
	}
	buy() {
		return "Куплено";
	}
}


class childCustomer extends Customer {
	getPresent() {
		console.log('Шарик в подарок');
	}
}

