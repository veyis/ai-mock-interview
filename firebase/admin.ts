<<<<<<< HEAD
import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps()
=======
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps();
>>>>>>> daa1ba2 (Add your descriptive commit message here)

  if (!apps.length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // Replace newlines in the private key
<<<<<<< HEAD
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    })
=======
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
>>>>>>> daa1ba2 (Add your descriptive commit message here)
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
<<<<<<< HEAD
  }
}

export const { auth, db } = initFirebaseAdmin()
=======
  };
}

export const { auth, db } = initFirebaseAdmin();
>>>>>>> daa1ba2 (Add your descriptive commit message here)
