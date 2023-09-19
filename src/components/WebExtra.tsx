import { useEffect, useState } from "react";

type WebExtraProps = {
    spec: string;
    message: string;
    handleWebSubTotal: (spec: string, qty: number) => void;
}

const WebExtra = ({ spec, message, handleWebSubTotal }: WebExtraProps) => {
    const [qty, setQty] = useState(0);

    const operationHandler = (operation: string) => {
        if (operation === "+") {
            setQty((prev) => prev + 1);
        } else if (operation === "-" && qty > 0) {
            setQty((prev) => prev - 1);
        } else if (operation === "-" && qty === 0) {
            alert("Input cannot be negative. Please, enter a positive number");
        }
    };

    useEffect(() => {
        handleWebSubTotal(spec, qty)
    }, [spec, qty])

    return (
        <div className="web-extra-item">
            <label>
                <span>{message}</span>
                <button className={"btn-operator"} onClick={() => operationHandler("-")}>-</button>
                <input
                    min="0"
                    type="number"
                    value={qty}
                    onChange={(e) => {
                        setQty(parseInt(e.target.value, 10));
                    }} />
                <button className={"btn-operator"} onClick={() => operationHandler("+")}>+</button>
            </label>
        </div>
    )
}

export default WebExtra