import { useState } from 'react';

const CustomSelect = ({ defaultText, options }) => {
	const [defaultSelectText, setDefaultSelectText] = useState(defaultText);
	const [optionsList, setOptionsList] = useState(options);
	const [showOptionsList, setShowOptionsList] = useState(false);
	const [selectedValue, setSelectedValue] = useState(null);

	const toggleOptionsList = () => {
		setShowOptionsList(!showOptionsList);
	};

	const handleOptionSelect = (value) => {
		setSelectedValue(value);
	};

	return (
		<div className='custom-select-wrapper' onClick={toggleOptionsList} data-cursor-target>
			<div className='custom-select-main'>
				<span>{selectedValue ? selectedValue : defaultSelectText}</span>
				<span>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
						<path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
					</svg>
				</span>
			</div>
			<div className={showOptionsList ? 'custom-select-options active' : 'custom-select-options'}>
				{optionsList.map((option) => (
					<div key={option.id} data-value={option.value} onClick={() => handleOptionSelect(option.value)}>
						{option.value}
					</div>
				))}
			</div>
		</div>
	);
};

export default CustomSelect;
