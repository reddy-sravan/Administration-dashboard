import { Children } from 'react';
import list from './administrationList.json';

export interface employee {
	name: string;
	email: string;
	designation: string;
	reporting_manager: string;
	children: employee[];
}

const findTheCeo = (data: employee[]) => {
	let omitedindexes: number[] = [];
	return {
		ceo: data.filter((each, index) => {
			if (!each.reporting_manager) {
				omitedindexes.push(index);
			}
			return !each.reporting_manager;
		}),
		omitedindexes,
	};
};
const omitData = (data: employee[], indexes: number[]) => {
	return data.filter(
		(each, employeeIndex) => !indexes.includes(employeeIndex)
	);
};
const findMyChildren = (data: employee[], mail: employee['email']) => {
	let omitedindexes: number[] = [];
	const myChildren = data.filter((each: employee, employeeIndex) => {
		if (each.reporting_manager === mail) {
			omitedindexes.push(employeeIndex);
			return each.reporting_manager === mail;
		}
	});
	const outputChildren: employee['children'] = myChildren.map((each) => ({
		...each,
		children: findMyChildren(omitData(data, omitedindexes), each.email),
	}));
	return outputChildren;
};

export const reArrangeAdministrationData = (data: employee[]) => {
	const { ceo, omitedindexes } = findTheCeo(data);
	return ceo.map((each) => ({
		...each,
		children: findMyChildren(omitData(data, omitedindexes), each.email),
	}));
};
