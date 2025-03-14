import React, { useState } from "react";
import { Paper, Typography, Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function ImageAttachment({ image_data }) {
  const [open, setOpen] = useState(false); // State to manage modal visibility

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Paper sx={{ padding: 2, textAlign: "center", margin: "16px auto" }}>
        <Typography variant="subtitle2">{image_data.image.name}</Typography>
        <img
          src={image_data.image.image}
          alt={image_data.image.name || "Attachment"}
          style={{ maxWidth: "100%", maxHeight: "250px", borderRadius: "8px", cursor: "pointer" }}
          onClick={handleOpen} // Open modal on click
        />
      </Paper>

      <Modal open={open} onClose={handleClose} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: 2,
            maxWidth: "90%",
            maxHeight: "90%",
            overflow: "auto",
            textAlign: "center",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 10 }}
          >
            <CloseIcon />
          </IconButton>

          <img
            src={image_data.image.image}
            alt={image_data.image.name || "Attachment"}
            style={{ maxWidth: "100%", maxHeight: "80vh" }}
          />

          <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
            {image_data.image.name}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default ImageAttachment;

