import * as firebase from 'firebase';
import { config } from './config';
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const roomsRef = databaseRef.child('rooms')