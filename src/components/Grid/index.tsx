import { ReactNode } from 'react';
import { Container } from './styles';

interface GridProps {
  children: ReactNode;
}

export default function Grid({ children }: GridProps) {
  return <Container>{children}</Container>;
}
