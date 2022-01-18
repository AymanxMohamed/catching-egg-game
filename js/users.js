
export let postUser = async function (userObject)
{
    try
    {
        let response = await fetch('https://node-monge-iti-project.herokuapp.com/games', {
            method:'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userObject)
        });
        return  await response.json();
    }
    catch(e)
    {
        console.log(e);
    }
}

export let getUserLastLoginDate = async function(userName)
{
    try
    {
        let response = await fetch(`https://node-monge-iti-project.herokuapp.com/games/${userName}`);
        let userData = await response.json();
        return userData;
    }
    catch(e)
    {
        console.log(e);
    }
}

export let isNewUser =  async function (userName)
{
    let userDate  = await getUserLastLoginDate(userName);
    if (JSON.stringify(userDate) === '{}')
    {
        return true;
    }
    else
    {
        return false;
    }
}

export let addUserInfo = function ({userName, userLastLoginDate}, windowObject)
{
    let userDivObject = document.createElement(`div`);

    // user name Span
    let userNameContainerSpan = document.createElement(`span`);
    let userNameSpan = document.createElement(`span`);
    userNameContainerSpan.innerText = `Player\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0:`;
    userNameSpan.innerText = `${userName}\n`;   
    userNameContainerSpan.append(userNameSpan);

    // last Login Span
    let lastLoginDateContainerSpan = document.createElement(`span`);
    let lastLoginDateSpan = document.createElement(`span`);
    lastLoginDateContainerSpan.innerText = `lastLoginDate:`;
    let userDate = new Date(userLastLoginDate.date);
    lastLoginDateSpan.innerText = `${userDate.toLocaleString()}`;
    lastLoginDateContainerSpan.append(lastLoginDateSpan);

    // add  the user div into the windowObject
    userDivObject.append(userNameContainerSpan, lastLoginDateContainerSpan);
    userDivObject.classList.add(`userInfo`);
    windowObject.document.querySelector(`.container`).append(userDivObject);
}




