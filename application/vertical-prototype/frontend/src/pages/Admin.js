import React from 'react'
import Navigation from '../components/Navigation'
import Footer from  '../components/Footer'
import axios from 'axios'
import './Admin.css'


import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),

    createData('Gingerbread', 356, 16.0, 49, 3.9),

    createData('Gingerbread', 356, 16.0, 49, 3.9),

    createData('Gingerbread', 356, 16.0, 49, 3.9),

    createData('Gingerbread', 356, 16.0, 49, 3.9),

    createData('Gingerbread', 356, 16.0, 49, 3.9),

    createData('Gingerbread', 356, 16.0, 49, 3.9),

    createData('Gingerbread', 356, 16.0, 49, 3.9),

  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


function Admin() {
const [totalAmount, setTotalAmount] = React.useState(0);
const [commission, setCommission] = React.useState(0);
const [totalBooks, setTotalBooks] = React.useState([]);

const classes = useStyles();


React.useEffect(() => {
    axios.get(`http://${window.location.hostname}:3001/total_books`).
    then(response => {
        console.log(response.data);
        setTotalBooks(response.data.results);
    }).catch(e => console.log(e));
}, []);

React.useEffect(() => {
    axios.get(`http://${window.location.hostname}:3001/total_commission`).
    then(response => {
        console.log(response.data);
        setCommission(response.data.commission);
        setTotalAmount(response.data.totalAmount)
    }).catch(e => console.log(e));
}, []);

    


    return (
        <div className="admin__page">
        <Navigation />
        <div >
        

            <h1 className="total__heading"> Transaction Summary</h1>
           <div className="totalContainer"> 
               









                <div className="tr"> 
                <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right" >ID</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
                              <StyledTableCell align="right">3</StyledTableCell>
                              <StyledTableCell align="right">{row.name}</StyledTableCell>

             
            
              
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>   

                </div>
               

                <div className="side"> 
                        <section> Total Sales: </section> <br/>
                        <section> Total Commission:</section>
                          
                    
                </div>
                


           </div>
        
            



           </div>
    
       <Footer />
        </div>
    )
}

export default Admin;
