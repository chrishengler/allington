import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getThreadDetail } from "../api/api";
import Email from "./Email";
import { Box, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const ThreadDetail = () => {
  const { id } = useParams(); // Get the `id` from the URL
  const [emails, setEmails] = useState([]);
  const [threadTitle, setThreadTitle] = useState([])

  useEffect(() => {
    getThreadDetail(id) // Pass the id to the API call
      .then(response => {
        setEmails(response.data.emails);
        setThreadTitle(response.data.title)
      })
      .catch(error => {
        console.error("Error fetching emails", error);
      });
  }, [id]);

  return (
    <Box>
      <Typography variant="h5">{threadTitle}</Typography>
      <List>
        {emails.map(email => (
          <ListItem key={email.entry}>
            <Email email={email} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ThreadDetail;
