class Complex {
	set(real = 0, imag = 0) {
		// 检测real和imag是否都为数字
		if ([real, imag].every(v => typeof v == 'number')) {
			this.real = real;
			this.imag = imag;
		} else {
			throw new TypeError('The type of this numbers must be a number');
		}
	}

	/* Constructor */
	constructor(real = 0, imag = 0) {
		this.set(real, imag);
	}
	
	toString(char = 'i') {
		// 如果real为0，那么不显示实部，否则照常显示
		const real = this.real == 0 ? '' : this.real;

		/**
		 * 如果real为0:
		 * 	且imag为非负数时
		 */
		const symbol = (() => {
			if (this.real == 0) {
				return this.imag >= 0 ? '' : '-';
			} else {
				return this.imag >= 0 ? '+' : '';
			}
		})();

		const imag = [-1, 1].includes(this.imag) ? '' : this.imag;
		
		return `${ real }${ symbol }${ imag }${ char }`;
	}

	valueOf() {
		const real = this.real;
		const imag = this.imag;
		return { real, imag };
	}

	/* 加法 */
	plus(other) {
		Complex.#check(other);
		const real = this.real + other.real;
		const imag = this.imag + other.imag;

		return new Complex(real, imag);
	}

	/* 减法 */
	sub(other) {
		Complex.#check(other);
		const real = this.real - other.real;
		const imag = this.imag - other.imag;

		return new Complex(real, imag);
	}

	/* 乘法 */
	mult(other) {
		Complex.#check(other);
		const {real: real1, imag: imag1} = this.valueOf();
		const {real: real2, imag: imag2} = other.valueOf();

		// 乘法分配律
		const leftReal = real1 * real2;
		const leftImag = real1 * imag2;
		const rightReal = -(imag1 * imag2);
		const rightImag = imag1 * real2;

		const resultReal = leftReal + rightReal;
		const resultImag = leftImag + rightImag;

		return new Complex(resultReal, resultImag);
	}

	/* 除法 */
	divby(other) {
		Complex.#check(other);
		const conjugate = Complex.conjugate(other);
		const temp = new Complex(1 / other.mult(conjugate).real, 0);
		const result = this.mult(temp.mult(conjugate));

		return result;
	}

	/* 检查是否为Complex的实例 */
	static #check(instance) {
		if (!(instance instanceof Complex)) {
			throw new TypeError('The arguments must be instance of Complex or child class');
		}
	}

	static sqrt(num) {
		if (num > 0) {
			return Math.sqrt(num);
		}

		return new Complex(0, Math.sqrt(-num));
	}

	/* 共轭复数 */
	static conjugate(obj) {
		return new Complex(obj.real, -obj.imag);
	}
}

export { Complex };

