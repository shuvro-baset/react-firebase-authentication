# Getting Started with `React Firebase Authentication`

# ---------- Create Firebase Project ----------
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

# ---------- google sign-in system ----------
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

# ---------- Github sign-in system. ----------
    - enable github sign-in method as like as google sign-in method.
    - but this time we need some additional configuration. Need to configure github Oauth application.
    - goto github Oauth application and make new application. give an application name home url and provide 'authorization callback url' this url we can find when we enable github sign-in method. and It's not over yet.
    - after complete the Oauth configuration we will get 'client Id' and 'client secret key' these two parameters have to add in the firebase github configuration.
    - rest of the thing same as google. (coding part)

# ---------- route set up ----------
    - install 'react-router-dom'. We use this module for linking different pages. Though react is single page application so we use 'to' & 'path' attribute instead of 'a' tag.
    - after installation 'react-router-dom' we use BrowserRouter as Router. then set switch and route then inside the route we call the component. for details you can see the react router documentation.

# ---------- sign-in with email and password ----------
    - Before applying email & password login system I need a form to get user input email and password. So I make a form design.
    - to take user input value I can use onBlur or onChange method. I prefer onBlur.
    - make a function(handleNameChange, handleEmailChange, handlePasswordChange) that receive input value from user.
    - use useState method and set onchange name, email, password.
    - our email and password is ready. Now I will import a "createUserWithEmailAndPassword" from firebase auth.
    - in the form tag I use onSubmit={handleRegistration}. under this function I called 'createUserWithEmailAndPassword' this method and pass 3 params( auth, email, password) and it creates a new user.
    - firebase take at lease 6 characters password. So I should handle this error and show the error message to the user.
    - set error using useState method. then show this error message to the user.
    - I also set a email validation.
    
# ---------- sign-in by registered user (email, password) ----------
    - using 'createUserWithEmailAndPassword' this method we create a new user and that save into our firebase application. So now time to create a login system for this user providing email and password.
    - I do this system in the login.js file. In that file previously I do google and github sign-in system. 
    - so here we need to provide email and password from the user. So I do the same(using onBlur and receive email and password) as when I register a new user.
    - import 'signInWithEmailAndPassword' and then calling this method under the 'processLogin' method. this 'processLogin' is called when user clicked on login button. so I pass the (auth, email, password) into 'signInWithEmailAndPassword' function and if the email and password are correct then it loggedIn the user and show the welcome message and email in the Ui.

# ---------- email verification ----------
    - When new user is created I send a verification email to that user email address.
    - at first import (sendEmailVerification) and put this function under the 'verification' function. it takes (auth.currentUser) as a params.
    - call 'verification' this function under the 'handleRegistration' function.
# ---------- update Profile (user name) ----------
    - we can update our user account providing valid data like - name, photo...
    - for this feature at first need to import 'updateProfile' 
    - I make another function (setUserName). Under this function I call 'updateProfile' function and pass required (auth.currentUser, { displayName: name })property that I want to update. 
# ---------- Reset password ----------
    - same process just different function. 'sendPasswordResetEmail' this function will send an email to my registered email and give a link to change new password.


* --------------- This is the basic set up ---------------
* --------------- I will do something more in different method -------- 

------------------------------- ############## -------------------------------------------------

# ---------- Hooks --------------
    - In the above system is not good practice. Sometimes we don't use sign-in sing-up functionality just for the single page. Sometimes It needs in the different pages.
    - So I made a new folder in the 'src' directory called 'hooks' then make a file called (useFirebase.js). I will put all the functionality in this file and use it in the page where I need.
    - return all function. And export default main function so that when we use this useFirebase() function any different file then it helps to use any functionality.

# ---------- Context --------
    - Create a new folder under the src directory and make a file called 'AuthProvider.js'
    - Its a component that take children and provide a value.
    - calling 'createContext' method from react and set this in the 'authContext' variable.
    - As we pass the children property so we use destructure and pass that children property under the 'authContext'
    - make a variable called 'allContext' and pass the useFirebase object.
    - pass the 'allContext' into the 'authContext.Provider'.
    - make a new file called 'useAuth.js' in the hooks directory.
    - create a new function 'useAuth' 
    - calling 'useContext' method from react. 
    - passing 'authContext' into 'useContext'
    - Now we will use 'useAuth' instead of 'useFirebase' into login and registration page.
    
    * this useContext method and context provider actually do the same thing smartly. Like Now in the app.js we use (AuthProvider) under the (AuthProvider) we pass all route and component. So that all the components will get these functionality from useAuth.

# ---------- Private Route -------- 
    - Private route use for some restriction. Like when user is not logged in then I don't want to show some page to the user. And redirect that user to the login page.
    - Making a new component called 'PrivateRoute' and create a file 'PrivateRoute.js' under this directory.
    - import route, redirect.
    - passing (children, ...rest) property. Here 'children' means that component which we use private route. '...rest' means that rest of the component. 
    - if user is logged in then it render that children components. If not logged in then redirect to the login page.
    - Make sure that in the app.js Route change into PrivateRoute, So that PrivateRoute behavior will happen successfully.
