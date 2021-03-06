import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


/*

steps for authemtication
---------------------------
initial setup
1) firebase: create project
2) create web app
3. get configuration
4. initialize firebase
5. enable auth method

----------------------------------

step-2
1. create login component
2. create register component
3. create route for login and register

*/