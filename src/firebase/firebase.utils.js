import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyALYEmpjFE1JpiVejInf1EfFA2rgpwH-E4",
	authDomain: "crwn-db-dbee4.firebaseapp.com",
	databaseURL: "https://crwn-db-dbee4.firebaseio.com",
	projectId: "crwn-db-dbee4",
	storageBucket: "crwn-db-dbee4.appspot.com",
	messagingSenderId: "169175677382",
	appId: "1:169175677382:web:8c2da3409632b131f2dac7"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;