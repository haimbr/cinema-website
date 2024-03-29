
import { serverUrl } from './../data/data';
const axios = require('axios');

export const sendOrderToServer = async (nameInHebrew, EventId, seatsSelected) => {
    try {
        const response = await axios.post(serverUrl + '/order-ticket', { nameInHebrew, EventId, seatsSelected })
        return response;
    } catch (err) {
        console.log(err)
        return(err);
    }
}