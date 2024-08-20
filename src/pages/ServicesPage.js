import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BulkSMS from '../components/BulkSMSTab';
import USSD from '../components/USSDTab';
import SMSShortcodes from '../components/SMSShortcodesTab';
import RBTSkizaTunes from '../components/RBT&SkizaTunesTab';
import Footer from '../components/Footer';

const ServicePage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { name: 'Bulk SMS', content: <BulkSMS /> },
        { name: 'USSD', content: <USSD /> },
        { name: 'SMS Shortcodes', content: <SMSShortcodes /> },
        { name: 'RBT & Skiza Tunes', content: <RBTSkizaTunes /> },
    ];

    return (
        <div className="App">
            <Navbar />
            <div className='mx-10 mt-10'>
                <ul className="flex w-full text-sm justify-center font-medium text-center text-gray-500 border-b border-gray-100">
                    {tabs.map((tab, index) => (
                        <li className="flex-1" key={index}>
                            <button
                                onClick={() => setActiveTab(index)}
                                className={`w-3/4 py-3 relative text-lg raleway  ${
                                    activeTab === index
                                        ? 'text-white bg-kimiBlue font-semibold underline underline-offset-2'
                                        : 'hover:text-gray-600 hover:bg-gray-50 font-medium'
                                }`}
                            >
                                {tab.name}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="p-10">
                    {tabs[activeTab].content}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServicePage;