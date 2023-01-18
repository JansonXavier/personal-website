import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { CardType } from "./types";

export const fetchCards = async () => {
  const cardsRef = collection(db, "cards");
  const cardDocs = await getDocs(cardsRef);
  return cardDocs.docs.map((cardDoc) => cardDoc.data()) as CardType[];
};
