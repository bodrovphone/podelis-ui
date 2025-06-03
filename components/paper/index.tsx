import ST from "./styles";
import { ReactNode } from 'react';

interface PaperProps {
  children: ReactNode;
}

const Paper = ({ children }: PaperProps) => <ST.Paper>{children}</ST.Paper>;

export default Paper;
