import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getInbox, getThreads } from "../api/api";
import { List, Paper } from "@mui/material";
import InboxThread from "./InboxThread";

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

  return (
    <div className="threads">
      <Paper>
        <List dense={true}>
          {threads.map((thread) => (
              <InboxThread key={thread.pk} thread={thread} />
          ))}
        </List>
      </Paper>
    </div>
  );
}

export default Inbox;
