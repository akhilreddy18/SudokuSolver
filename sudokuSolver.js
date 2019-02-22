function sudokuSolver(puzzle){
	var filledPosition={}, impossibleNumbers, emptySpaces = 81;
	while(emptySpaces > 0){
		emptySpaces= 0;
	for(var col=0; col<puzzle.length; col++){
		for(var row=0; row<puzzle.length; row++){
			// var colB = Math.floor(col/3)*3;
			// var rowBox = Math.floor(row/3)*3;
			if(puzzle[col][row] === 0){
				emptySpaces
				filledPosition={};
				for(var i=0; i<9; i++){
					if(puzzle[col][i] > 0){
						filledPosition[puzzle[col][i]] = true;
					}
					if(puzzle[i][row] > 0){
						filledPosition[puzzle[i][row]] = true;
					}
				}
					for(var colBox = Math.floor(col/3)*3;colBox < Math.floor(col/3)*3+3; colBox++){
						for(var rowBox = Math.floor(row/3)*3;rowBox < Math.floor(row/3)*3+3; rowBox++){
							if(puzzle[colBox][rowBox] > 0){
								filledPosition[puzzle[colBox][rowBox]] = true;
							}
						}
					}
				impossibleNumbers = Object.keys(filledPosition);
				if(impossibleNumbers.length === 8) {
					for(var i=1; i<10; i++){
						if(impossibleNumbers.indexOf(i.toString())<0){
							puzzle[col][row] = i;
						}
					}
				} else {
					emptySpaces++;
				}

			}
		}
	}
}
	return puzzle;
}



var puzzle = [
[5,3,0,0,7,0,0,0,0],
[6,0,0,1,9,5,0,0,0],
[0,9,8,0,0,0,0,6,0],
[8,0,0,0,6,0,0,0,3],
[4,0,0,8,0,3,0,0,1],
[7,0,0,0,2,0,0,0,6],
[0,6,0,0,0,0,2,8,0],
[0,0,0,4,1,9,0,0,5],
[0,0,0,0,8,0,0,7,9]];

console.log(sudokuSolver(puzzle));