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

const style1= {
  backgroundColor:"#8f9091",
  display:"flex",
  justifyContent:"center",
  border: "1px solid",
  width:"600px",
  padding:"15px"
}
const style2= {
width:"500px",
textAlign:"center",
backgroundColor:"white"
}
const style3={fontFamily:"Arial, Helvetica, sans-serif",
fontStyle:"italic",
fontSize:"25px"
}
const style4={display:"flex",
flexDirection:"column",
alignItems:"center",
padding:"20px"
}
const style5={fontFamily:"Arial, Helvetica, sans-serif",
fontStyle:"italic",
fontSize:"50px"
}


function App() {
  return (
    <div style={style4}>
      <h1 style={style5}>Products</h1>
      <ProductTable x={products} style1={style1} style2={style2} style3={style3}/>
    </div>
  );
}

export default App;
