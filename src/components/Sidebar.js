import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import AllInboxIcon from '@mui/icons-material/AllInbox'
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';

import { getInboxes } from "../api/api";


function Sidebar() {
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