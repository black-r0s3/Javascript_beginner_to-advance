// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();
let greeting = name => console.log('Hi ' + name)

let greeting2 = (name, phrase) => console.log(phrase + ' ' + name)
let greeting3 = ( ) => console.log('Hi, something made up')
let greeting4 = name => console.log('Hi ' + name)


greeting('Max');
greeting2('Nana', "What's up?");
greeting3();
console.log(greeting4('Nana'))

let greeting5 = (name, phrase = 'Hi') => console.log( phrase + ' ' + name)

greeting5('Eben');
greeting5('Eben', 'Hello')


function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('All not empty!');
  },
  'Hello',
  '12',
  'adsfa',
  'Not empty'
);
