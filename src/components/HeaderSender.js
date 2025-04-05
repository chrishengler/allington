import { Avatar, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function HeaderSender({sender})
{
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screen
  const avatarSize = isMobile ? theme.emailHeader.avatarSizeMobile : theme.emailHeader.avatarSizeDesktop;
  const avatarMargin = isMobile ? theme.emailHeader.avatarMarginMobile : theme.emailHeader.avatarMarginDesktop;

  return (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          {sender.display_image?.image 
            ? <Avatar variant="rounded" sx={{ height: avatarSize, width: avatarSize, mr: avatarMargin }} src={sender.display_image.image} /> 
            : <Avatar variant="rounded" sx={{ height: avatarSize, width: avatarSize, mr: avatarMargin }}>
                <AccountBoxIcon sx={{ fontSize: avatarSize }} />
              </Avatar>
            }
          <Typography variant="body2">
            From: {sender.name} <br />
            <span className="monospace">&lt;redacted&gt;</span> <br />
          </Typography>
        </Box>
  )
}

export default HeaderSender
