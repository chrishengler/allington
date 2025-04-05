import { Link } from "react-router-dom";
import { Box, ListItem, ListItemButton, ListItemIcon, Typography, useMediaQuery, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

function InboxThread({ thread, bg }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screen
  const maxSubjectLength = 25; // Adjust this value as needed for mobile
  const maxCorrespondents = isMobile ? 1 : 3;

  // Truncate subject if on mobile
  const truncatedTitle = isMobile && thread.title.length > maxSubjectLength
    ? thread.title.slice(0, maxSubjectLength) + "..."
    : thread.title;

  let correspondents = thread.correspondents?.slice(0,maxCorrespondents).map(correspondent => correspondent.name).join(", ") || "";
  if(thread.correspondents.length > maxCorrespondents)
  {
    correspondents = correspondents + ", ..."
  }
  return (
    <ListItem sx={{padding: 0}}>
      <ListItemButton component={Link} to={`/threads/${thread.pk}`} sx={{padding: 0, paddingLeft: 1, bgcolor: bg}}>
        <ListItemIcon>
          <EmailIcon />({thread.count})
        </ListItemIcon>
        <Box sx={{ display: "flex", px: 2, justifyContent: "space-between", width: "100%", alignItems: "center" }}>
          <Typography>{truncatedTitle}</Typography>
          
          <Typography sx={{ textAlign: "right", flexShrink: 0, marginLeft: "auto", maxWidth: "30%" }}>
            {correspondents}
          </Typography>
        </Box>

      </ListItemButton>
    </ListItem>
  )
}

export default InboxThread