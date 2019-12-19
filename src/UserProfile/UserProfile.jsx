import React from 'react';
import Avatar from './Avatar';
import UserName from './Username';
import UserName2 from './Username2';
import Bio from './Bio';

export default function UserProfile(){
    return(
        <div className="container m-5">
            <Avatar />
            {/* <UserName name="Muhammad Gifar Zaini"/> */}
            <UserName2/>
            <Bio />
        </div>
    )
}