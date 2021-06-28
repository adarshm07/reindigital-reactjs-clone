import React, { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        "https://reindigital.io/wp-json/wp/v2/posts?_embed&per_page=4"
      );
      if (!response.ok) {
        // oups! something went wrong
        return;
      }

      const posts = await response.json();
        console.log(posts[1]._embedded["wp:featuredmedia"][0].source_url);
      await setPosts(posts);
    }
    loadPosts();
  }, []);
  return (
    <div className="blog-container  ">
     <div className="container-blog-post">
        <div className="blog-post-single">
          <div className="big-card">
            <img
              src={posts[0]._embedded["wp:featuredmedia"][0].source_url}
              className="big-img-blog"
              alt={posts[0]._embedded["wp:featuredmedia"][0].alt_text}
            />
            <h2 className="blog-title-big">{posts[0].title.rendered}</h2>
            {/* <p className="blog-excerpt">{posts[0].excerpt.rendered}</p> */}
          </div>

          <div className="blog-post-col">
          <div className="blog-card">
            <img
              src={posts[1]._embedded["wp:featuredmedia"][0].source_url}
              className="big-img-blog"
            //   alt={posts[1].title.rendered}
            />
            <h2 className="blog-heading">{posts[1].title.rendered}</h2>
          </div>

          <div className="blog-card">
            <img
            //   src={posts[2]._embedded["wp:featuredmedia"][0].source_url}
              className="big-img-blog"
            //   alt={posts[2].title.rendered}
            />
            <h2 className="blog-heading">{posts[2].title.rendered}</h2>
          </div>

          <div className="blog-card">
            <img
            //   src={posts[3]._embedded["wp:featuredmedia"][0].source_url}
              className="big-img-blog"
            //   alt={posts[3].title.rendered}
            />
            <h2 className="blog-heading">{posts[3].title.rendered}</h2>
          </div>
        </div>
        </div>
        
      </div>

    </div>
  );
}