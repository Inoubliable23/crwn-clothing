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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getOrCreateUserProfileDocument = async (userAuth, additionalData) => {
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

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return batch.commit();
}

export const convertCollectionSnapshotToMap = collections => {
	const transformedCollection = {};
	
	collections.docs.forEach(doc => {
		const { title, items } = doc.data();

		transformedCollection[title.toLowerCase()] = {
			id: doc.id,
			routeName: encodeURI(title.toLowerCase()),
			title,
			items
		}
	});

	return transformedCollection;
}

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
}

export default firebase;