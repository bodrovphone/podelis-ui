import { StyledWrapper_ST } from "./styles";
import { H3 } from "../layouts";
import Link from "next/link";
import { Tag } from "react-bootstrap-icons";

const SiteMap = ({ links, categories, labelMain, labelSecondary }) => {
  const renderLinks = (items) => {
    return items.map(({ name, url, sub = false, offers = null }, index) => {
      return sub ? (
        <ul key={index + url}>{renderLinks(sub)}</ul>
      ) : (
        <li key={index + name}>
          <Link href={url}>
            <a>
              {offers && <Tag />} {name} {offers && `(${offers})`}
            </a>
          </Link>
        </li>
      );
    });
  };

  return (
    <StyledWrapper_ST>
      <div>
        <H3>{labelMain}</H3>
        <ul>{renderLinks(links)}</ul>
      </div>
      <div>
        <H3>{labelSecondary}</H3>
        <ul>{renderLinks(categories)}</ul>
      </div>
    </StyledWrapper_ST>
  );
};

export default SiteMap;
