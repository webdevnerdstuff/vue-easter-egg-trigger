
<p align="center">
  <img alt="Vue Logo" width="100" src="https://webdevnerdstuff.github.io/vue3-easter-egg-trigger/vue.svg">
</p>

<p>
  <h1 align="center">Vue Easter Egg Trigger</h1>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-easter-egg-trigger">
    <img src="https://img.shields.io/npm/v/vue-easter-egg-trigger?color=1867c0&logo=npm" alt="NPM Package">
  </a>
  &nbsp;
  <a href="https://github.com/webdevnerdstuff/vue-easter-egg-trigger">
    <img src="https://img.shields.io/badge/GitHub-WebDevNerdStuff-brightgreen.svg?logo=github" alt="@WebDevNerdStuff">
  </a>
</p>

## Description

The `vue-easter-egg-trigger` component makes it nice and easy to add Easter Egg triggers to your Vue site. Also available for Vue 3 at [vue3-easter-egg-trigger](https://github.com/webdevnerdstuff/vue3-easter-egg-trigger).
 
## Installation
#### pnpm
```
pnpm add vue-easter-egg-trigger
```
#### npm
```
npm i vue-easter-egg-trigger
```
 
## Register
 
 ### Plugin Registration
```javascript
import Vue from 'vue';
import EasterEggTrigger from 'vue-easter-egg-trigger';

Vue.use(EasterEggTrigger);
```
### Component Registration
```javascript
import { EasterEggComponent } from 'vue-easter-egg-trigger';
```
 
## Usage
 
 #### Demo
See it in action on the [Demo Page](https://webdevnerdstuff.github.io/vue-easter-egg-trigger)
 
## Options
### Plugin Global Options
 
Name    | Type    | Default  | Description
:-----  | :------ | :-----   | :-----
delay   | Integer | 500 | Determines the timeout before the event lister resets.
 
##### Overriding the plugin default delay option
 
```javascript
import Vue from 'vue';
import EasterEggTrigger from 'vue-easter-egg-trigger';

Vue.use(EasterEggTrigger, {
  delay: 1000,
});
```

### Easter Egg Options
 
<table>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Default</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">callback</td>
<td align="left">Function</td>
<td align="left">null</td>
<td align="left">The callback function.</td>
</tr>
<tr>
<td align="left">destroyBus</td>
<td align="left">Boolean</td>
<td align="left">true</td>
<td align="left">Determines if a bus $on event is destroyed automatically.</td>
</tr>
<tr>
<td align="left">name</td>
<td align="left">String</td>
<td align="left">easter-egg</td>
<td align="left">Identifier &amp; used for even bus callback.</td>
</tr>
<tr>
<td align="left">pattern</td>
<td align="left">Array</td>
<td align="left">['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft',
'ArrowRight', 'b',
'a']</td>
<td align="left">The key/click combination a user does to trigger easter egg. The default combination is the
konami code.</td>
</tr>
<tr>
<td align="left">target</td>
<td align="left">String</td>
<td align="left">div</td>
<td align="left">Use this to target DOM elements, Id's, or Class Names. Used with click events.</td>
</tr>
<tr>
<td align="left">triggered</td>
<td align="left">Function</td>
<td align="left">null</td>
<td align="left">Same functionality as the callback option.</td>
</tr>
<tr>
<td align="left">type</td>
<td align="left">String</td>
<td align="left">keydown</td>
<td align="left">The type of action the trigger will be listening for.</td>
</tr>
<tr>
<td align="left">withBus</td>
<td align="left">Boolean</td>
<td align="left">false</td>
<td align="left">Determines if a bus event is emitted.</td>
</tr>
</tbody>
</table>
 
### Events Handlers (component only)

<table>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Response</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">callback</td>
<td align="left">$event</td>
<td align="left">The callback event handler. If you use $event it will return the easter egg options object.</td>
</tr>
<tr>
<td align="left">triggered</td>
<td align="left">$event</td>
<td align="left">Same functionality as the callback event handler.</td>
</tr>
</tbody>
</table>
 
##### Example
```html
<EasterEggComponent
  @callback="callbackEvent($event)"
/>
```
 
## Component
 
When using the component you will setup `VueEasterEggTrigger` using the Component Registration.
 
### Events
 
Instead of using `:callback` and `:triggered` as an option you can use the `@callback` and `@triggered` event handlers.
 
### Examples
#### Key Event Examples
 
The default key combination to trigger the easter egg is the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code).

##### Bare Egg Example.
 

```html
<template>
  <EasterEggComponent
    type="click"
    @callback="callbackEvent('using-component')"
  />
</template>
```

##### Key Event with Callback & Bus Emit
 

```html
<EasterEggComponent
  :withBus"true"
  type="keydown"
  @callback="callbackEvent('using-component')"
/>

<script>
this.$bus.$on('easter-egg', () => {
  // also do something...
});

export default {
  methods: {
    callbackEvent(name) {
      // do something ...
    },
  },
};
</script>
```
 
##### Key Event with Callback only
 
```html
<EasterEggComponent
  type="keydown"
  @callback="callbackEvent('using-component')"
/>

<script>
export default {
  methods: {
    callbackEvent(name) {
      // do something ...
    },
  },
};
</script>
```
 
##### Key Event with Triggered only
 
```html
<EasterEggComponent
  type="keydown"
  @triggered="triggeredEvent('using-component')"
/>

<script>
export default {
  methods: {
    triggeredEvent(name) {
      // do something ...
    },
  },
};
</script>
```

#### Mouse Event Examples

First you will need to set the type in the plugin options.
 
Available types of Mouse Events: `click`, `dblclick`, `mouseup`, `mousedown`. 
When using `dblclick` the pattern will only work with one double click. Ex. pattern: `['dblclick']`

```html
<EasterEggComponent
  type="click"
  @callback="callbackEvent('using-component')"
/>

<script>
export default {
  methods: {
    callbackEvent(name) {
      // do something ...
    },
  },
};
</script>
```
 
##### Mouse Event with Callback & Bus Emit
 
```html
<EasterEggComponent
  type="click"
  @callback="callbackEvent('using-component')"
/>

<script>
this.$bus.$on('easter-egg', () => {
  // also do something...
});

export default {
  methods: {
    callbackEvent(name) {
      // do something ...
    },
  },
};
</script>
```
 
 #####  Mouse Event using a DOM element target

```html
<EasterEggComponent
  type="click"
  target="h1"
  @callback="callbackEvent('using-component')"
/>

<script>
export default {
  methods: {
    callbackEvent(name) {
      // do something ...
    },
  },
};
</script>
```
 
 #####  Mouse Event using an ID target

```html
<EasterEggComponent
  type="click"
  target="#foo"
  pattern="['click', 'click']"
  @callback="callbackEvent('using-component')"
/>

<script>
export default {
  methods: {
    callbackEvent(name) {
      // do something ...
    },
  },
};
</script>
```
 
 #####  Mouse Event using an Class target

```html
<EasterEggComponent
  type="click"
  target=".foo"
  pattern="['click', 'click', 'click']"
  @callback="callbackEvent('using-component')"
/>

<script>
export default {
  methods: {
    callbackEvent(name) {
      // do something ...
    },
  },
};
</script>
```

## Instance Methods
 
There are two instance methods available to use.
`$easterEgg`
`$easterEggTrigger`
 
When using an instance method you will setup `VueEasterEggTrigger` using the Plugin Registration.
### Examples
#### Key Event Examples
 
The default key combination to trigger the easter egg is the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code).

