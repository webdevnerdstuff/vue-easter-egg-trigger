import { defineStore } from 'pinia';
import packageJson from '@root/package.json';


export const useCoreStore = defineStore('core', () => {
	const scopedPackageName = packageJson.name;
	const packageName = scopedPackageName.split('/')[1];

	// Links //
	const repoBaseUrl = `https://github.com/webdevnerdstuff/${packageName}`;
	const links = {
		adobeTerms: 'https://stock.adobe.com/license-terms',
		changeLog: `${repoBaseUrl}/blob/main/CHANGELOG.md`,
		christineWulf: 'https://stock.adobe.com/search?creator_id=201928505',
		cutiefulCritters: 'https://findme.cutiefulcritters.com/',
		github: repoBaseUrl,
		githubProfile: 'https://github.com/webdevnerdstuff',
		konamiCode: 'https://en.wikipedia.org/wiki/Konami_Code',
		license: `${repoBaseUrl}/blob/main/LICENSE.md`,
		lodash: 'https://lodash.com/',
		npm: `https://www.npmjs.com/package/${scopedPackageName}`,
		vue: 'https://vuejs.org/',
	};

	const actions = {
		setTheme(val: string): string {
			const themeName = val === 'dark' ? 'light' : 'dark';
			const currentTheme = localStorage.getItem(`${packageName}-theme`);
			const newTheme = themeName ?? currentTheme;

			localStorage.setItem(`${packageName}-theme`, newTheme);
			return newTheme;
		},
	};

	const getters = {
		getTheme: () => {
			const value = localStorage.getItem(`${packageName}-theme`);
			return value;
		},
	};

	return {
		...actions,
		...getters,
		links,
		package: packageJson,
		packageName,
		pluginVersion: packageJson.version,
	};
});
