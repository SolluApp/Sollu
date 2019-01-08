import firebase from 'firebase'
import CONFIG from './db_config'

try{
    firebase.initializeApp(CONFIG);
}catch (e) {
    if (!/already exists/.test(e.message))
        console.log("firebase intialization error " + e.stackTrace);
}
var DB_SERVICE=firebase;
export default DB_SERVICE;