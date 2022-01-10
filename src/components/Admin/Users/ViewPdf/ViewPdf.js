import React, {useState, useEffect} from "react";
import { getCardApi } from "../../../../api/user";
import Iframe from 'react-iframe';



export default function ViewPdf(props){
    const {user} = props;
    const [card, setCard] = useState(null);

    useEffect(() => {
      if(user.card){
        getCardApi(user.card).then(response=>{
          setCard(response);
        })
      }else{
          setCard(null);
      }
    }, [user])
 
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
