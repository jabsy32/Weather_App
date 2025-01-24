const NewsComponent = ({ article }: NewsProps) => {
  if (!article) return;

  return (
    <div className="flex flex-col items-start justify-center h-full p-5">
      <div className="flex flex-col items-center">
        <a href={article.link} target="_blank" rel="noopener noreferrer">
          {article.title}
        </a>
        {article.imgUrl && (
          <img src={article.imgUrl} alt={article.imgUrl} className="p-5" />
        )}
      </div>
    </div>
  );
};
export default NewsComponent;
