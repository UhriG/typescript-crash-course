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

	let values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber];

	let doc: HasFormatter;
	if (type.value === 'invoice') {
		doc = new Invoice(...values);
	} else {
		doc = new Payment(...values);
	}

	list.render(doc, type.value, 'end');
});
