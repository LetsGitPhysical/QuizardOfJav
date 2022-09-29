let quizard = { 
    q1 : {Quest : 'Which box-sizing method includes total width and height?',              Choice : ['bird-box','border-box','boom-bastic','box-it-up'],                     Answer : 'border-box'},
    q2 : {Quest : 'Which of these properties is used to count the elements of an object?', Choice : ['foot','meter','ruler','length'],                                       Answer : 'length'},
    q3 : {Quest : 'Which of these character strings enclose as array in JavaScript?',      Choice : ['[ ]','( )','{ }','+ +'],                                               Answer : '[ ]'},
    q4 : {Quest : 'What would you use to print the result in the console section?',        Choice : ['console.listen()','console.branch()','console.log()','debug.print()'], Answer : 'console.log()'},
    q5 : {Quest : 'In both Movies Top-Gun 1 & 2, Who was the Best Pilot?',                 Choice : ['Goose','Maverick','Viper','Ice-Man'],                                  Answer : 'Ice-Man'},
    q6 : {Quest : 'Which is not a function you can not apply to an array',                 Choice : ['shift','push','smash','pop'],                                          Answer : 'smash'}
  }


x = Boolean('q11' in quizard);
console.log(x, 'q1 is not in quizard');
console.log(quizard.q1.Quest);
console.log(quizard['q1']['Quest']);

var numArr = [65, 44, 12, 4, 22, 38, 'text'];


//------------------------------ sort dictionary by val ----------
let scoreBoardDict ={};
scoreBoardDict['game1'] = {player: 'aaa', score: 80, rank: 80.12};
scoreBoardDict['game2'] = {player: 'fff', score: 40, rank: 40.12};
scoreBoardDict['game3'] = {player: 'ddd', score: 40, rank: 40.08};
scoreBoardDict['game4'] = {player: 'ppp', score: 70, rank: 70.38};
scoreBoardDict['game5'] = {player: 'ooo', score: 90, rank: 90.10};
scoreBoardDict['game6'] = {player: 'tdt', score: 100, rank: 100.02};
scoreBoardDict['game7'] = {player: 'bbb', score: 66, rank: 66.62};
scoreBoardDict['game8'] = {player: 'zzz', score: 66, rank: 66.82};
scoreBoardDict['game9'] = {player: 'yyy', score: 90, rank: 90.10};

let sortable = [];
for (var gamePlay of Object.keys(scoreBoardDict)) {
  sortable.push([gamePlay, scoreBoardDict[gamePlay]['rank']]);
}

sortable.sort(function(a, b) {
  return a[1] - b[1]; // ascending
  // return b[1] - a[1];   // descending
});
sortable.sort(function(a, b) {
  // return a[1] - b[1]; // ascending
  return b[1] - a[1];   // descending
});

console.log('\n',sortable);

//-----------------------  Make Table from Array 1 ------------------------------------------

//function to create the table      best way- with headers 
function createTable(tableData, row_headings) {
  var table = document.createElement('table');
  var row = {};
  var cell = {};
  
  tableData.forEach(function(rowData, i) {
    row = table.insertRow(-1);
    cell = row.insertCell();
    cell.textContent = row_headings[i];
    rowData.forEach(function(cellData) {
      cell = row.insertCell();
      cell.textContent = cellData;
      let cellVal = cellData;
      //make cells different shades of green and red for pos/neg (based on %)
      if (cellVal > 0) {
        cell.style.backgroundColor = '#00e100';
      } else if (cellVal < 0) {
        cell.style.backgroundColor = 'red';
      }
    });
  });
  document.body.appendChild(table);
}
createTable(transpose_array, price_array);



// *******   good way 


function makeTable(array) {
  var table = document.createElement('table');
  table.setAttribute('class','the-hall-of-fame');
  for (var i = 0; i < array.length; i++) {
      var row = document.createElement('tr');
      for (var j = 0; j < array[i].length; j++) {
          var cell = document.createElement('td');
          cell.textContent = array[i][j];
          row.appendChild(cell);
      }
      table.appendChild(row);
  }
  return table;
}


//-----------------------  Make Table from Array 1 ---------------------------------------

// Here's a version using template literals. It maps over the data creating new arrays of strings build from the template literals, and then adds them to the document with insertAdjacentHTML:

// let data = [
//   ['Title', 'Artist', 'Duration', 'Created'],
//   ['hello', 'me', '2', '2019'],
//   ['ola', 'me', '3', '2018'],
//   ['Bob', 'them', '4.3', '2006']
// ];

