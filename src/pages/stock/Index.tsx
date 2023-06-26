import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import './Index.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import stockColumns from './ColumnDef';
import { useStock } from '../../hooks/useStock';
import { StockEntity } from '../../types/Stock.type';

export default function Stock() {

  const [stocks, setStock] = useState<StockEntity[]>([])
  const stocksQuery = useStock();
  useEffect(() => {
    setStock(stocksQuery.data as StockEntity[]);
  }, [stocksQuery]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);


  const [personName, setPersonName] = React.useState<string[]>([]);
  const theme = useTheme();
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const [age, setAge] = React.useState('');
  return (
    <>

      <div className="center">
        <div className="row">
          <Button className="right" color="primary" variant="contained" onClick={handleClickOpen}>+ Stock</Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Stock</DialogTitle>
            <DialogContent>
              {/* <DialogContentText>
                Register a Product Stock
              </DialogContentText> */}
              <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                <InputLabel id="demo-simple-select-label">Product</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Product"
                  onChange={handleChange}
                >
                  {/* <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
                  {stocks.map((stock) => (
                    <MenuItem
                      key={stock.product.id}
                      value={stock.product.name}
                    // style={getStyles(name, personName, theme)}
                    >
                      {stock.product.name}
                    </MenuItem>
                  ))}
                </Select>
                {/* <Select
                  // labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  label="Age"
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      // style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select> */}

                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Quantity"
                  type="number"
                  fullWidth
                  variant="standard"
                />
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Create</Button>
            </DialogActions>
          </Dialog>
        </div>

        <DataGrid
          rows={stocks}
          columns={stockColumns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}
