type WebExtraProps = {
    spec: string;
    message: string;
    handleWebSubTotal: (spec: string, qty: number) => void;
}

const WebExtra = ({ spec, message, handleWebSubTotal }: WebExtraProps) => {
    return (
        <div className="web-extra-item">
            <label>
                {message}
                <input min="0" type="number" onChange={(e) => handleWebSubTotal(spec, parseInt(e.target.value, 10))}/>
            </label>
        </div>
    )
}

export default WebExtra