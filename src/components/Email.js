import EmailHeader from "./EmailHeader";
import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";

function Email({ email }) {

  return (
    <Paper elevation={2} sx={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      <EmailHeader sender={email.sender} recipient={email.recipient} timestamp={email.timestamp} />
      <Divider />
      <Typography variant="subtitle1" sx={{ 'p': 1 }}>{email.subject}</Typography>
      <Divider variant="middle" />
      <Typography variant="body1" sx={{ 'p': 1, 'whiteSpace': 'pre-line' }}>{email.body}</Typography>
    </Paper>
  );
};

export default Email;
