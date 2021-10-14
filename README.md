# Getting Started with `React Firebase Authentication`

# Create Firebase Project
* go to firebase.com -> click 'add project' give a project name as I give ('react-firebase-authentication') and go on.
* click 'authentication' from left side navbar. click 'get-started' then select your sign-in method. then enable it.
    you can add your domain if you have. But for the practice purpose I use default localhost and default app.
* click 'go to docs' button from top navbar. click 'build' from docs dropdown menu.
* click 'authentication' from left navbar. click 'web' and get started.
* click 'install the firebase sdk' and follow the instruction.
    - npm install firebase
    - goto project settings and give a firebase app name. After that I get firebase configuration code. 
    - I made a folder name 'Firebase' and create two js file. One for firebase config and another for firebase           initialize. I put the config code to firebase.config.js file.
    - In the firebase.initialize.js file I make a new function(initializeAuthentication) and put the initialize code under that function.
    - I called it to the app.js
    - That's all for the firebase configuration.

# google sign-in system
    - go to docs> build> authentication> web> googleSignIn> read the documentation
    - for google sign in system I have to enable google sign-in and I already did it before.
    - at first I import google auth provider from firebase auth 
        'import { GoogleAuthProvider } from "firebase/auth";' I use this in login.js file.
    - make an object for 'GoogleAuthProvider' and give any name as I want. firebase use only provider variable name but we can use anything for that. I use 'googleProvider' because I will use more provider like github, yahoo, microsoft etc.
    - skip optional step 3,4,5 
    - import 'getAuth, signInWithPopup' then calling getAuth().
    - now I made a onClick function(handleGoogleSignIn) for google signIn method. and put that function into a button.
    - calling the 'signInWithPopup' method and pass (auth, googleProvider) and receive the response and get the user data. in this time I have to use useState method to set the user data and when user is successfully loggedIn then set that user data.
    - I also destructure the user object data to show that in the UI.
    * Note: If you use onclick function(handleGoogleSignIn) under the form then you should use preventDefault() function to stop the default reload process of form submission.
    - So this is the process of google signIn using firebase authentication.

# Github sign-in system.
    - enable github sign-in method as like as google sign-in method.
    - but this time we need some additional configuration. Need to configure github Oauth application.
    - goto github Oauth application and make new application. give an application name home url and provide 'authorization callback url' this url we can find when we enable github sign-in method. and It's not over yet.
    - after complete the Oauth configuration we will get 'client Id' and 'client secret key' these two parameters have to add in the firebase github configuration.
    - rest of the thing same as google. (coding part)

# route set up
    - install 'react-router-dom'. We use this module for linking different pages. Though react is single page application so we use 'to' & 'path' attribute instead of 'a' tag.
    - after installation 'react-router-dom' we use BrowserRouter as Router. then set switch and route then inside the route we call the component. for details you can see the react router documentation.

# sign-in with email and password
    - Before applying email & password login system I need a form to get user input email and password. So I make a form design.
    - to take user input value I can use onBlur or onChange method. I prefer onBlur.
    - make a function(handleNameChange, handleEmailChange, handlePasswordChange) that receive input value from user.
    - use useState method and set onchange name, email, password.
    - our email and password is ready. Now I will import a "createUserWithEmailAndPassword" from firebase auth.
    - in the form tag I use onSubmit={handleRegistration}. under this function I called 'createUserWithEmailAndPassword' this method and pass 3 params( auth, email, password) and it creates a new user.
    - firebase take at lease 6 characters password. So I should handle this error and show the error message to the user.
    - set error using useState method. then show this error message to the user.
    - I also set a email validation.
    
# sign-in by registered user (email, password) 
    - using 'createUserWithEmailAndPassword' this method we create a new user and that save into our firebase application. So now time to create a login system for this user providing email and password.
    - I do this system in the login.js file. In that file previously I do google and github sign-in system. 
    - so here we need to provide email and password from the user. So I do the same(using onBlur and receive email and password) as when I register a new user.
    - import 'signInWithEmailAndPassword' and then calling this method under the 'processLogin' method. this 'processLogin' is called when user clicked on login button. so I pass the (auth, email, password) into 'signInWithEmailAndPassword' function and if the email and password are correct then it loggedIn the user and show the welcome message and email in the Ui.