import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import NumberInput from 'material-ui-number-input';

const AllocationTextFieldImmutable = ({index, value, errorText, securityTextFieldChange, securityTextFieldValid, securityTextFieldError}) => {

	const handleOnChange = (event, value) => {
	    securityTextFieldChange(index, 'allocation', value);
	}
	
	const handleOnValid = () => {
	    securityTextFieldValid(index, 'allocation');
	}
	
	const handleOnError = (error) => {
	    securityTextFieldError(index, 'allocation', error);
	}

    return (
		 <NumberInput
                    errorStyle={{
                        float: "left"
                    }}
					id={'allocationTextField'+index}
					value={value}
                    errorText={errorText}					
					onChange={handleOnChange}
					onValid={handleOnValid}
					onError={handleOnError}
                    strategy="allow"
                    required
					min={0}
					max={100}
                />
    );
};

AllocationTextFieldImmutable.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    errorText: PropTypes.string.isRequired,
	securityTextFieldChange: PropTypes.func.isRequired,
	securityTextFieldValid: PropTypes.func.isRequired,
    securityTextFieldError: PropTypes.func.isRequired,
};

export default AllocationTextFieldImmutable;