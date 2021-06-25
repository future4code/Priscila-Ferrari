import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledHeader } from './styled';

const Header = () => {
  

  return (
   
      <AppBar position="static">
        <StyledHeader>
          
        <Button color="inherit">LabEddit</Button>
          <Button color="inherit">Login</Button>
        </StyledHeader>
      </AppBar>
   
  )
}
export default Header;