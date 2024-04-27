document.addEventListener('DOMContentLoaded', function() {

let card = document.querySelector(".card");
let passwordInput = document.getElementById('passwrd');
const eyeIcon = document.querySelector('.eyeIcon');
let passwordfill = document.querySelector(".passwordfill");
let none = document.querySelector(".none");
let loginmess = document.querySelector(".loginmess");

let greenTimers = document.querySelectorAll(".greenTimer");
 let passInputLock = document.querySelector(".passInputLock");

let showPassword = false;

eyeIcon.addEventListener('click', togglePasswordVisibility);

function togglePasswordVisibility() {
    let none1 = document.querySelector(".none1");
    showPassword = !showPassword;
    if (showPassword) {
        passwordInput.type = 'text';
        // eyeIcon.style.fill = '#000000';
        eyeIcon.innerHTML = `  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" height="24px" width = "24px" class="eyeIcon">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>`;
        none.style.display = "none"
        let svg = document.createElement('p');
        svg.classList.add('lockIcon');
        svg.classList.add('none1');
        svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
        <path d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z" stroke="currentColor" stroke-width="1.5" />
        <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C13.9593 2 15.5 3.5 16 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.9961 15.5H12.0051" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`;

        passInputLock.prepend(svg);
        none.style.display = "none"
    } else {
        passwordInput.type = 'password';
        // eyeIcon.style.fill = 'none';
        eyeIcon.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" class="eyeIcon">
        <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" stroke-width="1.5" />
        <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" stroke-width="1.5" />
    </svg>`;

        none.style.display = "flex"
        none1.style.display = "none"
    }
}

let motionIcon = document.querySelector(".motionIcon");
let motionIconP = document.querySelector(".motionIcon p");
let isMoved = false; // Track the state of motionIconP
let messsages = document.createElement("div");
messsages.classList.add('loginmess1');

messsages.innerHTML = `<div class="message">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="green"
fill="rgb(85, 174, 85)">
<path
    d="M18.9905 19H19M18.9905 19C18.3678 19.6175 17.2393 19.4637 16.4479 19.4637C15.4765 19.4637 15.0087 19.6537 14.3154 20.347C13.7251 20.9374 12.9337 22 12 22C11.0663 22 10.2749 20.9374 9.68457 20.347C8.99128 19.6537 8.52349 19.4637 7.55206 19.4637C6.76068 19.4637 5.63218 19.6175 5.00949 19C4.38181 18.3776 4.53628 17.2444 4.53628 16.4479C4.53628 15.4414 4.31616 14.9786 3.59938 14.2618C2.53314 13.1956 2.00002 12.6624 2 12C2.00001 11.3375 2.53312 10.8044 3.59935 9.73817C4.2392 9.09832 4.53628 8.46428 4.53628 7.55206C4.53628 6.76065 4.38249 5.63214 5 5.00944C5.62243 4.38178 6.7556 4.53626 7.55208 4.53626C8.46427 4.53626 9.09832 4.2392 9.73815 3.59937C10.8044 2.53312 11.3375 2 12 2C12.6625 2 13.1956 2.53312 14.2618 3.59937C14.9015 4.23907 15.5355 4.53626 16.4479 4.53626C17.2393 4.53626 18.3679 4.38247 18.9906 5C19.6182 5.62243 19.4637 6.75559 19.4637 7.55206C19.4637 8.55858 19.6839 9.02137 20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19Z"
    stroke="white" stroke-width="1.5" />
<path d="M9 12.8929L10.8 14.5L15 9.5" stroke="white" stroke-width="2" stroke-linecap="round"
    stroke-linejoin="round" />
</svg>
<p>Now you will stay SignIn</p>
</div>
<div class="greenTimer"></div>`;

motionIcon.addEventListener("click", () => {
    if (!isMoved) {
        motionIconP.style.left = `50%`;
        isMoved = true;
        //  alert("you we will be carried to your dashboard")
      
        passwordfill.appendChild(messsages);
        let loginmess1 = document.querySelector(".loginmess1");
        loginmess1.style.display = "flex";
        motion();


    } else {
        motionIconP.style.left = `10%`;
        isMoved = false;
        passwordfill.removeChild(messsages)
        // let loginmess1 = document.querySelector(".loginmess1");
        // loginmess1.style.display = "none";
    }


});

// .style.display = "none"


// document.getElementById("myForm").addEventListener("submit", function (event) {
//     event.preventDefault();
//   });

let form = document.querySelectorAll(".form");

form.forEach(element => {
    element.addEventListener("submit", (event) => {
        event.preventDefault();
        // Add your desired functionality here
    });
});
let resetPassword = document.querySelector(".resetPassword");
let resetMessage = document.querySelector(".resetMessage");
let sendBtn = document.querySelector(".sendBtn");
let email = document.getElementById("email");
resetPassword.addEventListener("click", () => {
    card.style.display = "none"
    resetMessage.style.display = "flex"
})
sendBtn.addEventListener("click", () => {
    let emailValue = email.value.trim();
    if (emailValue !== "") {
        card.style.display = "flex";
        resetMessage.style.display = "none";
        alert("You have successfully reset the password")
    } else {
        alert('Please Enter email to reset password');
    }
});


function motion() {
 // Get all greenTimer elements
    greenTimers.forEach(element => {
        element.addEventListener("animationend", () => {
            let loginmess1 = document.querySelector(".loginmess1");
          
                loginmess1.style.display = "none";
            loginmess.style.display = "none";
            location.reload();
        });
    });
}

    // greenTimer.addEventListener("animationend", () => {
        
    // });
// }
let continueBtn = document.querySelector(".continueBtn");
// let motionIcon = document.querySelector(".motionIcon");
continueBtn.addEventListener("click", () => {
    
    let passwordInput1 = passwordInput.value.trim();
    if (passwordInput1 !== "") {
        loginmess.style.display = "flex";
        motion();
    }
})

});
