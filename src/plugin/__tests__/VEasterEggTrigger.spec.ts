import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import { createApp, defineComponent, inject } from 'vue';
import VEasterEggTrigger, {
	createVEasterEggTrigger,
	EasterEggTrigger,
	globalOptions,
	VEasterEggTrigger as NamedVEasterEggTrigger,
} from '../index';
import type { Props } from '../types';


const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

const wrappers: VueWrapper[] = [];

function mountTrigger(props: Props = {}, global: Record<string, unknown> = {}) {
	const wrapper = mount(VEasterEggTrigger, {
		attachTo: document.body,
		global,
		props,
	});

	wrappers.push(wrapper);

	return wrapper;
}

function injectFromPlugin(options?: Props) {
	let injected: unknown;
	const Child = defineComponent({
		setup() {
			injected = inject(globalOptions);

			return () => null;
		},
	});

	wrappers.push(mount(Child, { global: { plugins: [createVEasterEggTrigger(options)] } }));

	return injected;
}

function pressKeys(keys: string[], target: EventTarget = document.body) {
	keys.forEach((key) => {
		target.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key }));
	});
}

function fire(type: string, target: Element, times = 1) {
	for (let i = 0; i < times; i++) {
		target.dispatchEvent(new MouseEvent(type, { bubbles: true }));
	}
}

function addElement(html: string): HTMLElement {
	const container = document.createElement('div');
	container.innerHTML = html;
	document.body.appendChild(container);

	return container.firstElementChild as HTMLElement;
}


beforeEach(() => {
	vi.useFakeTimers();
});

afterEach(() => {
	while (wrappers.length) {
		wrappers.pop()?.unmount();
	}

	document.body.innerHTML = '';
	vi.useRealTimers();
});


describe('plugin exports', () => {
	it('exposes the component under all export names', () => {
		expect(EasterEggTrigger).toBe(VEasterEggTrigger);
		expect(NamedVEasterEggTrigger).toBe(VEasterEggTrigger);
	});

	it('registers both global component names and provides options', () => {
		const options: Props = { delay: 1000 };
		const app = createApp({ render: () => null });

		app.use(createVEasterEggTrigger(options));

		expect(app.component('EasterEggTrigger')).toBe(VEasterEggTrigger);
		expect(app.component('VEasterEggTrigger')).toBe(VEasterEggTrigger);
		expect(injectFromPlugin(options)).toBe(options);
	});

	it('provides an empty options object by default', () => {
		expect(injectFromPlugin()).toEqual({});
	});
});


describe('keyboard patterns', () => {
	it('triggers on the default Konami code pattern', () => {
		const callback = vi.fn();
		const wrapper = mountTrigger({ callback });

		pressKeys(konami);

		expect(wrapper.emitted('triggered')).toHaveLength(1);
		expect(callback).toHaveBeenCalledTimes(1);
		expect(callback.mock.calls[0]?.[0]).toMatchObject({ pattern: konami, target: 'body', type: 'keydown' });
	});

	it('does not trigger on an incorrect pattern', () => {
		const wrapper = mountTrigger();

		pressKeys(['ArrowUp', 'ArrowDown', 'b', 'a']);

		expect(wrapper.emitted('triggered')).toBeUndefined();
	});

	it('does not trigger when the pattern is incomplete', () => {
		const wrapper = mountTrigger();

		pressKeys(konami.slice(0, -1));

		expect(wrapper.emitted('triggered')).toBeUndefined();
	});

	it('triggers on a custom pattern', () => {
		const wrapper = mountTrigger({ pattern: ['h', 'e', 'l', 'l', 'o'] });

		pressKeys(['h', 'e', 'l', 'l', 'o']);

		expect(wrapper.emitted('triggered')).toHaveLength(1);
	});

	it('supports the keyup event type', () => {
		const wrapper = mountTrigger({ pattern: ['x'], type: 'keyup' });

		pressKeys(['x']);
		expect(wrapper.emitted('triggered')).toBeUndefined();

		document.body.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: 'x' }));
		expect(wrapper.emitted('triggered')).toHaveLength(1);
	});

	it('resets the captured input when the delay passes between keys', () => {
		const wrapper = mountTrigger({ delay: 500, pattern: ['a', 'b', 'c'] });

		pressKeys(['a', 'b']);
		vi.advanceTimersByTime(501);
		pressKeys(['c']);

		expect(wrapper.emitted('triggered')).toBeUndefined();

		vi.advanceTimersByTime(501);
		pressKeys(['a', 'b', 'c']);

		expect(wrapper.emitted('triggered')).toHaveLength(1);
	});

	it('keeps the captured input while keys are pressed within the delay', () => {
		const wrapper = mountTrigger({ delay: 500, pattern: ['a', 'b', 'c'] });

		pressKeys(['a']);
		vi.advanceTimersByTime(400);
		pressKeys(['b']);
		vi.advanceTimersByTime(400);
		pressKeys(['c']);

		expect(wrapper.emitted('triggered')).toHaveLength(1);
	});

	it('only triggers once when persist is false', () => {
		const wrapper = mountTrigger({ pattern: ['a'] });

		pressKeys(['a']);
		vi.advanceTimersByTime(600);
		pressKeys(['a']);

		expect(wrapper.emitted('triggered')).toHaveLength(1);
	});

	it('triggers repeatedly when persist is true', () => {
		const wrapper = mountTrigger({ pattern: ['a'], persist: true });

		pressKeys(['a']);
		vi.advanceTimersByTime(600);
		pressKeys(['a']);

		expect(wrapper.emitted('triggered')).toHaveLength(2);
	});

	it('listens on a custom target element', () => {
		const input = addElement('<input id="secret" />');
		const wrapper = mountTrigger({ pattern: ['a', 'b'], target: '#secret' });

		pressKeys(['a', 'b']);
		expect(wrapper.emitted('triggered')).toBeUndefined();

		pressKeys(['a', 'b'], input);
		expect(wrapper.emitted('triggered')).toHaveLength(1);
	});
});


