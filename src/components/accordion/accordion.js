import * as React from "react"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionCust = ({ question , answer }) => {

    return (
        <Accordion className="bg-gray-900">
            <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white"/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className="text-white font-bold">{ question }</Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-100">
            <Typography className="">
                { answer }
            </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionCust