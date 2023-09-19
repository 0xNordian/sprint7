const ButtonGroup = ({ sortByTitle, sortByDate, resetOrder }) => {
    return (
        <>
            <div className="btn-grp join join-vertical lg:join-horizontal">
                <button className="btn join-item" onClick={sortByTitle}>🔤</button>
                <button className="btn join-item" onClick={sortByDate}>📅</button>
                <button className="btn join-item" onClick={resetOrder}>🔄</button>
            </div>
        </>
    )
}

export default ButtonGroup