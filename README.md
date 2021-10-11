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
