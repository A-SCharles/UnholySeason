import firebase from "./sdk";
const db = firebase.firestore();

export const getData = async (qry) => {
    const data = await db.collection(qry).get()
    return data
}

export const getDoc = async (qry) => {
  const docs = db.collection(qry);
  const doc = await docs.get();
  doc.forEach((doc) => {
    let prod = doc.data()
    let id = doc.id
    prod.docid = id;
    let data =  db.collection(qry).doc(doc.id).update(prod);
    console.log(data);
  });
};

export const getTable = async (query) => {
  let data = await db
    .collection(query)
    .get()
    .then((item) => {
      let count = 0;
      let table = [];
      item.forEach((doc) => {
        count++;
        if (count === 0) {
          return false;
        } else {
          table.push(doc.data());
        }
      });
      return table;
    })
    .catch(() => {
      return false;
    });
  return data;
};

export const getSingle = async (qry, payload) => {
 const data = await db.collection(qry).doc(payload).get()
 return data.data() 
}

export const setData = async (qry, payload) => {    
  const data = await db.collection(qry).add(payload);
  payload.docid = data.id;
  updateData(qry, payload);
  return console.log(data);
};

// export const setDataDoc = async (qry, payload) => {    
//   const data = await db.collection(qry).doc('An5dls1nuu5JaF5WFIjA').set(payload);
//   payload.docid = data.id;
//   updateData(qry, payload);
//   console.log(data);
// };

export const updateData = async (qry, payload) => {
  const data = await db.collection(qry).doc(payload.docid).update(payload);
 console.log(data);
};

export const deleteData = async (qry, payload) => {
  const data = await db.collection(qry).doc(payload).delete()
  console.log(data);
}