import getUserCard from "./users/getUserCard.js";
import postUserCard from "./users/postUserCard.js";
import getAllCards from "./users/getAllCards.js";
import expressStatusMonitor from "express-status-monitor";
export default function appSrc(express, bodyParser, createReadStream, crypto, http) {
    const app = express();
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,OPTIONS,DELETE"
    };
    const setHeaders = (req, res, n) => res.set(headers) && n();
    // For get monitoring data go to {app.url}/status
    app
        .use(expressStatusMonitor())
        .use(setHeaders)
        .get('/card/', getUserCard)
        .get('/cards/', getAllCards)
        .use(bodyParser.json())
        .post('/card/', postUserCard)
    return app;
};