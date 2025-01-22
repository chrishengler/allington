import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";

function EmailHeader({ sender, recipient, timestamp }) {

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      p: 1,
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'left',
      }}>
        {sender?.display_image?.image && <Avatar variant="rounded" sx={{ 'height': 56, 'width': 56, 'paddingRight': 2 }} src={sender.display_image.image} />}
        <Typography variant="body2">
          From: {sender.name} <br /><span className="monospace">&lt; redacted &gt; <br />{timestamp}</span>
        </Typography>
      </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'left',
      }}>
        <Typography variant="body2">
          From: {recipient.name} <br /><br /><span className="monospace">&lt; redacted &gt;<br /></span>
        </Typography>
        {recipient?.display_image?.image && <Avatar variant="rounded" sx={{ 'height': 56, 'width': 56, 'paddingLeft': 2 }} src={recipient.display_image.image} />}
      </Box>
    </Box>
  );
};

export default EmailHeader;
