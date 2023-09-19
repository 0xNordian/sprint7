import BudgetBuilder from "../components/Budget"

const Budget = () => {
    return (
        <>
            <h2>¿Qué quieres hacer?</h2>
            <div className="services">
                <BudgetBuilder />
            </div>
        </>
    )
}

export default Budget