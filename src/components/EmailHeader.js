import { Box, Divider, Typography, Avatar } from "@mui/material";
import CCRecipients from "./CCRecipients";

function EmailHeader({ sender, recipient, cc_recipients, timestamp }) {
  return (
    <Box sx={{ p: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {sender?.display_image?.image && (
            <Avatar variant="rounded" sx={{ height: 56, width: 56, mr: 2 }} src={sender.display_image.image} />
          )}
          <Typography variant="body2">
            From: {sender.name} <br />
            <span className="monospace">&lt; redacted &gt;</span> <br />
            {timestamp}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ textAlign: 'right' }}>
            To: {recipient.name} <br />< br />
            <span className="monospace">&lt; redacted &gt;</span>
          </Typography>
          {recipient?.display_image?.image && (
            <Avatar variant="rounded" sx={{ height: 56, width: 56, ml: 2 }} src={recipient.display_image.image} />
          )}
        </Box>
      </Box>

      {cc_recipients?.length > 0 && (
        <>
          <Divider sx={{ my: 1 }} />
          <Box sx={{ mt: 1 }}>
            <CCRecipients cc_recipients={cc_recipients} />
          </Box>
        </>
      )}
    </Box>
  );
}

export default EmailHeader;