// function getCells(data, type) {
//   return data.map(cell => `<${type}>${cell}</${type}>`).join('');
// }

// function createBody(data) {
//   return data.map(row => `<tr>${getCells(row, 'td')}</tr>`).join('');
// }

// function createTable(data) {

//   // Destructure the headings (first row) from
//   // all the rows
//   const [headings, ...rows] = data;

//   // Return some HTML that uses `getCells` to create
//   // some headings, but also to create the rows
//   // in the tbody.
//   return `
//     <table>
//       <thead>${getCells(headings, 'th')}</thead>
//       <tbody>${createBody(rows)}</tbody>
//     </table>
//   `;
// }

// // Bang it altogether
// // document.body.insertAdjacentHTML('beforeend', createTable(data));
// // table { border-collapse: collapse; }
// // tr { border: 1px solid #dfdfdf; }
// // th, td { padding: 2px 5px 2px 5px;}





//-----------------------  Make Table from Array 2-------------------------------------------
function createTable(tableData) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

createTable([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);


// This is pretty easy to do with a double for loop.

// function makeTableHTML(myArray) {
//     var result = "<table border=1>";
//     for(var i=0; i<myArray.length; i++) {
//         result += "<tr>";
//         for(var j=0; j<myArray[i].length; j++){
//             result += "<td>"+myArray[i][j]+"</td>";
//         }
//         result += "</tr>";
//     }
//     result += "</table>";

//     return result;
// }

//---------------------------------------------------------------------------------------



// The getDay() method returns the weekday as a number between 0 and 6.
// (Sunday=0, Monday=1, Tuesday=2 ..)
// This example uses the weekday number to calculate the weekday name:
// switch is like VBA Select Case.
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }

//---------------------------------------------------------
// The default case does not have to be the last case in a switch block:
// Example
// switch (new Date().getDay()) {
//   default:
//     text = "Looking forward to the Weekend";
//     break;
//   case 6:
//     text = "Today is Saturday";
//     break;
//   case 0:
//     text = "Today is Sunday";
// }

// Switching Details
// If multiple cases matches a case value, the first case is selected.
// If no matching cases are found, the program continues to the default label.
// If no default label is found, the program continues to the statement(s) after the switch.

// Strict Comparison
// Switch cases use strict comparison (===).
// The values must be of the same type to match.
// A strict comparison can only be true if the operands are of the same type.
// In this example there will be no match for x:
// Example
// let x = "0";
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }


//-------------------------------------------------------------------------
// function showDiv(isVisible)
// {
//     [DIV].hidden = !isVisible;
// }
// hide:    document.getElementById("myDiv").setAttribute("hidden","");
// unhide:  document.getElementById("myDiv").removeAttribute("hidden");

// var div = document.getElementById('div_id');

// // hide
// div.style.visibility = 'hidden';
// // OR
// div.style.display = 'none';

// // show
// div.style.visibility = 'visible';
// // OR
// div.style.display = 'block';
//-------------------------------------------------------------------------

// numArr.forEach(feFunct); // function is inside of .forEach

// function feFunct(item, index, arr) {  // works
//     arr[index] = item * 10;
//     console.log(arr[index]);
// }
// function feFunct(element, idx) {  // works
//     var newVal = element * 10;
//     console.log(newVal, idx);
// }

numArr.forEach(val=>{console.log(val)});  // One-Liner works!!

//--------------------------------  Map -----------------------
// var myMap = new Map();
// const myMap = new Map();
// for(i = 0; i< 10; i++){
//     var keyz = 'key_' + i;
//     var val_2dec = Math.random()*10;
//     val_2dec = val_2dec.toFixed(3);  // <------- 3 decimals
//     myMap.set(keyz,i + val_2dec);
// }

// var [keyString,valString] = ['','']; // start off blank so not undef
// for (var [k, v] of myMap) {
//     keyString += ' _'+ k;
//     valString += ' _'+ v;
// }
// console.log(keyString);
// console.log(valString);

//-----------------------------  Proper Dictionary -------------------------------
// var myDict = {};  // empty dict
// for(i = 0; i< 10; i++){
//     var keyz = 'key_' + i;
//     var val_2dec = (Math.random()*10).toFixed(3);
//     // val_2dec = val_2dec.toFixed(3);
//     myDict[keyz] = val_2dec;
// }
// console.log(myDict['key_2'])
// var myDict_key_val = function (myKey, myValue) {
//     myDict[myKey] = myValue;
// };
// var myDict_get_val = function (myKey) {
//     return myDict[myKey];
// };
// var valDict = myDict_get_val('key_4');
// console.log(valDict);

