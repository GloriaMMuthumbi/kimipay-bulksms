import React from "react";

const BulkSMS = () => {
    return (
        <div>
            <h2 className="montserrat font-extrabold text-2xl mb-4">Bulk SMS</h2>
            <div className="grid grid-cols-2 space-x-10">
                <div className="col">
                    <div className="row mb-10">
                        <p className="raleway font-medium text-sm leading-loose mb-2">Bulk SMS is a powerful tool for businesses 
                        looking to communicate with a large audience efficiently and effectively. Whether you're sending promotional 
                        messages to potential customers or transactional notifications to current clients, Bulk SMS allows you to reach 
                        thousands of recipients with just one click. The service is designed to be user-friendly, enabling you to compose, 
                        schedule, and send messages with ease. With high delivery rates and immediate receipt, Bulk SMS ensures your 
                        messages are seen by your target audience promptly.</p>
                        <p className="raleway font-medium text-sm leading-loose">This service is perfect for marketing campaigns, 
                        reminders, alerts, and more. By leveraging Bulk SMS, businesses can enhance their communication strategy, 
                        improve customer engagement, and increase brand awareness. The ability to create message templates further 
                        streamlines the process, saving time and maintaining consistency across all communications. Bulk SMS is 
                        not just a messaging service; it's a comprehensive solution for modern business communication needs. 
                        Additionally, the SenderID for Bulk SMS is a one-time purchase, providing a unique and recognizable 
                        identity for all your messages.</p>
                    </div>
                    <div className="row">
                    <p className="font-semibold uppercase tracking-widest text-sm mb-3">Available packages</p>
                        <div className="grid grid-cols-3">
                            <div className="col">
                                <p className="flex flex-col text-sm text-center mb-12">
                                    <span className="font-semibold ">Basic:</span>
                                    <p>Min: 1</p>
                                    Max: 1000
                                </p>
                                <p className="flex flex-col text-sm text-center">
                                    <span className="font-semibold ">Gold:</span>
                                    <p>Min: 50001</p>
                                    Max: 100000
                                </p>
                            </div>
                            <div className="col">
                                <p className="flex flex-col text-sm text-center mb-12">
                                    <span className="font-semibold ">Gold:</span>
                                    <p>Min: 100001</p>
                                    Max: 1000000
                                </p>
                                <p className="flex flex-col text-sm text-center">
                                    <span className="font-semibold ">Silver:</span>
                                    <p>Min: 1001</p>
                                    Max: 50000
                                </p>
                            </div>
                            <div className="col">
                                <p className="flex flex-col text-sm text-center mb-12">
                                    <span className="font-semibold ">Premium:</span>
                                    <p>Min: 100001</p>
                                    Max: 10000000
                                </p>
                                <p className="flex flex-col text-sm text-center">
                                    <span className="font-semibold ">Basic:</span>
                                    <p>Min: 1</p>
                                    Max: 10000
                                </p>
                            </div>
                        </div>
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
                        {/* <p className="font-semibold uppercase tracking-widest text-sm mb-3">Available packages</p>
                        <div className="grid grid-cols-3">
                            <div className="col">
                                <p className="flex flex-col text-sm text-center mb-12">
                                    <span className="font-semibold ">Basic:</span>
                                    <p>Min: 1</p>
                                    Max: 1000
                                </p>
                                <p className="flex flex-col text-sm text-center">
                                    <span className="font-semibold ">Gold:</span>
                                    <p>Min: 50001</p>
                                    Max: 100000
                                </p>
                            </div>
                            <div className="col">
                                <p className="flex flex-col text-sm text-center mb-12">
                                    <span className="font-semibold ">Gold:</span>
                                    <p>Min: 100001</p>
                                    Max: 1000000
                                </p>
                                <p className="flex flex-col text-sm text-center">
                                    <span className="font-semibold ">Silver:</span>
                                    <p>Min: 1001</p>
                                    Max: 50000
                                </p>
                            </div>
                            <div className="col">
                                <p className="flex flex-col text-sm text-center mb-12">
                                    <span className="font-semibold ">Premium:</span>
                                    <p>Min: 100001</p>
                                    Max: 10000000
                                </p>
                                <p className="flex flex-col text-sm text-center">
                                    <span className="font-semibold ">Basic:</span>
                                    <p>Min: 1</p>
                                    Max: 10000
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
);
}
 
export default BulkSMS;