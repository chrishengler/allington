import EmailHeader from "./EmailHeader";
import { Divider, Paper, Typography } from "@mui/material";
import ImageAttachmentBox from "./ImageAttachmentBox";
import { indigo, brown } from "@mui/material/colors";

function Email({ email }) {

  let background = email.sender.baiter ? indigo[50] : brown[50];
  console.log()
  return (
    <Paper 
    elevation={2} 
    sx={{ 
      maxWidth: '800px', 
      width: '100%', 
      backgroundColor: background, 
      alignSelf: email.sender.baiter ? 'flex-end' : 'flex-start' 
    }}
  >
      <EmailHeader sender={email.sender} recipient={email.recipient} cc_recipients={email.cc} timestamp={email.timestamp} />
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
