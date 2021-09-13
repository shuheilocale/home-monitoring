import { collection, addDoc, getDoc, getDocs, query, orderBy, where, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getSensorData = async () => {
    const sensorData = await getDocs(query(collection(db, "sensors"),
        orderBy("timestamp", "desc")));

    return () => {
        let sensors = [];
        sensorData.forEach((doc) => {
            sensors.push({
                id: doc.id,
                hum: doc.data().hum,
                pres: doc.data().pres,
                temp: doc.data().temp,
                orient: doc.data().orient,
                timestamp: doc.data().timestamp
            });
        });
        return sensors;
    };
}
