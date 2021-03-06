import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import "../App.css";

import { twoDecimalPlacesIfCents } from "../Modules/global_module.mjs";

export default function FinalResult({
  type,
  bagQty,
  rollQty,
  rawTotal,
  OtherMaterialsTotal,
  total,
  subTotal,
  grandTotal,
  setSubTotal,
  setGrandTotal,
  directCost,
  inDirectCost,
  wastagePercentValue,
  setWastagePercentValue,
  promotionPercentValue,
  setPromotionPercentValue,
}) {
  const wastageHandler = (e) => {
    setWastagePercentValue(e.target.value);
    setSubTotal((e.target.value * total) / 100);
  };

  const promotionHandler = (e) => {
    setPromotionPercentValue(e.target.value);
    setGrandTotal((e.target.value * (subTotal + total)) / 100);
  };

  // e=>

  useEffect(() => {
    document.getElementById("wastageAmount").innerText = "$".concat(
      twoDecimalPlacesIfCents((wastagePercentValue * total) / 100)
    );
    document.getElementById("promotionAmount").innerText = "$".concat(
      twoDecimalPlacesIfCents(
        (promotionPercentValue * (subTotal + total)) / 100
      )
    );
  }, [
    rollQty,
    rawTotal,
    OtherMaterialsTotal,
    total,
    subTotal,
    grandTotal,
    wastagePercentValue,
    promotionPercentValue,
  ]);

  return (
    <div>
      <ul className="cost_list">
        <li className="cost">
          <span className="cost_lable">Raw Cost : </span>
          <span className="cost_amount">${rawTotal} </span>
        </li>
        <li className="cost">
          <span className="cost_lable">Other Materials : </span>
          <span className="cost_amount">${OtherMaterialsTotal}</span>
        </li>
        <li className="cost">
          <span className="cost_lable">Direct Cost : </span>
          <span className="cost_amount">${directCost}</span>
        </li>
        <li className="cost">
          <span className="cost_lable">Indirect Cost : </span>
          <span className="cost_amount">${inDirectCost}</span>
        </li>
        <li className="cost">
          <span className="cost_lable">Total : </span>
          <span id="total" className="cost_amount">
            ${twoDecimalPlacesIfCents(total)}
          </span>
        </li>
        <li className="cost">
          <span className="cost_lable">Wastage % : </span>
          <TextField
            value={wastagePercentValue}
            onChange={wastageHandler}
            id="wastagePercent"
            size="small"
            color="secondary"
            label="%"
            variant="outlined"
            placeholder="0.0"
          />
          <span className="cost_amount" id="wastageAmount">
            $0
          </span>
        </li>
        <li className="cost">
          <span className="cost_lable">SubTotal : </span>
          <span className="cost_amount">
            ${twoDecimalPlacesIfCents(subTotal + total)}
          </span>
        </li>
        <li className="cost">
          <span className="cost_lable">Promotion % : </span>
          <TextField
            value={promotionPercentValue}
            onChange={promotionHandler}
            id="promotionPercent"
            size="small"
            color="secondary"
            label="%"
            variant="outlined"
            placeholder="0.0"
          />
          <span className="cost_amount" id="promotionAmount">
            $000
          </span>
          {/* ${twoDecimalPlacesIfCents(grandTotal)} */}
        </li>
        <li className="cost">
          <span className="cost_lable grand_total">GRAND TOTAL : </span>
          <span className="cost_amount">
            ${twoDecimalPlacesIfCents(subTotal + total - grandTotal)}
          </span>
        </li>
        <li className="cost">
          <span className="cost_lable per_unit">Per Unit: </span>
          <span className="cost_amount" id="perunit">
            $
            {twoDecimalPlacesIfCents(
              (subTotal + total) / (type !== "Bag" ? rollQty : bagQty)
            )}
          </span>
        </li>
        <br />
        <br />
        <br />
        <br />
        <br />
      </ul>
    </div>
  );
}
