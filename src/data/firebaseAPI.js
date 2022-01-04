import { categories } from './localData';
import { collection, getDocs } from "firebase/firestore";
import { firestoreDb } from '../FirebaseConfig'

let categoryNames = {0: 'FunPlace', 1: 'HistoricalPlace', 2: 'Hotel', 3: 'Park', 4: 'Restaurant', 5: 'Shop'};


export function getCategoryName(categoryId) {
  let name;
  categories.map(data => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

export async function getPlaces(categoryId) {
  const querySnapshot = await getDocs(collection(firestoreDb, categoryNames[categoryId]));
      var data = [];
      querySnapshot.forEach(async (doc) => {
        data.push(doc.data());
      });
  return data;
}
