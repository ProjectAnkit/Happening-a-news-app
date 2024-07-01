import Axios from "axios";
export default Axios.create({
    baseURL: `https://newsapi.org/v2`,
})