import { Box, Divider, Typography } from "@mui/material";
import CCRecipients from "./CCRecipients";
import HeaderSender from "./HeaderSender";
import HeaderRecipient from "./HeaderRecipient";
import formatTimestamp from "../utility/formatTimestamp";

function EmailHeader({ sender, recipient, cc_recipients, timestamp }) {
  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="body2" whiteSpace='pre-line'>{formatTimestamp(timestamp)}</Typography>
        <Box display='flex' justifyContent='space-between' flexWrap='wrap' sx={{py: 1}}>
        <HeaderSender sender={sender} />
        <HeaderRecipient recipient={recipient} />
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
