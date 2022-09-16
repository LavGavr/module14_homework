const jsonString = `{
    "list": [
{
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
},
{
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
    }
]
}`;

//Вызывам JSON
const data = JSON.parse(jsonString);

const personaObject = data.list;

let result = [];

//Вызываем цикл
personaObject.forEach((jsonElement) => {
//перебираем элементы в цикле
let person = {
name: jsonElement.name,
age: Number(jsonElement.age),
prof: jsonElement.prof,
};
//Добавить JSONObj в массив
result.push(person);
});
//получаем результат
console.log("list", result);

 