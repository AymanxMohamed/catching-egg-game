export let getQueryStringObject = function (queryString) {
    let keyValuePairs = queryString.substring(1).split('&');
    let keyValuePairObject = {};
    keyValuePairs.forEach(e => {
        let keyValuePair = e.split('=');
        keyValuePairObject[keyValuePair[0]] = keyValuePair[1].replace('+', ' ');
    });
    return keyValuePairObject;
}

export const addBasketEvent = function (basket) {
	
	document.addEventListener(`mousemove`,function (e){
		basket.MoveBall(e.screenX);
	}) // document keydown event
}

export const  addStyleToObject = function (object, stylesArray)
{
    for (let key in stylesArray)
	{
        object.style[key] = stylesArray[key];
    }
}





export let addScore = function (windowObject)
{
    let scoreDiv = document.createElement(`div`);

    let scoreContainerSpan = document.createElement(`span`);

    let scoreSpan = document.createElement(`span`);

    scoreContainerSpan.innerText = `Score:`;

    scoreSpan.innerText = `0`;

    scoreContainerSpan.append(scoreSpan);
    
    scoreDiv.append(scoreContainerSpan);

    scoreDiv.classList.add(`score`);

    windowObject.document.querySelector(`.container`).append(scoreDiv);

    return scoreSpan;
}

export let addTarget = function (windowObject)
{
    let targetDiv = document.createElement(`div`);

    let targetContainerSpan = document.createElement(`span`);

    let targetSpan = document.createElement(`span`);

    targetContainerSpan.innerText = `Target:`;

    targetSpan.innerText = `20`;

    targetContainerSpan.append(targetSpan);
    
    targetDiv.append(targetContainerSpan);

    targetDiv.classList.add(`target`);

    windowObject.document.querySelector(`.container`).append(targetDiv);
}

export let addTimer = function (windowObject)
{
    let timerDiv = document.createElement(`div`);

    let timerContainerSpan = document.createElement(`span`);

    let timerSpan = document.createElement(`span`);

    timerContainerSpan.innerText = `Timer:`;

    timerSpan.innerText = `60`;

    timerContainerSpan.append(timerSpan);
    
    timerDiv.append(timerContainerSpan);

    timerDiv.classList.add(`timer`);

    windowObject.document.querySelector(`.container`).append(timerDiv);

    return timerSpan;
}