##### Bare Egg Example.
 

```javascript
this.$bus.$on('easter-egg', () => {
  // do something...
});

this.$easterEgg({
  withBus: true,
});
```

##### Key Event with Callback & Bus Emit
 

```javascript
this.$bus.$on('easter-egg', () => {
  // also do something...
});

this.$easterEgg({
  name: 'easter-egg',
  callback() {
    // do something ...
  },
  withBus: true,
});
```
 
##### Key Event with Callback only
 

```javascript
this.$easterEgg({
  name: 'easter-egg',
  callback() {
    // do something ...
  },
});
```
 
##### Key Event with Triggered only
 

```javascript
this.$easterEgg({
  name: 'easter-egg',
  triggered() {
    // do something ...
  },
});
```

#### Mouse Event Examples

First you will need to set the type in the plugin options.
 
Available types of Mouse Events: `click`, `dblclick`, `mouseup`, `mousedown`. 
When using `dblclick` the pattern will only work with one double click. Ex. pattern: `['dblclick']`

```javascript
import Vue from 'vue';
import EasterEggTrigger from 'vue-easter-egg-trigger';

Vue.use(EasterEggTrigger, {
  type: 'click',
  callback() {
    // do something ...
  },
});
```
 
##### Mouse Event with Callback & Bus Emit
 

```javascript
this.$bus.$on('easter-egg', () => {
  // also do something...
});

this.$easterEgg({
  name: 'easter-egg',
  pattern: ['click', 'click'],
  callback() {
    // do something...
  },
  withBus: true,
});
```
 
 #####  Mouse Event using a DOM element target

```javascript
this.$easterEgg({
  name: 'easter-egg',
  pattern: ['click', 'click'],
  target: 'h1',
  callback() {
    // do something ...
  },
});
```
 
 #####  Mouse Event using an ID target

```javascript
this.$easterEgg({
  name: 'easter-egg',
  pattern: ['click', 'click'],
  target: '#foo',
  callback() {
    // do something ...
  },
});
```
 
 #####  Mouse Event using an Class target

```javascript
this.$easterEgg({
  name: 'easter-egg',
  pattern: ['click', 'click'],
  target: '.foo',
  callback() {
    // do something ...
  },
});
```
 
## Practical Usage Example
 
You can find a real world example on how to use the plugin in the [HelloWorld.vue](https://github.com/webdevnerdstuff/vue-easter-egg-trigger/blob/main/src/components/HelloWorld.vue) file.
 
## Change Log

[CHANGELOG](https://github.com/webdevnerdstuff/vue-easter-egg-trigger/blob/main/CHANGELOG.md)
 

## License

Copyright (c) 2022 WebDevNerdStuff
Licensed under the MIT license.

[![GitHub license](https://img.shields.io/github/license/webdevnerdstuff/vue3-easter-egg-trigger)](https://github.com/webdevnerdstuff/vue-easter-egg-trigger/blob/main/LICENSE.md) [![@WebDevNerdStuff](https://img.shields.io/badge/github-webdevnerdstuff-brightgreen.svg)](https://github.com/webdevnerdstuff)
