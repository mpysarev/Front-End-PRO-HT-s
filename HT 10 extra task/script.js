const person = {name: 'Alex', surname: 'Smith', phone: '+380 00 000 00 00'}

const helloTemplate  = createTemplate('Hello, {{name}}!');
const detailsTemplate = createTemplate('{{name}} {{surname}}, phone {{phone}}');

console.log(helloTemplate(person)); // возвращает Hello, Alex!
console.log(detailsTemplate(person)) // возвращает Alex Smith, phone +380 00 000 00 00




// function createTemplate(templateString) {

//   return function (tempObj) {
    
//     return Object.keys(tempObj)
//     .reduce((template, key) => template
//     .replace(`{{${key}}}`, tempObj[key]), templateString);    
//   }  
// }


// function createTemplate(templateString) {

//   return function (obj) {
    
//     const keys = Object.keys(obj); // ['name']
//     let templateCopy = templateString;
    
//     for (let i=0; i < keys.length; i++) {
//       templateCopy = templateCopy.replace(`{{${keys[i]}}}`, obj[keys[i]]);
//     }

//     return templateCopy;
//   };
// }

function createTemplate(templateString) {

  return function (obj) {
    
    const keys = Object.keys(obj); // ['name']
    let templateCopy = templateString;

    keys.forEach(key => {

      templateCopy = templateCopy.replace(`{{${key}}}`, obj[key]);
    });

    return templateCopy;
  };
}









