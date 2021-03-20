import React from 'react';
import MapImg from '../../images/Map.png'

const Map = () => {
    return (
        <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746984.4864715985!2d88.10020927003616!3d23.49058232316446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1616257226020!5m2!1sen!2sbd"
              width="750"
              height="550"
              frameBorder="0"
              style={{ border: 0,borderRadius:'10px' }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
            {/* AIzaSyAAr9vy1Xh3mNHTWO281nt0CwUqkHPSvMc */}
        </div>
    );
};

export default Map;