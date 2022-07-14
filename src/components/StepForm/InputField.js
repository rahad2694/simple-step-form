const InputField = ({ formik, itemName, type = "text", setIsError }) => {
    const currentValue = formik.values[itemName];
    const isTouched = formik.touched[itemName];
    const isError = formik.errors[itemName];
    // console.log(isError);
    if (isError) {
        // console.log('ami call hoisi', isError);
        setIsError(true);
    }
    else {
        setIsError(false);

    }
    return <div>
        <label htmlFor={itemName}>{itemName}</label>
        <input
            className={`bg-gray-200 w-full p-3 mr-1 ${isTouched && isError ? 'focus:outline-red-300' : ''} text-gray-800 my-2 rounded-md`}
            id={itemName}
            name={itemName}
            type={type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={currentValue}
        />
        {isTouched && isError ? (
            <div className='text-red-500'>{isError}</div>
        ) : null}
    </div>;
};
export default InputField;