const addBallEvent = function (ball) {
	
	document.addEventListener(`keydown`,function (e){
		switch(e.code)
		{
			case 'ArrowRight':
				ball.MoveBall(`right`);
				break;
			case 'ArrowUp':
				ball.MoveBall(`up`);
				break;
			case 'ArrowLeft':
				ball.MoveBall(`left`);
				break;
			case 'ArrowDown':
				ball.MoveBall(`down`);
				break;
		}
	}) // document keydown event
}
