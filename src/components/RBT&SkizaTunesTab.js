import React from "react";

const RBTSkizaTunes = () => {
    return ( 
        <div>
            <h2 className="montserrat font-extrabold text-2xl mb-4">Ringback Tones and Skiza Tunes</h2>
            <div className="grid grid-cols-2 space-x-10">
                <div className="col">
                    <div className="row mb-10">
                        <p className="raleway font-medium text-sm leading-loose mb-2">Ringback Tones transform the waiting 
                        experience for callers by replacing the standard ringing sound with customized music or messages. 
                        This service allows businesses to promote their brand, entertain callers, or share important information 
                        while they wait for the call to be answered. By offering a personalized and engaging experience, Ringback 
                        Tones can leave a positive impression on callers and reinforce brand identity.</p>
                        <p className="raleway font-medium text-sm leading-loose">Businesses can choose from a wide range of 
                        pre-made tones or upload their custom sounds to suit their branding needs. Subscribers can manage their 
                        tones easily through an online portal, switching between different tones based on their preferences. 
                        Ringback Tones provide a unique opportunity to connect with your audience in an often-overlooked 
                        aspect of communication, turning every call into a branding opportunity and enhancing overall 
                        caller experience.</p>
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
 
export default RBTSkizaTunes;