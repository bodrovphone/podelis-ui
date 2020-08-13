import Link from 'next/link';
import { List } from 'react-bootstrap-icons';
import { SbContainer, SbLink, SbItemSpan, Close } from './styles';
import { Person, ChatDots, Diagram3, PencilSquare, InfoCircle } from 'react-bootstrap-icons';


const SideBar = ({className, setActive, isActive }) => (
  <SbContainer className={className}>
    <Close onClick={() => setActive(!isActive)} >&times;</Close>
    <Link href="/">
      <SbLink>
        <Person size={22} />
        <SbItemSpan>Профиль</SbItemSpan>
      </SbLink>
    </Link>
    <Link href="/">
      <SbLink>
        <ChatDots size={22} />
        <SbItemSpan>Сообщения</SbItemSpan>
      </SbLink>
    </Link>
    <Link href="/">
      <SbLink>
        <Diagram3 size={22} />
        <SbItemSpan>Категории</SbItemSpan>
      </SbLink>
    </Link>
    <Link href="/">
      <SbLink>
        <PencilSquare size={22} />
        <SbItemSpan>Правила и<br />Условия</SbItemSpan>
      </SbLink>
    </Link>
    <Link href="/">
      <SbLink>
        <InfoCircle size={22} />
        <SbItemSpan>О нас</SbItemSpan>
      </SbLink>
    </Link>
  </SbContainer>
);


export default SideBar;