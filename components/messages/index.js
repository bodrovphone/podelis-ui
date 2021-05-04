import React, { useState } from "react";
import {
  MessagesWrapper_ST,
  MessageContainer_ST,
  PostThumbnail_ST,
  MessageText_ST,
  Date_ST,
  ProfileMini_ST,
  PictureWrapper_ST
} from "./styles";
import LoadMore from "../loadMore";
import MsgForm from "./msgForm";
import Profile from "../profile";


const Messages = (props) => {
  return (
    <MessagesWrapper_ST>
      <MessageContainer_ST>
        <MessageText_ST>
          <Date_ST>4 часа назад</Date_ST>Я текст епта Добазарились хуле
        </MessageText_ST>
        
        { props.thread  && <PictureWrapper_ST>
          <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
          <ProfileMini_ST>
            <Profile name="Вася" rating={3.9} />
          </ProfileMini_ST>
        </PictureWrapper_ST>
        }

      </MessageContainer_ST>
      <MessageContainer_ST>
      { !props.thread && <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" /> }
        <MessageText_ST>
          <Date_ST>4 часа назад</Date_ST>Я текст епта Добазарились хуле
        </MessageText_ST>

        { props.thread  && <PictureWrapper_ST>
          <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
          <ProfileMini_ST>
            <Profile name="Вася" rating={3.9} />
          </ProfileMini_ST>
        </PictureWrapper_ST>
        }

      </MessageContainer_ST>
      <MessageContainer_ST>
      { !props.thread && <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" /> }
        <MessageText_ST>
          <Date_ST>4 часа назад</Date_ST>Я текст епта Добазарились хуле
        </MessageText_ST>

       { props.thread  && <PictureWrapper_ST>
          <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
          <ProfileMini_ST>
            <Profile name="Вася" rating={3.9} />
          </ProfileMini_ST>
        </PictureWrapper_ST>
        }
      </MessageContainer_ST>
      <MessageContainer_ST>
      { !props.thread && <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" /> }
        <MessageText_ST>
          <Date_ST>4 часа назад</Date_ST>Я текст епта Добазарились хуле
        </MessageText_ST>
        { props.thread  && <PictureWrapper_ST>
          <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
          <ProfileMini_ST>
            <Profile name="Вася" rating={3.9} />
          </ProfileMini_ST>
        </PictureWrapper_ST>
        }
      </MessageContainer_ST>
      <MessageContainer_ST>
      { !props.thread && <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" /> }
        <MessageText_ST>
          <Date_ST>4 часа назад</Date_ST>Я текст епта Добазарились хуле
        </MessageText_ST>
        { props.thread  && <PictureWrapper_ST>
          <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
          <ProfileMini_ST>
            <Profile name="Вася" rating={3.9} />
          </ProfileMini_ST>
        </PictureWrapper_ST>
        }
      </MessageContainer_ST>
      { !props.thread && <LoadMore /> }
    </MessagesWrapper_ST>
  );
};

export { Messages, MsgForm };
