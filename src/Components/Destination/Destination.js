import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './Destination.css'
import { Link } from 'react-router-dom';
import Map from '../Map/Map';


const Destination = () => {

    const { name } = useParams();

    return (
        <div className="container">
            <Header />
            <div className="row destination">
                <div className="col-md-4 ">
                    <form className="search-destination">
                        <div class="form-group">
                            <label for="pickFrom">Pick From</label>
                            <input type="pickFrom" defaultValue="Dhaka" class="form-control" id="pickFrom"/>
                        </div>
                        <div class="form-group">
                            <label for="pickTo">Pick To</label>
                            <input type="pickFrom" class="form-control" defaultValue="Sylhet" id="pickTo"/>
                        </div>
            
                        <Link to={`/destinationDetails/${name}`} className="btn btn-primary btn-block"> Search </Link>
                    </form>
                </div>
                <div className="col-md-8">
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default Destination;