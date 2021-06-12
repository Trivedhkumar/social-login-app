$(document).ready(function () {
    // Google login functionality
    let signInButton = $('#sign-in');
            let signOutButton = $('#sign-out');
            let mediaContentImage =  $('#media-content-image');
            let mediaContentName =  $('#media-content-name');
            let mediaContentUsername =  $('#media-content-username');
            let contentCard = $('#content-card');
            let contentPara = $('#content-para');
            function onSignIn(googleUser) {
              // Useful data for your client-side scripts:
              var profile = googleUser.getBasicProfile();
              title.textContent = `Welcome ${profile.getGivenName()}`
              signInButton.classList.add('is-hidden');
              signOutButton.classList.remove('is-hidden');
              contentCard.classList.remove("is-hidden")
              mediaContentImage.src = profile.getImageUrl();
              mediaContentName.textContent = profile.getName();
              mediaContentUsername.textContent = `@${profile.getFamilyName()}`;
              contentPara.textContent= `Hi ${profile.getGivenName()} here is your email id ${profile.getEmail()}`
      
              // The ID token you need to pass to your backend:
              var id_token = googleUser.getAuthResponse().id_token;
            }
            function signOut() {
              var auth2 = gapi.auth2.getAuthInstance();
              auth2.signOut().then(function () {
                console.log('User signed out.');
                signOutButton.classList.add('is-hidden');
                signInButton.classList.remove('is-hidden');
                contentCard.classList.add("is-hidden")
                title.textContent = `Login to view your profile`
    
              });
    }
})
        

