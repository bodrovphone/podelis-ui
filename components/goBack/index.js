import Link from "next/link";
import { Wrapper_ST, GoBack_ST } from "./styles";

const GoBack = ({ href, children }) => (
  <Wrapper_ST>
    <GoBack_ST>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </GoBack_ST>
  </Wrapper_ST>
);

export default GoBack;
