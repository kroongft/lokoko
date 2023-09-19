import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import { Header } from '../components/Header';

interface DefaultLayoutProps {
  children: ReactNode | undefined;
}

export function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;
  return (
    <LayoutContainer>
      <LayoutWrapper>
        <Header />
        <main>{children}</main>
      </LayoutWrapper>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LayoutWrapper = styled.div`
  width: 100%;
  max-width: 980px;
`;