//-----------------------------  MultiKey Dictionary -----------------------------

// var flying = {'habitat':'flying','types':['robin','eagle','blue jay','hawk']};
// var land = {'habitat':'land','types':['panther','lion','elephant','bear']};
// var aquatic = {'habitat':'aquatic','types':['whale','shark','jelly fish','squid']};
// var desert = {'habitat':'desert','types':['scorpion','tarantula','camel','lizard']};

var flying = {'types':['robin','eagle','blue jay','hawk']};
var land = {'types':['panther','lion','elephant','bear']};
var aquatic = {'types':['whale','shark','jelly fish','squid']};
var desert = {'types':['scorpion','tarantula','camel','lizard']};
// var arrDicts = [flying,land,aquatic,desert];
var animals = {
    flying,
    land,
    aquatic,
    desert
};

console.log(Object.keys(animals));

console.log(Object.keys(aquatic));
console.log(Object.values(land));
var animalSrch = animals['aquatic']['types'][2];
console.log(animalSrch);
// var animalHab = animals['aquatic']['habitat'];
// console.log(animalHab,animalSrch);

// var arrDicts = ['flying','underground','aquatic','desert'];

// animals.forEach(val=>{console.log(val)});  // One-Liner works!!

// var newAnimal = {'types':['finch']};    
// if(animals['flying']['types'] && animals['flying']['types'].length > 0) {
//    //List already exists so add the new animal
//    //TODO also check if the animal is already in the list?
//    animals['flying']['dove'].push(newAnimal);
// }else {
//    //Create the new list
//    animals['flying']['dove'] = [newAnimal];
// }

//----------- .valueOf(), .toLocalString(), .toFixed(x), .toPrecision(x) ------
// let num = 15;
// let n = num.valueOf();            //-----  get value of number
// let text = num.toLocaleString();  //-----  convert to string
// let num = 0.001658853;
// num.toFixed(2);  // sets to 2 decimal places
// num.toPrecision(2);

//---------------------- item, index, arr: reserved constants -----------------
// let text = "";
// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);
// function myFunction(item, index, arr) {
//      arr[index] = 'i brought' + item
//      text += index + ": " + item ; 
//     console.log(text);               // one long string
//     console.log(arr[index]);         // modifed string with item
// }
//------------------------- filter function --------------------
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }
//------------------   entries property  ----------------------------------
// var fruits = ["Banana", "Orange", "Apple", "Mango","Banana","Banana"];
// var f = fruits.entries();
// for (let x of f) {
//   console.log(x)   //--- prints index & element  [0, 'Banana'], [1, 'Orange']
// }
//-------------------------------------------------------------------------
//       JavaScript Map class is another implementation of Hash Table
//        Unlike the Object type, 
//        Map requires you to use the set() and get() methods 
//        to define and retrieve any key-pair values that you 
//        want to be added to the data structure.
// const myMap = new Map();
// myMap.set("Nathan, "555-0182");
// myMap.set("Jane", "985-6523");
// myMap.set("Sarah", "545-7722");
// myMap.set("John", "315-1372");

// console.log(collection.get("Nathan"));      // 555-0182
// console.log(collection.size);               // 2


// for (let [key, value] of myMap) {
// //   console.log('${key} = ${value}');
//   console.log(key," = ", value);  //Another way   console.log(`${key}`,"   =   ", `${value}`);
// }

// function appendToScoreBoard(){

// var score = 25;
// var grade_1 = 'Great Job';
// var grade_2 = 'Solid B';
// var grade_3 = 'Out of Touch';
// var grade_4 = 'Out of Time';

//   var outcomes = {
//     score: grade,
//     grade_1: ,
//     grade_2: 'Solid B',
//     grade_3: 'Out of Touch',
//     grade_4: 'Out of Time'
//   };

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash += key.charCodeAt(i);
//     }
//     return hash % this.table.length;
//   }
  

