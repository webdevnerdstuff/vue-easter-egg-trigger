/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash include="includes,isEqual,findIndex,uniq"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function() {
	/** Used as a safe reference for `undefined` in pre-ES5 environments. */
	let undefined;

	/** Used as the semantic version number. */
	const VERSION = '4.17.5';

	/** Used as the size to enable large array optimizations. */
	const LARGE_ARRAY_SIZE = 200;

	/** Error message constants. */
	const FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to stand-in for `undefined` hash values. */
	const HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as the maximum memoize cache size. */
	const MAX_MEMOIZE_SIZE = 500;

	/** Used to compose bitmasks for cloning. */
	const CLONE_DEEP_FLAG = 1;
	const CLONE_FLAT_FLAG = 2;
	const CLONE_SYMBOLS_FLAG = 4;

	/** Used to compose bitmasks for value comparisons. */
	const COMPARE_PARTIAL_FLAG = 1;
	const COMPARE_UNORDERED_FLAG = 2;

	/** Used as references for various `Number` constants. */
	const INFINITY = 1 / 0;
	const MAX_SAFE_INTEGER = 9007199254740991;
	const MAX_INTEGER = 1.7976931348623157e+308;
	const NAN = 0 / 0;

	/** `Object#toString` result references. */
	const argsTag = '[object Arguments]';
	const arrayTag = '[object Array]';
	const asyncTag = '[object AsyncFunction]';
	const boolTag = '[object Boolean]';
	const dateTag = '[object Date]';
	const errorTag = '[object Error]';
	const funcTag = '[object Function]';
	const genTag = '[object GeneratorFunction]';
	const mapTag = '[object Map]';
	const numberTag = '[object Number]';
	const nullTag = '[object Null]';
	const objectTag = '[object Object]';
	const promiseTag = '[object Promise]';
	const proxyTag = '[object Proxy]';
	const regexpTag = '[object RegExp]';
	const setTag = '[object Set]';
	const stringTag = '[object String]';
	const symbolTag = '[object Symbol]';
	const undefinedTag = '[object Undefined]';
	const weakMapTag = '[object WeakMap]';

	const arrayBufferTag = '[object ArrayBuffer]';
	const dataViewTag = '[object DataView]';
	const float32Tag = '[object Float32Array]';
	const float64Tag = '[object Float64Array]';
	const int8Tag = '[object Int8Array]';
	const int16Tag = '[object Int16Array]';
	const int32Tag = '[object Int32Array]';
	const uint8Tag = '[object Uint8Array]';
	const uint8ClampedTag = '[object Uint8ClampedArray]';
	const uint16Tag = '[object Uint16Array]';
	const uint32Tag = '[object Uint32Array]';

	/** Used to match property names within property paths. */
	const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
	const reIsPlainProp = /^\w*$/;
	const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
	const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match leading and trailing whitespace. */
	const reTrim = /^\s+|\s+$/g;

	/** Used to match backslashes in property paths. */
	const reEscapeChar = /\\(\\)?/g;

	/** Used to match `RegExp` flags from their coerced string values. */
	const reFlags = /\w*$/;

	/** Used to detect bad signed hexadecimal string values. */
	const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	const reIsBinary = /^0b[01]+$/i;

	/** Used to detect host constructors (Safari). */
	const reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect octal string values. */
	const reIsOctal = /^0o[0-7]+$/i;

	/** Used to detect unsigned integer values. */
	const reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	const typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	const cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

	/** Built-in method references without a dependency on `root`. */
	const freeParseInt = parseInt;

	/** Detect free variable `global` from Node.js. */
	const freeGlobal = typeof global === 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	const freeSelf = typeof self === 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	const root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	const freeExports = typeof exports === 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	const freeModule = freeExports && typeof module === 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	const moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	const freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	const nodeUtil = (function() {
		try {
			return freeProcess && freeProcess.binding && freeProcess.binding('util');
		}
		catch (e) {}
	}());

	/* Node.js helper references. */
	const nodeIsMap = nodeUtil && nodeUtil.isMap;
	const nodeIsSet = nodeUtil && nodeUtil.isSet;
	const nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/*--------------------------------------------------------------------------*/

	/**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
	function arrayEach(array, iteratee) {
		let index = -1;
		const length = array == null ? 0 : array.length;

		while (++index < length) {
			if (iteratee(array[index], index, array) === false) {
				break;
			}
		}
		return array;
	}

	/**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
	function arrayFilter(array, predicate) {
		let index = -1;
		const length = array == null ? 0 : array.length;
		let resIndex = 0;
		const result = [];

		while (++index < length) {
			const value = array[index];
			if (predicate(value, index, array)) {
				result[resIndex++] = value;
			}
		}
		return result;
	}

	/**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
	function arrayIncludes(array, value) {
		const length = array == null ? 0 : array.length;
		return !!length && baseIndexOf(array, value, 0) > -1;
	}

	/**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
	function arrayIncludesWith(array, value, comparator) {
		let index = -1;
		const length = array == null ? 0 : array.length;

		while (++index < length) {
			if (comparator(value, array[index])) {
				return true;
			}
		}
		return false;
	}

	/**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
	function arrayMap(array, iteratee) {
		let index = -1;
		const length = array == null ? 0 : array.length;
		const result = Array(length);

		while (++index < length) {
			result[index] = iteratee(array[index], index, array);
		}
		return result;
	}

	/**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
	function arrayPush(array, values) {
		let index = -1;
		const length = values.length;
		const offset = array.length;

		while (++index < length) {
			array[offset + index] = values[index];
		}
		return array;
	}

	/**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
	function arraySome(array, predicate) {
		let index = -1;
		const length = array == null ? 0 : array.length;

		while (++index < length) {
			if (predicate(array[index], index, array)) {
				return true;
			}
		}
		return false;
	}

	/**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
		const length = array.length;
		let index = fromIndex + (fromRight ? 1 : -1);

		while ((fromRight ? index-- : ++index < length)) {
			if (predicate(array[index], index, array)) {
				return index;
			}
		}
		return -1;
	}

	/**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
	function baseIndexOf(array, value, fromIndex) {
		return value === value ?
			strictIndexOf(array, value, fromIndex) :
			baseFindIndex(array, baseIsNaN, fromIndex);
	}

	/**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
	function baseIsNaN(value) {
		return value !== value;
	}

	/**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
	function baseProperty(key) {
		return function(object) {
			return object == null ? undefined : object[key];
		};
	}

	/**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
	function baseTimes(n, iteratee) {
		let index = -1;
		const result = Array(n);

		while (++index < n) {
			result[index] = iteratee(index);
		}
		return result;
	}

	/**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
	function baseUnary(func) {
		return function(value) {
			return func(value);
		};
	}

	/**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
	function baseValues(object, props) {
		return arrayMap(props, (key) => object[key]);
	}

	/**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
	function cacheHas(cache, key) {
		return cache.has(key);
	}

	/**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
	function getValue(object, key) {
		return object == null ? undefined : object[key];
	}

	/**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
	function mapToArray(map) {
		let index = -1;
		const result = Array(map.size);

		map.forEach((value, key) => {
			result[++index] = [key, value];
		});
		return result;
	}

	/**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
	function overArg(func, transform) {
		return function(arg) {
			return func(transform(arg));
		};
	}

	/**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
	function setToArray(set) {
		let index = -1;
		const result = Array(set.size);

		set.forEach((value) => {
			result[++index] = value;
		});
		return result;
	}

	/**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
	function strictIndexOf(array, value, fromIndex) {
		let index = fromIndex - 1;
		const length = array.length;

		while (++index < length) {
			if (array[index] === value) {
				return index;
			}
		}
		return -1;
	}

	/*--------------------------------------------------------------------------*/

	/** Used for built-in method references. */
	const arrayProto = Array.prototype;
	const funcProto = Function.prototype;
	const objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	const coreJsData = root['__core-js_shared__'];

	/** Used to resolve the decompiled source of functions. */
	const funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	const hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect methods masquerading as native. */
	const maskSrcKey = (function() {
		const uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
		return uid ? (`Symbol(src)_1.${uid}`) : '';
	}());

	/**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
	const nativeObjectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	const reIsNative = RegExp(`^${
		funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
			.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?')}$`,
	);

	/** Built-in value references. */
	const Buffer = moduleExports ? root.Buffer : undefined;
	const Symbol = root.Symbol;
	const Uint8Array = root.Uint8Array;
	const allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
	const getPrototype = overArg(Object.getPrototypeOf, Object);
	const objectCreate = Object.create;
	const propertyIsEnumerable = objectProto.propertyIsEnumerable;
	const splice = arrayProto.splice;
	const symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	const defineProperty = (function() {
		try {
			const func = getNative(Object, 'defineProperty');
			func({}, '', {});
			return func;
		}
		catch (e) {}
	}());

	/* Built-in method references for those with the same name as other `lodash` methods. */
	const nativeGetSymbols = Object.getOwnPropertySymbols;
	const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	const nativeKeys = overArg(Object.keys, Object);
	const nativeMax = Math.max;

	/* Built-in method references that are verified to be native. */
	const DataView = getNative(root, 'DataView');
	const Map = getNative(root, 'Map');
	const Promise = getNative(root, 'Promise');
	const Set = getNative(root, 'Set');
	const WeakMap = getNative(root, 'WeakMap');
	const nativeCreate = getNative(Object, 'create');

	/** Used to lookup unminified function names. */
	const realNames = {};

	/** Used to detect maps, sets, and weakmaps. */
	const dataViewCtorString = toSource(DataView);
	const mapCtorString = toSource(Map);
	const promiseCtorString = toSource(Promise);
	const setCtorString = toSource(Set);
	const weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	const symbolProto = Symbol ? Symbol.prototype : undefined;
	const symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	const symbolToString = symbolProto ? symbolProto.toString : undefined;

	/*------------------------------------------------------------------------*/

	/**
   * Creates a `lodash` object which wraps `value` to enable implicit method
   * chain sequences. Methods that operate on and return arrays, collections,
   * and functions can be chained together. Methods that retrieve a single value
   * or may return a primitive value will automatically end the chain sequence
   * and return the unwrapped value. Otherwise, the value must be unwrapped
   * with `_#value`.
   *
   * Explicit chain sequences, which must be unwrapped with `_#value`, may be
   * enabled using `_.chain`.
   *
   * The execution of chained methods is lazy, that is, it's deferred until
   * `_#value` is implicitly or explicitly called.
   *
   * Lazy evaluation allows several methods to support shortcut fusion.
   * Shortcut fusion is an optimization to merge iteratee calls; this avoids
   * the creation of intermediate arrays and can greatly reduce the number of
   * iteratee executions. Sections of a chain sequence qualify for shortcut
   * fusion if the section is applied to an array and iteratees accept only
   * one argument. The heuristic for whether a section qualifies for shortcut
   * fusion is subject to change.
   *
   * Chaining is supported in custom builds as long as the `_#value` method is
   * directly or indirectly included in the build.
   *
   * In addition to lodash methods, wrappers have `Array` and `String` methods.
   *
   * The wrapper `Array` methods are:
   * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
   *
   * The wrapper `String` methods are:
   * `replace` and `split`
   *
   * The wrapper methods that support shortcut fusion are:
   * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
   * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
   * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
   *
   * The chainable wrapper methods are:
   * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
   * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
   * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
   * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
   * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
   * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
   * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
   * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
   * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
   * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
   * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
   * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
   * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
   * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
   * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
   * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
   * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
   * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
   * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
   * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
   * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
   * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
   * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
   * `zipObject`, `zipObjectDeep`, and `zipWith`
   *
   * The wrapper methods that are **not** chainable by default are:
   * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
   * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
   * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
   * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
   * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
   * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
   * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
   * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
   * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
   * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
   * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
   * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
   * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
   * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
   * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
   * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
   * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
   * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
   * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
   * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
   * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
   * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
   * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
   * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
   * `upperFirst`, `value`, and `words`
   *
   * @name _
   * @constructor
   * @category Seq
   * @param {*} value The value to wrap in a `lodash` instance.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var wrapped = _([1, 2, 3]);
   *
   * // Returns an unwrapped value.
   * wrapped.reduce(_.add);
   * // => 6
   *
   * // Returns a wrapped value.
   * var squares = wrapped.map(square);
   *
   * _.isArray(squares);
   * // => false
   *
   * _.isArray(squares.value());
   * // => true
   */
	function lodash() {
		// No operation performed.
	}

	/**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
	const baseCreate = (function() {
		function object() {}
		return function(proto) {
			if (!isObject(proto)) {
				return {};
			}
			if (objectCreate) {
				return objectCreate(proto);
			}
			object.prototype = proto;
			const result = new object();
			object.prototype = undefined;
			return result;
		};
	}());

	/*------------------------------------------------------------------------*/

	/**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
	function Hash(entries) {
		let index = -1;
		const length = entries == null ? 0 : entries.length;

		this.clear();
		while (++index < length) {
			const entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}

	/**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
	function hashClear() {
		this.__data__ = nativeCreate ? nativeCreate(null) : {};
		this.size = 0;
	}

	/**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
	function hashDelete(key) {
		const result = this.has(key) && delete this.__data__[key];
		this.size -= result ? 1 : 0;
		return result;
	}

	/**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
	function hashGet(key) {
		const data = this.__data__;
		if (nativeCreate) {
			const result = data[key];
			return result === HASH_UNDEFINED ? undefined : result;
		}
		return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
	function hashHas(key) {
		const data = this.__data__;
		return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	/**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
	function hashSet(key, value) {
		const data = this.__data__;
		this.size += this.has(key) ? 0 : 1;
		data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
		return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype.delete = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/*------------------------------------------------------------------------*/

	/**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
	function ListCache(entries) {
		let index = -1;
		const length = entries == null ? 0 : entries.length;

		this.clear();
		while (++index < length) {
			const entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}

	/**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
	function listCacheClear() {
		this.__data__ = [];
		this.size = 0;
	}

	/**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
	function listCacheDelete(key) {
		const data = this.__data__;
		const index = assocIndexOf(data, key);

		if (index < 0) {
			return false;
		}
		const lastIndex = data.length - 1;
		if (index == lastIndex) {
			data.pop();
		}
		else {
			splice.call(data, index, 1);
		}
		--this.size;
		return true;
	}

	/**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
	function listCacheGet(key) {
		const data = this.__data__;
		const index = assocIndexOf(data, key);

		return index < 0 ? undefined : data[index][1];
	}

	/**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
	function listCacheHas(key) {
		return assocIndexOf(this.__data__, key) > -1;
	}

	/**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
	function listCacheSet(key, value) {
		const data = this.__data__;
		const index = assocIndexOf(data, key);

		if (index < 0) {
			++this.size;
			data.push([key, value]);
		}
		else {
			data[index][1] = value;
		}
		return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype.delete = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/*------------------------------------------------------------------------*/

	/**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
	function MapCache(entries) {
		let index = -1;
		const length = entries == null ? 0 : entries.length;

		this.clear();
		while (++index < length) {
			const entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}

	/**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
	function mapCacheClear() {
		this.size = 0;
		this.__data__ = {
			hash: new Hash(),
			map: new (Map || ListCache)(),
			string: new Hash(),
		};
	}

	/**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
	function mapCacheDelete(key) {
		const result = getMapData(this, key).delete(key);
		this.size -= result ? 1 : 0;
		return result;
	}

	/**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
	function mapCacheGet(key) {
		return getMapData(this, key).get(key);
	}

	/**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
	function mapCacheHas(key) {
		return getMapData(this, key).has(key);
	}

	/**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
	function mapCacheSet(key, value) {
		const data = getMapData(this, key);
		const size = data.size;

		data.set(key, value);
		this.size += data.size == size ? 0 : 1;
		return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype.delete = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/*------------------------------------------------------------------------*/

	/**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
	function SetCache(values) {
		let index = -1;
		const length = values == null ? 0 : values.length;

		this.__data__ = new MapCache();
		while (++index < length) {
			this.add(values[index]);
		}
	}

	/**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
	function setCacheAdd(value) {
		this.__data__.set(value, HASH_UNDEFINED);
		return this;
	}

	/**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
	function setCacheHas(value) {
		return this.__data__.has(value);
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	/*------------------------------------------------------------------------*/

	/**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
	function Stack(entries) {
		const data = this.__data__ = new ListCache(entries);
		this.size = data.size;
	}

	/**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
	function stackClear() {
		this.__data__ = new ListCache();
		this.size = 0;
	}

	/**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
	function stackDelete(key) {
		const data = this.__data__;
		const result = data.delete(key);

		this.size = data.size;
		return result;
	}

	/**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
	function stackGet(key) {
		return this.__data__.get(key);
	}

	/**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
	function stackHas(key) {
		return this.__data__.has(key);
	}

	/**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
	function stackSet(key, value) {
		let data = this.__data__;
		if (data instanceof ListCache) {
			const pairs = data.__data__;
			if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
				pairs.push([key, value]);
				this.size = ++data.size;
				return this;
			}
			data = this.__data__ = new MapCache(pairs);
		}
		data.set(key, value);
		this.size = data.size;
		return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype.delete = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/*------------------------------------------------------------------------*/

	/**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
	function arrayLikeKeys(value, inherited) {
		const isArr = isArray(value);
		const isArg = !isArr && isArguments(value);
		const isBuff = !isArr && !isArg && isBuffer(value);
		const isType = !isArr && !isArg && !isBuff && isTypedArray(value);
		const skipIndexes = isArr || isArg || isBuff || isType;
		const result = skipIndexes ? baseTimes(value.length, String) : [];
		const length = result.length;

		for (const key in value) {
			if ((inherited || hasOwnProperty.call(value, key)) &&
          !(skipIndexes && (
          // Safari 9 has enumerable `arguments.length` in strict mode.
          	key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             isIndex(key, length)
          ))) {
				result.push(key);
			}
		}
		return result;
	}

	/**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
	function assignValue(object, key, value) {
		const objValue = object[key];
		if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
        (value === undefined && !(key in object))) {
			baseAssignValue(object, key, value);
		}
	}

	/**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
	function assocIndexOf(array, key) {
		let length = array.length;
		while (length--) {
			if (eq(array[length][0], key)) {
				return length;
			}
		}
		return -1;
	}

	/**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
	function baseAssign(object, source) {
		return object && copyObject(source, keys(source), object);
	}

	/**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
	function baseAssignIn(object, source) {
		return object && copyObject(source, keysIn(source), object);
	}

	/**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
	function baseAssignValue(object, key, value) {
		if (key == '__proto__' && defineProperty) {
			defineProperty(object, key, {
				configurable: true,
				enumerable: true,
				value,
				writable: true,
			});
		}
		else {
			object[key] = value;
		}
	}

	/**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
	function baseClone(value, bitmask, customizer, key, object, stack) {
		let result;
		const isDeep = bitmask & CLONE_DEEP_FLAG;
		const isFlat = bitmask & CLONE_FLAT_FLAG;
		const isFull = bitmask & CLONE_SYMBOLS_FLAG;

		if (customizer) {
			result = object ? customizer(value, key, object, stack) : customizer(value);
		}
		if (result !== undefined) {
			return result;
		}
		if (!isObject(value)) {
			return value;
		}
		const isArr = isArray(value);
		if (isArr) {
			result = initCloneArray(value);
			if (!isDeep) {
				return copyArray(value, result);
			}
		}
		else {
			const tag = getTag(value);
			const isFunc = tag == funcTag || tag == genTag;

			if (isBuffer(value)) {
				return cloneBuffer(value, isDeep);
			}
			if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
				result = (isFlat || isFunc) ? {} : initCloneObject(value);
				if (!isDeep) {
					return isFlat ?
						copySymbolsIn(value, baseAssignIn(result, value)) :
						copySymbols(value, baseAssign(result, value));
				}
			}
			else {
				if (!cloneableTags[tag]) {
					return object ? value : {};
				}
				result = initCloneByTag(value, tag, isDeep);
			}
		}
		// Check for circular references and return its corresponding clone.
		stack || (stack = new Stack());
		const stacked = stack.get(value);
		if (stacked) {
			return stacked;
		}
		stack.set(value, result);

		if (isSet(value)) {
			value.forEach((subValue) => {
				result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
			});

			return result;
		}

		if (isMap(value)) {
			value.forEach((subValue, key) => {
				result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
			});

			return result;
		}

		const keysFunc = isFull ?
			(isFlat ? getAllKeysIn : getAllKeys) :
			(isFlat ? keysIn : keys);

		const props = isArr ? undefined : keysFunc(value);
		arrayEach(props || value, (subValue, key) => {
			if (props) {
				key = subValue;
				subValue = value[key];
			}
			// Recursively populate clone (susceptible to call stack limits).
			assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
		});
		return result;
	}

	/**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
	function baseGet(object, path) {
		path = castPath(path, object);

		let index = 0;
		const length = path.length;

		while (object != null && index < length) {
			object = object[toKey(path[index++])];
		}
		return (index && index == length) ? object : undefined;
	}

	/**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
		const result = keysFunc(object);
		return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
	function baseGetTag(value) {
		if (value == null) {
			return value === undefined ? undefinedTag : nullTag;
		}
		return (symToStringTag && symToStringTag in Object(value)) ?
			getRawTag(value) :
			objectToString(value);
	}

	/**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
	function baseHasIn(object, key) {
		return object != null && key in Object(object);
	}

	/**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
	function baseIsArguments(value) {
		return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	/**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
		if (value === other) {
			return true;
		}
		if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
			return value !== value && other !== other;
		}
		return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	/**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
		let objIsArr = isArray(object);
		const othIsArr = isArray(other);
		let objTag = objIsArr ? arrayTag : getTag(object);
		let othTag = othIsArr ? arrayTag : getTag(other);

		objTag = objTag == argsTag ? objectTag : objTag;
		othTag = othTag == argsTag ? objectTag : othTag;

		let objIsObj = objTag == objectTag;
		const othIsObj = othTag == objectTag;
		const isSameTag = objTag == othTag;

		if (isSameTag && isBuffer(object)) {
			if (!isBuffer(other)) {
				return false;
			}
			objIsArr = true;
			objIsObj = false;
		}
		if (isSameTag && !objIsObj) {
			stack || (stack = new Stack());
			return (objIsArr || isTypedArray(object)) ?
				equalArrays(object, other, bitmask, customizer, equalFunc, stack) :
				equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
		}
		if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
			const objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__');
			const othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

			if (objIsWrapped || othIsWrapped) {
				const objUnwrapped = objIsWrapped ? object.value() : object;
				const othUnwrapped = othIsWrapped ? other.value() : other;

				stack || (stack = new Stack());
				return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
			}
		}
		if (!isSameTag) {
			return false;
		}
		stack || (stack = new Stack());
		return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	/**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
	function baseIsMap(value) {
		return isObjectLike(value) && getTag(value) == mapTag;
	}

	/**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */
	function baseIsMatch(object, source, matchData, customizer) {
		let index = matchData.length;
		const length = index;
		const noCustomizer = !customizer;

		if (object == null) {
			return !length;
		}
		object = Object(object);
		while (index--) {
			var data = matchData[index];
			if ((noCustomizer && data[2]) ?
				data[1] !== object[data[0]] :
				!(data[0] in object)
			) {
				return false;
			}
		}
		while (++index < length) {
			data = matchData[index];
			const key = data[0];
			const objValue = object[key];
			const srcValue = data[1];

			if (noCustomizer && data[2]) {
				if (objValue === undefined && !(key in object)) {
					return false;
				}
			}
			else {
				const stack = new Stack();
				if (customizer) {
					var result = customizer(objValue, srcValue, key, object, source, stack);
				}
				if (!(result === undefined ?
					baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) :
					result
				)) {
					return false;
				}
			}
		}
		return true;
	}

	/**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
	function baseIsNative(value) {
		if (!isObject(value) || isMasked(value)) {
			return false;
		}
		const pattern = isFunction(value) ? reIsNative : reIsHostCtor;
		return pattern.test(toSource(value));
	}

	/**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
	function baseIsSet(value) {
		return isObjectLike(value) && getTag(value) == setTag;
	}

	/**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
	function baseIsTypedArray(value) {
		return isObjectLike(value) &&
      isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	/**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
	function baseIteratee(value) {
		// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
		// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
		if (typeof value === 'function') {
			return value;
		}
		if (value == null) {
			return identity;
		}
		if (typeof value === 'object') {
			return isArray(value) ?
				baseMatchesProperty(value[0], value[1]) :
				baseMatches(value);
		}
		return property(value);
	}

	/**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
	function baseKeys(object) {
		if (!isPrototype(object)) {
			return nativeKeys(object);
		}
		const result = [];
		for (const key in Object(object)) {
			if (hasOwnProperty.call(object, key) && key != 'constructor') {
				result.push(key);
			}
		}
		return result;
	}

	/**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
	function baseKeysIn(object) {
		if (!isObject(object)) {
			return nativeKeysIn(object);
		}
		const isProto = isPrototype(object);
		const result = [];

		for (const key in object) {
			if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
				result.push(key);
			}
		}
		return result;
	}

	/**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */
	function baseMatches(source) {
		const matchData = getMatchData(source);
		if (matchData.length == 1 && matchData[0][2]) {
			return matchesStrictComparable(matchData[0][0], matchData[0][1]);
		}
		return function(object) {
			return object === source || baseIsMatch(object, source, matchData);
		};
	}

	/**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
	function baseMatchesProperty(path, srcValue) {
		if (isKey(path) && isStrictComparable(srcValue)) {
			return matchesStrictComparable(toKey(path), srcValue);
		}
		return function(object) {
			const objValue = get(object, path);
			return (objValue === undefined && objValue === srcValue) ?
				hasIn(object, path) :
				baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
		};
	}

	/**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
	function basePropertyDeep(path) {
		return function(object) {
			return baseGet(object, path);
		};
	}

	/**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
	function baseToString(value) {
		// Exit early for strings to avoid a performance hit in some environments.
		if (typeof value === 'string') {
			return value;
		}
		if (isArray(value)) {
			// Recursively convert values (susceptible to call stack limits).
			return `${arrayMap(value, baseToString)}`;
		}
		if (isSymbol(value)) {
			return symbolToString ? symbolToString.call(value) : '';
		}
		const result = (`${value}`);
		return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
   * The base implementation of `_.uniqBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   */
	function baseUniq(array, iteratee, comparator) {
		let index = -1;
		let includes = arrayIncludes;
		const length = array.length;
		let isCommon = true;
		const result = [];
		let seen = result;

		if (comparator) {
			isCommon = false;
			includes = arrayIncludesWith;
		}
		else if (length >= LARGE_ARRAY_SIZE) {
			const set = iteratee ? null : createSet(array);
			if (set) {
				return setToArray(set);
			}
			isCommon = false;
			includes = cacheHas;
			seen = new SetCache();
		}
		else {
			seen = iteratee ? [] : result;
		}
		outer:
		while (++index < length) {
			let value = array[index];
			const computed = iteratee ? iteratee(value) : value;

			value = (comparator || value !== 0) ? value : 0;
			if (isCommon && computed === computed) {
				let seenIndex = seen.length;
				while (seenIndex--) {
					if (seen[seenIndex] === computed) {
						continue outer;
					}
				}
				if (iteratee) {
					seen.push(computed);
				}
				result.push(value);
			}
			else if (!includes(seen, computed, comparator)) {
				if (seen !== result) {
					seen.push(computed);
				}
				result.push(value);
			}
		}
		return result;
	}

	/**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
	function castPath(value, object) {
		if (isArray(value)) {
			return value;
		}
		return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	/**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
	function cloneBuffer(buffer, isDeep) {
		if (isDeep) {
			return buffer.slice();
		}
		const length = buffer.length;
		const result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

		buffer.copy(result);
		return result;
	}

	/**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
	function cloneArrayBuffer(arrayBuffer) {
		const result = new arrayBuffer.constructor(arrayBuffer.byteLength);
		new Uint8Array(result).set(new Uint8Array(arrayBuffer));
		return result;
	}

	/**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
	function cloneDataView(dataView, isDeep) {
		const buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
		return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	/**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
	function cloneRegExp(regexp) {
		const result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
		result.lastIndex = regexp.lastIndex;
		return result;
	}

	/**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
	function cloneSymbol(symbol) {
		return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	/**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
	function cloneTypedArray(typedArray, isDeep) {
		const buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
		return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	/**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
	function copyArray(source, array) {
		let index = -1;
		const length = source.length;

		array || (array = Array(length));
		while (++index < length) {
			array[index] = source[index];
		}
		return array;
	}

	/**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
	function copyObject(source, props, object, customizer) {
		const isNew = !object;
		object || (object = {});

		let index = -1;
		const length = props.length;

		while (++index < length) {
			const key = props[index];

			let newValue = customizer ?
				customizer(object[key], source[key], key, object, source) :
				undefined;

			if (newValue === undefined) {
				newValue = source[key];
			}
			if (isNew) {
				baseAssignValue(object, key, newValue);
			}
			else {
				assignValue(object, key, newValue);
			}
		}
		return object;
	}

	/**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
	function copySymbols(source, object) {
		return copyObject(source, getSymbols(source), object);
	}

	/**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
	function copySymbolsIn(source, object) {
		return copyObject(source, getSymbolsIn(source), object);
	}

	/**
   * Creates a set object of `values`.
   *
   * @private
   * @param {Array} values The values to add to the set.
   * @returns {Object} Returns the new set.
   */
	var createSet = !(Set && (1 / setToArray(new Set([, -0]))[1]) == INFINITY) ? noop : function(values) {
		return new Set(values);
	};

	/**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
		const isPartial = bitmask & COMPARE_PARTIAL_FLAG;
		const arrLength = array.length;
		const othLength = other.length;

		if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
			return false;
		}
		// Assume cyclic values are equal.
		const stacked = stack.get(array);
		if (stacked && stack.get(other)) {
			return stacked == other;
		}
		let index = -1;
		let result = true;
		const seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache() : undefined;

		stack.set(array, other);
		stack.set(other, array);

		// Ignore non-index properties.
		while (++index < arrLength) {
			var arrValue = array[index];
			const othValue = other[index];

			if (customizer) {
				var compared = isPartial ?
					customizer(othValue, arrValue, index, other, array, stack) :
					customizer(arrValue, othValue, index, array, other, stack);
			}
			if (compared !== undefined) {
				if (compared) {
					continue;
				}
				result = false;
				break;
			}
			// Recursively compare arrays (susceptible to call stack limits).
			if (seen) {
				if (!arraySome(other, (othValue, othIndex) => {
					if (!cacheHas(seen, othIndex) &&
                  (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
						return seen.push(othIndex);
					}
				})) {
					result = false;
					break;
				}
			}
			else if (!(
				arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack)
			)) {
				result = false;
				break;
			}
		}
		stack.delete(array);
		stack.delete(other);
		return result;
	}

	/**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
		switch (tag) {
			case dataViewTag:
				if ((object.byteLength != other.byteLength) ||
            (object.byteOffset != other.byteOffset)) {
					return false;
				}
				object = object.buffer;
				other = other.buffer;

			case arrayBufferTag:
				if ((object.byteLength != other.byteLength) ||
            !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
					return false;
				}
				return true;

			case boolTag:
			case dateTag:
			case numberTag:
				// Coerce booleans to `1` or `0` and dates to milliseconds.
				// Invalid dates are coerced to `NaN`.
				return eq(+object, +other);

			case errorTag:
				return object.name == other.name && object.message == other.message;

			case regexpTag:
			case stringTag:
				// Coerce regexes to strings and treat strings, primitives and objects,
				// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
				// for more details.
				return object == (`${other}`);

			case mapTag:
				var convert = mapToArray;

			case setTag:
				var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
				convert || (convert = setToArray);

				if (object.size != other.size && !isPartial) {
					return false;
				}
				// Assume cyclic values are equal.
				var stacked = stack.get(object);
				if (stacked) {
					return stacked == other;
				}
				bitmask |= COMPARE_UNORDERED_FLAG;

				// Recursively compare objects (susceptible to call stack limits).
				stack.set(object, other);
				var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
				stack.delete(object);
				return result;

			case symbolTag:
				if (symbolValueOf) {
					return symbolValueOf.call(object) == symbolValueOf.call(other);
				}
		}
		return false;
	}

	/**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
		const isPartial = bitmask & COMPARE_PARTIAL_FLAG;
		const objProps = getAllKeys(object);
		const objLength = objProps.length;
		const othProps = getAllKeys(other);
		const othLength = othProps.length;

		if (objLength != othLength && !isPartial) {
			return false;
		}
		let index = objLength;
		while (index--) {
			var key = objProps[index];
			if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
				return false;
			}
		}
		// Assume cyclic values are equal.
		const stacked = stack.get(object);
		if (stacked && stack.get(other)) {
			return stacked == other;
		}
		let result = true;
		stack.set(object, other);
		stack.set(other, object);

		let skipCtor = isPartial;
		while (++index < objLength) {
			key = objProps[index];
			const objValue = object[key];
			const othValue = other[key];

			if (customizer) {
				var compared = isPartial ?
					customizer(othValue, objValue, key, other, object, stack) :
					customizer(objValue, othValue, key, object, other, stack);
			}
			// Recursively compare objects (susceptible to call stack limits).
			if (!(compared === undefined ?
				(objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack)) :
				compared
			)) {
				result = false;
				break;
			}
			skipCtor || (skipCtor = key == 'constructor');
		}
		if (result && !skipCtor) {
			const objCtor = object.constructor;
			const othCtor = other.constructor;

			// Non `Object` object instances with different constructors are not equal.
			if (objCtor != othCtor &&
          ('constructor' in object && 'constructor' in other) &&
          !(typeof objCtor === 'function' && objCtor instanceof objCtor &&
            typeof othCtor === 'function' && othCtor instanceof othCtor)) {
				result = false;
			}
		}
		stack.delete(object);
		stack.delete(other);
		return result;
	}

	/**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
	function getAllKeys(object) {
		return baseGetAllKeys(object, keys, getSymbols);
	}

	/**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
	function getAllKeysIn(object) {
		return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}

	/**
   * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
   * this function returns the custom method, otherwise it returns `baseIteratee`.
   * If arguments are provided, the chosen function is invoked with them and
   * its result is returned.
   *
   * @private
   * @param {*} [value] The value to convert to an iteratee.
   * @param {number} [arity] The arity of the created iteratee.
   * @returns {Function} Returns the chosen function or its result.
   */
	function getIteratee() {
		let result = lodash.iteratee || iteratee;
		result = result === iteratee ? baseIteratee : result;
		return arguments.length ? result(arguments[0], arguments[1]) : result;
	}

	/**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
	function getMapData(map, key) {
		const data = map.__data__;
		return isKeyable(key) ?
			data[typeof key === 'string' ? 'string' : 'hash'] :
			data.map;
	}

	/**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
	function getMatchData(object) {
		const result = keys(object);
		let length = result.length;

		while (length--) {
			const key = result[length];
			const value = object[key];

			result[length] = [key, value, isStrictComparable(value)];
		}
		return result;
	}

	/**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
	function getNative(object, key) {
		const value = getValue(object, key);
		return baseIsNative(value) ? value : undefined;
	}

	/**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
	function getRawTag(value) {
		const isOwn = hasOwnProperty.call(value, symToStringTag);
		const tag = value[symToStringTag];

		try {
			value[symToStringTag] = undefined;
			var unmasked = true;
		}
		catch (e) {}

		const result = nativeObjectToString.call(value);
		if (unmasked) {
			if (isOwn) {
				value[symToStringTag] = tag;
			}
			else {
				delete value[symToStringTag];
			}
		}
		return result;
	}

	/**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
		if (object == null) {
			return [];
		}
		object = Object(object);
		return arrayFilter(nativeGetSymbols(object), (symbol) => propertyIsEnumerable.call(object, symbol));
	};

	/**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
		const result = [];
		while (object) {
			arrayPush(result, getSymbols(object));
			object = getPrototype(object);
		}
		return result;
	};

	/**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
      (Map && getTag(new Map()) != mapTag) ||
      (Promise && getTag(Promise.resolve()) != promiseTag) ||
      (Set && getTag(new Set()) != setTag) ||
      (WeakMap && getTag(new WeakMap()) != weakMapTag)) {
		getTag = function(value) {
			const result = baseGetTag(value);
			const Ctor = result == objectTag ? value.constructor : undefined;
			const ctorString = Ctor ? toSource(Ctor) : '';

			if (ctorString) {
				switch (ctorString) {
					case dataViewCtorString: return dataViewTag;
					case mapCtorString: return mapTag;
					case promiseCtorString: return promiseTag;
					case setCtorString: return setTag;
					case weakMapCtorString: return weakMapTag;
				}
			}
			return result;
		};
	}

	/**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
	function hasPath(object, path, hasFunc) {
		path = castPath(path, object);

		let index = -1;
		let length = path.length;
		let result = false;

		while (++index < length) {
			var key = toKey(path[index]);
			if (!(result = object != null && hasFunc(object, key))) {
				break;
			}
			object = object[key];
		}
		if (result || ++index != length) {
			return result;
		}
		length = object == null ? 0 : object.length;
		return !!length && isLength(length) && isIndex(key, length) &&
      (isArray(object) || isArguments(object));
	}

	/**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
	function initCloneArray(array) {
		const length = array.length;
		const result = new array.constructor(length);

		// Add properties assigned by `RegExp#exec`.
		if (length && typeof array[0] === 'string' && hasOwnProperty.call(array, 'index')) {
			result.index = array.index;
			result.input = array.input;
		}
		return result;
	}

	/**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
	function initCloneObject(object) {
		return (typeof object.constructor === 'function' && !isPrototype(object)) ?
			baseCreate(getPrototype(object)) :
			{};
	}

	/**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
	function initCloneByTag(object, tag, isDeep) {
		const Ctor = object.constructor;
		switch (tag) {
			case arrayBufferTag:
				return cloneArrayBuffer(object);

			case boolTag:
			case dateTag:
				return new Ctor(+object);

			case dataViewTag:
				return cloneDataView(object, isDeep);

			case float32Tag: case float64Tag:
			case int8Tag: case int16Tag: case int32Tag:
			case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
				return cloneTypedArray(object, isDeep);

			case mapTag:
				return new Ctor();

			case numberTag:
			case stringTag:
				return new Ctor(object);

			case regexpTag:
				return cloneRegExp(object);

			case setTag:
				return new Ctor();

			case symbolTag:
				return cloneSymbol(object);
		}
	}

	/**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
	function isIndex(value, length) {
		const type = typeof value;
		length = length == null ? MAX_SAFE_INTEGER : length;

		return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
	}

	/**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
	function isKey(value, object) {
		if (isArray(value)) {
			return false;
		}
		const type = typeof value;
		if (type == 'number' || type == 'symbol' || type == 'boolean' ||
        value == null || isSymbol(value)) {
			return true;
		}
		return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object));
	}

	/**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
	function isKeyable(value) {
		const type = typeof value;
		return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean') ?
			(value !== '__proto__') :
			(value === null);
	}

	/**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
	function isMasked(func) {
		return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
	function isPrototype(value) {
		const Ctor = value && value.constructor;
		const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto;

		return value === proto;
	}

	/**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
	function isStrictComparable(value) {
		return value === value && !isObject(value);
	}

	/**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
	function matchesStrictComparable(key, srcValue) {
		return function(object) {
			if (object == null) {
				return false;
			}
			return object[key] === srcValue &&
        (srcValue !== undefined || (key in Object(object)));
		};
	}

	/**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
	function memoizeCapped(func) {
		const result = memoize(func, (key) => {
			if (cache.size === MAX_MEMOIZE_SIZE) {
				cache.clear();
			}
			return key;
		});

		var cache = result.cache;
		return result;
	}

	/**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
	function nativeKeysIn(object) {
		const result = [];
		if (object != null) {
			for (const key in Object(object)) {
				result.push(key);
			}
		}
		return result;
	}

	/**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
	function objectToString(value) {
		return nativeObjectToString.call(value);
	}

	/**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
	var stringToPath = memoizeCapped((string) => {
		const result = [];
		if (string.charCodeAt(0) === 46 /* . */) {
			result.push('');
		}
		string.replace(rePropName, (match, number, quote, subString) => {
			result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
		});
		return result;
	});

	/**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
	function toKey(value) {
		if (typeof value === 'string' || isSymbol(value)) {
			return value;
		}
		const result = (`${value}`);
		return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
	function toSource(func) {
		if (func != null) {
			try {
				return funcToString.call(func);
			}
			catch (e) {}
			try {
				return (`${func}`);
			}
			catch (e) {}
		}
		return '';
	}

	/*------------------------------------------------------------------------*/

	/**
   * This method is like `_.find` except that it returns the index of the first
   * element `predicate` returns truthy for instead of the element itself.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the found element, else `-1`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * _.findIndex(users, function(o) { return o.user == 'barney'; });
   * // => 0
   *
   * // The `_.matches` iteratee shorthand.
   * _.findIndex(users, { 'user': 'fred', 'active': false });
   * // => 1
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findIndex(users, ['active', false]);
   * // => 0
   *
   * // The `_.property` iteratee shorthand.
   * _.findIndex(users, 'active');
   * // => 2
   */
	function findIndex(array, predicate, fromIndex) {
		const length = array == null ? 0 : array.length;
		if (!length) {
			return -1;
		}
		let index = fromIndex == null ? 0 : toInteger(fromIndex);
		if (index < 0) {
			index = nativeMax(length + index, 0);
		}
		return baseFindIndex(array, getIteratee(predicate, 3), index);
	}

	/**
   * Creates a duplicate-free version of an array, using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons, in which only the first occurrence of each element
   * is kept. The order of result values is determined by the order they occur
   * in the array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.uniq([2, 1, 2]);
   * // => [2, 1]
   */
	function uniq(array) {
		return (array && array.length) ? baseUniq(array) : [];
	}

	/*------------------------------------------------------------------------*/

	/**
   * Checks if `value` is in `collection`. If `collection` is a string, it's
   * checked for a substring of `value`, otherwise
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * is used for equality comparisons. If `fromIndex` is negative, it's used as
   * the offset from the end of `collection`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object|string} collection The collection to inspect.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=0] The index to search from.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
   * @returns {boolean} Returns `true` if `value` is found, else `false`.
   * @example
   *
   * _.includes([1, 2, 3], 1);
   * // => true
   *
   * _.includes([1, 2, 3], 1, 2);
   * // => false
   *
   * _.includes({ 'a': 1, 'b': 2 }, 1);
   * // => true
   *
   * _.includes('abcd', 'bc');
   * // => true
   */
	function includes(collection, value, fromIndex, guard) {
		collection = isArrayLike(collection) ? collection : values(collection);
		fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

		const length = collection.length;
		if (fromIndex < 0) {
			fromIndex = nativeMax(length + fromIndex, 0);
		}
		return isString(collection) ?
			(fromIndex <= length && collection.indexOf(value, fromIndex) > -1) :
			(!!length && baseIndexOf(collection, value, fromIndex) > -1);
	}

	/*------------------------------------------------------------------------*/

	/**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
	function memoize(func, resolver) {
		if (typeof func !== 'function' || (resolver != null && typeof resolver !== 'function')) {
			throw new TypeError(FUNC_ERROR_TEXT);
		}
		var memoized = function() {
			const args = arguments;
			const key = resolver ? resolver.apply(this, args) : args[0];
			const cache = memoized.cache;

			if (cache.has(key)) {
				return cache.get(key);
			}
			const result = func.apply(this, args);
			memoized.cache = cache.set(key, result) || cache;
			return result;
		};
		memoized.cache = new (memoize.Cache || MapCache)();
		return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	/*------------------------------------------------------------------------*/

	/**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
	function eq(value, other) {
		return value === other || (value !== value && other !== other);
	}

	/**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
	var isArguments = baseIsArguments(function() {
		return arguments;
	}()) ? baseIsArguments : function(value) {
			return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
		};

	/**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
	var isArray = Array.isArray;

	/**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
	function isArrayLike(value) {
		return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
	var isBuffer = nativeIsBuffer || stubFalse;

	/**
   * Performs a deep comparison between two values to determine if they are
   * equivalent.
   *
   * **Note:** This method supports comparing arrays, array buffers, booleans,
   * date objects, error objects, maps, numbers, `Object` objects, regexes,
   * sets, strings, symbols, and typed arrays. `Object` objects are compared
   * by their own, not inherited, enumerable properties. Functions and DOM
   * nodes are compared by strict equality, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.isEqual(object, other);
   * // => true
   *
   * object === other;
   * // => false
   */
	function isEqual(value, other) {
		return baseIsEqual(value, other);
	}

	/**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
	function isFunction(value) {
		if (!isObject(value)) {
			return false;
		}
		// The use of `Object#toString` avoids issues with the `typeof` operator
		// in Safari 9 which returns 'object' for typed arrays and other constructors.
		const tag = baseGetTag(value);
		return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	/**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
	function isLength(value) {
		return typeof value === 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
	function isObject(value) {
		const type = typeof value;
		return value != null && (type == 'object' || type == 'function');
	}

	/**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
	function isObjectLike(value) {
		return value != null && typeof value === 'object';
	}

	/**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
	var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

	/**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
	var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

	/**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
	function isString(value) {
		return typeof value === 'string' ||
      (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}

	/**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
	function isSymbol(value) {
		return typeof value === 'symbol' ||
      (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	/**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */
	function toFinite(value) {
		if (!value) {
			return value === 0 ? value : 0;
		}
		value = toNumber(value);
		if (value === INFINITY || value === -INFINITY) {
			const sign = (value < 0 ? -1 : 1);
			return sign * MAX_INTEGER;
		}
		return value === value ? value : 0;
	}

	/**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */
	function toInteger(value) {
		const result = toFinite(value);
		const remainder = result % 1;

		return result === result ? (remainder ? result - remainder : result) : 0;
	}

	/**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
	function toNumber(value) {
		if (typeof value === 'number') {
			return value;
		}
		if (isSymbol(value)) {
			return NAN;
		}
		if (isObject(value)) {
			const other = typeof value.valueOf === 'function' ? value.valueOf() : value;
			value = isObject(other) ? (`${other}`) : other;
		}
		if (typeof value !== 'string') {
			return value === 0 ? value : +value;
		}
		value = value.replace(reTrim, '');
		const isBinary = reIsBinary.test(value);
		return (isBinary || reIsOctal.test(value)) ?
			freeParseInt(value.slice(2), isBinary ? 2 : 8) :
			(reIsBadHex.test(value) ? NAN : +value);
	}

	/**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
	function toString(value) {
		return value == null ? '' : baseToString(value);
	}

	/*------------------------------------------------------------------------*/

	/**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
	function get(object, path, defaultValue) {
		const result = object == null ? undefined : baseGet(object, path);
		return result === undefined ? defaultValue : result;
	}

	/**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */
	function hasIn(object, path) {
		return object != null && hasPath(object, path, baseHasIn);
	}

	/**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
	function keys(object) {
		return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
	function keysIn(object) {
		return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	/**
   * Creates an array of the own enumerable string keyed property values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.values(new Foo);
   * // => [1, 2] (iteration order is not guaranteed)
   *
   * _.values('hi');
   * // => ['h', 'i']
   */
	function values(object) {
		return object == null ? [] : baseValues(object, keys(object));
	}

	/*------------------------------------------------------------------------*/

	/**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
	function identity(value) {
		return value;
	}

	/**
   * Creates a function that invokes `func` with the arguments of the created
   * function. If `func` is a property name, the created function returns the
   * property value for a given element. If `func` is an array or object, the
   * created function returns `true` for elements that contain the equivalent
   * source properties, otherwise it returns `false`.
   *
   * @static
   * @since 4.0.0
   * @memberOf _
   * @category Util
   * @param {*} [func=_.identity] The value to convert to a callback.
   * @returns {Function} Returns the callback.
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36, 'active': true },
   *   { 'user': 'fred',   'age': 40, 'active': false }
   * ];
   *
   * // The `_.matches` iteratee shorthand.
   * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
   * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.filter(users, _.iteratee(['user', 'fred']));
   * // => [{ 'user': 'fred', 'age': 40 }]
   *
   * // The `_.property` iteratee shorthand.
   * _.map(users, _.iteratee('user'));
   * // => ['barney', 'fred']
   *
   * // Create custom iteratee shorthands.
   * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
   *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
   *     return func.test(string);
   *   };
   * });
   *
   * _.filter(['abc', 'def'], /ef/);
   * // => ['def']
   */
	function iteratee(func) {
		return baseIteratee(typeof func === 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
	}

	/**
   * This method returns `undefined`.
   *
   * @static
   * @memberOf _
   * @since 2.3.0
   * @category Util
   * @example
   *
   * _.times(2, _.noop);
   * // => [undefined, undefined]
   */
	function noop() {
		// No operation performed.
	}

	/**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */
	function property(path) {
		return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	/**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
	function stubArray() {
		return [];
	}

	/**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
	function stubFalse() {
		return false;
	}

	/*------------------------------------------------------------------------*/

	// Add methods that return wrapped values in chain sequences.
	lodash.iteratee = iteratee;
	lodash.keys = keys;
	lodash.keysIn = keysIn;
	lodash.memoize = memoize;
	lodash.property = property;
	lodash.uniq = uniq;
	lodash.values = values;

	/*------------------------------------------------------------------------*/

	// Add methods that return unwrapped values in chain sequences.
	lodash.eq = eq;
	lodash.findIndex = findIndex;
	lodash.get = get;
	lodash.hasIn = hasIn;
	lodash.identity = identity;
	lodash.includes = includes;
	lodash.isArguments = isArguments;
	lodash.isArray = isArray;
	lodash.isArrayLike = isArrayLike;
	lodash.isBuffer = isBuffer;
	lodash.isEqual = isEqual;
	lodash.isFunction = isFunction;
	lodash.isLength = isLength;
	lodash.isMap = isMap;
	lodash.isObject = isObject;
	lodash.isObjectLike = isObjectLike;
	lodash.isSet = isSet;
	lodash.isString = isString;
	lodash.isSymbol = isSymbol;
	lodash.isTypedArray = isTypedArray;
	lodash.stubArray = stubArray;
	lodash.stubFalse = stubFalse;
	lodash.noop = noop;
	lodash.toFinite = toFinite;
	lodash.toInteger = toInteger;
	lodash.toNumber = toNumber;
	lodash.toString = toString;

	/*------------------------------------------------------------------------*/

	/**
   * The semantic version number.
   *
   * @static
   * @memberOf _
   * @type {string}
   */
	lodash.VERSION = VERSION;

	/*--------------------------------------------------------------------------*/

	// Some AMD build optimizers, like r.js, check for condition patterns like:
	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// Expose Lodash on the global object to prevent errors when Lodash is
		// loaded by a script tag in the presence of an AMD loader.
		// See http://requirejs.org/docs/errors.html#mismatch for more details.
		// Use `_.noConflict` to remove Lodash from the global object.
		root._ = lodash;

		// Define as an anonymous module so, through path mapping, it can be
		// referenced as the "underscore" module.
		define(() => lodash);
	}
	// Check for `exports` after `define` in case a build optimizer adds it.
	else if (freeModule) {
		// Export for Node.js.
		(freeModule.exports = lodash)._ = lodash;
		// Export for CommonJS support.
		freeExports._ = lodash;
	}
	else {
		// Export to the global object.
		root._ = lodash;
	}
}.call(this));
