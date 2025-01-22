import { Link } from "react-router-dom";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

function InboxThread({ thread }) {
  return (
    <ListItemButton component={Link} to={`/threads/${thread.pk}`}><ListItem><ListItemIcon><EmailIcon /></ListItemIcon><ListItemText>{thread.title}</ListItemText></ListItem></ListItemButton>
  )
}

export default InboxThread