// function getPasswordOptions() {//--------------------  Much More Visually Intuitive  -----------------------------------
//   var length = parseInt(prompt('How many characters would you like your password to contain?'));
//     if (Number.isNaN(length)) {
//       alert('Password length must be provided as a number');
//       return null;
//     }
//     if (length < 8) {
//       alert('Password length must be at least 8 characters');
//       return null;
//     }
//     if (length > 128) {
//       alert('Password length must less than 129 characters');
//       return null;
//     }
//     // has X 4
//     var hasSpecials = confirm('Click OK to confirm including special characters.');
//     var hasNumeros = confirm('Click OK to confirm including numeric characters.' );
//     var hasDowners = confirm('Click OK to confirm including lowercase characters.');
//     var hasUppers = confirm('Click OK to confirm including uppercase characters.');

//   if (hasSpecials === false && hasNumeros === false && hasDowners === false && hasUppers === false) {
//     alert('Must select at least one character type');
//     return null;   //--------cancel nation
//   }
//   //--------------------   some hash action..   ----------------------------
//   var passwordOptions = {
//     length: length,
//     hasSpecials: hasSpecials,
//     hasNumeros: hasNumeros,
//     hasDowners: hasDowners,
//     hasUppers: hasUppers
//   };
//   return passwordOptions;
// }
// function generatePassword() {//-------------------------  generatePassword  ------------------------------------------------------------
//   var options = getPasswordOptions();
//   var result = [];
//   var maybeChrs = [];
//   var mustChars = [];

//   if (!options) return null;  // if not in the options.. 

//   //--------------------------   Neat little trick i did  ------------------- --------------------------------------------
//   var hasArr = [options.hasSpecials,options.hasNumeros,options.hasDowners,options.hasUppers];
//   var randArr = [Specials,Numeros,Downers,Uppers];
//   for(i = 0; i< randArr.length; i++){
//     if (hasArr[i]){
//       maybeChrs = maybeChrs.concat(randArr[i]);
//       mustChars.push(getRandom(randArr[i]));
//     }
//   }





// if (document.getElementById("myDiv")) {
//   console.log("Element exists!");
// } else {
//   console.log("Element DOES NOT exist!");
// }

// var qsel = document.querySelector("header");
// if ( qsel ) {
//   console.log("Element exists!", qsel);
// } else {
//   console.log("Element DOES NOT exist!",qsel);
// }


//---- 1
// if (document.querySelector('div.container') !== null) {
//   alert('Class exists');
// }
// else {
//   alert('Class does not exist');
// }

//---- 2
// var div = document.getElementById('outerdiv');
// if (div.classList.contains('container')) {
//     alert('Class exists');
// }
// else {
//     alert('Class does not exist');
// }

//---- 3
// var element = document.getElementById("test");
//     //If it isn't "undefined" and it isn't "null", then it exists.
// if(typeof(element) != 'undefined' && element != null){
//     alert('Element exists');
// } else{
// 	alert('Element does not exist');
// }

//---- 4
// var myElement = document.getElementById("myElementID");
// if(!myElement){
//     //#myElementID element DOES NOT exist
// }
// if(myElement){
//     //#myElementID element DOES exists
// }

//---- 5
// var myEle = document.getElementById("myElement");
// console.log(myEle); // 'null'   if not exist 
    // if(myEle){
    //   console.log(myEle,myEle.value);
    //     var myEleValue= myEle.value;
    // }
//------------------------------------------------------------------------------


//-------------------------  Sort Dict by Values 1 -----------------------------------------------------
// let maxSpeed = {
//   car: 300, 
//   bike: 60, 
//   motorbike: 200, 
//   airplane: 1000,
//   helicopter: 400, 
//   rocket: 8 * 60 * 60
// };
// let sortable = [];
// for (var vehicle in maxSpeed) {
//   sortable.push([vehicle, maxSpeed[vehicle]]);
// }

// sortable.sort(function(a, b) {
//   return a[1] - b[1];
// });

// [["bike", 60], ["motorbike", 200], ["car", 300],
// ["helicopter", 400], ["airplane", 1000], ["rocket", 28800]]

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------


//------------------------------  Sort Dict by Values 2 ------------------------------------------------
// This is a complete piece of code, according to previous answers and How to iterate (keys, values) in JavaScript?:
// class DictUtils {
//     static entries(dictionary) {
//         try {

//             //ECMAScript 2017 and higher, better performance if support
//             return Object.entries(dictionary);
//         } catch (error) {
//             //ECMAScript 5 and higher, full compatible but lower performance
//             return Object.keys(dictionary).map(function(key) {
//                 return [key, dictionary[key]];
//             });
//         }

