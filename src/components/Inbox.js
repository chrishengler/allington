import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getInbox, getThreads } from "../api/api";
import { Box, List, Paper, Typography } from "@mui/material";
import InboxThread from "./InboxThread";
import { grey, indigo } from "@mui/material/colors";

function Inbox() {
  const { id } = useParams();
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = id ? await getInbox(id) : await getThreads();
        setThreads([]); // Clear the old threads first
        setThreads(response.data);
      } catch (error) {
        console.error("Error fetching threads", error);
      }
    };
  
    fetchThreads();
  }, [id]);

  const light = grey[200];
  const dark = grey[300];

  return (
    <div className="threads">
      <Paper sx={{p: 1, backgroundColor: indigo[50]}}>
        <Box sx={{ display: "flex", px: 2, justifyContent: "space-between", width: "100%", alignItems: "center" }}>
          <Typography variant="subtitle1">Threads</Typography>

          <Typography variant="subtitle1" sx={{ textAlign: "right", flexShrink: 0, marginLeft: "auto" }}>
            Correspondents
          </Typography>
        </Box>
        <Paper elevation={2}>
          <List dense={true}>
            {threads.map((thread, index) => (
              <InboxThread key={thread.pk} thread={thread} bg={(index % 2 ? dark : light )}/>
            ))}
          </List>
        </Paper>
      </Paper>
    </div>
  );
}

export default Inbox;
