import WebExtra from "./WebExtra";

type ServicesProps = {
    label: string;
    price: number;
    message: string;
    updateTotal: (label: string, price: number) => void;
};

const Services = ({ label, price, message, updateTotal }: ServicesProps) => {
    if(label.charAt(0) !== "#"){
        console.error(`El label "${label.toUpperCase()}" debe empezar por #`);
    }

    const handleServiceChange = (label: string, price: number) => {
        updateTotal(label, price);
    };

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
                    <WebExtra message={"Número de páginas"} />
                    <WebExtra message={"Número de idiomas"} />
                    </div>
                )
            }
        </>
    )
}

export default Services