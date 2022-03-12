import React, {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles'; //, createTheme, ThemeProvider 
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CalculateIcon from '@mui/icons-material/CalculateRounded';
import ClearAllIcon from '@mui/icons-material/ClearAllRounded';
import SaveIcon from '@mui/icons-material/SaveRounded';
import Button from '@mui/material/Button';

// IMPORT COMPONENTS
import {NavBar, NavItem} from './Layout/navigation';
import TopBanner from './sections/topBanner';
import MajorSection from './sections/major_section';
import RollOrBagSection from './sections/roll_or_bag';
import Raws from './sections/raw';
import OtherMaterials from './sections/other_material';
import DirectIndirectCost from './sections/directIndirect_cost';
import FinalResult from './sections/final_Result';
import twoDecimalPlacesIfCents from './Modules/global_module.mjs';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#282c34' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

// const darkTheme = createTheme({
//     palette: {
//         mode: 'light',
//     }, 
// });

const App = () => {
    // for major section 
    const [productName, setProductName] = React.useState("");
    const [structure, setStructure] = React.useState([]);
    const [productSize, setProductSize] = React.useState("");
    
    // for roll or bag section 
    const [rollQty, setRollQty] = React.useState(0);
    const [bagQty, setBagQty] = useState(0);

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

    // Save Raw to Local
    // const saveRawsToLocal = () => {
    //     localStorage.setItem('newInkRow', JSON.stringify(newInkRow));
    //     localStorage.setItem('newGlueRow', JSON.stringify(newGlueRow));
    //     localStorage.setItem('newThinnerRow', JSON.stringify(newThinnerRow));
    //     localStorage.setItem('newFilmRow', JSON.stringify(newFilmRow));
    //     localStorage.setItem('newResinRow', JSON.stringify(newResinRow));
    // };

    // Run Once when app start
    useEffect(() => {
        if(localStorage.getItem("newInkRow") === null){
            localStorage.setItem('newInkRow', JSON.stringify([]))
        }else{
            setInkNewRow(JSON.parse(localStorage.getItem('newInkRow')));
        }

        // get Glue Items from local storage
        if(localStorage.getItem("newGlueRow") === null){
            localStorage.setItem('newGlueRow', JSON.stringify([]))
        }else{
            setGlueNewRow(JSON.parse(localStorage.getItem('newGlueRow')));
        }

        if(localStorage.getItem("newThinnerRow") === null){
            localStorage.setItem('newThinnerRow', JSON.stringify([]))
        }else{
            setThinnerNewRow(JSON.parse(localStorage.getItem('newThinnerRow')));
        }

        if(localStorage.getItem("newResinRow") === null){
            localStorage.setItem('newResinRow', JSON.stringify([]))
        }else{
            setResinNewRow(JSON.parse(localStorage.getItem('newResinRow')));
        }

        if(localStorage.getItem("newFilmRow") === null){
            localStorage.setItem('newFilmRow', JSON.stringify([]))
        }else{
            setFilmNewRow(JSON.parse(localStorage.getItem('newFilmRow')));
        }

    }, []);
    
    // Use Effects For Sum of Raw 
    useEffect(() => {
        let total = 0;
        newInkRow.forEach(element => {
        total += Number(element.amount) 
        });

        newGlueRow.forEach(element => {
        total += Number(element.amount)
        });

        newThinnerRow.forEach(element => {
        total += Number(element.amount) 
        });

        newFilmRow.forEach(element => {
        total += Number(element.amount)
        });

        newResinRow.forEach(element => {
        total += Number(element.amount)
        });

        setRawTotal(twoDecimalPlacesIfCents(total));
        // saveRawsToLocal(); // save to local
        localStorage.setItem('newInkRow', JSON.stringify(newInkRow));
        localStorage.setItem('newGlueRow', JSON.stringify(newGlueRow));
        localStorage.setItem('newThinnerRow', JSON.stringify(newThinnerRow));
        localStorage.setItem('newFilmRow', JSON.stringify(newFilmRow));
        localStorage.setItem('newResinRow', JSON.stringify(newResinRow));

    }, [newInkRow, newGlueRow, newThinnerRow, newFilmRow, newResinRow ]);

    // useEffect hook for sum of other materials
    useEffect(() => {
        let total = Number(core3Amount) + Number(core6Amount) + Number(TSAmount) + Number(PVCGlueAmount) + Number(PETGGlueAmount) + Number(SSDSTAmount) + Number(LHAmount) + Number(CBAmount) + Number(SSRibbonAmount) + Number(ZipperAmount) + Number(directCost) + Number(inDirectCost) ;
        setOtherMaterialsTotal(twoDecimalPlacesIfCents(total)); // convert to 2 decimal and set to total
        setTotal(Number(rawTotal) + Number(OtherMaterialsTotal) + Number(directCost) + Number(inDirectCost));

        localStorage.setItem('newInkRow', JSON.stringify(newInkRow));
        localStorage.setItem('newGlueRow', JSON.stringify(newGlueRow));
        localStorage.setItem('newThinnerRow', JSON.stringify(newThinnerRow));
        localStorage.setItem('newFilmRow', JSON.stringify(newFilmRow));
        localStorage.setItem('newResinRow', JSON.stringify(newResinRow));

    }, [newInkRow, newGlueRow, newThinnerRow, newFilmRow, rawTotal, newResinRow, OtherMaterialsTotal, subTotal, grandTotal, core3Amount, core6Amount, TSAmount, PVCGlueAmount, PETGGlueAmount ,SSDSTAmount, LHAmount, CBAmount, SSRibbonAmount, ZipperAmount, directCost, inDirectCost ]);
    

    return (
        // <ThemeProvider theme={darkTheme}>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Item><TopBanner /></Item>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}> 
                                <Item><MajorSection productName={productName} setProductName={setProductName} 
                                structure={structure} setStructure={setStructure} 
                                productSize={productSize} setProductSize={setProductSize} 
                                /></Item>
                            </Grid>
                            <Grid item xs={12} sm={6} md={8}>
                                <Item><RollOrBagSection
                                    rollQty={rollQty} setRollQty={setRollQty}
                                    bagQty={bagQty} setBagQty={setBagQty}
                                /></Item>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Item>
                                    <Raws 
                                        newInkRow={newInkRow} setInkNewRow={setInkNewRow}
                                        newGlueRow={newGlueRow} setGlueNewRow={setGlueNewRow}
                                        newThinnerRow={newThinnerRow} setThinnerNewRow={setThinnerNewRow}
                                        newFilmRow={newFilmRow} setFilmNewRow={setFilmNewRow}
                                        newResinRow={newResinRow} setResinNewRow={setResinNewRow}
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Item>
                                    <OtherMaterials 
                                        rollQty={rollQty}
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
                                        rollQty = {rollQty}
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
                        <Button className='icon-button' color="secondary" endIcon={<SaveIcon />} variant="contained">Save</Button>
                    </NavItem>
                    <NavItem icon="😊">
                        {/* <a href='#' id="use" > */}
                        <Button className='icon-button'  color="success" endIcon={<CalculateIcon />} variant="contained">Calculate</Button>
                        {/* </a> */}
                    </NavItem>
                    <NavItem icon="😊">
                        <Button className='icon-button'  color="warning" endIcon={<ClearAllIcon />} variant="contained">Clear</Button>
                    </NavItem>
                </NavBar>
            </React.Fragment>
        // </ThemeProvider>
    )
}
  
export default App;
