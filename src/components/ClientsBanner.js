import React, { useRef, useEffect } from 'react';
import './styles.css';

const ClientBanner = () => {

//     const scrollRef = useRef(null);

//   useEffect(() => {
//     const container = scrollRef.current;
//     let scrollWidth = container.scrollWidth;
//     let containerWidth = container.clientWidth;

//     const scroll = () => {
//       if (container.scrollLeft >= scrollWidth - containerWidth) {
//         container.scrollLeft = 0;
//       } else {
//         container.scrollLeft += 1;
//       }
//     };

//     const interval = setInterval(scroll, 20);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

const scrollRef = useRef(null);

  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth;
    const containerWidth = scrollRef.current.clientWidth;

    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          left: (scrollRef.current.scrollLeft + 1) % (scrollWidth + containerWidth),
          behavior: 'smooth',
        });
      }
    };

    const interval = setInterval(scroll, 15);

    return () => {
      clearInterval(interval);
    };
  }, []);

    return ( 
        <div className="scroll-container" ref={scrollRef}>
        <div className="scroll-content">
            <div className="scroll-item">
                <img src="./client1.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client2.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client3.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client4.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client5.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client6.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client7.png" alt="twixt tech"/>
            </div>


            <div className="scroll-item">
                <img src="./client1.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client2.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client3.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client4.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client5.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client6.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client7.png" alt="twixt tech"/>
            </div>
        {/*
            <div className="scroll-item">
                <img src="./client1.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client2.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client3.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client4.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client5.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client6.png" alt="twixt tech"/>
            </div>
            <div className="scroll-item">
                <img src="./client7.png" alt="twixt tech"/>
            </div> */}
        </div>
        </div>
    );
}
 
export default ClientBanner;