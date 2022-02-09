/* Lemonix Complex */
import { Complex } from './Complex.js';
let x = new Complex, y = new Complex;
x.set(real = 5, imag = 3);
y.set(real = -3, imag = -1);
console.log(x, y);

// 求根
console.log('根号-9 =', Complex.sqrt(-9).toString());
// 加法
console.log('(5+3i)+(-3-i) =', x.plus(y).toString());
// 减法
console.log('(5+3i)-(-3-i) =', x.sub(y).toString());
// 乘法
x.set(3, 2);
y.set(-3, 3);
console.log('(3+2i)*(-3+3i) =', x.mult(y).toString());
// 除法
x.set(-3, 3);
y.set(0.8, 0.6);
console.log('(-3+3)/(0.8+0.6) =', x.divby(y).toString());
// 共轭复数
console.log('4+3i的共轭复数 =', Complex.conjugate({ real: 4, imag: 3 }).toString())

