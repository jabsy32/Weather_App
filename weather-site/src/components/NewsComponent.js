import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const NewsComponent = ({ article }) => {
    if (!article)
        return;
    return (_jsx("div", { className: "flex flex-col items-start justify-center h-full p-5", children: _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("a", { href: article.link, target: "_blank", rel: "noopener noreferrer", children: article.title }), article.imgUrl && (_jsx("img", { src: article.imgUrl, alt: article.imgUrl, className: "p-5" }))] }) }));
};
export default NewsComponent;
