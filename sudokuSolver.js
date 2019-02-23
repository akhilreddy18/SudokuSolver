var fs = require("fs");

var allPuzzles = fs.readFileSync('puzzles.txt', 'utf8').split("Grid");
allPuzzles.splice(0,1);

var randomPuzzle = new Array(9);
for(var i=0; i<9; i++){
	randomPuzzle[i] = new Array(9);
}

for(var i=0; i<9; i++){
	for(var j=0; j<9; j++){
		randomPuzzle[i][j] = parseInt(allPuzzles[0].split("\n")[i+1].charAt(j));
	}
} 

console.log(randomPuzzle);
console.log("--------------------------------");
console.log(sudokuSolver(randomPuzzle));

function sudokuSolver(randomPuzzle){
	
	var filledNumbers=[], emptySpaces=true;

	while(emptySpaces){

		emptySpaces=false;
		for(var col=0; col<9; col++){
			for(var row=0; row<9; row++){
				
				if(randomPuzzle[col][row] === 0){

					emptySpaces=true;
					filledNumbers=[];
					for(var i = 0; i<9; i++){

						if(randomPuzzle[col][i]>0){
							if(!filledNumbers.includes(randomPuzzle[col][i])){
								filledNumbers.push(randomPuzzle[col][i]);
							}
						}

						if(randomPuzzle[i][row]>0){
							if(!filledNumbers.includes(randomPuzzle[i][row])){
								filledNumbers.push(randomPuzzle[i][row]);
							}
						}
					}

					for(var colBox=Math.floor(col/3)*3; colBox< Math.floor(col/3)*3+3; colBox++){
						for(var rowBox=Math.floor(row/3)*3; rowBox<Math.floor(row/3)*3+3; rowBox++){
							if(randomPuzzle[colBox][rowBox] > 0){
								if(!filledNumbers.includes(randomPuzzle[colBox][rowBox])){
									filledNumbers.push(randomPuzzle[colBox][rowBox]);
								}
							}
						}
					}

					if(filledNumbers.length === 8){
						for(var i=1; i<10; i++){
							if(!filledNumbers.includes(i)){
								randomPuzzle[col][row] = i;
								// console.log(filledNumbers);
								// console.log([col,row], i,i);
							}
						}
					}
				}
			}
		}
	}
	return randomPuzzle;
}