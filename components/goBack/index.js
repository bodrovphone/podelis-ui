import Link from "next/link";
import ST from "./styles";

const GoBack = ({ href, children }) => (
  <ST.Wrapper>
    <ST.GoBack>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </ST.GoBack>
  </ST.Wrapper>
);

export default GoBack;
