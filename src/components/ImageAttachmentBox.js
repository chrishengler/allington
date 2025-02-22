import { Box, Divider, List, ListItem, Typography } from "@mui/material"
import ImageAttachment from "./ImageAttachment";

function ImageAttachmentBox({ image_attachments }) {
  return (
    <Box>
      <Divider />
      <Typography variant="subtitle1" sx={{ padding: 1 }}>
        {image_attachments.length} attached {image_attachments.length > 1 ? 'files' : 'file'}:
      </Typography>
      <Box>
        <List>
          {image_attachments.map((image) =>
          (
            <ListItem  key={image.image} >
              <ImageAttachment image_data={image}/>
            </ListItem>
          )
          )
          }
        </List>
      </Box>
    </Box>
  )
}

export default ImageAttachmentBox