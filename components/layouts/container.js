import Head from 'next/head';
import React, { useContext } from 'react';
import TopNav from '../topNav';
import { Wrapper } from './styles';
import { SideBarContext, SideBarDispatch } from '../../context/sideBar.context';
import { matchMedia } from '../../utils';

const Container = ({children}) => {
  const navState = useContext(SideBarContext);
  const toggle = useContext(SideBarDispatch);

  const shouldToggle = (e) => {
    if (navState && matchMedia('max-width: 572px')) {
      toggle(false);
      // preventDefault doesn't work for Next Links
      e.preventDefault();
    }
  }

  return (
    <>
      <Head>
        <title>Main Page Zadelis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper className={`${navState ? 'active' : ''}`} onClick={shouldToggle}>
        <TopNav />
        {children}
      </Wrapper>
    </>
  )
}

export default Container;
