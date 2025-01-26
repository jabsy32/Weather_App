import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fetchNewStories } from "@/services/WeatherNewsScrapper";
import { useEffect, useState } from "react";
import NewsComponent from "@/components/NewsComponent";
const WeatherNews = () => {
    const [newArticles, setNewArticles] = useState([]);
    const getNews = async () => {
        try {
            const news = await fetchNewStories();
            setNewArticles(news);
        }
        catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            await getNews();
        };
        fetchData();
    }, []);
    console.log(newArticles);
    return (_jsxs("div", { className: "flex flex-col text-white items-center p-5 h-full", children: [_jsx("h1", { children: "Latest World News" }), newArticles ? (_jsxs("div", { className: "flex flex-col pt-10 items-start  ", children: [_jsx("div", { children: _jsx(NewsComponent, { article: newArticles[0] }) }), _jsx("div", { children: _jsx(NewsComponent, { article: newArticles[1] }) }), _jsx("div", { children: _jsx(NewsComponent, { article: newArticles[2] }) })] })) : (_jsx("div", { children: _jsx("p", { children: "Unable to load weather news" }) }))] }));
};
export default WeatherNews;
