import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelors degree of Computer Science',
		description: '',
		location: 'USA',
		logo: Assets.UTD,
		name: '',
		organization: 'UT Dallas',
		period: { from: new Date(2022, 8, 19), to: new Date(2025, 5, 12) },		shortDescription: '',
		slug: 'education-item-1',
		subjects: ['Operating Systems', 'Database Systems', 'Compiler Design', 'Algorithms and Data Structures']
	},
	{
		degree: 'Masters degree of Computer Science',
		description: '',
		location: 'USA',
		logo: Assets.UTD,
		name: '',
		organization: 'UT Dallas',
		period: { from: new Date(2025, 8, 19)},		shortDescription: '',
		slug: 'education-item-2',
		subjects: ['Natural Language Processing', 'Artificial Intelligence', 'Machine Learning']
	}
];

export const title = 'Education';
