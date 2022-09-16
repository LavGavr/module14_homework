
//Подготовка данных 
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString =`
<list>
<student>
<name lang="en">
	<first>Ivan</first>
	<second>Ivanov</second>
</name>
<age>35</age>
<prof>teacher</prof>
</student>
<student>
<name lang="ru">
	<first>Петр</first>
	<second>Петров</second>
</name>
<age>58</age>
<prof>driver</prof>
</student>
</list>
`;

//Получаем данные
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получаем все DOM-нод
let result=[];
const students=xmlDOM.querySelectorAll("student");
students.forEach(node=>{
    let student={
        name:`${node.querySelector("first").textContent}${node.querySelector("second").textContent}`,
        age:node.querySelector("age").textContent,
        prof:node.querySelector("prof").textContent,
        lang:node.querySelector("name").getAttribute("lang")
    }
    result.push(student);
});
// выводим результат
console.log(result);