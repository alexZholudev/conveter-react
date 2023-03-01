import CustomSelect from "../UI/CustomSelect/CustomSelect";
import {Input} from "../UI/Input/Input";
import React, {useState} from "react";
import usdc from "../../images/ex_1@2x.png";
import ada from "../../images/ex_2@2x.png";
import usdcERC20 from "../../images/usdc_erc20@2x.png";
import society from "../../images/society@2x.png";
import c4 from "../../images/c4@2x.png";
import {CommonButton} from "../UI/CommonButton/CommonButton";
import "./Main.css"
export const Main = () => {

    const options = [
        {value: 'USDC4', label: 'USDC4', imageSrc: usdc},
        {value: 'Cardano ADA', label: 'Cardano ADA', imageSrc: ada},
        {value: 'USDC ERC20', label: 'USDC ERC20', imageSrc: usdcERC20},
        {value: 'SOCIETY (ADA TOKEN)', label: 'SOCIETY (ADA TOKEN)', imageSrc: society},
        {value: 'C4 (ADA TOKEN)', label: 'C4 (ADA TOKEN)', imageSrc: c4},
    ];

    const [valueInputOne, setValueInputOne] = useState("");
    const [valueInputTwo, setValueInputTwo] = useState("");

    const handleInputChange = (e) => {
        if (e.target.value >= 0){
            setValueInputOne(+e.target.value);
        }else{
            setValueInputOne(0);
        }
    }
    const handleInputChangeTwo = (e) => {
        if (e.target.value >= 0){
            setValueInputTwo(+e.target.value);
        }else{
            setValueInputTwo(0);
        }
    }


    return (
        <main className="main exchange">
            <div className="bone">
                <div className="exchange_title">Exchange</div>
                <div className="exchange_content">
                    <div className="exchange_content_net">
                        <div className="exchange_col">
                            <div className="exchange_name">give away</div>
                            {/*<div className="exchange_select">*/}
                                <CustomSelect
                                    numberOfLines={0}
                                    options={options}
                                />
                            {/*</div>*/}
                            <Input value={valueInputOne} onChange={handleInputChange}/>
                        </div>
                        <div className="exchange_swap">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M33.9063 26.4303C35.0418 23.7324 35.3031 20.7464 34.6536 17.8922C34.0042 15.0379 32.4765 12.459 30.2854 10.518C28.0943 8.57704 25.3499 7.37156 22.4382 7.07108C19.5265 6.7706 16.5938 7.39022 14.0525 8.84285L12.3165 5.8031C14.9724 4.28517 17.9798 3.49024 21.0389 3.49761C24.0979 3.50498 27.1015 4.31439 29.75 5.8451C37.6075 10.3811 40.6175 20.0936 36.9548 28.1926L39.3033 29.5471L32.0145 33.4216L31.7258 25.1721L33.9063 26.4303ZM8.09376 15.5698C6.95826 18.2678 6.69688 21.2538 7.34636 24.108C7.99585 26.9623 9.52353 29.5412 11.7146 31.4822C13.9057 33.4232 16.6501 34.6286 19.5618 34.9291C22.4735 35.2296 25.4062 34.61 27.9475 33.1573L29.6835 36.1971C27.0276 37.715 24.0202 38.51 20.9612 38.5026C17.9021 38.4952 14.8985 37.6858 12.25 36.1551C4.39251 31.6191 1.38251 21.9066 5.04526 13.8076L2.69501 12.4548L9.98376 8.58035L10.2725 16.8298L8.09201 15.5716L8.09376 15.5698Z"
                                    fill="var(--color)"/>
                            </svg>
                        </div>
                        <div className="exchange_col">
                            <div className="exchange_name">You receive</div>
                            <CustomSelect
                                numberOfLines={1}
                                options={options}
                            />
                            <Input value={valueInputTwo} onChange={handleInputChangeTwo}/>
                        </div>
                        <CommonButton title={'Exchange'} />
                    </div>
                </div>
            </div>
        </main>
    );
};