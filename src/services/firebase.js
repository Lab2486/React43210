import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3bm0qzuNde2EW2jtKTOYvHPr3lwI6ckQ",
  authDomain: "react43210-project.firebaseapp.com",
  projectId: "react43210-project",
  storageBucket: "react43210-project.appspot.com",
  messagingSenderId: "40597849421",
  appId: "1:40597849421:web:c450bffc128cf42b6b2304",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
console.log("DATABASE ACA ------>", db);

export async function getData() {
  const productsCollection = collection(db, "products");
  const productsSnapshot = await getDocs(productsCollection);
  const arrayDocs = productsSnapshot.docs;
  const dataDocs = arrayDocs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return dataDocs;
}

function getCategoryData() {} //from itemListContainer llamada getProducts
