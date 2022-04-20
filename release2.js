let sudokuBox =  [ 0,0,0,2,6,0,7,0,1 ];
let presentvalues= [];
 for (var i=0;i<sudokuBox.length;i++){
     if (sudokuBox[i]>0){
         presentvalues.push(sudokuBox[i]);
     }
 }
console.log(presentvalues);
let possibleValues = [1,2,3,4,5,6,7,8,9];
possibleValues = possibleValues.filter( function( el ) {
    return presentvalues.indexOf( el ) < 0;
} );
console.log (possibleValues);

for (var i=0;i<sudokuBox.length;i++){
    if(sudokuBox[i] === 0){
        sudokuBox[i] = possibleValues[0];
        possibleValues.shift();
    }
}
console.log (possibleValues);
console.log (sudokuBox);