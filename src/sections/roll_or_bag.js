import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { pink } from "@mui/material/colors";

const blue = {
  50: "#E8E8E8", // tab background when focus
  100: "#D82148",
  200: "#495464", //tab border
  300: "#495464",
  400: "#CCD1E4", //tab background when hover
  500: "#BBBFCA", //panel background
  600: "#495464", //text color when focus
  700: "#9B0000",
  800: "#9B0000",
  900: "#9B0000",
};

const Tab = styled(TabUnstyled)`
  color: "#B2B1B9";
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function UnstyledTabsCustomized({
  rollQty,
  setRollQty,
  bagQty,
  setBagQty,
  meterPerRoll,
  setMeterPerRoll,
  rollUp,
  setRollUp,
  rollMeter,
  setRollMeter,
  meterOrPcs,
  setMeterOrPcs,
  cuttinglength,
  setCuttingLength,
  bagUp,
  setBagUp,
  isMeter,
  setIsMeter,
  type,
  setType,
}) {
  const [tabValue, setTabValue] = useState(0);

  useEffect(
    (e) => {
      // document
      //   .getElementById("rollBagTab")
      //   .setAttribute("value", type === "Roll" ? 0 : 1);

      switch (type) {
        case "Roll":
          setTabValue(0);
          break;
        case "Bag":
          setTabValue(1);
          break;
        case "Kg":
          setTabValue(2);
          break;
        default:
        // code block
      }
      console.log(
        document.getElementById("rollBagTab").getAttribute("value"),
        type,
        tabValue
      );
    },
    [type]
  );

  const tabChangeHandler = (e, val) => {
    setTabValue(val);
  };

  const JRollHandler = (e) => {
    setRollUp(document.getElementById("rollup").value);
    setRollMeter(document.getElementById("rollmeter").value);
    setMeterPerRoll(document.getElementById("rollmr").value);
    setRollQty(
      parseFloat(
        (Number(document.getElementById("rollmeter").value) /
          Number(document.getElementById("rollmr").value)) *
          Number(document.getElementById("rollup").value)
      )
        .toFixed(2)
        .replace(/\.00$/, "")
    );
  };

  const ChooseHandler = (e) => {
    if (e.target.value === "pcs") {
      setBagQty(
        parseFloat(
          (Number(document.getElementById("meterOrpcs").value) /
            Number(document.getElementById("cuttinglength").value)) *
            Number(document.getElementById("bagup").value)
        )
          .toFixed(2)
          .replace(/\.00$/, "")
      );
      setIsMeter(false);
    } else {
      setBagQty(
        parseFloat(
          (Number(document.getElementById("meterOrpcs").value) /
            Number(document.getElementById("bagup").value)) *
            Number(document.getElementById("cuttinglength").value)
        )
          .toFixed(2)
          .replace(/\.00$/, "")
      );
      setIsMeter(true);
    }
  };

  const BagFormHandler = (e) => {
    setBagUp(document.getElementById("bagup").value);
    setMeterOrPcs(document.getElementById("meterOrpcs").value);
    setCuttingLength(document.getElementById("cuttinglength").value);
    setBagQty(
      parseFloat(
        (Number(document.getElementById("meterOrpcs").value) /
          Number(document.getElementById("cuttinglength").value)) *
          Number(document.getElementById("bagup").value)
      ).toFixed(2)
    );
  };

  return (
    <TabsUnstyled id="rollBagTab" value={tabValue} onChange={tabChangeHandler}>
      {/* value={type === "Roll" ? 0 : 1} */}
      <TabsList>
        <Tab onClick={(e) => setType("Roll")}>Roll Form</Tab>
        <Tab onClick={(e) => setType("Bag")}>Bag Form</Tab>
        <Tab onClick={(e) => setType("Kg")}>Kg Form</Tab>
      </TabsList>
      <TabPanel  value={0}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={0.5}
          sx={{ px: 2, py: 1, bgcolor: "background.default" }}
        >
          <TextField
            id="rollup"
            value={rollUp}
            onChange={JRollHandler}
            size="small"
            color="secondary"
            label="Up"
            variant="outlined"
          />
          <TextField
            id="rollmeter"
            value={rollMeter}
            onChange={JRollHandler}
            size="small"
            color="secondary"
            label="Meter"
            variant="outlined"
          />
          <TextField
            id="rollmr"
            value={meterPerRoll}
            onChange={JRollHandler}
            size="small"
            color="secondary"
            label="M/R"
            variant="outlined"
          />
          <Divider orientation="vertical" flexItem />
          <span style={{ padding: 10, fontWeight: "Bold" }}>
            {rollQty}
            <small>JRolls</small>
          </span>
        </Stack>
      </TabPanel>
      <TabPanel onClick={e=>setType("Bag")} value={1}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={0.5}
          sx={{ px: 2, py: 1, bgcolor: "background.default" }}
        >
          <TextField
            id="bagup"
            value={bagUp}
            onChange={BagFormHandler}
            size="small"
            color="secondary"
            label="Up"
            variant="outlined"
          />
          <TextField
            id="meterOrpcs"
            value={meterOrPcs}
            onChange={BagFormHandler}
            size="small"
            color="secondary"
            label="Meter Or Pcs"
            variant="outlined"
          />
          <TextField
            id="cuttinglength"
            value={cuttinglength}
            onChange={BagFormHandler}
            size="small"
            color="secondary"
            label="Cutting Length"
            variant="outlined"
          />
          <Divider color="primary" orientation="vertical" flexItem />
          <span style={{ padding: 10, fontWeight: "Bold" }}>{bagQty}</span>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            row
            // defaultValue= {(isMeter === true) ? "meter" : "pcs"}
            value={isMeter === true ? "meter" : "pcs"}
            name="radio-buttons-group"
            size="lg"
            direction="horizontal"
            onChange={ChooseHandler}
          >
            <FormControlLabel
              value="meter"
              control={
                <Radio
                  size="small"
                  sx={{
                    color: pink[800],
                    "&.Mui=checked": { color: pink[600] },
                  }}
                />
              }
              label="Meter"
            />
            <FormControlLabel
              value="pcs"
              control={
                <Radio
                  size="small"
                  sx={{
                    color: pink[800],
                    "&.Mui=checked": { color: pink[600] },
                  }}
                />
              }
              label="Pcs"
            />
          </RadioGroup>
        </Stack>
      </TabPanel>
      <TabPanel onClick={e=>setType("Kg")} value={2}>currently unavailable</TabPanel>
    </TabsUnstyled>
  );
}
