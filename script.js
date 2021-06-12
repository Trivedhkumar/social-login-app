let signInButton = document.getElementById('sign-in');
        let signOutButton = document.getElementById('sign-out');
        let mediaContentImage =  document.getElementById('media-content-image');
        let mediaContentName =  document.getElementById('media-content-name');
        let mediaContentUsername =  document.getElementById('media-content-username');
        let contentCard = document.getElementById('content-card');
        let contentPara = document.getElementById('content-para');
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
          console.log("ID Token: " + id_token);
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