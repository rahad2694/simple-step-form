import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import NavBar from './NavBar';
import InputField from './InputField';

const StepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    // const [currentStep, setCurrentStep] = useState(1);
    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    }
    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    }
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    console.log(formik.values.firstName);
    return (
        <div className="p-5 mt-10">
            <h1 className='text-2xl font-bold'>Simple Step Form:</h1>
            <NavBar currentStep={currentStep} />
            <div className="mt-8 p-4">
                {/* component starts */}
                <form className='w-2/4 mx-auto my-5' onSubmit={formik.handleSubmit}>
                    <h1 className='text-3xl text-center my-5 text-green-600'>Lets Use FORMIK with YUP</h1>
                    {currentStep === 1 && <InputField formik={formik} itemName="firstName" />}
                    {currentStep === 2 && <InputField formik={formik} itemName="lastName" />}
                    {currentStep === 3 && <InputField formik={formik} itemName="email" type="email" />}
                    {currentStep === 4 && <InputField formik={formik} itemName="message" />}
                    <div className="flex p-2 mt-4">
                        <button onClick={handlePrevious} className={`${(currentStep === 5 || currentStep === 1) && 'hidden'} text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer  hover:bg-gray-200 bg-gray-100  text-gray-700  border duration-200 ease-in-out  border-gray-600 transition`}>Previous</button>
                        <div className="flex-auto flex flex-row-reverse">
                            <button type={currentStep === 4 ? 'submit' : ''} onClick={handleNext} className={`${currentStep === 5 ? 'hidden' : ''} text-base ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer  hover:bg-teal-600 bg-teal-600  text-teal-100  border duration-200 ease-in-out  border-teal-600 transition`}>{currentStep === 4 ? 'Submit' : 'Next'}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StepForm;