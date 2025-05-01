import React from 'react';
import Profile from './Profile';

function Welcome({ name, age }){
    return (
        <div>
            <h1> Welcome to my first react demo !!! </h1>
            <div>
                <Profile name={name} age={age} />
            </div>
        </div>
    );
}

export default Welcome;
