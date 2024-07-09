import React from "react";

const SMSShortcodes = () => {
    return ( 
        <div>
            <h2 className="montserrat font-extrabold text-2xl mb-4">SMS Shortcodes</h2>
            <div className="grid grid-cols-2 space-x-10">
                <div className="col">
                    <div className="row mb-10">
                        <p className="raleway font-medium text-sm leading-relaxed mb-2">SMS Shortcodes are specialized telephone 
                        numbers that are shorter than normal mobile numbers, designed for high-throughput and two-way messaging. 
                        They are ideal for a variety of applications including marketing campaigns, customer feedback, voting, 
                        and interactive services. By using SMS Shortcodes, businesses can create memorable and easy-to-use 
                        channels for customer interaction, making it simpler for customers to engage with your brand.</p>
                        <p className="raleway font-medium text-sm leading-relaxed">These shortcodes can be either dedicated, 
                        meaning exclusive to your brand, or shared, where multiple businesses use the same number with unique 
                        keywords. This flexibility makes SMS Shortcodes suitable for businesses of all sizes and types. 
                        With the ability to automate responses and gather real-time data, SMS Shortcodes provide a 
                        robust platform for direct customer communication and engagement, driving higher response 
                        rates and enhancing customer satisfaction.</p>
                    </div>
                    {/* <div className="row">
                        <p className="raleway font-semibold uppercase tracking-widest text-sm">How it works</p>
                        <ul className="raleway text-sm leading-loose">
                            <li><span className="font-medium">Step 1: </span>Description of step 1</li>
                            <li><span className="font-medium">Step 2: </span>Description of step 2</li>
                            <li><span className="font-medium">Step 3: </span>Description of step 3</li>
                            <li><span className="font-medium">Step 4: </span>Description of step 4</li>
                            <li><span className="font-medium">Step 5: </span>Description of step 5</li>
                        </ul>
                    </div> */}
                </div>
                <div className="col raleway">
                    <div className="row mb-10">
                        <img src="./service-img.png" alt="smartphone"/>
                    </div>
                    <div className="row">
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SMSShortcodes;