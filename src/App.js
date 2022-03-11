import React, {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// IMPORT COMPONENTS
import {NavBar, NavItem} from './Layout/navigation'
import TopBanner from './sections/topBanner'
import MajorSection from './sections/major_section';
import RollOrBagSection from './sections/roll_or_bag'
import Raws from './sections/raw'
import OtherMaterials from './sections/other_material'
import DirectIndirectCost from './sections/directIndirect_cost'
import FinalResult from './sections/final_Result'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const App = () => {
    // navigation 
    const [calculate, setCalculate] =useState(false);

    // for major section 
    const [porductName, setProductName] = React.useState("");
    const [structure, setStructure] = React.useState([]);
    const [productSize, setProductSize] = React.useState("");
    
    
    const [rollQty, setRollQty] = React.useState(0);
    // const [inkName, setInkName] = React.useState("");
    // const [inkPrice, setInkPrice] = React.useState("");
    // const [inkQty, setInkQty] = React.useState("");

    // variables for raw section 
    const [newInkRow, setInkNewRow] = useState([]);
    const [newGlueRow, setGlueNewRow] = useState([]);
    const [newThinnerRow, setThinnerNewRow] = useState([]);
    const [newFilmRow, setFilmNewRow] = useState([]);
    const [newResinRow, setResinNewRow] = useState([]);

    // variables for other materials section 
    let [core3Amount, setCore3Amount] = useState(0);
    let [core6Amount, setCore6Amount] = useState(0);
    let [TSAmount, setTSAmount] = useState(0);
    let [PVCGlueAmount, setPVCGlueAmount] = useState(0);
    let [PETGGlueAmount, setPETGGlueAmount] = useState(0);
    let [SSDSTAmount, setSSDSTAmount] = useState(0);
    let [LHAmount, setLHAmount]  = useState(0);
    let [CBAmount, setCBAmount]  = useState(0);
    let [SSRibbonAmount, setSSRibbonAmount] = useState(0);
    let [ZipperAmount, setZipperAmount] = useState(0);
    
    // variables for DirectCost and IndirectCost
    let [directCost, setDirectCost] = useState(0);
    let [inDirectCost, setIndirectCost] = useState(0);

    
    // Final Calculation
    const [rawTotal, setRawTotal] = useState(0);
    const [OtherMaterialsTotal, setOtherMaterialsTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [subTotal , setSubTotal] = useState(0);
    const [grandTotal , setGrandTotal] = useState(0);

    // const CalculateTotalRaw = () => {
        
    //     }

    useEffect(() => {
        let total = 0;
        newInkRow.forEach(element => {
        total += element.amount 
        });

        newGlueRow.forEach(element => {
        total += element.amount
        });

        newThinnerRow.forEach(element => {
        total += element.amount 
        });

        newFilmRow.forEach(element => {
        total += element.amount
        });

        newResinRow.forEach(element => {
        total += element.amount
        });

        setRawTotal(total);
        console.log("total");
        
    }, [newInkRow, newGlueRow, newThinnerRow, newFilmRow, newResinRow ]);

    useEffect(() => {
        let total = (Number(core3Amount) + Number(core6Amount) + Number(TSAmount) + Number(PVCGlueAmount) + Number(PETGGlueAmount) + Number(SSDSTAmount) + Number(LHAmount) + Number(CBAmount) + Number(SSRibbonAmount) + Number(ZipperAmount)).toFixed(2);
        setOtherMaterialsTotal(total);
        setTotal(Number(rawTotal) + Number(OtherMaterialsTotal) + Number(directCost) + Number(inDirectCost))
        console.log("effect");
      }, [core3Amount, core6Amount, TSAmount, PVCGlueAmount, PETGGlueAmount ,SSDSTAmount, LHAmount, CBAmount, SSRibbonAmount, ZipperAmount]);
    
    
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Item><TopBanner /></Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}> 
                            <Item><MajorSection porductName={porductName} setProductName={setProductName} 
                            structure={structure} setStructure={setStructure} 
                            productSize={productSize} setProductSize={setProductSize} 
                            /></Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={8}>
                            <Item><RollOrBagSection rollQty={rollQty} setRollQty={setRollQty} /></Item>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Item>
                                <Raws newInkRow={newInkRow} setInkNewRow={setInkNewRow}
                                newGlueRow={newGlueRow} setGlueNewRow={setGlueNewRow}
                                newThinnerRow={newThinnerRow} setThinnerNewRow={setThinnerNewRow}
                                newFilmRow={newFilmRow} setFilmNewRow={setFilmNewRow}
                                newResinRow={newResinRow} setResinNewRow={setResinNewRow}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Item>
                                <OtherMaterials rollQty={rollQty}
                                core3Amount={core3Amount} setCore3Amount={setCore3Amount}
                                core6Amount={core6Amount} setCore6Amount={setCore6Amount}
                                TSAmount={TSAmount} setTSAmount={setTSAmount}
                                PVCGlueAmount={PVCGlueAmount} setPVCGlueAmount={setPVCGlueAmount}
                                PETGGlueAmount={PETGGlueAmount} setPETGGlueAmount={setPETGGlueAmount}
                                SSDSTAmount={SSDSTAmount} setSSDSTAmount={setSSDSTAmount}
                                LHAmount={LHAmount} setLHAmount={setLHAmount}
                                CBAmount={CBAmount} setCBAmount={setCBAmount}
                                SSRibbonAmount={SSRibbonAmount} setSSRibbonAmount={setSSRibbonAmount}
                                ZipperAmount={ZipperAmount} setZipperAmount={setZipperAmount}
                                 />
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item>
                                <DirectIndirectCost 
                                    directCost={directCost} setDirectCost={setDirectCost}
                                    inDirectCost={inDirectCost} setIndirectCost={setIndirectCost}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item>
                                <FinalResult 
                                    directCost={directCost}
                                    inDirectCost={inDirectCost} 

                                    rawTotal={rawTotal} setRawTotal={setRawTotal}
                                    OtherMaterialsTotal={OtherMaterialsTotal} setOtherMaterialsTotal={setOtherMaterialsTotal}

                                    total={total} setTotal={setTotal}
                                    subTotal={subTotal} setSubTotal={setSubTotal}
                                    grandTotal={grandTotal} setGrandTotal={setGrandTotal}
                                />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <NavBar>
                <NavItem icon="😊">
                    Save
                </NavItem>
                <NavItem icon="😊">
                    <a href='#' id="use" className='icon-button'>
                        Calculate
                    </a>
                </NavItem>
                <NavItem icon="😊">
                    Clear
                </NavItem>
            </NavBar>
        </React.Fragment>
    )
}
  
export default App;
