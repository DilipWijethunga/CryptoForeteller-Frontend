import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BlogGridTwoSingle = ({ data }) => {

  const paragraphStyle = {
    width: "260px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }

  return (
    <div className="col-lg-4 col-sm-6 col-12 col-md-6">
      <article className="blog__2">
        <div className="thumb">
          <Link to={process.env.PUBLIC_URL + "/news-details/" + data._id.$oid}>
            <img src={process.env.PUBLIC_URL + data.image} alt=""/>
          </Link>
        </div>
        <div className="content">
          <ul className="meta" >
            <li style={{color: "red"}}>{data.date.$date}</li>
            <li style={{color: "red"}} >Post By: {data.author}</li>
          </ul>
          <h2>
            <Link to={process.env.PUBLIC_URL + "/news-details/" + data._id.$oid}>{data.title}</Link>
          </h2>
          <p style={paragraphStyle}>{data.description}</p>
        </div>
      </article>
    </div>
  );
};

BlogGridTwoSingle.propTypes = {
  data: PropTypes.object
};

export default BlogGridTwoSingle;
