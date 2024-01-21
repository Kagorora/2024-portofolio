'use client';

import { FC, useEffect } from 'react';

import Image from 'next/image';
import avatar from '../../../public/icons/avatar.png';

type Props = {
  text: string;
};

const ContactUsButton: FC<Props> = (props) => {
  const text = document.querySelector('.text p') as HTMLElement | null;

  useEffect(() => {
    const text = document.querySelector('.text p') as HTMLElement | null;

    const rotateText = () => {
      if (text) {
        text.innerHTML = text.innerText
          .split('')
          .map(
            (char, i) =>
              `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
          )
          .join('');
      }
    };

    rotateText(); // Call once when the component mounts

    // Rotate the text continuously with an interval
    const rotationInterval = setInterval(rotateText, 100);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(rotationInterval);
  }, []);

  return (
    <div className="rotation-container">
      <div className="circle">
        <div className="text">
          <p>- CONTACT US   -   CONTACT US - CONTACT US - CONTACT US -</p>
        </div>
        <Image src={avatar} alt="Weather Icon" width="71" height="71" />
      </div>
    </div>
  );
};

export default ContactUsButton;

// <div className="rotation-container">
//   <span className="rotating-words" id="text">
//     Contact us - Contact us - Contact us - Contact us -
//   </span>

//
// </div>
