import React, { useState } from "react";

const ServicesSection = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            title: "Our services",
            heading: "We are at your service",
            text: "A unified approach to communication, offering a diverse suite of services tailored to meet your messaging needs. Whether you're a small business or a large enterprise, our services are designed to help you communicate effectively with your audience, ensuring your message is delivered clearly and efficiently.",
            buttonLabel: "",
        },
        {
            title: "Bulk SMS",
            heading: "Instant Mass Messaging",
            text: "Reach millions instantly with our bulk SMS service. From alerts to marketing, you can send large volumes of messages to keep your audience informed and engaged. Our platform ensures high deliverability rates and provides detailed analytics to help you track your campaign's performance.",
            buttonLabel: "Start with Bulk SMS",
        },
        {
            title: "USSD",
            heading: "Instant Interactive Engagement",
            text: "Provide real-time, menu-driven interactions to engage your customers and enhance their experience effortlessly. Our USSD solutions are perfect for surveys, voting, customer feedback, and more. With easy setup and integration, you can start engaging your audience in no time.",
            buttonLabel: "Start with USSD",
        },
        {
            title: "SMS Shortcodes",
            heading: "Fast and Convenient Interaction",
            text: "Enable seamless and memorable communication with easy-to-use, short SMS codes for instant customer engagement. Shortcodes are perfect for voting, competitions, customer feedback, and lead generation. Enhance your campaigns with the simplicity and convenience of SMS shortcodes.",
            buttonLabel: "Start with SMS Shortcodes",
        },
        {
            title: "RBT and Skiza Tunes",
            heading: "Personalized Caller Experience",
            text: "Enhance caller experience with personalized ringback tones and Skiza tunes, making every call memorable and unique. Whether for personal use or as part of a marketing campaign, our RBT and Skiza services allow you to customize the caller experience with music, messages, or promotional content.",
            buttonLabel: "Start with RBT & Skiza Tunes",
        },
    ];


    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <div className="grid grid-cols-2 mt-5 mx-20 relative">
            <div className="m-auto col flex items-center justify-center mr-6">
                <img className="" src="./our-services.png" alt="services with phone" />
            </div>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <div className="overflow-hidden w-full flex mb-8">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`flex flex-col transition-opacity duration-500 ease-in-out ${
                                    currentIndex === index ? 'opacity-100' : 'opacity-0 absolute'
                                }`}
                            >
                                <p className="uppercase text-blue-400 raleway text-sm font-medium tracking-widest mb-1">{slide.title}</p>
                                <h2 className="text-4xl font-semibold montserrat mb-2">{slide.heading}</h2>
                                <p className="raleway font-medium m-2">{slide.text}</p>
                                {slide.buttonLabel && (
                                    <button className="bg-kimiBlue text-white w-fit font-semibold raleway py-2 px-5 text-sm rounded-full">
                                        {slide.buttonLabel}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex mt-4">
                        <button
                            className="shadow-md bg-white rounded-full px-2 py-2 mr-9"
                            onClick={goToPreviousSlide}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="m14 7l-5 5l5 5"></path>
                            </svg>
                        </button>
                        <button
                            className="shadow-md bg-white rounded-full px-2 py-2"
                            onClick={goToNextSlide}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="m10 17l5-5l-5-5"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

 
export default ServicesSection;