import { defineStore } from 'pinia';


const propsHeaders = [
	{
		align: 'start',
		filterable: true,
		key: 'name',
		sortable: true,
		title: 'Name',
		width: '20%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'type',
		sortable: false,
		title: 'Type',
		width: '20%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'default',
		sortable: false,
		title: 'Default',
	},
	{
		align: 'start',
		filterable: false,
		key: 'desc',
		sortable: false,
		title: 'Description',
	},
];

const componentProps = [
	{
		default: '',
		desc: 'A callback function after the egg has been triggered.',
		name: 'callback',
		type: '(settings: Props) => void',
	},
	{
		default: 'false',
		desc: 'Used to keep the event listener after the egg has been triggered.',
		name: 'persist',
		type: 'boolean',
	},
	{
		default: '500',
		desc: 'Determines the timeout before the event listener resets. The longer the delay, the more time a user has to complete the pattern.',
		name: 'delay',
		type: 'number',
	},
	{
		default: `['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']`,
		desc: 'The key/click combination a user does to trigger easter egg. The default combination is the konami code.',
		name: 'pattern',
		type: 'string[]',
	},
	{
		default: 'body',
		desc: 'Use this to target DOM elements, Id\'s, or Class Names. Used with click events.',
		name: 'target',
		type: 'string',
	},
	{
		default: 'keydown',
		desc: 'The type of action the trigger will be listening for.',
		name: 'type',
		type: 'string',
	},
];


export const usePropsStore = defineStore('props', {
	state: () => {
		return {
			componentProps,
			propsHeaders,
		};
	},
});
