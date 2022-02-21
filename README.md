# RealComplex.js
一个关于复数的Javascript库

A Javascript lib about complex

## How to use it? 使用教程

- 导入与实例化
```javascript
import { Complex } from './Complex.js';
let x = new Complex, y = new Complex;
x.set(real, imag);
y.set(real, imag);
// or
let x = new Complex(5, 3) .......
```

- 计算
```javascript
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
console.log('(-3+3i)/(0.8+0.6i) =', x.divby(y).toString());
```

- 共轭复数
```javascript
// 共轭复数
console.log('4+3i的共轭复数 =', Complex.conjugate({ real: 4, imag: 3 }).toString())
```

## Developer 开发者
> **Lemonix** (开发)
> 
> **ResetPower** (提供灵感)