import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import TransportCard from '../TransportCard/TransportCard';
import FakeData from '../FakeData/fakeData.json'
import './Home.css'

const Home = () => {
    const [transport, setTransport] = useState([]);
    useEffect(()=>{
        setTransport(FakeData);
    },[])

    return (
        <div className=" metro-container">
            <div className="container">
                <Header/>
                <div className="row card-row">
                    {
                        transport.map(tr => <TransportCard transport={tr}></TransportCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;