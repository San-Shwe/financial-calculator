
const Main = () => {
        
    return (
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Item  className="btn-grad"><TopBanner/></Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}> 
                        <Item><MajorSection productName={productName} setProductName={setProductName} 
                        structure={structure} setStructure={setStructure} 
                        productSize={productSize} setProductSize={setProductSize} 
                        /></Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                        <Item><RollOrBagSection
                            meterPerRoll={meterPerRoll} setMeterPerRoll={setMeterPerRoll}
                            rollUp={rollUp} setRollUp={setRollUp}
                            rollMeter={rollMeter} setRollMeter={setRollMeter}
                            rollQty={rollQty} setRollQty={setRollQty}

                            meterOrPcs={meterOrPcs} setMeterOrPcs={setMeterOrPcs}
                            cuttinglength={cuttinglength} setCuttingLength={setCuttingLength}
                            bagUp={bagUp} setBagUp={setBagUp}
                            bagQty={bagQty} setBagQty={setBagQty}
                            isMeter={isMeter} setIsMeter={setIsMeter}
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
    );
}