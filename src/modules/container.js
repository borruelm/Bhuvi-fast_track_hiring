import React from 'react';
import Welcome from './welcome';
import JobSeeker from './jobSeeker';
import Companies from './companies';
import OurApp from './ourApp';

const Container = () =>{
    return <div>
        <Welcome />
        <JobSeeker />
        <Companies />
        <OurApp />
    </div>
}

export default Container;