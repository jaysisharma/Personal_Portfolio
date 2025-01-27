import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-scroll';
import styled from '@emotion/styled';

const NavLink = styled(Link)`
  color: white;
  margin: 0 15px;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s ease;
  &:hover {
    color: #00bcd4;
  }
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
`;

const navItems = ['Home', 'About', 'Skills', 'Projects', 'DevOps', 'Contact'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item}>
          <Link
            to={item.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item} />
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <NavLink to="home" spy={true} smooth={true} offset={-70} duration={500}>
          Portfolio
        </NavLink>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <DesktopNav>
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item}
              </NavLink>
            ))}
          </DesktopNav>
        )}
      </StyledToolbar>
    </AppBar>
  );
}
