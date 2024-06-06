function getThis() {
   return this;
}

const obj1 = {name: "valentina"}
const obj2 = {name: "sebastian"}

obj1.getThis = getThis

console.log(obj1.getThis())


function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	//Car.call(this, "convertible", "petrol");
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice(price){
	Car.call(this, "convertible", "diesel");
	this.price = price;
	console.log(`Car details = `, this.type);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);


const newEntity = (obj) => console.log(obj);

function mountEntity(){
	this.entity = newEntity;
	console.log(`Entity ${this.entity} is mounted on ${this}`);
}

mountEntity();