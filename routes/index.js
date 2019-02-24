const express = require("express"),
        router = express.Router();

var fs = require("fs");

var allPuzzles = fs.readFileSync('./routes/puzzles.txt', 'utf8').split("Grid");
allPuzzles.splice(0,1);

var randomPuzzle = new Array(9);
for(var i=0; i<9; i++){
	randomPuzzle[i] = new Array(9);
}

for(var i=0; i<9; i++){
	for(var j=0; j<9; j++){
		randomPuzzle[i][j] = parseInt(allPuzzles[2].split("\n")[i+1].charAt(j));
	}
}

router.get("/", (req,res)=>{
	res.render("index", {randomPuzzle: randomPuzzle});
});

module.exports = router;