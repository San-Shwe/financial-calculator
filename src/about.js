import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import BackspaceIcon from "@mui/icons-material/Backspace";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const columns = [
  { id: "id", label: "ID", minWidth: 20 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "type", label: "Type", minWidth: 20 },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "right",
    format: (value) =>
      value.getFullYear() +
      "-" +
      (value.getMonth() + 1) +
      "-" +
      value.getDate(),
  },
  {
    id: "product_size",
    label: "Product Size",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "view",
    label: "View",
    minWidth: 70,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "delete",
    label: "Delete",
    minWidth: 70,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

export default function StickyHeadTable({
  setProductName,
  setStructure,
  setProductSize,
  setRollQty,
  setBagQty,
  setInkNewRow,
  setGlueNewRow,
  setThinnerNewRow,
  setFilmNewRow,
  setResinNewRow,
  setCore3Amount,
  setCore6Amount,
  setTSAmount,
  setPVCGlueAmount,
  setPETGGlueAmount,
  setSSDSTAmount,
  setLHAmount,
  setCBAmount,
  setSSRibbonAmount,
  setZipperAmount,
  setDirectCost,
  setIndirectCost,
  setRawTotal,
  setOtherMaterialsTotal,
  setTotal,
  setSubTotal,
  setGrandTotal,
  setWastagePercentValue,
  setPromotionPercentValue,
  setViewSaved,
  viewSaved,
  setType,
}) {
  const [rows, setRows] = useState([]);

  // bind Order data on load
  useEffect(() => {
    if (localStorage.getItem("order") === null) {
      localStorage.setItem("order", JSON.stringify([]));
    } else {
      setRows(JSON.parse(localStorage.getItem("order")));
    }
  }, []);

  // mui pagination --------------------------------------
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // ----------------------------------

  //   view record when click book icon
  const viewRecordHandler = (id) => {
    let array = rows.filter((rec) => rec.id === id);
    setProductName(array[0].name);
    setStructure(array[0].structure_id);
    setProductSize(array[0].product_size);

    setRollQty(array[0]["RollForm"].rollQty); // left 4

    setBagQty(array[0]["BagForm"].bagQty); // left 4

    setInkNewRow(array[0]["raws"].ink);
    setGlueNewRow(array[0]["raws"].glue);
    setThinnerNewRow(array[0]["raws"].thinner);
    setFilmNewRow(array[0]["raws"].film);
    setResinNewRow(array[0]["raws"].resin);

    // assign to other materials
    setCore3Amount(array[0]["otherMaterials"]["RollForm"].core3Amount);
    setCore6Amount(array[0]["otherMaterials"]["RollForm"].core6Amount);
    setTSAmount(array[0]["otherMaterials"]["TSDST"].TSAmount);
    setPVCGlueAmount(array[0]["otherMaterials"]["TCS"].PVCGlueAmount);
    setPETGGlueAmount(array[0]["otherMaterials"]["TCS"].PETGGlueAmount);
    setSSDSTAmount(array[0]["otherMaterials"]["SS"].SSDSTAmount);
    setLHAmount(array[0]["otherMaterials"]["SS"].LHAmount);
    setCBAmount(array[0]["otherMaterials"]["SS"].CBAmount);
    setSSRibbonAmount(array[0]["otherMaterials"]["SS"].SSRibbonAmount);
    setZipperAmount(array[0]["otherMaterials"]["FourSSZipper"].ZipperAmount);

    setDirectCost(array[0].directCost);
    setIndirectCost(array[0].inDirectCost);

    setWastagePercentValue(array[0].wastagePercentValue);
    setPromotionPercentValue(array[0].promotionPercentValue);
    setRawTotal(array[0].rawTotal);
    setOtherMaterialsTotal(array[0].OtherMaterialsTotal);
    setTotal(array[0].total);
    setSubTotal(array[0].subTotal);
    setGrandTotal(array[0].grandTotal);
    setType(array[0].type);

    window.history.back();
    setViewSaved(!viewSaved);
  };

  //   remove record fomm local storage and rows
  const removeRecordHandler = (id) => {
    // if (window.confirm("Press a button!")) {

    setDeleteId(id);
    setOpen(true);
    // } else {
    // window.alert("sometext");
    // }
  };

  const DeleteConfirm = () => {
    setRows(rows.filter((rec) => rec.id !== deleteId));
    localStorage.setItem(
      "order",
      JSON.stringify(rows.filter((rec) => rec.id !== deleteId))
    );
  };
  //
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const AlertDialog = ({ open, setOpen }) => {
    const handleConfirm = () => {
      setOpen(false);
      DeleteConfirm();
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Box"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to Delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleConfirm} autoFocus>
            Yes, I'm sure
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        <TableCell component="td" scope="row">
                          {/* sum +1 for id number */}
                          {rows.findIndex((obj) => obj.id === row.id) + 1}
                        </TableCell>
                        <TableCell component="td" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell component="td" scope="row">
                          {row.type}
                        </TableCell>
                        <TableCell component="td" scope="row" align="right">
                          {row.date}
                        </TableCell>
                        <TableCell component="td" scope="row" align="right">
                          {row.product_size}
                        </TableCell>
                        <TableCell component="td" scope="row" align="center">
                          <ImportContactsIcon
                            onClick={(e) => viewRecordHandler(row.id)}
                            color="primary"
                            cursor="pointer"
                          />
                        </TableCell>
                        <TableCell component="td" scope="row" align="center">
                          <BackspaceIcon
                            onClick={(e) => removeRecordHandler(row.id)}
                            color="warning"
                            cursor="pointer"
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
      <AlertDialog open={open} setOpen={setOpen} />
    </Container>
  );
}
