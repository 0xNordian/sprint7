import WebExtra from "./WebExtra";

type ServicesProps = {
    label: string;
    price: number;
    message: string;
    updateTotal: (label: string, price: number) => void;
    webSubTotal: (spec: string, qty: number) => void;
};

const Services = ({ label, price, message, updateTotal, webSubTotal }: ServicesProps) => {
    if(label.charAt(0) !== "#"){
        console.error(`El label "${label.toUpperCase()}" debe empezar por #`);
    }

    const handleServiceChange = (label: string, price: number) => {
        updateTotal(label, price);
    };

    const handleWebSubTotal = (spec: string, qty: number) => {
        console.log("spec: ", spec)
        console.log("qty: ", qty)
        webSubTotal(spec, qty);
    }

    let serviceElement: HTMLInputElement | null = null;

    if(label === "#web"){
        serviceElement = document.querySelector(label) as HTMLInputElement;
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
                (serviceElement && serviceElement.checked) && (
                    <div className="web-modal">
                    <WebExtra spec="numPages" message={"Número de páginas"} handleWebSubTotal={handleWebSubTotal}/>
                    <WebExtra spec="numLeng" message={"Número de idiomas"} handleWebSubTotal={handleWebSubTotal}/>
                    </div>
                )
            }
        </>
    )
}

export default Services