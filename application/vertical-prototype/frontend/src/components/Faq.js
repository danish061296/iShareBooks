import React from 'react';
import { Container, NavbarBrand } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Faq.css';

const Faq = () => {
  return (
    <div>
      <div>
        <NavbarBrand style={{ color: 'white', fontSize: '50px' }}>
          FAQ
        </NavbarBrand>
        <h1>
          Q. I have a rather old, rare book and I'd like to find out how much
          it's worth.
        </h1>

        <h3 className="font2">
          {' '}
          Please see the online version of the ALA brochure, "Your Old Books,"
          for further assistance. Also see the web site of the Antiquarian
          Booksellers' Association of America (ABAA). And see the Appraisals
          page for additional resources, including links to the websites of
          professional appraiser organizations which let you conduct "Find an
          Appraiser" online directory searches.{' '}
        </h3>
        <h1> Q. How many books were read last year?</h1>

        <h3 className="font2">
          {' '}
          There is no reliable way to obtain this information. The closest
          reliable statistic is the figure for the "Reading books" leisure
          activity which appears in the Statistical Abstract of the United
          States published annually by the U.S. Census Bureau (until 2011). The
          Statistical Abstract series is available online and the tables
          reporting statistics appear as Adobe Reader PDF documents. See the
          Arts, Recreation, & Travel: Recreation and Leisure Activities section
          of the 2012 edition of the publication, to find Table 1240. Adult
          Participation in Selected Leisure Activities.
        </h3>

        <h1>. I'm looking for the Books That Shaped America List. </h1>

        <h3 className="font2">
          A. Actually, it was the Library of Congress, not the American Library
          Association, that created the Books That Shaped America List, which is
          actually the 88 titles selected to be part of their "Books That Shaped
          America" exhibition, running June 25 - September 29, 2012. The
          exhibition marked the beginning of a multiyear "Celebration of the
          Book," a series of programs, symposia and other events that explore
          the important and varied ways that books influence our lives. You can
          find the list and additional resources on the Library of Congress
          website:
        </h3>
      </div>
    </div>
  );
};

export default Faq;
