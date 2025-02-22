import { Avatar, Box, List, ListItem, Typography } from "@mui/material"
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function CCRecipients({cc_recipients}) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'start' }}>
      <Typography variant="subtitle2" sx={{mr: 1, mt: 1}}>CC:</Typography>
      <List sx={{p: 0, m: 0}}>
        {cc_recipients.map(recipient => (
          <ListItem sx={{p: 0, mt:1}} key={recipient.name}>
            {recipient.display_image?.image 
            ? <Avatar variant="rounded" sx={{ height: 24, width: 24, mr: 1 }} src={recipient.display_image.image} /> 
            : <Avatar variant="rounded" sx={{ height: 24, width: 24, mr: 1 }}>
                <AccountBoxIcon sx={{ color: "white", backgroundColor: "gray" }} />
              </Avatar>
            }
            {recipient.name} &lt;redacted&gt;
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default CCRecipients