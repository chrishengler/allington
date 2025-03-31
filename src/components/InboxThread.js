import { Link } from "react-router-dom";
import { Box, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

function InboxThread({ thread }) {
  const correspondents = thread.correspondents?.map(correspondent => correspondent.name).join(", ") || "";
  return (
    <ListItem sx={{padding: 0}}>
      <ListItemButton component={Link} to={`/threads/${thread.pk}`} sx={{padding: 0, paddingLeft: 1}}>
        <ListItemIcon>
          <EmailIcon />({thread.count})
        </ListItemIcon>
        <Box sx={{ display: "flex", px: 2, justifyContent: "space-between", width: "100%", alignItems: "center" }}>
          <Typography>{thread.title}</Typography>
          
          <Typography sx={{ textAlign: "right", flexShrink: 0, marginLeft: "auto" }}>
            {correspondents}
          </Typography>
        </Box>

      </ListItemButton>
    </ListItem>
  )
}

export default InboxThread