import React from "react";

const StandardSection = () => {
    return ( 
        <div className="bg-kimiGray py-10">
            <div className='flex flex-col items-center mb-5'>
                <p className='uppercase text-kimiBlue raleway text-sm font-medium tracking-widest mb-1'>Setting us apart</p>
                <h2 className='text-4xl font-semibold montserrat mb-2 w-1/2 text-center'>Setting the standard</h2>
                <p className='raleway font-medium w-3/5 text-center m-2'>Discover the ultimate messaging solution with Kimipay. Our leading platform offers a diverse range of services, including bulk SMS, USSD, IVR, and more. </p>
                <div className='grid grid-cols-2 mb-2 shadow-md items-center rounded-lg w-5/6 bg-white'>
                    <div className="col flex items-center justify-center">
                        <img className="h-4/5" src='./floating-iphone.png' alt="floating iphone" />
                    </div>
                    <div className="col p-3 h-4/5 overflow-y-scroll no-scrollbar pr-12">
                        <div className="row flex mt-3">
                            <div className="col flex flex-col items-center mr-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#3490dc" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 14v4.4a.6.6 0 0 0 .6.6H10m9-5v4.4a.6.6 0 0 1-.6.6H14m0-14h4.4a.6.6 0 0 1 .6.6V10M4 10V5.6a.6.6 0 0 1 .6-.6H10m4 14v1a2 2 0 1 1-4 0v-1m-6-9h1a2 2 0 1 1 0 4H4m15-4h1a2 2 0 1 1 0 4h-1m-5-9V4a2 2 0 1 0-4 0v1"></path>
                                </svg>
                                <div className="h-16 w-2.5 mt-2 bg-kimiBlue rounded-full"></div>
                            </div>
                            <div className="col flex flex-col justify-center">
                                <h3 className="montserrat text-2xl font-bold ">Versatile Premium Rate Services</h3>
                                <p className="raleway text-sm font-medium">Our premium services are flexible to meet diverse business needs, and designed to adapt seamlessly to various applications and industries.</p>
                                <hr class="h-px my-3 border-0 dark:bg-gray-700"></hr>
                            </div>
                        </div>
                        <div className="row flex mt-3">
                            <div className="col flex flex-col items-center mr-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.75em" height="2.75em" viewBox="0 0 32 32">
                                    <path fill="#3490dc" d="m20.413 14.584l-7.997-7.997a2 2 0 0 0-2.832 0l-7.997 7.997a2 2 0 0 0 0 2.832l3.291 3.292L3 22.586L4.414 24l1.879-1.878l3.291 3.291a2 2 0 0 0 2.832 0l2.256-2.256l-1.416-1.415l-2.258 2.257l-7.997-7.997l7.997-8.001l8.001 8.001L17.5 17.5l1.415 1.415l1.498-1.499a2 2 0 0 0 0-2.832"></path>
                                    <path fill="#3490dc" d="m30.413 14.584l-3.291-3.291L29 9.414L27.586 8l-1.878 1.878l-3.292-3.291a2 2 0 0 0-2.832 0l-2.256 2.256l1.415 1.414l2.255-2.256l8.001 8.001l-8.001 7.997l-7.997-7.997l1.5-1.501l-1.416-1.416l-1.498 1.499a2 2 0 0 0 0 2.832l7.997 7.997a2 2 0 0 0 2.832 0l7.997-7.997a2 2 0 0 0 0-2.832"></path>
                                </svg>
                                <div className="h-16 w-2.5 mt-2 bg-kimiBlue rounded-full"></div>
                            </div>
                            <div className="col flex flex-col justify-center">
                                <h3 className="montserrat text-2xl font-bold ">Direct Network Connectivity</h3>
                                <p className="raleway text-sm font-medium">Ensure seamless communication, with robust uninterrupted links that guarantee efficient and reliable message delivery to your audience.</p>
                                <hr class="h-px my-3 border-0 dark:bg-gray-700"></hr>
                            </div>
                        </div>
                        <div className="row flex mt-3">
                            <div className="col flex flex-col items-center mr-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                                    <path fill="#3490dc" stroke="#3490dc" strokeWidth="0.4" d="m7 8.48l1.635-1.614L7 5.25L5.384 6.866zm-2.384 5.29q-.691 0-1.153-.463T3 12.154v-7.77q0-.69.463-1.152t1.152-.463h14.77q.69 0 1.152.463T21 4.384v7.77q0 .69-.463 1.153t-1.153.462h-3.07q.046-.25.061-.5t.004-.5h3.005q.231 0 .424-.192t.192-.423v-7.77q0-.23-.192-.423t-.424-.192H4.616q-.231 0-.424.192T4 4.385v7.769q0 .23.192.423t.423.192h3.006q-.012.25.004.5t.062.5zm11.882-6.5q.415 0 .709-.292t.293-.706t-.291-.71t-.707-.293t-.709.291t-.293.707t.291.709t.707.293M6 21.231v-1.408q0-.586.324-1.096t.874-.75q1.148-.517 2.348-.786T12 16.923t2.454.268t2.348.786q.55.24.874.745q.324.506.324 1.095v1.414zm1-1h10v-.408q0-.3-.175-.55t-.45-.375q-1.05-.475-2.15-.725T12 17.923t-2.225.25t-2.15.725q-.275.125-.45.375t-.175.55zm5-4.693q-1.046 0-1.773-.727q-.727-.726-.727-1.773t.727-1.773T12 10.538t1.773.727t.727 1.773t-.727 1.773t-1.773.727m0-1q.625 0 1.063-.437t.437-1.063t-.437-1.062T12 11.538t-1.062.438t-.438 1.062t.438 1.063t1.062.437m0 5.693"></path>
                                </svg>
                                <div className="h-16 w-2.5 mt-2 bg-kimiBlue rounded-full"></div>
                            </div>
                            <div className="col flex flex-col justify-center">
                                <h3 className="montserrat text-2xl font-bold ">Interactive USSD Engagement</h3>
                                <p className="raleway text-sm font-medium">Engage your customers like never before, with real-time, menu-driven interactions that enhance user experience and drive customer satisfaction.</p>
                                <hr class="h-px my-3 border-0 dark:bg-gray-700"></hr>
                            </div>
                        </div>
                        <div className="row flex mt-3">
                            <div className="col flex flex-col items-center mr-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 256 256">
                                    <path fill="#3490dc" stroke="#3490dc" strokeWidth="2.75" d="M112.6 158.43a58 58 0 1 0-57.2 0a93.83 93.83 0 0 0-50.19 38.29a6 6 0 0 0 10.05 6.56a82 82 0 0 1 137.48 0a6 6 0 0 0 10-6.56a93.83 93.83 0 0 0-50.14-38.29M38 108a46 46 0 1 1 46 46a46.06 46.06 0 0 1-46-46m211 97a6 6 0 0 1-8.3-1.74A81.8 81.8 0 0 0 172 166a6 6 0 0 1 0-12a46 46 0 1 0-17.08-88.73a6 6 0 1 1-4.46-11.14a58 58 0 0 1 50.14 104.3a93.83 93.83 0 0 1 50.19 38.29A6 6 0 0 1 249 205"></path>
                                </svg>
                                <div className="h-16 w-2.5 mt-2 bg-kimiBlue rounded-full"></div>
                            </div>
                            <div className="col flex flex-col justify-center">
                                <h3 className="montserrat text-2xl font-bold ">Targeted Audience Reach</h3>
                                <p className="raleway text-sm font-medium">Our cutting-edge strategies ensure that your messages are delivered effectively and at the right time. Maximize your outreach with our capable services.</p>
                                <hr class="h-px my-3 border-0 dark:bg-gray-700"></hr>
                            </div>
                        </div>
                        <div className="row flex mt-3">
                            <div className="col flex flex-col items-center mr-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.25em" height="2.25em" viewBox="0 0 48 48">
                                    <path fill="none" stroke="#3490dc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" d="M42.5 9.41v12.41L26.18 5.5h12.41a3.91 3.91 0 0 1 3.91 3.91M21.82 42.5H9.41a3.91 3.91 0 0 1-3.91-3.91V26.18zm18.327-2.353a8.034 8.034 0 0 1-11.362 0L7.853 19.215a8.034 8.034 0 0 1 0-11.362h0a8.034 8.034 0 0 1 11.362 0l20.932 20.932a8.034 8.034 0 0 1 0 11.362"></path>
                                </svg>
                                <div className="h-16 w-2.5 mt-2 bg-kimiBlue rounded-full"></div>
                            </div>
                            <div className="col flex flex-col justify-center">
                                <h3 className="montserrat text-2xl font-bold ">Scalable Platform</h3>
                                <p className="raleway text-sm font-medium">Our platform is designed to handle complexities without compromising performance, Trust us to provide robust infrastructure that supports your growth.</p>
                                <hr class="h-px my-3 border-0 dark:bg-gray-700"></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );

}
 
export default StandardSection;