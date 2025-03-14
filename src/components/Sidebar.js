import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import AllInboxIcon from '@mui/icons-material/AllInbox'
import HelpIcon from '@mui/icons-material/Help';
import InboxIcon from '@mui/icons-material/Inbox';
import MenuIcon from '@mui/icons-material/Menu';

import { getInboxes } from "../api/api";

function Sidebar(props) {
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const [inboxes, setInboxes] = useState([]);

  useEffect(() => {
    getInboxes()
      .then((response) => setInboxes(response.data))
      .catch((error) => console.error("Error fetching inboxes", error));
  }, []);

  const combinedInbox = [{ text: 'All inboxes', path: '/inbox', icon: <AllInboxIcon />}]
  const characterInboxes = inboxes.map((item) => (
    {text: item.name, path: `./inbox/${item.pk}`, icon: <InboxIcon />}
  )
  )

  const otherNavigationItems = [{text: 'FAQ', path: '/faq', icon: <HelpIcon />}];

  const navigationItems = combinedInbox.concat(characterInboxes, otherNavigationItems);

  const drawer = (
    <>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>)

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Spamfiles
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );

}

export default Sidebar;