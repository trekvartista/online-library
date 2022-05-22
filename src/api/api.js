import axios from "axios";
import { API_URL_ROUTE } from "../utils/consts";

export const $host = axios.create({
    baseURL: API_URL_ROUTE,
});