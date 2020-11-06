const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const otherRandomNumber = Math.random();

if( 
    (randomNumber > 0.7 && otherRandomNumber> 0.7) 
    || randomNumber<=0 || otherRandomNumber <= 0){
    alert('GREATER THAN 0.7 or SMALLER THAN 0.2')
} 


const numbers = [1,2,3,4,5];
for(const items of numbers){
    console.log(items)
}

for (let i = numbers.length - 1; i>=0; i--){
    console.log(numbers[i]);
}

console.log(randomNumber);
console.log(otherRandomNumber);