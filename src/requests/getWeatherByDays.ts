import weatherInstance from "utils/axios"
const getWeatherByApiKey = async (value: string) => {
    const data = await weatherInstance.get(`data/2.5/forecast?q=${value}&appid=${process.env.REACT_APP_API_KEY}`)
    return data
}
export default getWeatherByApiKey