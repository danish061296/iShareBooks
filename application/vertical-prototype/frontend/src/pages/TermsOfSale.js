import React from 'react'
import './TermsOfSale.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsOfSale = () => {
    return (
        <div>
            <Navigation />
            <div>
                <h1 className = "heading">Terms of Sale </h1>
                <div className = "container">
                    <body className = "bod">
                    <h2 className = "h2">Privacy Policy</h2>
                    <p>These terms and conditions govern the sale of Products(“Product or Products”) and provisions of services (“Services”) by Component Distributors Inc. (CDI) and its affiliates (“Seller”) as well as by third party vendors and/or service providers of Seller. These terms and conditions (“Agreement”) take precedence over Buyer’s supplemental or conflicting terms and conditions to which notice of objection is hereby given. Neither Seller’s commencement of performance or delivery shall be deemed or construed as acceptance of Buyer’s supplemental or conflicting terms and conditions. CDI’s failure to object to conflicting or additional terms will not change or add to the terms of this agreement. Buyer’s acceptance of the Products and/or Services from Seller shall be deemed to constitute acceptance of the terms and conditions contained herein.</p>
                    <h2 className = "h2">Terms</h2>
                    <p>The prices of the Products are those prices specified on the front of the invoice. Pricing
for undelivered Products may be increased in the event of an increase in Seller’s cost, change in
market conditions or any other causes beyond the Seller’s reasonable control. Price quotations
shall automatically expire in thirty (30) days from the date issued, or as otherwise stated in the
quotation.</p>
                    <h2 className = "h2">Information we collect</h2>
                    <p>Taxes: Unless otherwise agreed to in writing by Seller, all prices quoted are exclusive of transportation and insurance costs, duties, and all taxes including federal, state and local sales, excise and value added, goods and services taxes, and any other taxes. Buyer agrees to indemnify and hold Seller harmless for any liability for tax in connection with the sale, as well as the collection or withholding thereof, including penalties and interest thereon. When applicable, transportation and taxes shall appear as separate items on Seller’sinvoice. 4. Payment: Payment may be made by check, money order, credit card, PayPal or wire transfer (all fees are borne by the Buyer). A surcharge of 3% for credit card sales and 4% for sales via PayPal will be assessed except for sales shipped to these states: Colorado, Connecticut, Florida, Kansas, Maine, Massachusetts and Oklahoma. Where Seller has extended credit to Buyer, terms of payment shall be net thirty (30) days from date of invoice, without offset or deduction unless otherwise noted. On any past due invoice, Seller may impose interest at the rate of one and a half percent [1.5%] per month. If Buyer fails to make each payment when it is due, Seller reservesthe right to change or withdraw credit and thereby suspend or cancel performance under any or all purchase orders or agreements in which Seller has extended credit to Buyer. In the event of default by Buyer, Seller shall be entitled to costs, fees, and expenses, including but not limited to recovery of attorney fees, court costs and fees, and collections costs.</p>

                    </body>
                    
                    
                </div>
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default TermsOfSale;

