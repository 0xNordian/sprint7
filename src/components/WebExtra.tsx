type WebExtraProps = {
    message: string;
}

const WebExtra = ({ message }: WebExtraProps) => {
    return (
        <div className="web-extra-item">
            <label>
                {message}
                <input type="number" />
            </label>
        </div>
    )
}

export default WebExtra