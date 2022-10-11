import axios from "axios";
import Connection from "./connection.json"

const FLASK_API = Connection.localAddress + '/news/';

class NewsService {

    getAllNews() {
        return axios.get(FLASK_API + 'all');
    }

    getNewsById(id) {
        return axios.get(FLASK_API + id);
    }

    deleteNewsById(id) {
        return axios.delete(FLASK_API + 'delete/' + id);
    }

    createNews(data) {
        return axios.post(FLASK_API + "add", data);
    }

    updateNews(data) {
        return axios.put(FLASK_API + "update", data);
    }
}

export default new NewsService();
