import React, {useState, useEffect} from "react";
import { getCardApi, getInfoUserApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";
import Iframe from 'react-iframe';



export default function ViewPdf(props){
    const {user} = props;
    const [card, setCard] = useState(null);
    const [nameCard, setNameCard]= useState("");
    const token = getAccessTokenApi();
    useEffect(()=>{
      getInfoUserApi(token,user._id).then(response=>{
        setNameCard(response.card);
      })
    },[user, token]);

    useEffect(() => {
      if(nameCard){
        getCardApi(nameCard).then(response=>{
          setCard(response);
        })
      }else{
          setCard(null);
      }
    }, [nameCard])
 
    return (
        <div className='pdf-container'>
        
        {card ? <Iframe url={card}
        height="700px"
        width="950px"
        display="initial"
        position="relative"/> : <h5>No se ha cargado ningun archivo</h5>}
        
      </div>
          );
}
