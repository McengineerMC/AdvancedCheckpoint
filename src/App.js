import React from 'react';
import ProductTable from './component/ProductTable';


const products =[
  {price:"$300",name:"Phone",category:"Electronics"},
  {price:"$100",name:"ti-shirt",category:"Clothes"},
  {price:"$100",name:"ti-shirt",category:"Clothes"},
  {price:"$300",name:"Phone",category:"Electronics"},
  {price:"$100",name:"ti-shirt",category:"Clothes"},
  {price:"$300",name:"Phone",category:"Electronics"},
  {price:"$100",name:"ti-shirt",category:"Clothes"},
  {price:"$100",name:"ti-shirt",category:"Clothes"},
  {price:"$100",name:"ti-shirt",category:"Clothes"},
  {price:"$100",name:"ti-shirt",category:"Clothes"},
  {price:"$100",name:"ti-shirt",category:"Clothes"},
  {price:"$100",name:"ti-shirt",category:"Clothes"},
  {price:"$300",name:"Phone",category:"Electronics"},
  {price:"$100",name:"ti-shirt",category:"Clothes"},
  {price:"$100",name:"ti-shirt",category:"Clothes"},
  {price:"$100",name:"ti-shirt",category:"Clothes"},
  {price:"$300",name:"Phone",category:"Electronics"},
  {price:"$100",name:"ti-shirt",category:"Clothes"},
  {price:"$100",name:"ti-shirt",category:"Clothes"},
  {price:"$100",name:"ti-shirt",category:"Clothes"},
  {price:"$300",name:"Phone",category:"Electronics"}
];

function App() {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"}}>
      <h1 style={{fontFamily:"Arial, Helvetica, sans-serif",fontStyle:"italic",fontSize:"50px"}}>Products</h1>
      <ProductTable x={products}/>
    </div>
  );
}

export default App;
