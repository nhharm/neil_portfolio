import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './ImageSlider.css'

function ImageSlider({images}) {
 

    return (
        <Slide>
          {images[1] ? (    <div className="each-slide-effect">
                <div>          <img src={images[0]} alt='#'></img>

                </div>
            </div>): null}

            
            {images[1] ? (    <div className="each-slide-effect">
            <div>          <img src={images[1]} alt='#'></img>

</div>
            </div> ) : null}

            {images[2] ? (  <div className="each-slide-effect">
            <div>          <img src={images[2]} alt='#'></img>

</div>
            </div> ) : null}

            {images[3] ? (  <div className="each-slide-effect">
            <div>          <img src={images[3]} alt='#'></img>

</div>
            </div>) : null}
        </Slide>
    );
};

export default ImageSlider;