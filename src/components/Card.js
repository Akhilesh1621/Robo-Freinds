import React from 'react';


const Card = ({name,email,id} ) =>{
    
    return(
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img alt='robo img' src={`https://robohash.org/set2=set3${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;