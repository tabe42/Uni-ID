import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { AddWidget } from "../components/AddWidget";
import { db } from "../firebase-config";
import {
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { RepeatRounded } from "@material-ui/icons";

export const CardView = (props) => {
  const [found, setFound] = useState(false);
  const [imgList, setImgList] = useState([]);
  const userRef = collection(db, "users");
  console.log(props.scanResultWebCam);

  const addItem = async () => {
    await addDoc(userRef, {
      admno: props.scanResultWebCam,
      card1: "available",
      card2: "available",
      card3: "available",
      name: "test",
    });
    console.log("reading");
    const data = await getDocs(userRef);
    console.log("datalogged is", data);
    // console.log("image data", data);
    setImgList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // const q = query(userRef, where());
  useEffect(() => {
    // const q = query(collection(db, "users"), where("admno", "==", "8947"));
    // const querySnapshot = getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
    // if (!query.empty) {
    //   const snapshot = query.docs[0];
    //   const data = snapshot.data();
    //   console.log(data);
    // } else {
    //   console.log("not found");
    // }
    // const userRef2 = doc(db, "users", "dAb0YnLzD8fgdyBeRr3Z");
    // getDoc(userRef2).then((doc) => {
    //   console.log(doc.data(), doc.id);
    // });
    const checkIfExists = () => {};

    const getUserList = async () => {
      const found2 = false;
      console.log("reading");
      const userRef2 = collection(db, "users");

      const data2 = await getDocs(userRef2);
      console.log("datalogged is", data2);
      console.log("image data", data2);
      const myNewList = data2.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(myNewList);
      myNewList.map((item) => {
        if (item.admno == props.scanResultWebCam) {
          console.log(
            props.scanResultWebCam,
            "and",
            item.admno,
            "found st to true"
          );
          found2 = true;
        }

        // }

        // )
        //   if(found==false){
        //     console.log('calling adddoc inside useeffect')
        // await addDoc(userRef, {admno:props.scanResultWebCam,card1:"available",card2:"available",card3:"available",name:"test"});

        //   }
        // console.log(imgList);
      });
      if (found2 == false) {
        console.log("calling adddoc inside useeffect");
        await addDoc(userRef, {
          admno: props.scanResultWebCam,
          card1: "available",
          card2: "available",
          card3: "available",
          name: "test",
        });

        console.log("console log inside found==false statement", imgList);
      }

      setImgList(myNewList);
    };

    // fetchedRollno(props.scanResultWebCam);
    // setCurrNo(props.scanResultWebCam)

    getUserList();
  }, []);

  // const userRef = collection(db, "users");
  // useEffect(() => {
  //   const getCard = async () => {
  //     const data = await getDocs(userRef);
  //     console.log("hi", data);
  //     setProductList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getProducts();
  // }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <p className="text-green-500 text-[64px] my-4">UNI-ID</p>
      <div className="m-auto text-2xl">
        <div className="bg-green-500 p-3 text-white rounded-md shadow-md">
          {/* <p>STUDENT: DEB</p>
          <p>ADMISSION NUMBER:8947</p> */}
          <div className="bg-white p-3 text-green-500 mt-2 rounded-md space-y-4 space-x-4">
            {/* <AddWidget cardnumber={"1"} cardstatus={card1} />
            <AddWidget cardnumber="2" cardstatus={card2} />
            <AddWidget cardnumber="3" cardstatus={card3} /> */}

            {imgList.map((item) => {
              console.log("ITEM LOGGED IS ", item);
              console.log(props.scanResultWebCam);

              // console.log("inside function");
              //REPLACE 8947 WITH THE INT VALUE OBTAINED FROM QR CODE.
              if (item.admno == props.scanResultWebCam) {
                return (
                  <AddWidget
                    key={item.id}
                    name={item.name}
                    admno={item.admno}
                    card1={item.card1}
                    card2={item.card2}
                    card3={item.card3}
                  />
                );
              }
            })}

            {/* <div className="flex flex-row justify-bsetween items-center space-x-16">
              <p>CARD 1: AVAILABLE</p>
              <p className="bg-green-500 text-white p-2 rounded-md hover:scale-105">
                ISSUE BOOK
              </p>
            </div>
            <div className="flex flex-row justify-between items-center space-x-16 text-red-600">
              <p>CARD 2: UNAVAILABLE</p>
              <p className="bg-red-500 text-white p-2 rounded-md hover:scale-105">
                DETAILS
              </p>
            </div>
            <div className="flex flex-row justify-between items-center space-x-16">
              <p>CARD 3: ISSUED</p>
              <p className="bg-green-500 text-white p-2 rounded-md hover:scale-105">
                ISSUE BOOK
              </p>
            </div> */}
          </div>
          <div className="bg-green-400 rounded-md mt-4 p-2 text-center">
            ISSUAL HISTORY
          </div>
        </div>
      </div>
    </div>
  );
};
