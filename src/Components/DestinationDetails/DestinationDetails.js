import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Map from '../Map/Map';
import FakeData from '../FakeData/fakeData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons'
import { faSortAmountUpAlt } from '@fortawesome/free-solid-svg-icons'
import './DestinationDetails.css'


const DestinationDetails = () => {

    const { transportName } = useParams()

    const [transport, setTransport] = useState({})

    useEffect(() => {
        const transportData = FakeData.filter(tp => tp.name === `${transportName}`)
        setTransport(transportData[0])
    }, [transportName])

    return (
        <div className="container">
            <Header />
            <div className="row destination">
                <div className="col-md-4">
                    <div className="destinationDetails">
                        <div className="pick">
                            <h5><FontAwesomeIcon icon={faSortAmountDownAlt} /> Dhaka</h5>
                            <br/>
                            <h5><FontAwesomeIcon icon={faSortAmountUpAlt} /> Sylhet</h5>
                        </div>
                        <div className="destinationTransport">
                            <div className="d-flex justify-content-around align-items-center">
                                <img src={transport.photo} alt="" style={{ width: '50px' }} />
                                <h5>{transport.name}</h5>
                                <h5><FontAwesomeIcon icon={faUsers} /> {transport.passengers}</h5>
                                <h5>{transport.price}</h5>
                            </div>
                            
                        </div>
                        <div className="destinationTransport">
                            <div className="d-flex justify-content-around align-items-center">
                                <img src={transport.photo} alt="" style={{ width: '50px' }} />
                                <h5>{transport.name}</h5>
                                <h5><FontAwesomeIcon icon={faUsers} /> {transport.passengers}</h5>
                                <h5>{transport.price}</h5>
                            </div>
                            
                        </div>
                        <div className="destinationTransport">
                            <div className="d-flex justify-content-around align-items-center">
                                <img src={transport.photo} alt="" style={{ width: '50px' }} />
                                <h5>{transport.name}</h5>
                                <h5><FontAwesomeIcon icon={faUsers} /> {transport.passengers}</h5>
                                <h5>{transport.price}</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;