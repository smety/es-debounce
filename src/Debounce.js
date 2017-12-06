class Debounce {
	
	constructor() {
		this.debounce();
	}
	
	/**
	 * @param func
	 * @param wait
	 * @param immediate
	 * @returns {Function}
	 */
	debounce(func, wait, immediate) {
		let timeout;
		return () => {
			let context = this,
				args    = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	};
}

export default Debounce
