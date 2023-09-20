const ButtonGroup = ({ sortByTitle, sortByDate, resetOrder, setDateOrder, dateOrder }) => {

    const handleDateOrder = () => {
        setDateOrder(prev => prev === 'asc' ? 'desc' : 'asc');
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