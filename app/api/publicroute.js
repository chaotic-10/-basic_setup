import axios from "axios";

const mainURL = process.env.BASE_URL;
const publicRoute = axios.create({baseURL : mainURL, headers: {'Content-Type': 'application/json',}});

export default publicRoute;