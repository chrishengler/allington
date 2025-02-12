import EmailHeader from "./EmailHeader";
import { Box, Divider, Paper, Typography } from "@mui/material";
import ImageAttachmentBox from "./ImageAttachmentBox";

function Email({ email }) {

  console.log()
  return (
    <Paper elevation={2} sx={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      <EmailHeader sender={email.sender} recipient={email.recipient} timestamp={email.timestamp} />
      <Divider />
      <Typography variant="subtitle1" sx={{ 'p': 1 }}>{email.subject}</Typography>
      <Divider variant="middle" />
      <Typography variant="body1" sx={{ 'p': 1, 'whiteSpace': 'pre-line' }}>{email.body}</Typography>
      {email.image_attachments.length > 0 && 
        <ImageAttachmentBox image_attachments={email.image_attachments} />
      }
    </Paper>
  );
};

export default Email;
