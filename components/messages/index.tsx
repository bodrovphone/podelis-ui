import React, { useState } from 'react';
import Link from 'next/link';
import ST from './styles';
import LoadMore from '../loadMore';
import MsgForm from './msgForm';
import Profile from '../profile';

import TimeAgo from 'react-timeago';
import russianStrings from 'react-timeago/lib/language-strings/ru';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

const formatter = buildFormatter(russianStrings);

import { ReactNode } from 'react';

interface LinkHOCProps {
  children: ReactNode;
  links?: boolean;
}

const LinkHOC = ({ children, links }: LinkHOCProps) =>
  links ? <Link href="/messages/thread/123">{children}</Link> : children;

interface MessagesProps {
  thread?: boolean;
  links?: boolean;
}

const Messages = ({ thread, links }: MessagesProps) => {
  return (
    <ST.MessagesWrapper>
      <LinkHOC links={links}>
        <ST.MessageContainer>
          <ST.MessageText>
            <ST.Date>
              <TimeAgo date="June 1, 2021" formatter={formatter} />
            </ST.Date>
            Я текст епта Добазарились хуле и вот мы приехали смотри какой текст
            чуть подлиннее и что будем теперь делать, ага? Ну вот думаем смотрим
            и пробуем это дерьмо пофиксим.
          </ST.MessageText>
          <ST.PictureWrapper>
            <ST.PostThumbnail src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
            <ST.ProfileMini>
              <Profile name="Вы" />
            </ST.ProfileMini>
          </ST.PictureWrapper>
        </ST.MessageContainer>
      </LinkHOC>

      <LinkHOC links={links}>
        <ST.MessageContainer>
          <ST.MessageText>
            <ST.Date>
              <TimeAgo date="May 28, 2021" formatter={formatter} />
            </ST.Date>
            Ok пофиксим.
          </ST.MessageText>
          <ST.PictureWrapper>
            <ST.PostThumbnail src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
            <ST.ProfileMini>
              <Profile name="Вася" rating={3.9} />
            </ST.ProfileMini>
          </ST.PictureWrapper>
        </ST.MessageContainer>
      </LinkHOC>
      <LinkHOC links={links}>
        <ST.MessageContainer>
          <ST.MessageText>
            <ST.Date>
              <TimeAgo date="May 23, 2021" formatter={formatter} />
            </ST.Date>
            Я текст епта Добазарились хуле и вот мы приехали смотри какой текст
            чуть подлиннее и что будем теперь делать, ага? Ну вот думаем смотрим
            и пробуем это дерьмо пофиксим.
          </ST.MessageText>
          <ST.PictureWrapper>
            <ST.PostThumbnail src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
            <ST.ProfileMini>
              <Profile name="Вася" rating={3.9} />
            </ST.ProfileMini>
          </ST.PictureWrapper>
        </ST.MessageContainer>
      </LinkHOC>
      <LinkHOC links={links}>
        <ST.MessageContainer>
          <ST.MessageText>
            <ST.Date>
              <TimeAgo date="May 23, 2021" formatter={formatter} />
            </ST.Date>
            Я текст епта Добазарились хуле и вот мы приехали смотри какой текст
            чуть подлиннее и что будем теперь делать, ага? Ну вот думаем смотрим
            и пробуем это дерьмо пофиксим.
          </ST.MessageText>
          <ST.PictureWrapper>
            <ST.PostThumbnail src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
            <ST.ProfileMini>
              <Profile name="Вася" rating={3.9} />
            </ST.ProfileMini>
          </ST.PictureWrapper>
        </ST.MessageContainer>
      </LinkHOC>
      <LinkHOC links={links}>
        <ST.MessageContainer>
          <ST.MessageText>
            <ST.Date>
              <TimeAgo date="June 1, 2021" formatter={formatter} />
            </ST.Date>
            Я текст епта Добазарились хуле и
          </ST.MessageText>
          <ST.PictureWrapper>
            <ST.PostThumbnail src="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" />
            <ST.ProfileMini>
              <Profile name="Вы" />
            </ST.ProfileMini>
          </ST.PictureWrapper>
        </ST.MessageContainer>
      </LinkHOC>

      {thread && <LoadMore />}
    </ST.MessagesWrapper>
  );
};

export { Messages, MsgForm };
