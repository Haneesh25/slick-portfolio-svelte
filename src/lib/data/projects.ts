import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'slick-portfolio-angular',
		color: '#5e95e3',
		description:
			'Designed and developed a UT Dallas based compiler in Java using JFlex and Cup, incorporating a lexer, parser, type checker, and interpreter. Developed unique grammar rules for program structure, member declarations, statements, and type rules. Designed type coercion and operator rules to ensure accurate type handling and code execution',		
		shortDescription:
			'Designed and developed a UT Dallas based compiler in Java using JFlex and Cup, incorporating a lexer, parser, type checker, and interpreter',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Java,
		name: 'CS4386-Compiler-Design-Project',
		period: {
			from: new Date(2023, 8, 19) 
		},
		skills: getSkills('Java', 'JFlex', 'Cup'),
		type: 'Java, JFlex, Cup'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'Developed a vehicle safety system using YoloV5 for real-time object detection, alerting drivers to red lights, stop signs, and nearby vehicles. Utilized computer vision techniques such as adaptive Gaussian thresholding, Canny edge detection, and perspective transformations to highlight lane lines and proactively detect potential collision risks',
		shortDescription:
			'Developed a vehicle safety system using YoloV5 for real-time object detection, alerting drivers to red lights, stop signs, and nearby vehicles.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'PathWatch',
		period: {
			from: new Date(2023, 7, 1)
		},
		skills: getSkills('Python', 'OpenCV', 'Swift', 'YoloV5'),
		type: 'Python, OpenCV, Swift, YoloV5',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export const title = 'Projects';
