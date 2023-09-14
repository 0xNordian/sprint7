import mockApi from '../data/services.json'

const extractData = () => mockApi.services.map((item) => item);

export default extractData;