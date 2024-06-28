import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from '../environments/environments';

export const firebaseApp = initializeApp(environment.firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
