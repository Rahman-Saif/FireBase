import React from 'react';
import Header from '../shared/header/Header';
import RightSideNav from '../shared/rightsidenav/RightSideNav';
import { useParams } from 'react-router-dom';
import Navbar from '../shared/navbar/Navbar';

const News = () => {
    const {id}=useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className='col-span-3'>
                    <h2>News Detail!</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;