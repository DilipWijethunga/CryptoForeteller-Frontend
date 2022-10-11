import axios from "axios";

const COIN_GECKO = 'https://api.coingecko.com/api/v3/coins/';

class MarketService {

    getCoinDta() {
        return axios.get(COIN_GECKO);
    }
}

export default new MarketService();