describe('mouse patterns', () => {
	it('triggers on clicks of an element matched by id', () => {
		const egg = addElement('<div id="egg"></div>');
		const wrapper = mountTrigger({ pattern: ['click', 'click'], target: '#egg', type: 'click' });

		fire('click', egg, 2);

		expect(wrapper.emitted('triggered')).toHaveLength(1);
	});

	it('triggers on clicks of an element matched by class', () => {
		const egg = addElement('<div class="egg other-class"></div>');
		const wrapper = mountTrigger({ pattern: ['click', 'click', 'click'], target: '.egg', type: 'click' });

		fire('click', egg, 3);

		expect(wrapper.emitted('triggered')).toHaveLength(1);
	});

	it('triggers on clicks of an element matched by node name', () => {
		const egg = addElement('<button></button>');
		const wrapper = mountTrigger({ pattern: ['click'], target: 'button', type: 'click' });

		fire('click', egg);

		expect(wrapper.emitted('triggered')).toHaveLength(1);
	});

	it('triggers on a double click', () => {
		const egg = addElement('<div id="egg"></div>');
		const wrapper = mountTrigger({ pattern: ['dblclick'], target: '#egg', type: 'dblclick' });

		fire('dblclick', egg);

		expect(wrapper.emitted('triggered')).toHaveLength(1);
	});

	it('triggers on mouseup and mousedown patterns', () => {
		const up = addElement('<div id="up"></div>');
		const down = addElement('<div id="down"></div>');
		const upWrapper = mountTrigger({ pattern: ['mouseup', 'mouseup'], target: '#up', type: 'mouseup' });
		const downWrapper = mountTrigger({ pattern: ['mousedown'], target: '#down', type: 'mousedown' });

		fire('mouseup', up, 2);
		fire('mousedown', down);

		expect(upWrapper.emitted('triggered')).toHaveLength(1);
		expect(downWrapper.emitted('triggered')).toHaveLength(1);
	});

	it('does not trigger with too few clicks', () => {
		const egg = addElement('<div id="egg"></div>');
		const wrapper = mountTrigger({ pattern: ['click', 'click', 'click'], target: '#egg', type: 'click' });

		fire('click', egg, 2);

		expect(wrapper.emitted('triggered')).toBeUndefined();
	});
});


describe('global options', () => {
	it('applies options provided by the plugin', () => {
		const callback = vi.fn();
		const wrapper = mountTrigger({}, {
			plugins: [createVEasterEggTrigger({ callback, pattern: ['g'] })],
		});

		pressKeys(['g']);

		expect(wrapper.emitted('triggered')).toHaveLength(1);
		expect(callback).toHaveBeenCalledTimes(1);
	});
});


describe('cleanup', () => {
	it('removes the keyboard listener when unmounted', () => {
		const callback = vi.fn();
		const wrapper = mountTrigger({ callback, pattern: ['a'], persist: true });

		wrapper.unmount();
		wrappers.splice(wrappers.indexOf(wrapper), 1);

		pressKeys(['a']);

		expect(callback).not.toHaveBeenCalled();
	});

	it('removes the mouse listener from a custom target when unmounted', () => {
		const callback = vi.fn();
		const egg = addElement('<div id="egg"></div>');
		const wrapper = mountTrigger({ callback, pattern: ['click'], persist: true, target: '#egg', type: 'click' });

		wrapper.unmount();
		wrappers.splice(wrappers.indexOf(wrapper), 1);

		fire('click', egg);

		expect(callback).not.toHaveBeenCalled();
	});

	it('clears pending timers when unmounted', () => {
		const wrapper = mountTrigger({ pattern: ['a', 'b'] });

		pressKeys(['a']);
		expect(vi.getTimerCount()).toBeGreaterThan(0);

		wrapper.unmount();
		wrappers.splice(wrappers.indexOf(wrapper), 1);

		expect(vi.getTimerCount()).toBe(0);
	});
});


describe('errors', () => {
	it('throws when the target element does not exist', () => {
		expect(() => mountTrigger({ target: '#missing' })).toThrowError('Element not found: #missing');
	});
});
