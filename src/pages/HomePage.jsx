import { StyledHomePage } from 'components/Navigation/Navigation.styled';
import { ReactComponent as IconPhoneBook } from 'images/phonebook.svg';
import React from 'react';

const HomePage = () => {
  return (
    <StyledHomePage>
      Welcome to your PhoneBook
      <span>
        <IconPhoneBook />
      </span>
    </StyledHomePage>
  );
};

export default HomePage;
