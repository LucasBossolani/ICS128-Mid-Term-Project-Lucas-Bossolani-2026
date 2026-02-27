//setting up variables to facilitate readability
const btn = document.getElementById('btn-login');
const userNameInput = document.getElementById('userName-input');
const userIdInput = document.getElementById('UserId-input');
const errorMsg = document.getElementById('errorMessage');

//function that renders all the users in case that an admin is logging in
generateCardsAdmin = () => {
    const grid = document.getElementById('character-grid');
    //cards container is set to hidden on my CCS file, display flex is applied only when login is successful
    grid.style.display = 'flex';
    grid.innerHTML = '';
//basic for loop that loops through all the elements on the baseUsers array and create a card for each element
    for (let i = 0; i < baseUsers.length; i++) {
        //+= is important in order get all the cards as my output
        grid.innerHTML += `
            <div id="card-${i}" class="sf2-card">
                <div class="card-portrait-frame">
                    <img src="${baseUsers[i].pfp}" class="card-portrait">
                </div>
                <div class="card-info">
                    <h3 class="card-name arcade-font">
                        ${baseUsers[i].personalName} ${baseUsers[i].familyName}
                    </h3>
                    <div class="card-details">
                        <p>ID: ${baseUsers[i].uid}</p>
                        <p>${baseUsers[i].userName}</p>
                    </div>
                </div>
                <div class="card-admin-slot">
                    <button id="del-btn" class="btn bg-transparent text-danger border-danger" data-index="${i}">Delete User</button>
                </div>
            </div>
        `;
        const button = document.querySelectorAll('#del-btn');

        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', function(){
                document.getElementById(`card-${i}`).style.display = 'none';
    });
}
    }
}

//function that validates the login
validator = () => {
    //foundUser -> boolean variable. set to null before matching a user.
    let foundUser = null;

    // Search Logic
    for (let i = 0; i < baseUsers.length; i++) {
        if (userNameInput.value.trim() === baseUsers[i].userName && userIdInput.value.trim() === baseUsers[i].uid) {
            foundUser = baseUsers[i];
            break;
        }
    }

    // Success/Failure Logic
    if (foundUser) {
        // Close Modal
        const closeBtn = document.getElementById('btn-close');
        if(closeBtn) closeBtn.click(); 

        
        if (foundUser.admin) {
            generateCardsAdmin();
        }
        else {
            //Creating Adm object in order to use the getAdmins method.
            const adminObject  = new Adm();
            //creating array 'allAdmins' this will be equal than calling the getAdmins method onto the adminObject.
            const allAdmins = adminObject.getAdmins(baseUsers);
            //creating array 'userToDisplay' this will be an array that contains the foundUser variable.
            //and also 'allAdmins' array (created above) by using the .concat function.
            const usersToDisplay = [foundUser].concat(allAdmins);

            const grid = document.getElementById('character-grid');
            //setting the container display to flex and clearing everything inside it. Just like at the start of the code.
            grid.style.display = 'flex';
            grid.innerHTML = '';
            //for loop that loops through all the elements on the new array userToDisplay.
            for (let i = 0; i < usersToDisplay.length; i++) {
                //+= is important to get the desired output.
                //= would result on just the last card created.
                grid.innerHTML += `
                    <div class="sf2-card">
                        <div class="card-portrait-frame">
                            <img src="${usersToDisplay[i].pfp}"  class="card-portrait">
                        </div>
                        <div class="card-info">
                            <h3 class="card-name arcade-font">
                                ${usersToDisplay[i].personalName} ${usersToDisplay[i].familyName}
                            </h3>
                            <div class="card-details">
                                <p>ID: ${usersToDisplay[i].uid}</p>
                                <p>${usersToDisplay[i].userName}</p>
                            </div>
                        </div>
                        <div class="card-admin-slot"></div>
                    </div>
                `;
            }
        }
    } else {
        //if fails: display an error message
        errorMsg.innerText = 'Your credentials do not match any user.';
        errorMsg.style.color = 'red';
    }
};


//attaching the validator function (created above) to the login button
btn.addEventListener('click', validator);


//ask joe
//don't know how to launch the modal without using window.onload
window.onload = () => {
    new bootstrap.Modal(document.getElementById('login-modal')).show();
};
//ask joe
//can admins delete other admins? 
