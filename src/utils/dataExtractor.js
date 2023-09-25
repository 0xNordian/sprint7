import mockApi from '../data/services.json';
const extractData = () => mockApi.services.map((item) => item);
const data = extractData();
export default data;
