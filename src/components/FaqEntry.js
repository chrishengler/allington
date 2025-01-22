import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function FaqEntry({faqEntry}) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span" variant="subtitle1">{faqEntry.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1">
          {faqEntry.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default FaqEntry;