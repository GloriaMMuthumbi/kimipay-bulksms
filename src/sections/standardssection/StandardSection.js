import React from "react";

const StandardSection = () => {
    return ( 
        <div>
            <div className='flex flex-col items-center mt-16 mb-5'>
                <p className='uppercase text-kimiBlue raleway text-sm font-medium tracking-widest mb-1'>Setting us apart</p>
                <h2 className='text-4xl font-semibold montserrat mb-2 w-1/2 text-center'>Setting the standard</h2>
                <p className='raleway font-medium w-3/5 text-center m-2'>Discover the ultimate messaging solution with Kimipay. Our leading platform offers a diverse range of services, including bulk SMS, USSD, IVR, and more. </p>
                <div className='grid grid-cols-2 mb-2 shadow-md rounded-lg'>
                    <img className="col" src='./floating-iphone.png' alt="floating iphone" />
                    <div className="col">
                        <div className="row flex mt-3">
                            <div className="col flex flex-col items-center mr-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#3490dc" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 14v4.4a.6.6 0 0 0 .6.6H10m9-5v4.4a.6.6 0 0 1-.6.6H14m0-14h4.4a.6.6 0 0 1 .6.6V10M4 10V5.6a.6.6 0 0 1 .6-.6H10m4 14v1a2 2 0 1 1-4 0v-1m-6-9h1a2 2 0 1 1 0 4H4m15-4h1a2 2 0 1 1 0 4h-1m-5-9V4a2 2 0 1 0-4 0v1"></path>
                                </svg>
                                <div className="h-16 w-2.5 mt-3 bg-kimiBlue rounded-full"></div>
                            </div>
                            <div className="col flex flex-col justify-center">
                                <h3 className="montserrat text-3xl font-bold ">Versatile Premium Rate Services</h3>
                                <p className="raleway font-medium">Our premium services are flexible to meet diverse business needs, and designed to adapt seamlessly to various applications and industries.</p>
                            </div>
                        </div>
                        <div className="row flex mt-3">
                            <div className="col flex flex-col items-center mr-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.75em" height="2.75em" viewBox="0 0 32 32">
                                <path fill="#3490dc" d="m20.413 14.584l-7.997-7.997a2 2 0 0 0-2.832 0l-7.997 7.997a2 2 0 0 0 0 2.832l3.291 3.292L3 22.586L4.414 24l1.879-1.878l3.291 3.291a2 2 0 0 0 2.832 0l2.256-2.256l-1.416-1.415l-2.258 2.257l-7.997-7.997l7.997-8.001l8.001 8.001L17.5 17.5l1.415 1.415l1.498-1.499a2 2 0 0 0 0-2.832"></path>
                                <path fill="#3490dc" d="m30.413 14.584l-3.291-3.291L29 9.414L27.586 8l-1.878 1.878l-3.292-3.291a2 2 0 0 0-2.832 0l-2.256 2.256l1.415 1.414l2.255-2.256l8.001 8.001l-8.001 7.997l-7.997-7.997l1.5-1.501l-1.416-1.416l-1.498 1.499a2 2 0 0 0 0 2.832l7.997 7.997a2 2 0 0 0 2.832 0l7.997-7.997a2 2 0 0 0 0-2.832"></path>
                            </svg>
                                <div className="h-16 w-2.5 mt-3 bg-kimiBlue rounded-full"></div>
                            </div>
                            <div className="col flex flex-col justify-center">
                                <h3 className="montserrat text-3xl font-bold ">Direct Network Connectivity</h3>
                                <p className="raleway font-medium">Ensure seamless communication, with robust uninterrupted links that guarantee efficient and reliable message delivery to your audience.</p>
                            </div>
                        </div>
                        <div className="row flex">
                            <div className="col flex flex-col items-center mr-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#3490dc" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 14v4.4a.6.6 0 0 0 .6.6H10m9-5v4.4a.6.6 0 0 1-.6.6H14m0-14h4.4a.6.6 0 0 1 .6.6V10M4 10V5.6a.6.6 0 0 1 .6-.6H10m4 14v1a2 2 0 1 1-4 0v-1m-6-9h1a2 2 0 1 1 0 4H4m15-4h1a2 2 0 1 1 0 4h-1m-5-9V4a2 2 0 1 0-4 0v1"></path>
                                </svg>
                                <div className="h-16 w-2.5 mt-3 bg-kimiBlue rounded-full"></div>
                            </div>
                            <div className="col flex flex-col justify-center">
                                <h3 className="montserrat text-3xl font-bold ">Versatile Premium Rate Services</h3>
                                <p className="raleway font-medium">Our premium services are flexible to meet diverse business needs, and designed to adapt seamlessly to various applications and industries.</p>
                            </div>
                        </div>
                        <div className="row flex">
                            <div className="col flex flex-col items-center mr-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#3490dc" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 14v4.4a.6.6 0 0 0 .6.6H10m9-5v4.4a.6.6 0 0 1-.6.6H14m0-14h4.4a.6.6 0 0 1 .6.6V10M4 10V5.6a.6.6 0 0 1 .6-.6H10m4 14v1a2 2 0 1 1-4 0v-1m-6-9h1a2 2 0 1 1 0 4H4m15-4h1a2 2 0 1 1 0 4h-1m-5-9V4a2 2 0 1 0-4 0v1"></path>
                                </svg>
                                <div className="h-16 w-2.5 mt-3 bg-kimiBlue rounded-full"></div>
                            </div>
                            <div className="col flex flex-col justify-center">
                                <h3 className="montserrat text-3xl font-bold ">Versatile Premium Rate Services</h3>
                                <p className="raleway font-medium">Our premium services are flexible to meet diverse business needs, and designed to adapt seamlessly to various applications and industries.</p>
                            </div>
                        </div>
                        <div className="row flex">
                            <div className="col flex flex-col items-center mr-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#3490dc" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 14v4.4a.6.6 0 0 0 .6.6H10m9-5v4.4a.6.6 0 0 1-.6.6H14m0-14h4.4a.6.6 0 0 1 .6.6V10M4 10V5.6a.6.6 0 0 1 .6-.6H10m4 14v1a2 2 0 1 1-4 0v-1m-6-9h1a2 2 0 1 1 0 4H4m15-4h1a2 2 0 1 1 0 4h-1m-5-9V4a2 2 0 1 0-4 0v1"></path>
                                </svg>
                                <div className="h-16 w-2.5 mt-3 bg-kimiBlue rounded-full"></div>
                            </div>
                            <div className="col flex flex-col justify-center">
                                <h3 className="montserrat text-3xl font-bold ">Versatile Premium Rate Services</h3>
                                <p className="raleway font-medium">Our premium services are flexible to meet diverse business needs, and designed to adapt seamlessly to various applications and industries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );

}
 
export default StandardSection;