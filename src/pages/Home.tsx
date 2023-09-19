import { Link, NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>THIS IS THE WELCOME PAGE</h1>
            <button><Link to="budget">Start Budget</Link></button>
        </div>
    )
}

export default Home