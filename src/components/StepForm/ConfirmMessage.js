import React from 'react';

const ConfirmMessage = ({currentStep, setCurrentStep}) => {
    const handleNewEntry =() =>{
        setCurrentStep(1);
    }
    return (
        <div>
            <h1 className='text-xl font-semibold text-orange-500 mb-5'>Message Sent!</h1>
            <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                    <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Message</div>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <textarea placeholder="Please type here ...." className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                    <button onClick={handleNewEntry} className={`text-base hover:scale-110 focus:outline-none px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-200 bg-teal-100  text-teal-700  border duration-200 ease-in-out  border-teal-600 transition mt-5`}>Submit Another Entry</button>
                </div>
                {/* <div className="w-full mx-2 flex-1 svelte-1l8159u">
                    <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Your Email</div>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input placeholder="jhon@doe.com" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                </div> */}
            </div>
        </div>
    );
};

export default ConfirmMessage;