import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledHeader } from './styled';
import { useHistory } from 'react-router-dom';
import { goHomePage,goPostPage } from '../../routes/coordinator';

const Header = ({rightButtonText,setRightButtonText}) => {
  const history = useHistory()
  const token = localStorage.getItem("token")
  
  
  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if(token){
      logout()
      setRightButtonText("Login")
      goHomePage(history)
    } else {
      goHomePage(history)
    }
  }

  return (
   
      <AppBar position="static">
        <StyledHeader>
          
        <Button color="inherit" onClick={() => goPostPage(history)}>LabEddit</Button>
          <Button onClick={rightButtonAction}>{rightButtonText}</Button>
        </StyledHeader>
      </AppBar>
   
  )
}
export default Header;