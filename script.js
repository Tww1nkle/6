// Задание 1
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str){
    console.log(str[0].toUpperCase() + str.slice(1));
}
ucFirst('павел')

// 'Задание 2
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

function checkSpam(str){
    string = str.toLowerCase()
    console.log(string)

    return string.includes('badWord')
}
checkSpam('BadWord');

// 'Задание 3
//Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»

function reverse(word){
    //1 способ
    let strin = word;
    let strinStr = strin.split(''); //превращает в массив из букв
    let reversStr = strinStr.reverse(); // перевернутый массив
    let result = reversStr.join(); // строка

    //2 способ
    let reverseString = (str) => {
        return str.split('').reverse().join('');
    }
}

reverse('привет Женя');


// Задание 4
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 

let stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield', 
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street', 
    'SYB4f65hf75f736463;Stalybridge', 
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
]


let ul = document.createElement('ul');

for(let i = 0; i < stations.length; i++){
    let station = stations[i];
    let sliceString = station.slice(0,3);
    let indexSemicolor = station.indexOf(';') + 1;
    let stationone = station.slice(indexSemicolor);
    let text = sliceString + ': ' + stationone ;
    
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = text;
    document.body.appendChild(ul);
}




// Задание 5 
// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
// Пример:
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

function unique(arr){
    let newArr = [];
    let i = 0
        while (i <= arr.length) {
            i++
    
            let word = arr[i];
    
            if (!newArr.includes(word)) {
                newArr.push(word);
            } 
            
        }
    
        console.log(newArr)
}

console.log(unique(strings));