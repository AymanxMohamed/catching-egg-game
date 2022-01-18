import * as users from './users.js'
//import {clickSound} from './game.js'

let loginButton =  document.querySelector(`form`);

let userName = document.querySelector(`input[name="username"]`);

loginButton.addEventListener(`submit`,async function(event){
    //clickSound.play();
    event.preventDefault();
    // Check: if the user is new post the user
    if (await users.isNewUser(userName.value))
    {
        await users.postUser({"name" : `${userName.value}`});
    }
    this.submit();
})//login button event handler




