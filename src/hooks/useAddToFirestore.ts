import { firestore } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import type { Data } from "../store/store";
import { useState } from "react";

const useAddToFirestore = () => {
  const [fireStoreLoading, setFireStoreLoading] = useState(false);
  const [firestoreError, setFirestoreError] = useState("");
  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const addToFirestore = async (data: Data) => {
    if (data && data.email && !fireStoreLoading) {
      setFireStoreLoading(true);
      try {
        await delay(250);
        await setDoc(doc(firestore, "users", data.email), data);
        setFireStoreLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setFirestoreError(error.message);
        } else {
          setFirestoreError(String(error));
        }
        setFireStoreLoading(false);
        return;
      }
    }
  };
  return { addToFirestore, fireStoreLoading, firestoreError };
};

export default useAddToFirestore;
