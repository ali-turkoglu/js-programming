/*
    Attributes:
        employeeName
        salary
        ...

    Methods:
        work()
        ...
*/

class Employee{

    constructor(employeeName, employee1Salary){
        this.employeeName=employeeName;
        this.employeeSalary=employee1Salary;
    }

    work(){
        console.log(`${this.employeeName} is working.`);
    }
}

let employee1 = new Employee("John Doe", 5000);
let employee2 = new Employee("Jane Smith", 6000);

console.log(employee1.employeeName);
console.log(employee1);
console.log(employee2);

employee1.work();

console.log("---------------------------------");

/*
Create a class named Item with the following requiremnts:

    Attributes:
        name, price, quantity

    Methods:
        constructor: define and initialize the attributes.
        calcPrice: calculate the total price of item
*/

class Item{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
    work(){
        console.log(`${this.name} is working.`);
    }

    calcPrice(){
        return this.price * this.quantity;
    }
}

let item1= new Item("Apfel", 1.5, 10);
let item2= new Item("Bananen", 0.75, 15); 
let item3=new Item("Butter",3.4,8)
  

console.log(item3);
item2.work();
console.log(item3.calcPrice()); 