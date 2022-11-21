import React from 'react';
import Carousel from './Carousel';
import List from '../utils/List';
import MainText from './MainText';
import BackToTopButton from './BackToTopButton';

const MobileMainContent = () => {
  return(
    <>
      <Carousel images={ List } />
      <MainText />
      <BackToTopButton />
    </>
  );
};

export default MobileMainContent;