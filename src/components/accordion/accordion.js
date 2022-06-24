import * as React from "react"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionCust = ({ question , answer }) => {

    return (
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: 'rgb(17 24 39)' }}
            >
            <Typography sx={{
                fontWeight: 'bold',
                color: 'white'
            }} >{ question }</Typography>
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