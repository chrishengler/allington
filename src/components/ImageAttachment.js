import { Link } from 'react-router-dom'
import { Paper, Typography } from "@mui/material";

function ImageAttachment({image_data}){
  return (
    <Paper>
      <Link to={image_data.image.image}>
      <Typography variant="subtitle2">{image_data.image.name}</Typography>
      <img
        src={image_data.image.image} 
        alt={image_data.image.name || "Attachment"} 
        style={{ maxWidth: "100%", maxHeight: "250px", borderRadius: "8px" }}
      />
      </Link>
    </Paper>
  )
}

export default ImageAttachment
