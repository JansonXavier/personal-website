import { db, storage } from "@/firebaseConfig";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { CardType } from "./types";

export const fetchCards = async () => {
  const cardsRef = collection(db, "cards");
  const cardDocs = await getDocs(cardsRef);
  return cardDocs.docs.map((cardDoc) => cardDoc.data()) as CardType[];
};
