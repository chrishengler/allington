import { Avatar, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function HeaderRecipient({recipient})
{
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screen
  const avatarSize = isMobile ? theme.emailHeader.avatarSizeMobile : theme.emailHeader.avatarSizeDesktop;
  const avatarMargin = isMobile ? theme.emailHeader.avatarMarginMobile : theme.emailHeader.avatarMarginDesktop;

  return (
        <Box sx={{ display: 'flex', alignItems: 'right' }}>
          <Typography variant="body2" textAlign={'right'}>
            To: {recipient.name} <br />
            <span className="monospace">&lt;redacted&gt;</span> <br />
          </Typography>
            {recipient.display_image?.image 
            ? <Avatar variant="rounded" sx={{ height: avatarSize, width: avatarSize, ml: avatarMargin }} src={recipient.display_image.image} /> 
            : <Avatar variant="rounded" sx={{ height: avatarSize, width: avatarSize, ml: avatarMargin }}>
                <AccountBoxIcon sx={{ fontSize: avatarSize}} />
              </Avatar>
            }
        </Box>
  )
}

export default HeaderRecipient
