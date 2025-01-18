import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			"JavaScript is a versatile, high-level programming language widely used for web development. It enables developers to create dynamic, interactive user interfaces and supports event-driven, functional, and imperative programming styles. Its ecosystem includes powerful libraries and frameworks like React and Node.js.",
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'blue',
		description:
			"Java is a robust, object-oriented programming language commonly used for developing enterprise-level applications, Android apps, and backend systems. With its 'write once, run anywhere' principle, it offers platform independence and extensive community support.",
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'py',
		color: 'blue',
		description:
			"Python is a beginner-friendly, high-level programming language known for its readability and simplicity. It’s used across various domains, including web development, data analysis, machine learning, and scripting, supported by a vast ecosystem of libraries like NumPy and TensorFlow.",
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'go',
		color: 'blue',
		description:
			"Go, or Golang, is a statically typed, compiled programming language designed by Google. Known for its simplicity, efficiency, and excellent concurrency support, Go is ideal for cloud-native applications and system-level programming.",
		logo: Assets.Go,
		name: 'Go',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'flutter',
		color: 'blue',
		description:
			"Flutter is a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses Dart as its programming language and provides fast development with a rich set of customizable widgets.",
		logo: Assets.Flutter,
		name: 'Flutter',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description:
			"C and C++ are foundational programming languages known for their performance and low-level control over hardware. They are commonly used in system programming, game development, and high-performance computing.",
		logo: Assets.Cpp,
		name: 'C/C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'sql',
		color: 'blue',
		description:
			"SQL (Structured Query Language) is the standard language for managing and querying data in relational database management systems (RDBMS). It supports operations like data retrieval, insertion, and manipulation, making it essential for database-centric applications.",
		logo: Assets.PostgreSQL,
		name: 'SQL',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kot',
		color: 'blue',
		description:
			"Kotlin is a modern, statically typed programming language primarily used for Android development. With concise syntax, null safety, and full interoperability with Java, it’s a preferred choice for mobile developers.",
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			"CSS (Cascading Style Sheets) is used to style and layout web pages, providing control over elements like colors, fonts, spacing, and responsive designs. It complements HTML to enhance user experience and design.",
		logo: Assets.CSS,
		name: 'CSS',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			"HTML (HyperText Markup Language) is the standard language for creating web pages. It structures content on the web, working in conjunction with CSS and JavaScript to create interactive and visually appealing web applications.",
		logo: Assets.HTML,
		name: 'HTML',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'aws',
		color: 'pink',
		description:
			"AWS (Amazon Web Services) is the leading cloud computing platform, offering scalable services for computing, storage, and databases. Its tools power applications ranging from startups to enterprises, supporting global deployments.",
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'dock',
		color: 'pink',
		description:
			"Docker is a platform for developing, shipping, and running applications in lightweight, portable containers. It streamlines workflows by isolating dependencies and ensuring consistent environments across systems.",
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'kub',
		color: 'pink',
		description:
			"Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. It’s a crucial tool in DevOps workflows for achieving reliability and scalability.",
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jen',
		color: 'pink',
		description:
			"Jenkins is an open-source automation server that enables continuous integration and continuous delivery (CI/CD). It supports building, testing, and deploying applications with extensive plugin support.",
		logo: Assets.Java,
		name: 'Jenkins',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'git',
		color: 'pink',
		description:
			"Git is a distributed version control system used for tracking changes in source code. It facilitates collaboration among developers and ensures version history integrity, making it a cornerstone in modern software development.",
		logo: Assets.ExpressJs,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			"React.js is a JavaScript library for building user interfaces. Its component-based architecture and virtual DOM make it efficient and widely used for creating single-page applications (SPAs).",
		logo: Assets.ReactJs,
		name: 'React.js',
		category: 'library'
	}),
	defineSkill({
		slug: 'sb',
		color: 'cyan',
		description:
			"Spring Boot is a framework for building Java-based applications with a focus on microservices. It simplifies configuration and deployment, enabling rapid development of scalable applications.",
		logo: Assets.ExpressJs,
		name: 'Spring Boot',
		category: 'library'
	}),
	defineSkill({
		slug: 'terra',
		color: 'cyan',
		description:
			"Terraform is an open-source infrastructure as code (IaC) tool for provisioning and managing cloud resources. It uses declarative configuration files to automate infrastructure setup across various platforms.",
		logo: Assets.ExpressJs,
		name: 'Terraform',
		category: 'library'
	}),
	defineSkill({
		slug: 'sel',
		color: 'cyan',
		description:
			"Selenium is a popular framework for testing web applications. It automates browser actions and supports multiple programming languages, making it a versatile tool for quality assurance teams.",
		logo: Assets.Selenium,
		name: 'Selenium',
		category: 'library'
	}),
	defineSkill({
		slug: 'ju',
		color: 'cyan',
		description:
			"JUnit is a Java testing framework used for writing and running repeatable tests. It’s a fundamental tool for ensuring code reliability and stability in Java applications.",
		logo: Assets.Java,
		name: 'JUnit',
		category: 'library'
	}),
	defineSkill({
		slug: 'qemu',
		color: 'cyan',
		description:
			"QEMU is an open-source machine emulator and virtualizer. It supports hardware emulation, enabling development and testing across various platforms without the need for physical hardware.",
		logo: Assets.Cpp,
		name: 'QEMU',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description:
			"Svelte is a modern JavaScript framework for building user interfaces. It shifts the heavy lifting to a compile step, resulting in fast and lightweight applications without a virtual DOM.",
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
