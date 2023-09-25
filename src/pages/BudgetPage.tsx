import BudgetBuilder from "../components/Budget"

const Budget = () => {
    return (
        <div className="root-container">
            <h2>¿Qué quieres hacer?</h2>
            <div className="services">
                <BudgetBuilder />
            </div>
        </div>
    )
}

export default Budget