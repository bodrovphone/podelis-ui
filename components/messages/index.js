import React, { useState } from "react";
import Link from "next/link";
import {
  MessagesWrapper_ST,
  MessageContainer_ST,
  PostThumbnail_ST,
  MessageText_ST,
  Date_ST,
  ProfileMini_ST,
  PictureWrapper_ST,
} from "./styles";
import LoadMore from "../loadMore";
import MsgForm from "./msgForm";
import Profile from "../profile";

import TimeAgo from "react-timeago";
import russianStrings from "react-timeago/lib/language-strings/ru";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

const formatter = buildFormatter(russianStrings);

const LinkHOC = ({ children, links }) =>
  links ? (
    <Link href="/messages/thread/123">
      <a>{children}</a>
    </Link>
  ) : (
    children
  );

const Messages = ({ thread, links }) => {
  return (
    <MessagesWrapper_ST>
      <LinkHOC links={links}>
        <MessageContainer_ST>
          <MessageText_ST>
            <Date_ST>
              <TimeAgo date="June 1, 2021" formatter={formatter} />
            </Date_ST>
            Я текст епта Добазарились хуле и вот мы приехали смотри какой текст
            чуть подлиннее и что будем теперь делать, ага? Ну вот думаем смотрим
            и пробуем это дерьмо пофиксим.
          </MessageText_ST>
          <PictureWrapper_ST>
            <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
            <ProfileMini_ST>
              <Profile name="Вы" />
            </ProfileMini_ST>
          </PictureWrapper_ST>
        </MessageContainer_ST>
      </LinkHOC>

      <LinkHOC links={links}>
        <MessageContainer_ST>
          <MessageText_ST>
            <Date_ST>
              <TimeAgo date="May 28, 2021" formatter={formatter} />
            </Date_ST>
            Ok пофиксим.
          </MessageText_ST>
          <PictureWrapper_ST>
            <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
            <ProfileMini_ST>
              <Profile name="Вася" rating={3.9} />
            </ProfileMini_ST>
          </PictureWrapper_ST>
        </MessageContainer_ST>
      </LinkHOC>
      <LinkHOC links={links}>
        <MessageContainer_ST>
          <MessageText_ST>
            <Date_ST>
              <TimeAgo date="May 23, 2021" formatter={formatter} />
            </Date_ST>
            Я текст епта Добазарились хуле и вот мы приехали смотри какой текст
            чуть подлиннее и что будем теперь делать, ага? Ну вот думаем смотрим
            и пробуем это дерьмо пофиксим.
          </MessageText_ST>
          <PictureWrapper_ST>
            <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
            <ProfileMini_ST>
              <Profile name="Вася" rating={3.9} />
            </ProfileMini_ST>
          </PictureWrapper_ST>
        </MessageContainer_ST>
      </LinkHOC>
      <LinkHOC links={links}>
        <MessageContainer_ST>
          <MessageText_ST>
            <Date_ST>
              <TimeAgo date="May 23, 2021" formatter={formatter} />
            </Date_ST>
            Я текст епта Добазарились хуле и вот мы приехали смотри какой текст
            чуть подлиннее и что будем теперь делать, ага? Ну вот думаем смотрим
            и пробуем это дерьмо пофиксим.
          </MessageText_ST>
          <PictureWrapper_ST>
            <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
            <ProfileMini_ST>
              <Profile name="Вася" rating={3.9} />
            </ProfileMini_ST>
          </PictureWrapper_ST>
        </MessageContainer_ST>
      </LinkHOC>
      <LinkHOC links={links}>
        <MessageContainer_ST>
          <MessageText_ST>
            <Date_ST>
              <TimeAgo date="June 1, 2021" formatter={formatter} />
            </Date_ST>
            Я текст епта Добазарились хуле и
          </MessageText_ST>
          <PictureWrapper_ST>
            <PostThumbnail_ST src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
            <ProfileMini_ST>
              <Profile name="Вы" />
            </ProfileMini_ST>
          </PictureWrapper_ST>
        </MessageContainer_ST>
      </LinkHOC>

      {thread && <LoadMore />}
    </MessagesWrapper_ST>
  );
};

export { Messages, MsgForm };
