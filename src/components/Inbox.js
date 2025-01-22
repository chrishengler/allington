import React, { useEffect, useState } from "react";
import { getThreads } from "../api/api";
import { Box, Divider, List, ListItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from "@mui/material";
import InboxThread from "./InboxThread";

function Inbox() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    getThreads()
      .then((response) => setThreads(response.data))
      .catch((error) => console.error("Error fetching threads", error));
  }, []);

  return (
    <div className="threads">
      <Paper>
        <List dense={true}>
          {threads.map((thread) => (
            <ListItem key={thread.pk}>
              <InboxThread thread={thread} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}

export default Inbox;
