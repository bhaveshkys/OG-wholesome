import React from 'react';
import Card from './Card';


const CardList = ({ogs}) => {

    return(
        <div>
            {
            ogs.map((ogs,i)=>{
                return( <Card
                    key={i}
                    photo={ogs.photo} 
                    Name={ogs.Name} 
                    email={ogs.Insta} 
                    />
                );    
            })
            }
        </div>
    );
}
export default CardList;