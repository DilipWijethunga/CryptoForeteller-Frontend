import axios from "axios";
import Connection from "./connection.json"

const FLASK_API = Connection.localAddress + '/crypto-currency';

class CurrencyService {

    checkPing() {
        return axios.get(Connection.localAddress);
    }

    getPrediction() {
        return axios.get(FLASK_API + '/predict')
    }

    getPredictionByCurrency(currency) {
        return axios.get(FLASK_API + '/predict/' + currency)
    }

    getPredictionByCurrencyAction(currency, action) {
        return axios.get(FLASK_API + '/predict/' + currency + '/' + action)
    }

    getSentiment(){
        return axios.get(FLASK_API + '/sentiment')
    }
}

export default new CurrencyService();
