import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const pages = ['Libraries', 'Frameworks', 'Videos', 'Documents'];

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem button key={text}>
            <Typography textAlign="center" sx={{ fontSize: '1.5rem' }}>
              {text}
            </Typography>
          </ListItem>
        ))}
        <ListItem button>
          <Link to="/create">
            <Typography textAlign="center" sx={{ fontSize: '1.5rem' }}>
              Create
            </Typography>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', pl: 8 }}>
            {pages.map((page) => (
              <Button key={page} sx={{ my: 2, mx: 2, color: 'white', fontSize: '1.5rem' }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'flex' } }}>
            <Link to="/create" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" sx={{ ml: 2, p: 1 }}>
                <Typography variant="h3" component="span" sx={{ fontSize: '2rem' }}>
                  +
                </Typography>
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', sm: 'none' } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer(true)}
          >
            <span role="img" aria-label="hamburger" style={{ fontSize: '1.5rem' }}>🍔</span>
          </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </AppBar>
  );
}

export default ResponsiveAppBar;
