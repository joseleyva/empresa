import React, {useState} from "react";
import { Document, Page } from 'react-pdf';
import {getAccessTokenApi} from '../../../../api/auth';
import { getCardApi } from "../../../../api/user";

export default function ViewPdf(props){
    const {user} = props;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [card, setCard] = useState(null);
    const AccessToken= getAccessTokenApi();
    
  const getPdf=()=>{
    if(user.card){
    getCardApi(AccessToken, user.card).then(response=>{
      setCard(response);
    })
  }else{
      setCard(null);
  }
  }

    return (
      <div>
        <Document
          fileUrl= {card}
          onLoadSuccess={getPdf()}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
}
