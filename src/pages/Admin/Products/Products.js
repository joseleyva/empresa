import React, {useState, useEffect} from 'react'
import ListProducts from '../../../components/Admin/Produtcs/ListProducts';

const products= [
   
{
        title: 'Free',
        price: '0',
        description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Pro',
        subheader: 'Most popular',
        price: '15',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '30',
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },

];

export default function Products() {
    //const [usersActive, setUsersActive]= useState([]);
    //const [usersInactive, setUsersInactive] = useState([]);
    //const [reloadUsers, setReloadUsers] = useState(false);
    //const token = getAccessTokenApi();
   // useEffect(()=>{
//getUsersActiveApi(token, true).then(response=>{
     //       setUsersActive(response.users);
       // });
  //      getUsersActiveApi(token, false).then(response=>{
    //        setUsersInactive(response.users);
      //  });
        //setReloadUsers(false);
    //}, [token, reloadUsers]);

    return(
        <div className="users">
                <ListProducts products={products}/>
        </div>
    );
}
