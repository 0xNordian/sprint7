import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Modal from "./Modal";
const WebExtra = ({ spec, message, info, modalId, handleWebSubTotal }) => {
    const [qty, setQty] = useState(0);
    const operationHandler = (operation) => {
        if (operation === "+") {
            setQty((prev) => prev + 1);
        }
        else if (operation === "-" && qty > 0) {
            setQty((prev) => prev - 1);
        }
        else if (operation === "-" && qty === 0) {
            alert("Input cannot be negative. Please, enter a positive number");
        }
    };
    useEffect(() => {
        handleWebSubTotal(spec, qty);
    }, [spec, qty]);
    return (_jsxs("div", { className: "web-extra-item", children: [_jsxs("label", { children: [_jsx("span", { children: message }), _jsx("button", { className: "btn-operator", onClick: () => operationHandler("-"), children: "-" }), _jsx("input", { min: "0", type: "number", value: qty, onChange: (e) => {
                            setQty(parseInt(e.target.value, 10));
                        } }), _jsx("button", { className: "btn-operator", onClick: () => operationHandler("+"), children: "+" })] }), _jsx(Modal, { info: info, modalId: modalId })] }));
};
export default WebExtra;
