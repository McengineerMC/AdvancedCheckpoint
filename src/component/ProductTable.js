import React from 'react'
import PropTypes from 'prop-types';

function ProductTable(props) {
    return (
   <div style={{backgroundColor:"#8f9091",display:"flex",justifyContent:"center",border: "1px solid",width:"600px",padding:"15px"}}>
     <table border ="1" width = "500px" style={{textAlign:"center",backgroundColor:"white"}} >
        <thead>
       <tr>
        <th style={{fontFamily:"Arial, Helvetica, sans-serif",fontStyle:"italic",fontSize:"25px"}}>Name</th>
        <th style={{fontFamily:"Arial, Helvetica, sans-serif",fontStyle:"italic",fontSize:"25px"}}>category</th>
        <th style={{fontFamily:"Arial, Helvetica, sans-serif",fontStyle:"italic",fontSize:"25px"}}>price</th>
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
