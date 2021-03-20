import React from 'react';
import { Link } from 'react-router-dom';
import './TransportCard.css'
const TransportCard = (props) => {
    const {name,photo} = props.transport
    return (
        <Link to={`/destination/${name}`}>
            <div className="col-md-3">
                <div class="card transport-card">
                    <img src={photo} className="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h3 className="text-center">{name}</h3>
                        </div>
                </div>
            </div>
        </Link>
    );
};

export default TransportCard;