import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params: {
        key: '61163090618541eca65f0d7499d16a4c'
    }
})