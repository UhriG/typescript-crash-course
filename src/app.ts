// Interfaces
interface IsPerson {
	name: string;
	age: number;
	speak(a: string): void;
	spend(a: number): number;
}

const me: IsPerson = {
	name: 'shaun',
	age: 30,
	speak(text: string): void {
		console.log(text);
	},
	spend(amount: number): number {
		console.log('I spent', amount);
		return amount;
	},
};

import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payments.js';
import { HasFormatter } from './Interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;

const tofrom = document.querySelector('#tofrom') as HTMLInputElement;

const details = document.querySelector('#details') as HTMLInputElement;

const amount = document.querySelector('#amount') as HTMLInputElement;

// List template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	let doc: HasFormatter;
	if (type.value === 'invoice') {
		doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
	} else {
		doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
	}

	list.render(doc, type.value, 'end');
});

// Generics

const addUID = <T extends { name: string }>(obj: T) => {
	let uid = Math.floor(Math.random() * 100);
	return { ...obj, uid };
};

let docOne = addUID({ name: 'yoshi', age: 40 });

console.log(docOne.name);

// Enums
enum ResourceType {
	BOOK,
	AUTHOR,
	FILM,
	DIRECTOR,
	PERSON,
}

// with interfaces
interface Resource<T> {
	uid: number;
	resourceType: ResourceType.PERSON;
	data: T;
}

const docThree: Resource<object> = {
	uid: 1,
	resourceType: ResourceType.PERSON,
	data: { name: 'shaun' },
};

const docFour: Resource<string[]> = {
	uid: 2,
	resourceType: ResourceType.PERSON,
	data: ['bread', 'milk', 'toilet roll'],
};

// Tuples

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;

let student: [string, number];
student = ['chun-li', 223423];
