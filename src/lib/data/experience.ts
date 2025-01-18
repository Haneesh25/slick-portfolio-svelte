import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'ai-research',
		company: 'NOVA UTD',
		description: 'Enhancing AI models for UTD’s autonomous driving group creating an open-source driving stack for researchers. Reduced simulation time by 25% and improved system responsiveness in the Carla simulator by diagnosing and resolving lag issues through sequentially launching navigator nodes. Engineered a radar occupancy grid system by collecting and processing radar data into a 2D format to accurately display free and occupied space.',
		contract: ContractType.PartTime,
		type: 'AI Research  Development',
		location: 'Dallas, TX',
		period: { from: new Date(2023,8,1), to: new Date(2024, 3, 1) },
		skills: getSkills('py', 'dock', 'git', 'sql'),
		name: 'AI Research Developer',
		color: 'red',
		links: [],
		logo: Assets.NOVA,
		shortDescription: 'Enhanced AI models for UTD’s autonomous driving research group, improving simulation efficiency and responsiveness, and developed a radar occupancy grid system for accurate spatial visualization.'
	},
	{
		slug: 'railinc-intern',
		company: 'Railinc',
		description: 'Revamped Quality Automation Framework utilizing AWS Java SDK and Selenium, resulting in a 40% reduction in test execution time and a 50% increase in test coverage. Leveraged AWS CloudWatch and EC2 instances to conduct comprehensive port analysis for detecting and mitigating security vulnerabilities in 20+ accounts.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Cary, NC',
		period: { from: new Date(2023, 4, 1), to: new Date(2023, 7, 15) },
		skills: getSkills('java', 'sel', 'ju', 'aws', 'kub', 'git', 'sql', 'jen', 'terra'),
		name: 'Software Engineering Intern',
		color: 'blue',
		links: [],
		logo: Assets.Railinc,
		shortDescription: 'Revamped Quality Automation Framework and leveraged AWS CloudWatch and EC2 instances to conduct comprehensive port analysis.'
	},
	{
		slug: 'ibm-intern',
		company: 'IBM',
		description: 'Resolved 100% critical bugs by developing a test suite tailored to the team’s needs utilizing Golang and Postman. Trained IBM WatsonX Granite model to analyze GitHub issues, providing users with concise summaries and actionable next steps, increasing issue resolution speed by over 80%. Created comprehensive technical documentation, including service road maps and psuedocode, cutting onboarding times and enhancing client communication.',
		contract: ContractType.Internship,
		type: 'Backend Development',
		location: 'Austin, TX',
		period: { from: new Date(2024, 4, 20), to: new Date(2024, 7, 19) },
		skills: getSkills('java', 'go', 'aws', 'kub', 'git'),
		name: 'Software Engineering Intern',
		color: 'green',
		links: [],
		logo: Assets.IBM,
		shortDescription: 'Resolved critical bugs, trained WatsonX Granite model for faster issue resolution, and created technical documentation to streamline onboarding and client communication.'
	},
	{
		slug: 'toyota-capstone',
		company: 'Toyota',
		description: 'Developing a C/C++ QEMU extension to emulate ARM chipset features, dynamically selected from a config file, ensuring compatibility with proprietary SoC architectures. Reverse engineering QEMU source code and APIs to design custom ARM architecture profiles for in-vehicle emulation of proprietary features.',
		contract: ContractType.PartTime,
		type: 'Embedded Systems Development',
		location: 'Dallas, TX',
		period: { from: new Date(2024,7,1), to: new Date(2024, 11, 8) },
		skills: getSkills('qemu', 'cpp'),
		name: 'Embedded Systems Engineer - Capstone Project',
		color: 'red',
		links: [],
		logo: Assets.Toyota,
		shortDescription: 'Developed a C/C++ QEMU extension to emulate ARM chipset features.'
	}
];

export const title = 'Experience';
