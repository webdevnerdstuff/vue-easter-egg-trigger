
<p align="center">
  <img alt="Vue Logo" width="100" src="https://webdevnerdstuff.github.io/vue3-easter-egg-trigger/vue.svg">
</p>

<p>
  <h1 align="center">Vue 3 Easter Egg Trigger</h1>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue3-easter-egg-trigger">
    <img src="https://img.shields.io/npm/v/vue3-easter-egg-trigger?color=1867c0&logo=npm" alt="NPM Package">
  </a>
  &nbsp;
  <a href="https://github.com/webdevnerdstuff/vue3-easter-egg-trigger">
    <img src="https://img.shields.io/badge/GitHub-WebDevNerdStuff-brightgreen.svg?logo=github" alt="@WebDevNerdStuff">
  </a>
</p>

## Description

The `vue3-easter-egg-trigger` component makes it nice and easy to add Easter Egg triggers to your Vue site. Also available for Vue 2 at [vue2-easter-egg-trigger](https://github.com/webdevnerdstuff/vue-easter-egg-trigger).
 
## Installation
#### pnpm
```
pnpm add vue3-easter-egg-trigger
```
#### npm
```
npm i vue3-easter-egg-trigger
```
 
## Register
#### As Plugin (Global)
```javascript
import { createApp } from 'vue';
import EasterEggTrigger from 'vue3-easter-egg-trigger';

createApp()
  .use(EasterEggTrigger)
  .mount('#app');
```
 
#### As Component (Global)
```javascript
import { createApp } from 'vue';
import EasterEggTrigger from 'vue3-easter-egg-trigger';

createApp()
  .component('EasterEggTrigger', EasterEggTrigger)
  .mount('#app');
```
 
#### As Component (Local)
##### Composition API
```javascript
<script setup>
import { EasterEggTrigger } from 'vue3-easter-egg-trigger';

function easterEggTriggered() {
  // ...do something
}
</script>

<template>
  <EasterEggTrigger @triggered="easterEggTriggered" />
</template>
```
 
```javascript
<script>
import { EasterEggTrigger } from 'vue3-easter-egg-trigger';

export default {
  components: {
    EasterEggTrigger,
  },
  setup() {
    function easterEggTriggered() {
      // ...do something
    }

    return {
      easterEggTriggered,
    };
  },
};
</script>

<template>
  <EasterEggTrigger @triggered="easterEggTriggered" />
</template>

```
##### Options API
```javascript
<script>
import { EasterEggTrigger } from 'vue3-easter-egg-trigger';

export default {
  components: {
    EasterEggTrigger,
  },
  data() {
    return {};
  },
  methods: {
    easterEggTriggered() {
      // ...do something
    },
  },
};
</script>

<template>
  <EasterEggTrigger @triggered="easterEggTriggered" />
</template>;
```
## Usage
 
 #### Demo
See it in action on the [Demo Page](https://webdevnerdstuff.github.io/vue3-easter-egg-trigger)
 
### Plugin Props
 
Name      | Type     | Default    | Description
:-----    | :------  | :-----     | :-----
callback  | Function | null       | The callback function
delay     | String, Integer | 500 | Determines the timeout before the event listener resets. The longer the delay, the more time a user has to complete the pattern.
pattern   | Array    | ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'] | The key/click combination a user does to trigger easter egg. The default combination is the konami code.
target    | String   | body       | Use this to target DOM elements, Id's, or Class Names. Used with click events.
type      | String   | keydown    | The type of action the trigger will be listening for. Available options: `keydown`, `keyup`, `click`, `dblclick`, `mouseup`, `mousedown`

### Events
 
Name    | Type    | Description
:-----  | :------ | :-----
triggered | [MouseEvent, KeyboardEvent] | Emitted when the easter egg is triggered.
 
## Keyboard Event Examples
 
The default key combination to trigger the easter egg is the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code).
 
ex. &#x2191; &#x2191; &#x2193; &#x2193; &#x2190; &#x2192; &#x2190; &#x2192; b a

##### Bare Egg Example.
 

```html
<EasterEggTrigger @triggered="easterEggTriggered" />
```
 
##### Custom Pattern
 
```html
<EasterEggTrigger
  :pattern="['m', 'a', 'g', 'i', 'c']"
  @triggered="easterEggTriggered"
/>
```
 
##### Delay (longer time to complete pattern)
```html
<EasterEggTrigger
  delay="5000"
  @triggered="easterEggTriggered"
/>
```
 
##### Callback
 

```html
<EasterEggTrigger :callback="easterEggTriggered" />
```

## Mouse Event Examples

First you will need to set the type prop.
 
Available types of Mouse Events: `click`, `dblclick`, `mouseup`, `mousedown`. 
When using `dblclick` the pattern will only work with one double click. Ex. pattern: `['dblclick']`

```html
<EasterEggTrigger
  :pattern="['click']"
  target="#id-target"
  type="click"
  @triggered="easterEggTriggered"
/>
```
 
#### Multiple clicks required
```html
<EasterEggTrigger
  :pattern="['click', 'click']"
  target="#id-target"
  type="click"
  @triggered="easterEggTriggered"
/>
```
 
#####  DOM element target

```html
<EasterEggTrigger
  :pattern="['click']"
  target="h1"
  type="click"
  @triggered="easterEggTriggered"
/>
```
 
 #####  ID target

```html
<EasterEggTrigger
  :pattern="['click']"
  target="#id-target"
  type="click"
  @triggered="easterEggTriggered"
/>
```
 
 #####  Class target

```html
<EasterEggTrigger
  :pattern="['click']"
  target=".double-click-target"
  type="click"
  @triggered="easterEggTriggered"
/>
```
 
## Change Log

[CHANGELOG](https://github.com/webdevnerdstuff/vue3-easter-egg-trigger/blob/main/CHANGELOG.md)
 
## License

Copyright (c) 2022 WebDevNerdStuff
Licensed under the MIT license.

[![GitHub license](https://img.shields.io/github/license/webdevnerdstuff/vue3-easter-egg-trigger)](https://github.com/webdevnerdstuff/vue3-easter-egg-trigger/blob/main/LICENSE.md) [![@WebDevNerdStuff](https://img.shields.io/badge/github-webdevnerdstuff-brightgreen.svg)](https://github.com/webdevnerdstuff)
