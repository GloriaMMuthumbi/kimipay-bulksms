import React from "react";

const USSD = () => {
    return (
        <div>
            <h2 className="montserrat font-extrabold text-2xl mb-4">USSD</h2>
            <div className="grid grid-cols-2 space-x-10">
                <div className="col">
                    <div className="row mb-10">
                        <p className="raleway font-medium text-sm leading-loose mb-2">USSD (Unstructured Supplementary Service Data) 
                        is a real-time messaging service used by GSM cellular telephones to communicate directly with the service 
                        provider's computers. This technology is widely used for mobile banking, customer feedback, and other 
                        interactive services, providing users with quick and easy access to essential information and services. 
                        USSD codes, such as *123#, allow users to navigate through menu options and receive immediate responses, 
                        making it an efficient tool for real-time interactions.</p>
                        <p className="raleway font-medium text-sm leading-loose">The simplicity and speed of USSD make it an 
                        excellent choice for businesses looking to offer interactive services without requiring an internet 
                        connection. From balance inquiries to service subscriptions, USSD can handle a wide range of customer 
                        requests swiftly. It enhances customer experience by providing instant responses and seamless 
                        navigation through the service menus. This reliability and accessibility make USSD a vital component 
                        in the toolkit of modern business communication strategies.</p>
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
 
export default USSD;