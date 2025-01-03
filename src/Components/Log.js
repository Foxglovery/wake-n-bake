import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const fetchBakedGoods = async () => {
  const querySnapshot = await getDocs(collection(db, "bakedGoods"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
};
