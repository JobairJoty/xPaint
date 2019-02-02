function initApp() {
	
	canvas.addEventListener("mousedown", function(event) {
		mouseDown = true;
		mouseX = getMouse("x", event);
		mouseY = getMouse("y", event);
	});

	canvas.addEventListener("mousemove", function(event) {
		mouseX = getMouse("x", event);
		mouseY = getMouse("y", event);
		if(mouseDown) {
			if(defaultPencil == "circle") {
				ctx.beginPath();
				ctx.fillStyle = defaultColor;
				ctx.arc(mouseX, mouseY, brushSize, 0, Math.PI*2);
				ctx.fill();
			} else if(defaultPencil == "line") {
				ctx.beginPath();
				ctx.fillStyle = defaultColor;
				ctx.rect(mouseX, mouseY, brushSize, brushSize);
				ctx.fill();
			}
		}
	});


	canvas.addEventListener("mouseup", function(event) {
		mouseDown = false;
	});


	canvas.addEventListener("mouseleave", function(event) {
		mouseDown = false;
	});




	function getMouse(axis, event) {
		var mouseAxis = null;
		if(axis == "x") {
			mouseAxis = event.clientX - ctx.canvas.offsetLeft;

		} else if(axis == "y"){
			mouseAxis = event.clientY - ctx.canvas.offsetTop;
		
		}
		return mouseAxis;
	}
	
}