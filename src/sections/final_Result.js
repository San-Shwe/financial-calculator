import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import '../App.css';

export default function FinalResult({ rawTotal, OtherMaterialsTotal, total, subTotal, grandTotal, setOtherMaterialsTotal, setTotal, setSubTotal, setGrandTotal,  newInkRow, newGlueRow, newThinnerRow, newFilmRow, newResinRow, core3Amount, core6Amount, TSAmount, PVCGlueAmount, PETGGlueAmount ,SSDSTAmount, LHAmount, CBAmount, SSRibbonAmount, ZipperAmount, directCost, inDirectCost}) {

    return (
      <div>
        <ul className="cost_list">
          <li className='cost'>
            <span className="cost_lable">Raw Cost : </span>
            <span className="cost_amount">${rawTotal} </span>
          </li>
          <li className='cost'>
            <span className="cost_lable" >OtherMaterials : </span>
            <span className="cost_amount">${OtherMaterialsTotal}</span>
          </li>
          <li className='cost'>
            <span className="cost_lable">DirectCost : </span>
            <span className="cost_amount">${directCost}</span>
          </li>
          <li className='cost'>
            <span className="cost_lable">Indirect Cost : </span>
            <span className="cost_amount">${inDirectCost}</span>
          </li>
          <li className='cost'>
            <span className="cost_lable">Total : </span>
            <span id="total" className="cost_amount">${total}</span>
          </li>
          <li className='cost'>
            <span className="cost_lable">Wastage % : </span>
            <TextField onChange={e=> setSubTotal((e.target.value * total)/100)} id="rollmr" size="small" color="secondary" label="%" variant="outlined" placeholder='0.0'/>
            <span className="cost_amount" id="per_unit_amount">${subTotal}</span>
          </li>
          <li className='cost'>
            <span className="cost_lable">SubTotal : </span>
            <span className="cost_amount">${(subTotal + total).toFixed(2)}</span>
          </li>
          <li className='cost'>
            <span className="cost_lable">Promotion % : </span>
          <TextField onChange={e=> setGrandTotal((e.target.value * (subTotal + total))/100)} id="rollmr" size="small" color="secondary" label="%" variant="outlined" placeholder='0.0'/>
            <span className="cost_amount">${grandTotal}</span>
          </li>
          <li className='cost'>
            <span className="cost_lable grand_total">GRAND TOTAL : </span>
            <span className="cost_amount">${((subTotal + total) - grandTotal).toFixed(2)}</span>
          </li>
          <li className='cost'>
            <span className="cost_lable per_unit">Per Unit: </span>
            <span className="cost_amount">$0</span>
          </li>
        </ul>
      </div>
    );
  }