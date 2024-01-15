let string = '이스케이프 문자 이용 줄 바꿈\n GOGO!!';
console.log(string);
let string1 = `문자열은 큰 따옴표("") / 작은 따옴표('')
몽땅 사용이 가능하고 엔터도 사용가능`;
console.log(string1);
let dan = 3;
let gugu = 9;
let string2 = `${dan} * ${gugu} = ${dan * gugu}`;
console.log(string2);
let student = {
    korea : 80,
    english : 90,
    math : 60,
    scienct : 95
}
console.log(student.scienct);
console.log(student['korea']);
let score1 = 90;
let grade = score1 >= 90 ? 'A+' : 'B';
console.log(grade);

let num = 10;
let strnum = '10'
if(String(num) == strnum)
{
    console.log('equals');
}
if(num === strnum) {
    console.log('equals');
}
else {
    console.log('not equals');
}

let obj = {
    name :"철수",
    age : 20,
    sex : "M"
}
for(let key in obj){
    console.log(key + ":" + obj[key]);
}

let sum = 0;
for(let i = 0;i<= 100;i++){
    sum += i;
}
console.log(sum);

let cnt = 0;
for(let i = 1;i<1000;i++){
    if(i % 2 === 0){
        cnt++;
    }
}
console.log(cnt);

for(let i=1;i<10;i++){
    for(let j=1;j<10;j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

for(let i=1;i<10;i++){
    for(let j=0;j<10;j++){
        for(let k=0;k<10;k++){
            let sum = (i * i * i) + (j * j * j) + (k * k * k);
            let current = (i * 100) + (j * 10) + k;
            if(sum === current){
                console.log(current);
            }
        }
    }
}


