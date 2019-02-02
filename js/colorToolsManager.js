function ColorToolsManager() {
	this.colorPattle = [
		["79,116,143", "33,41,20", "25,180,228", "89,198,25", "113,105,94", "189,84,57"],
		["237,222,69", "2,96,166", "234,53,86", "237,20,111", "155,240,233", "97,210,214"],
		["53,35,93", "76,73,162", "203,36,2", "163,26,72", "219,36,100", "184,220,60"]
	];
	
	this.setColor = function setColor(colorPattleId, colorIndex) {
		defaultColor = "rgb(" + this.colorPattle[colorPattleId][colorIndex]+")";
	}

	this.updateColorPattle = function updateColorPattle(index) {
		var colorPattle1 = document.getElementById("SanSuci");
		var colorPattle2 = document.getElementById("FloralMuch");
		var colorPattle3 = document.getElementById("DuctTape");
		if(index == 0) {
			colorPattle2.style.display = "none";
			colorPattle3.style.display = "none";
			colorPattle1.style.display = "block";
		} else if(index == 1) {			
			colorPattle1.style.display = "none";
			colorPattle3.style.display = "none";
			colorPattle2.style.display = "block";

		} else if(index == 2) {			
			colorPattle2.style.display = "none";
			colorPattle1.style.display = "none";
			colorPattle3.style.display = "block";

		}
	}

}


colorPattleSelector.addEventListener("change", function() {
	colorToolsManager.updateColorPattle(colorPattleSelector.value);
});

eraser.addEventListener("click", function() {
	defaultColor = "white";
});
reload.addEventListener("click", function() {
	  location.reload();
});