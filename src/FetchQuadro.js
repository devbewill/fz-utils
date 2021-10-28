import React, {useState, useEffect} from 'react';
import data from "./quadroLMfz";

export  const FetchQuadro = () => {
  const [loading,setLoading] = useState(true)
  const [campi, setCampi] = useState(data)

  useEffect(() => {

  }, []);

  return ( 
    <>
    {campi.map((item) => {
      const {count, section, column, description} = item
      {console.log(description)}
    })}
    </>
   )
}
 