import React, {useState} from 'react';
import Select from 'react-select';

export default function CustomSelect({options,numberOfLines}) {
    const [selectedOption, setSelectedOption] = useState(null);

    const customStyles = {
        indicatorSeparator: () => null,
        dropdownIndicator: (provided, state) => ({
            ...provided,
            paddingRight: '24px',
        }),
        container: provided => ({
            ...provided,
            width: '100%',
            marginTop:'20px'
        }),
        control: provided => ({
            ...provided,
            backgroundColor: '#fff',
            borderRadius:10,
            border: '1px solid #BFD9F6',
            boxShadow: 'none',
            height: '76px',
            marginTop:'10px',
            '&:hover': {
                border: '1px solid #0066DD',
            },
            fontWeight: '400',
        }),
        valueContainer: provided => ({
            ...provided,
            color: '#000',
            height: 'auto',
            padding: '0px 46px 0px 10px'
        }),
        menu: (provided, state) => ({
            ...provided,
            marginTop: '10px',
            overflow: 'hidden',
            maxHeight: '295px',
        }),
        option: (provided, ) => ({
            ...provided,
            backgroundColor:'#fff',
            borderBottom: '1px solid #BFD9F6',
            display: 'flex',
            alignItems: 'center',
            padding: '10px 46px 10px 10px',
            '&:hover': {
                background: 'none',
                color: 'transparent',
                cursor: 'cursor'
            },
            fontWeight: '400',
        }),
        singleValue: provided => ({
            ...provided,
            color: '#000'
        })
    };

    const ClearIndicator = props => null;
    const IconOption = ({children, icon}) => (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <img width={54} height={54} src={icon} alt="icon" style={{display: "block" , width:54,height:54, marginRight: '8px'}}/>
            {children}
        </div>
    );

    const customOptionRenderer = option => (
        <IconOption icon={option.imageSrc}>
            {option.label}
        </IconOption>
    );

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption);
    };

    const defaultOption = options[numberOfLines];

    return (
        <>
            <Select
                options={options}
                styles={customStyles}
                getOptionLabel={customOptionRenderer}
                components={{
                    ClearIndicator
                }}
                value={selectedOption || defaultOption}
                onChange={handleChange}
                menuPlacement="auto"
                menuPosition="fixed"
                isSearchable={false}
                classNamePrefix="react-select"
                placeholder="Select an option"
            />
        </>

    );
}
