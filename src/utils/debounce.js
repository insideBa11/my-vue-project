/**
 *
 * @param fn {Function}
 * @param duration {Number}
 */
export default function (fn, duration = 100) {
	let timer = null;
	return function () {
		const _self = this, arg = [].slice.call(arguments, 0);
		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.apply(_self, arg);
		}, duration);
	}
}
