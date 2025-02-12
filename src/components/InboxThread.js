import { Link } from "react-router-dom";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

function InboxThread({ thread }) {
  return (
    <ListItem sx={{padding: 0}}>
      <ListItemButton component={Link} to={`/threads/${thread.pk}`} sx={{padding: 0, paddingLeft: 1}}>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText>
          {thread.title}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  )
}

export default InboxThread