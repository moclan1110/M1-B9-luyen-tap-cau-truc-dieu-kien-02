// Bài 1
// let inputCelcius  = +prompt('Enter Celsius value');
// let farenheit  = inputCelcius*9/5+32;
// document.write('Farenheit value is '+farenheit);

// Bài 2
// let iputMeter = +prompt('Enter meter value');
// let feet = iputMeter*3.2808;
// document.write('Feet value is ' +feet);

// Bài 3
// let a = +prompt('Enter square edge value');
// let area = a*a;
// document.write('Area is '+area);

// Bài 4
// let width = +prompt('Enter width');
// let height = +prompt('Enter height');
// let area = width*height;
// document.write('Area is '+ area);

// Bài 5
// let a = +prompt('Enter side 1 of right triangle');
// let b = +prompt('Enter side 2 of right triangle');
// let area = a*b/2;
// document.write('Area is '+ area);

// Bài 6
// let a = +prompt('Enter number a');
// let b = +prompt('Enter number b');
// let x = -b/a;
// if(a == 0) {
//     if(b == 0) {
//         document.write('Phương trình có vô số nghiệm');
//     } else {
//         document.write('Phương trình vô nghiệm');
//     }
// } else {
//     document.write('Nghiệm của phương trình là: ' + x);
// }

// Bài 7 Giải phương trình bậc 2: ax² + bx + c = 0 (a ≠ 0) với a, b, c nhập vào từ bàn phím
// let a = +prompt('Enter number a');
// let b = +prompt('Enter number b');
// let c = +prompt('Enter number c');
// let delta = b**2 - 4*a*c;
// let x1 = (-b + Math.sqrt(delta))/2*a;
// let x2 = (-b - Math.sqrt(delta))/2*a;
// if(delta < 0) {
//     document.write('Phương trình vô nghiệm');
// } else if(delta = 0) {
//     document.write('Phương trình có nghiệm kép x1 = x2 = ' + x1);
// } else {
//     document.write('Phương trình có 2 nghiệm x1 = ' + x1 + ' và x2= ' + x2)
// }

// Bài 8
// let age = +prompt('Enter age');
// if(age > 0 && age < 120) {
//     document.write(age + ' là tuổi một người');
// } else {
//     document.write(age + ' không phải là tuổi một người');
// }

// Bài 9
// let a = +prompt('Enter a');
// let b = +prompt('Enter b');
// let c = +prompt('Enter a');
// if(a > 0 && b>0 && c > 0 && eval(a+b)>c && eval(a+c)>b && eval(b+c)>a) {
//     document.write(a +','+b+ ','+c + ' là ba cạnh của một tam giác');
// } else {
//     document.write(a +','+b+ ','+c + ' không là ba cạnh của một tam giác');
// }

// Bài 10: 100 kWh đầu giá 1000, từ kWh 101 – 150 giá 1200, từ kWh 151 – 200 giá 2000, từ 201 trở lên giá 2500.
// let tieuThu = +prompt('Nhập số điện tiêu thụ');
// let tien;
// if(tieuThu < 100) {
//      tien = tieuThu*1000;
// } else if(tieuThu <= 150) {
//      tien = 100*1000 + (tieuThu-100)*1200;
// } else if(tieuThu <= 200) {
//      tien = 100*1000 + 50*1200 + (tieuThu-200)*2000;
// } else if(tieuThu > 200) {
//      tien = 100*1000 + 50*1200 + 50*2000 + (tieuThu-200)*2500;
// }
// document.write('Số tiền phải trả là: ' + tien + 'VND');
