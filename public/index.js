document.getElementById("clickMe").addEventListener("click", ()=>{
	var randomPuzzle = document.getElementById("clickMe").getAttribute("data-x");

	randomPuzzle = JSON.parse( "[" + randomPuzzle + "]");

	var newArr = [];
	while(randomPuzzle.length) newArr.push(randomPuzzle.splice(0,9));

	console.log(newArr)
	
	sudokuSolver(newArr);
});

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
	for(var i=0; i<9; i++){
		for(var j=0; j<9; j++){
			if(randomPuzzle[i][j]>0){
				document.getElementById(""+i+j+"").value=randomPuzzle[i][j];
		}
	}
}
}