import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Sai Haneesh';

export const lastName = 'Tummalapalli';

export const description =
'Currently pursuing my passion for Computer Science at UT Dallas. Previous SWE intern @ IBM and Railinc, did autonomous vehicle research at utd, consulting ranging from government organizations to Fortune 500 companies';
export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Haneesh25' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/saihaneesh/'
	},
	{
		platform: Platform.Email,
		link: 'shaneesht04@gmail.com'
	}
];

export const skills = getSkills('java');