//     }
//     static sort(dictionary, sort_function) {
//         return DictUtils.entries(dictionary)
//             .sort(sort_function)
//             .reduce((sorted, kv)=>{
//                 sorted[kv[0]] = kv[1]; 
//                 return sorted;
//             }, {});
//     }

// } 

// class SortFunctions {
//     static compare(o0, o1) {
//         //TODO compelte for not-number values
//         return o0 - o1;
//     }
//     static byValueDescending(kv0, kv1) {
//         return SortFunctions.compare(kv1[1], kv0[1]);
//     }
//     static byValueAscending(kv0, kv1) {
//         return SortFunctions.compare(kv0[1], kv1[1]);
//     }

// }

// let dictExample = {
//     "jack": 10,
//     "joe": 20,
//     "nick": 8,
//     "sare": 12
// }

// let sorted = DictUtils.sort(dictExample, SortFunctions.byValueDescending)

// console.log(sorted);



//--------------------------------  Sort Dict by Values 3 -------------------------------------------

    // var dict = {
    //   "x": 1,
    //   "y": 6,
    //   "z": 9,
    //   "a": 5,
    //   "b": 7,
    //   "c": 11,
    //   "d": 17,
    //   "t": 3
    // };
    
    // // Create items array
    // var items = Object.keys(dict).map(function(key) {
    //   return [key, dict[key]];
    // });
    
    // // Sort the array based on the second element
    // items.sort(function(first, second) {
    //   return second[1] - first[1];
    // });
    
    // // Create a new array with only the first 5 items
    // console.log(items.slice(0, 5));

    //----------------------------------  Sort Dict by Values 4 --------------------------------------------
  //   function sortJsObject() {
  //     var dict = {"x" : 1, "y" : 6,  "z" : 9, "a" : 5, "b" : 7, "c" : 11, "d" : 17, "t" : 3};
  
  //     var keys = [];
  //     for(var key in dict) { 
  //        keys[keys.length] = key;
  //      }
  
  //      var values = [];     
  //      for(var i = 0; i < keys.length; i++) {
  //          values[values.length] = dict[keys [i]];
  //      }
  
  //      var sortedValues = values.sort(sortNumber);
  //      console.log(sortedValues);
  // }
  
  // // this is needed to sort values as integers
  // function sortNumber(a,b) {
  //    return a - b;
  // }


//------------------------------  Sort Dict by Values 5 ---------------------------------
// If you want the first five biggest values, well, loop over sortedDict with a for loop 5 times and get those values out:

// function getFiveFirstValues(){
//     var valuesArray = [];
//     for (i = 0; i < 5; i++)
//     {
//         valuesArray.push(sortedDict[i].value);
//     }
//     return valuesArray;
// }
//-----------------------------  Sort Dict by Values ----------------------------------

//-----------------------------  Sort Dict by Values 6 ----------------------------------
// It may not be straight forward in JavaScript.
    
// var dict = {
//   "x": 1,
//   "y": 6,
//   "z": 9,
//   "a": 5,
//   "b": 7,
//   "c": 11,
//   "d": 17,
//   "t": 3
// };

// // Create items array
// var items = Object.keys(dict).map(function(key) {
//   return [key, dict[key]];
// });

// // Sort the array based on the second element
// items.sort(function(first, second) {
//   return second[1] - first[1];
// });

// // Create a new array with only the first 5 items
// console.log(items.slice(0, 5));
// // If you want to return a sorted object with the same structure you started with, you can run this on the items returned from the accepted answer:

// sorted_obj={}
// $.each(items, function(k, v) {
//     use_key = v[0]
//     use_value = v[1]
//     sorted_obj[use_key] = use_value
// })
// // Combine them for a single function that sorts a JavaScript object:
// function sort_object(obj) {
//   items = Object.keys(obj).map(function(key) {
//       return [key, obj[key]];
//   });
//   items.sort(function(first, second) {
//       return second[1] - first[1];
//   });
//   sorted_obj={}
//   $.each(items, function(k, v) {
//       use_key = v[0]
//       use_value = v[1]
//       sorted_obj[use_key] = use_value
//   })
//   return(sorted_obj)
// } 
    //-------------------------------------------------------------
    
    //-------------------------------------------------------------
    
    //-------------------------------------------------------------
    
    //-------------------------------------------------------------
    
    //-------------------------------------------------------------
    
    //-------------------------------------------------------------
    
    //-------------------------------------------------------------
    
    //-------------------------------------------------------------