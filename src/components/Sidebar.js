import { Link } from "react-router-dom";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';

const navigationItems = [{ text: 'Inbox', path: '/inbox', icon: <InboxIcon /> }, { text: 'FAQ', path: '/faq', icon: <HelpIcon /> }]

function Sidebar() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      flexShrink: 0,
      backgroundColor: "#ffffff",
      borderRight: "1px solid #e0e0e0",
      borderLeft: 2,
      overflowY: "auto",
      minWidth: "150px",
    }}>
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
    </Box>)
}

export default Sidebar;