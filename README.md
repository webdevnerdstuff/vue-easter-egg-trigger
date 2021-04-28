
Vue Easter Egg Trigger
-------

![GitHub package.json version](https://img.shields.io/github/package-json/v/webdevnerdstuff/vue-easter-egg-trigger) [![NPM_PACKAGE](https://img.shields.io/badge/NPM%20-Package-%23cb3837)](https://github.com/webdevnerdstuff/vue-easter-egg-trigger) [![GitHub license](https://img.shields.io/github/license/webdevnerdstuff/vue-easter-egg-trigger)](https://github.com/webdevnerdstuff/vue-easter-egg-trigger/blob/main/LICENSE.md)

This packages makes it nice and easy to add Easter Egg triggers to your Vue site.


### Installation
 
```
npm i vue-easter-egg-trigger
```

## Usage
 
```javascript
import Vue from 'vue';
import EasterEggTrigger from 'vue-easter-egg-trigger';

Vue.use(EasterEggTrigger);
```

### Plugin Options
 
Name    | Type    | Default  | Description
:-----  | :------ | :-----   | :-----
delay   | Integer | 500 | Determins the timeout before the event lister resets
keys    | Array   | ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'] | The keys a user needs to enter to trigger the easter egg. The default combination is the konami code.
pattern | Array   |  [38, 38, 40, 40, 37, 39, 37, 39, 66, 65] | The keyCode a user enters to trigger the easter egg. This is a fallback for the keys option as it is depreciated.
type    | String  | keydown | The type of action the trigger will be listening for
 
##### Overriding the plugin default options
 
```javascript
import Vue from 'vue';
import EasterEggTrigger from 'vue-easter-egg-trigger';

Vue.use(EasterEggTrigger, {
  delay: 1000,
  keys: ['ArrowUp', 'ArrowDown'],
  pattern: [38, 40],
  type: 'keyup'
});
```

### Easter Egg Options
 
Name          | Type    | Default     | Description
:-----        | :------ | :-----      | :-----
callback      | Function | null       | The callback function
destroyBus    | Boolean  | false      | Determines if a bus $on event is destroyed automatically
keys          | Array    | false      | The key/click combination a user does to trigger easter egg.
name          | String   | easter-egg | Identifier & used for even bus callback
pattern       | Array    | false      | The key combination a user does to trigger easter egg. (fallback for keys)
target        | String   | div        | Use this to target DOM elements, Id's, or Class Names. Used with click events.
withBus       | Boolean  | true       | Determines if a bus event is emitted
<br>

### Instance Methods
 
There are two instance methods available to use.
`$easterEgg`
`$easterEggTrigger`
 
## Key Event Examples
 
The default key combination to trigger the easter egg is the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code).
 
ex. &#x2191; &#x2191; &#x2193; &#x2193; &#x2190; &#x2192; &#x2190; &#x2192; b a

##### Bare Egg Example.
 

```javascript
this.$bus.$on('easter-egg', () => {
  // do something...
});

this.$easterEgg();
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
});
```
 
##### Key Event with Callback only
 

```javascript
this.$easterEgg({
  name: 'easter-egg',
  callback() {
    // do something ...
  },
  withBus: false,
});
```

## Mouse Event Examples

First you will need to set the type in the plugin options.
 
Available types of Mouse Events: `click`, `dblclick`, `mouseup`, `mousedown`. 
When using `dblclick` the pattern will only work with one double click. Ex. pattern: `['dblclick']`

```javascript
import Vue from 'vue';
import EasterEggTrigger from 'vue-easter-egg-trigger';

Vue.use(EasterEggTrigger, {
  type: 'click'
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
});
```
 
 #####  Mouse Event using a DOM element target

```javascript
this.$easterEgg({
  name: 'easter-egg',
  pattern: ['click', 'click'],
  target: 'h1',
});
```
 
 #####  Mouse Event using an ID target

```javascript
this.$easterEgg({
  name: 'easter-egg',
  pattern: ['click', 'click'],
  target: '#foo',
});
```
 
 #####  Mouse Event using an Class target

```javascript
this.$easterEgg({
  name: 'easter-egg',
  pattern: ['click', 'click'],
  target: '.foo',
});
```
 
## More Examples
 
You can find more examples in the [EasterEgg.vue](https://github.com/webdevnerdstuff/vue-easter-egg-trigger/blob/main/src/components/EasterEgg.vue) file.
 
## Change Log

[CHANGELOG](https://github.com/webdevnerdstuff/vue-easter-egg-trigger/blob/main/CHANGELOG.md)
 

## License

Copyright (c) 2021 WebDevNerdStuff
Licensed under the MIT license.

[![@WebDevNerdStuff](https://img.shields.io/badge/github-webdevnerdstuff-brightgreen.svg)](https://github.com/webdevnerdstuff)
