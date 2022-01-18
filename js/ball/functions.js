const  addStyleToObject = function (object, stylesArray)
{
	for (let key in stylesArray)
	{
		object.style[key] = stylesArray[key];
	}
}

























// private function for the ball class using set interval to make auto movement
/**
#toggleMove()
{
	if (this.flag)
	{
		this.#intervalId = setInterval(() => {
		switch (this.#movingDirection)
		{
		case `right`:
			console.log(`inside interval on right`);
			this.setLeft(this.#left + 10);
			break;
		case `left`:
			console.log(`inside interval on left`);
			this.setLeft(this.#left - 10);
			break;
		case `up`:
			console.log(`inside interval on up`);
			this.setTop(this.#top - 10);    
			break;
		case `down`:
			console.log(`inside interval on down`);
			this.setTop(this.#top + 10);
			break;
		}
		},500);
	}
	else {
		clearInterval(this.#intervalId);
		this.#intervalId = null;
	}
}
*/

// let intervalObjects = [];

// const startSlinding = (image, slidingTime = 500) =>
// {
// 	for (let i = 0; i < intervalObjects.length; i++)
// 	{
// 		if (image === intervalObjects[i].image)
// 		{
// 			stopSliding(intervalObjects[i].timerId);
// 		}
// 	}
// 	let imageNumber = 1;
// 	let timerId = setInterval(function () 
// 	{
// 		imageNumber = (imageNumber == 9) ? 1 : imageNumber; 
// 		image.setAttribute(`src`, `../images/${imageNumber}.jpg`)
// 		imageNumber++;
// 	}, slidingTime);
	
// 	intervalObjects.push({image:image,
// 	timerId:timerId});
// 	return timerId;
// }
// const stopInterval = timerId =>
// {
// 	clearInterval(timerId);
// }

// const removeValueFromArray = function (array, value)
// {
// 	return array.filter((item) => {
// 		return item != value;
// 	});
// }


// const getCheckedRadio = function (radioArray)
// {
// 	for (let i = 0; i < radioArray.length; i++)
// 	{
// 		if (radioArray[i].checked)
// 			return radioArray[i];
// 		else
// 			continue;
// 	}
// }
