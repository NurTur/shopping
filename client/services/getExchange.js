import axios from "axios";
export default async () => {
    const result = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");
    return result.data.Valute;
};