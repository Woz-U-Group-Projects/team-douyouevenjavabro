// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const CustomTableCell = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 700,
//   },
//   row: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
// });


// function CustomizedTable(props) {
//   const { classes } = props;

//   return (
//     <Paper className={classes.root}>
//       <Table className={classes.table}>
//         <TableHead>
//           <TableRow>
//             <CustomTableCell>Make</CustomTableCell>
//             <CustomTableCell align="right">Model</CustomTableCell>
//             <CustomTableCell align="right">Year</CustomTableCell>
//             <CustomTableCell align="right">Miles Per Day</CustomTableCell>            
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {vehicles.map(vehicle => (
//             <TableRow className={classes.row} key={vehicle.id}>
//               <CustomTableCell component="th" scope="row">{vehicle.make}</CustomTableCell>
//               <CustomTableCell align="right">{vehicle.model}</CustomTableCell>
//               <CustomTableCell align="right">{vehicle.releaseYear}</CustomTableCell>
//               <CustomTableCell align="right">{vehicle.milesPerDay}</CustomTableCell>             
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }

// CustomizedTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(CustomizedTable);