import EasterEggTrigger from '@plugins/EasterEggTrigger'

export const version = '__VERSION__'

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(EasterEggTrigger);
}

export default EasterEggTrigger
