import React from 'react';
import resim3 from '../images/resim3.png';
import resim4 from '../images/resim4.png';
import resim5 from '../images/resim5.png';

function ImageBanner() {
  return (
    <div className="bg-pinkyWhite">
      <div className="max-w-2xl mx-auto py-8">
        <div className="flex items-center justify-between">
          <div className="w-1/3 text-center">
            <img src={resim3} alt="Resim 1" />
            <p className="mt-4">Yazı 1</p>
          </div>
          <div className="w-1/3 text-center">
            <img src={resim4} alt="Resim 2" />
            <p className="mt-4">Yazı 2</p>
          </div>
          <div className="w-1/3 text-center">
            <img src={resim5} alt="Resim 3" />
            <p className="mt-4">Yazı 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageBanner;
