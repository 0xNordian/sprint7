import WebExtra from "./WebExtra";
import { useState } from "react";

type ServicesProps = {
    label: string;
    price: number;
    message: string;
    updateTotal: (label: string, price: number, isChecked: boolean) => void;
    webSubTotal: (spec: string, qty: number) => void;
};

const Services = ({ label, price, message, updateTotal, webSubTotal }: ServicesProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isWebChecked, setIsWebChecked] = useState(false);

    // if (label.charAt(0) !== "#") {
    //     console.error(`El label "${label.toUpperCase()}" debe empezar por #`);
    // }

    const handleServiceChange = (label: string, price: number) => {
        setIsChecked(prev => !prev);
        updateTotal(label, price, !isChecked);

        if (label === "web") {
            setIsWebChecked((prev) => !prev);
        }
    };

    const handleWebSubTotal = (spec: string, qty: number) => {
        webSubTotal(spec, qty);
    }

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    id={label.slice(1)}
                    className="exclusive-checkbox"
                    onChange={() => handleServiceChange(label, price)}
                />
                {message}
            </label>
            {
                isWebChecked && isChecked && (
                    <div className="web-modal">
                        <WebExtra spec="numPages" message={"Número de páginas"} handleWebSubTotal={handleWebSubTotal} />
                        <WebExtra spec="numLeng" message={"Número de idiomas"} handleWebSubTotal={handleWebSubTotal} />
                    </div>
                )
            }
        </>
    )
}

export default Services