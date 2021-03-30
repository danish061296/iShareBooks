import React, { useEffect } from 'react';
import { NavbarBrand } from 'react-bootstrap';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Faq.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AppFaq = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="faq__container" id="faq" data-aos="fade-right">
      <div className="faq">
        <NavbarBrand
          style={{
            color: 'white',
            fontSize: '60px',
            fontWeight: 900,
          }}
        >
          FAQs
        </NavbarBrand>
        <Accordion className="faq__accor">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="expand__icon" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="faq__qs">
              Q. I have a rather old, rare book and I'd like to find out how
              much it's worth.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faq__answers">
              Please see the online version of the ALA brochure, "Your Old
              Books," for further assistance. Also see the web site of the
              Antiquarian Booksellers' Association of America (ABAA). And see
              the Appraisals page for additional resources, including links to
              the websites of professional appraiser organizations which let you
              conduct "Find an Appraiser" online directory searches.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="faq__accor">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="expand__icon" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="faq__qs">
              Q. How many books were read last year?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faq__answers">
              There is no reliable way to obtain this information. The closest
              reliable statistic is the figure for the "Reading books" leisure
              activity which appears in the Statistical Abstract of the United
              States published annually by the U.S. Census Bureau (until 2011).
              The Statistical Abstract series is available online and the tables
              reporting statistics appear as Adobe Reader PDF documents. See the
              Arts, Recreation, & Travel: Recreation and Leisure Activities
              section of the 2012 edition of the publication, to find Table
              1240. Adult Participation in Selected Leisure Activities.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="faq__accor">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="expand__icon" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="faq__qs">
              Q. I'm looking for the Books That Shaped America List.
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="faq_details">
            <Typography className="faq__answers">
              A. Actually, it was the Library of Congress, not the American
              Library Association, that created the Books That Shaped America
              List, which is actually the 88 titles selected to be part of their
              "Books That Shaped America" exhibition, running June 25 -
              September 29, 2012. The exhibition marked the beginning of a
              multiyear "Celebration of the Book," a series of programs,
              symposia and other events that explore the important and varied
              ways that books influence our lives. You can find the list and
              additional resources on the Library of Congress website:
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default AppFaq;
