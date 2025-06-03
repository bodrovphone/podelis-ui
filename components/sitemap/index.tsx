import ST from './styles';
import LT from '../layouts';
import Link from 'next/link';
import { Tag } from 'react-bootstrap-icons';
import { ReactNode } from 'react';

interface SiteMapLink {
  name: string;
  url: string;
  sub?: SiteMapLink[] | false;
  offers?: number | null;
  [key: string]: any;
}

interface SiteMapProps {
  links: SiteMapLink[];
  categories: SiteMapLink[];
  labelMain: string;
  labelSecondary: string;
}

const SiteMap = ({ links, categories, labelMain, labelSecondary }: SiteMapProps) => {
  const renderLinks = (items: SiteMapLink[]): ReactNode[] => {
    return items.map(({ name, url, sub = false, offers = null }: SiteMapLink, index: number) => {
      return sub ? (
        <ul key={index + url}>{renderLinks(sub)}</ul>
      ) : (
        <li key={index + name}>
          <Link href={url}>
            {offers && <Tag />} {name} {offers && `(${offers})`}
          </Link>
        </li>
      );
    });
  };

  return (
    <ST.StyledWrapper>
      <div>
        <LT.H3>{labelMain}</LT.H3>
        <ul>{renderLinks(links)}</ul>
      </div>
      <div>
        <LT.H3>{labelSecondary}</LT.H3>
        <ul>{renderLinks(categories)}</ul>
      </div>
    </ST.StyledWrapper>
  );
};

export default SiteMap;
