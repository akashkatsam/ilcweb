import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import new2 from '../Home/new2.jpg'; // Default image in case API doesn't provide one

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          'https://ilc-dev.katsammedia.com/api/resource/ILC%20Blog?fields=[%22*%22]'
        );
        const data = await response.json();

        if (data && data.data) {
          setBlogs(data.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <section id="breadcumd">
        <div className="breadcrumb1">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="caption-breadcumb">
                <h4>ILC Blogs</h4>
                <p>We Create Legendary Experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blogpage">
        <div className="container-fluid">
          <div className="row">
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <div className="col-md-4" key={index}>
                  <div className="newscard">
                    <div className="newimg">
                      <img
                        src={`https://ilc-dev.katsammedia.com/${blog.blog_short_image}`}
                        className="img-fluid"
                        alt={blog.title}
                      />
                    </div>
                    <div className="news-caption">
                      <p>{blog.blog_date || 'Unknown Date'} | {blog.author || 'Unknown Source'}</p>
                      <Link to={blog.url || "#"} target="_blank">
                        <h5>{blog.blog_title || 'Untitled Blog'}</h5>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading blogs...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
