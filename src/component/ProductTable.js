import React from 'react'
import PropTypes from 'prop-types';

function ProductTable(props) {
    return (
   <div style={props.style1}>
     <table border ="1" style={props.style2}>
        <thead>
       <tr>
        <th style={props.style3}>Name</th>
        <th style={props.style3}>category</th>
        <th style={props.style3}>price</th>
       </tr>
       </thead>
       <tbody>
        {props.x.map(product=>
          <tr>
           <td>{product.name}</td>
           <td>{product.category}</td>
           <td>{product.price}</td>
          </tr> 
        )}
     </tbody>
     </table>
   </div>   
)
  }

  ProductTable.propTypes ={
    x:PropTypes.array
  };

export default ProductTable;
