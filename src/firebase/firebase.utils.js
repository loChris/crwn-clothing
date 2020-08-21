import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
	apiKey: 'AIzaSyAjwuoujXep3wLXWLOXt_g6dG6LLPeLXXw',
	authDomain: 'crwn-db-6d5cf.firebaseapp.com',
	databaseURL: 'https://crwn-db-6d5cf.firebaseio.com',
	projectId: 'crwn-db-6d5cf',
	storageBucket: 'crwn-db-6d5cf.appspot.com',
	messagingSenderId: '691593739192',
	appId: '1:691593739192:web:78c9d16d14c6a3ef58ed4d',
	measurementId: 'G-Q35Q8Q8PYJ',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
