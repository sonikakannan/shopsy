'use client'
import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg=()=> {
    return (
      <FacebookProvider appId="819068326812644" chatSupport>
        <CustomChat pageId="352064361318162" minimized={true}/>
      </FacebookProvider>    
    );
  
}

export default FacebookMsg