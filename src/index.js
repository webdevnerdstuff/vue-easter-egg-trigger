import EasterEggTrigger from '@plugin/EasterEggTrigger';

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(EasterEggTrigger);
}

export default EasterEggTrigger;
