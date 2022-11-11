import Connection from "./connection.json"
import axios from "axios";

const FLASK_API = Connection.localAddress + '/api/csv/';

class CoinService {
    getSavedDataCSVByCoinName(coin) {
        return axios.get(FLASK_API + coin, {responseType: 'blob'})
    }
}

export default new CoinService();
