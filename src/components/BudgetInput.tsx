import Services from '../components/Services'
import data from '../utils/dataExtractor'

const BudgetInput = ({ total, webCalc, updateTotal, webSubTotal, isBudgetSubmitted, setBudgetName }) => {
    return (
        <div className="services">
            {data.map((service =>
                <Services
                    key={service.id}
                    label={`${service.name}`}
                    price={service.price}
                    message={service.title}
                    updateTotal={updateTotal}
                    webSubTotal={webSubTotal}
                    isBudgetSubmitted={isBudgetSubmitted}
                    setBudgetName={setBudgetName}
                />))}

            <div className="total">Total: {total + webCalc}€</div>
        </div>
    )
}

export default BudgetInput