import React, {useState} from 'react';
import QrReader from 'react-qr-reader';


function App() { 

  const [scanResultWebCam, setScanResultWebCam] =  useState('');



  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
        setScanResultWebCam(result.substr(58,4));
        console.log(result)
    }
   }
  return (
<>
    <QrReader
    delay={300}
    style={{width: '50%'}}
    onError={handleErrorWebCam}
    onScan={handleScanWebCam}
    />
    <h1>You college ID: {scanResultWebCam}</h1>
</>
  );
}

export default App;
