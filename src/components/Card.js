import React from   'react';


const Card =({ photo,Name,email}) =>{
    return(
        <div className='bg-light-pink dib br2 pa2 ma2 grow'>
            
            <img height="200" width="200"  src={process.env.PUBLIC_URL + photo}  />    
            <div>
                <h2>{Name}</h2>
                <h3>@{email}</h3>
            </div>
        </div>
    );
        
    
}

export default Card;