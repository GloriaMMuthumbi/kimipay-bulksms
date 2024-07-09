import React from 'react';
import './styles.css';
import ClientBanner from '../components/ClientsBanner';

const HeroSection = () => {

    return (
        <div>
            <div className='flex flex-col items-center mt-10 mb-5'>
                <p className='uppercase text-kimiBlue raleway text-sm font-medium tracking-widest mb-1'>Streamlined Solutions</p>
                <h1 className='text-5xl font-extrabold montserrat mb-2 w-1/2 text-center'>Your leading PRSP platform</h1>
                <p className='raleway font-medium w-3/5 text-center m-2'>Discover the ultimate messaging solution with Kimipay. Our leading platform offers a diverse range of services, including bulk SMS, USSD, IVR, and more. </p>
                <div className='flex justify-center mb-2'>
                    <button className='uppercase bg-white font-bold px-6 py-5 rounded-2xl text-sm shadow-md mr-24 hover:text-kimiBlue'>Get started</button>
                    <div className='flex justify-center items-center parent raleway'>
                        <p className='mr-2 underline-animation font-medium text-sm'>Learn More</p>
                        <svg 
                            className='scale-arrow transition-transform duration-300 ease-in-out transform' 
                            width="30" height="8" viewBox="0 0 35 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.5682 4.35355C34.7634 4.15829 34.7634 3.84171 34.5682 3.64645L31.3862 0.464466C31.1909 0.269204 30.8743 0.269204 30.6791 0.464466C30.4838 0.659728 30.4838 0.976311 30.6791 1.17157L33.5075 4L30.6791 6.82843C30.4838 7.02369 30.4838 7.34027 30.6791 7.53553C30.8743 7.7308 31.1909 7.7308 31.3862 7.53553L34.5682 4.35355ZM0.166992 4.5H34.2146V3.5H0.166992V4.5Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <img className='w-3/4 shadow-lg mb-4' src='./hero-img-1.png' alt='dashboard screenshot' />

                {/* <div class="mouse_scroll">
                    <div class="mouse">
                        <div class="wheel"></div>
                    </div>
                </div> */}
            </div>
            <ClientBanner />
        </div> 
    );
}

export default HeroSection;
