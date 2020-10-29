import React, { useEffect, useState } from "react";
import { Cards_ST } from "./styles";
import SingleCard from "../singleCard";
// defaultTopPosts will be replaced with getStaticProps and fetch to API during build time
// when we have it on backend
import defaultTopPosts from "./defaultTopPosts";

const CardsWidget = (props) => {
  const [posts, setPosts] = useState(defaultTopPosts);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        let freshPosts = [];
        json.map(({ id, title, body }) => {
          if (id > 90) {
            freshPosts.push(
              <SingleCard
                title={title}
                description={body}
                imageSrc="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg"
                id={String(id)}
                key={id}
              />
            );
          }
        });
        setPosts([...posts, ...freshPosts]);
      })
      .catch((error) => console.log(error));
  }, []);

  return <Cards_ST>{[...posts]}</Cards_ST>;
};

export default CardsWidget;
