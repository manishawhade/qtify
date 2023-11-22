import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./index.css";

export default function Faqs() {
  return (
    <div className="faqs-div">
      <Typography variant="h5" color="white" textAlign={"center"}>
        FAQs
      </Typography>
      <div>
        <Accordion style={{}}>
          <AccordionSummary
            style={{
              backgroundColor: "#000",
              color: "#fff",
              border: "1px solid #fff",
              borderRadius: 5,
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Is QTify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <Accordion style={{}}>
        <AccordionSummary
          style={{
            backgroundColor: "#000",
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: 5,
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
