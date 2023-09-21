type ButtonGroupProps = {
    sortByTitle: () => void;
    sortByDate: () => void;
    resetOrder: () => void;
    setDateOrder: (order: 'asc' | 'desc') => void;
    dateOrder: 'asc' | 'desc';
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ 
    sortByTitle, 
    sortByDate, 
    resetOrder, 
    setDateOrder, 
    dateOrder }) => {
    const handleDateOrder = () => {
        setDateOrder(dateOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <>
            <div className="btn-grp join join-vertical lg:join-horizontal">
                <button className="btn join-item" onClick={sortByTitle}>🔤</button>
                <button className="btn join-item" onClick={() => {
                    sortByDate()
                    handleDateOrder()
                }}>
                    📅 {dateOrder === 'asc' ? '⬆️' : '⬇️'}
                </button>
                <button className="btn join-item" onClick={resetOrder}>🔄</button>
            </div>
        </>
    )
}

export default ButtonGroup