import BlogSidebar from "../../components/blog/BlogSidebar";
import { Link } from "react-router-dom";
import BlogGridTwoSingle from "../../components/blog-grids/BlogGridTwoSingle";
import React, {useEffect, useState} from "react";
import NewsService from "../../services/NewsService";
import BlogGridTwoSingleV2 from "../../components/blog-grids/BlogGridTwoSingleV2";

const BlogcontentTwo = () => {

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
    <div className="dg__blog__area bg--white section-padding--xl">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="row margin--top">
              {/* Start Single Blog */}

                {newsList &&
                    newsList.map((single, key) => {
                      return <BlogGridTwoSingleV2 data={single} key={key} />;
                    })}
            </div>
          </div>
          <div className="col-lg-2 sm__mt--40 md__mt--40">
            {/* sidebar */}
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogcontentTwo;
