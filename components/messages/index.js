import React, { useState } from "react";
import {
  MessagesWrapper_ST,
  MessageContainer_ST,
  PostThumbnail_ST,
  MessageText_ST,
  Date_ST,
} from "./styles";
import Profile from "../profile";
import LoadMore from "../loadMore";

const Messages = (props) => {
  return (
    <MessagesWrapper_ST>
      <MessageContainer_ST>
        <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
        <MessageText_ST>
          <Date_ST>4 часа назад</Date_ST>Я текст епта Добазарились хуле
        </MessageText_ST>
        <Profile name="Вася" rating={3.9} />
      </MessageContainer_ST>
      <MessageContainer_ST>
        <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
        <MessageText_ST>
          <Date_ST>4 часа назад</Date_ST>Я текст епта Добазарились хуле
        </MessageText_ST>
        <Profile name="Вася" rating={3.9} />
      </MessageContainer_ST>
      <MessageContainer_ST>
        <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
        <MessageText_ST>
          <Date_ST>4 часа назад</Date_ST>Я текст епта Добазарились хуле
        </MessageText_ST>
        <Profile name="Вася" rating={3.9} />
      </MessageContainer_ST>
      <MessageContainer_ST>
        <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
        <MessageText_ST>
          <Date_ST>4 часа назад</Date_ST>Я текст епта Добазарились хуле
        </MessageText_ST>
        <Profile name="Вася" rating={3.9} />
      </MessageContainer_ST>
      <MessageContainer_ST>
        <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
        <MessageText_ST>
          <Date_ST>4 часа назад</Date_ST>Я текст епта Добазарились хуле
        </MessageText_ST>
        <Profile name="Вася" rating={3.9} />
      </MessageContainer_ST>
      <LoadMore />
    </MessagesWrapper_ST>
  );
};

export default Messages;
