import React from 'react';
import './styles.css';
// import ClientBanner from '../components/ClientsBanner';

const HeroSection = () => {

    return (
        <div className=' mb-10 md:mb-0'>
            <div className='flex m-2 flex-col md:items-center pt-2 md:pt-10 mp-5'>
                <p className='uppercase px-2 text-kimiBlue raleway text-xs md:text-sm font-medium tracking-widest mb-1'>Streamlined Solutions</p>
                <h1 className='text-3xl font-bold md:text-5xl m-2 md:font-extrabold montserrat mb-2 md:w-1/2 md:text-center'>Your leading PRSP platform</h1>
                <p className='raleway font-medium text-sm md:w-2/5 md:text-center md:text-base m-2 leading-loose'>Discover the ultimate messaging solution with Kimipay. Our leading platform offers a diverse range of services, including bulk SMS, USSD, IVR, and more. </p>
                <div className='mb-6 flex justify-center md:mb-2'>
                    <button className='uppercase bg-white font-bold px-6 py-4 md:py-5 rounded-2xl text-xs md:text-sm shadow-md md:mr-24 mr-6 hover:text-kimiBlue'>Get started</button>
                    <div className='flex justify-center items-center parent raleway'>
                        <p className='mr-2 underline-animation text-nowrap font-medium text-xs md:text-sm'>Learn More</p>
                        <svg 
                            className='scale-arrow transition-transform duration-300 ease-in-out transform w-1/4 md:w-full' 
                            width="30" height="8" viewBox="0 0 35 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.5682 4.35355C34.7634 4.15829 34.7634 3.84171 34.5682 3.64645L31.3862 0.464466C31.1909 0.269204 30.8743 0.269204 30.6791 0.464466C30.4838 0.659728 30.4838 0.976311 30.6791 1.17157L33.5075 4L30.6791 6.82843C30.4838 7.02369 30.4838 7.34027 30.6791 7.53553C30.8743 7.7308 31.1909 7.7308 31.3862 7.53553L34.5682 4.35355ZM0.166992 4.5H34.2146V3.5H0.166992V4.5Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <img className='md:w-3/4 md:block shadow-lg mb-4' src='./hero-img-1.png' alt='dashboard screenshot' />

                {/* <div class="mouse_scroll">
                    <div class="mouse">
                        <div class="wheel"></div>
                    </div>
                </div> */}
            </div>
            {/* <ClientBanner /> */}
        </div> 
    );
}

export default HeroSection;
