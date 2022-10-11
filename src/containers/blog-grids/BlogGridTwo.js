import SectionTitleTwo from "../../components/ui/section-titles/SectionTitleTwo";
import blogGridData from "../../data/blog-grids/blog-grid-two.json";
import BlogGridTwoSingle from "../../components/blog-grids/BlogGridTwoSingle";
import React, {useEffect, useState} from "react";
import NewsService from "../../services/NewsService";

const BlogGridTwo = () => {

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    async function dataFetch() {
      await NewsService.getAllNews()
          .then(response => response.data)
          .then((data) => {
            setNewsList(data);
            console.log(data);
          }).catch(error => console.log(error.message));
    }
    dataFetch();
  }, []);

  return (
    <div className="dg__blog__area bg--white pb--140 pt--130">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitleTwo title="Latest News" />
          </div>
        </div>
        <div className="row mt--10">
          {newsList &&
              newsList.map((single, key) => {
              return <BlogGridTwoSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogGridTwo;
