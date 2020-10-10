import React, { useEffect, useState } from 'react';
import { CardsStyled } from './styles';
import SingleCard from '../singleCard';
import defaultTopPosts from './defaultTopPosts';

const CardsWidget = (props) => {
  const [ posts, setPosts ] = useState(defaultTopPosts);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      let postsFromApi = [];
      json.map(post => {
        if (post.id > 90) {
          postsFromApi.push(
            <SingleCard title={post.title} description={post.body} imageSrc="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" id={String(post.id)} key={post.id} />
          );
        }
      });
      console.log('posts fetched, updating...');
      setPosts([...posts, ...postsFromApi]);
    }).catch(error => console.log(error));
  }, [])
  return (
    <CardsStyled>
      {
        posts.map(item => item)
      }
    </CardsStyled>
  );
}

export default CardsWidget;