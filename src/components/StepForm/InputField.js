const InputField = ({ formik, itemName, type = "text" }) => {

    const currentValue = formik.values.firsName;
    const isTouched = formik.touched.firsName;
    const isError = formik.errors.firsName;
    console.log('vitore', itemName);
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