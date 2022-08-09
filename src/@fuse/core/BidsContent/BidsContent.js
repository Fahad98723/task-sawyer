

import React, { useCallback, useMemo,useState,memo, useEffect } from 'react';
// import { useDispatch } from 'react-redux';

import { setTableData } from 'app/store/fuse/navbarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavigation } from 'app/store/fuse/navigationSlice';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import history from '@history';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function BidsContent() {
  const [rowData, setRowData] = useState();
  const dispatch = useDispatch()
const [columnDefs] = useState([
{ headerName:'id', field: 'bid.id', rowDrag: true ,sortable: true, },
{headerName:'Reference Number', field: 'bid.referenceNnumber',sortable: true },
{headerName:'Part Number', field: 'bid.part.partNumber',sortable: true },
{ headerName:'Description', field: 'bid.part.description',sortable: true},
{ headerName:'Quantity', field: 'bid.quantity' ,sortable: true},
{  headerName:'Name', field: 'bid.unit.name' ,sortable: true},
{ headerName:'Primary Remark', field: 'bid.primaryRemark',sortable: true },
{ headerName:'Secondary Remark', field: 'bid.secondaryRemark',sortable: true },
{ headerName:'NSN', field: 'bid.nsn',editable: true,sortable: true },
{ headerName:'Priority', field: 'bid.priority',sortable: true },
{ headerName:'My Ref Count', field: 'bid.myRefCount',sortable: true },
{ headerName:'Status', field: 'bid.status' ,sortable: true},
{ headerName:'Type', field: 'bid.type',sortable: true },
{ headerName:'Comment', field: 'bid.comment',editable: true,sortable: true },
{ headerName:'End User', field: 'bid.endUser' ,sortable: true},
{ headerName:'Post Date', field: 'postDate',sortable: true },
{ headerName:'Application', field: 'application',sortable: true },
{ headerName:'Buyer', field: 'buyer' ,sortable: true},
{ headerName:'End Date', field: 'endDate' ,sortable: true},
{ headerName:'Count By Part No', field: 'countByPartNo',sortable: true },
{ headerName:'Count By Req No', field: 'countByReqNo',sortable: true },
{ headerName:'Tags', Tags: 'tags' , editable: true,sortable: true},
]);
// const [columnDefs, setColumnDefs] = useState([
//     { field: 'athlete', rowDrag: true },
//     { field: 'country' },
//     { field: 'year', width: 100 },
//     { field: 'date' },
//     { field: 'sport' },
//     { field: 'gold' },
//     { field: 'silver' },
//     { field: 'bronze' },
//   ]);


// const defaultColDef = useMemo(() => {
//   return {
//     width: '100%',
//     sortable: true,
//     filter: true,
//   };
// }, []);

const onGridReady = useCallback((params) => {
fetch('https://api.mocki.io/v2/fda114b9')
  .then((resp) => resp.json())
  .then((data) => {
      console.log(data);
      setRowData(data)
  });
}, []);

// const onGridReady = useCallback((params) => {
//   fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
//     .then((resp) => resp.json())
//     .then((data) => {
//         console.log(data);
//         setRowData(data)
//     });
// }, []);



const cellClicked = (params) => {
  // params.node.setSelected(true)
  console.log(params);
  if (params.colDef.headerName === 'NSN' || params.colDef.headerName === 'Comment' || params.colDef.headerName === 'Tags' ) {
    return;
  }
  else{
    dispatch(setTableData(params.data.bid.currentCompany));
    history.push('/bidsId')
  }  
}
  return (
    <div>
      
      <div className="ag-theme-alpine" style={{height: 400, width: 1300}}>
           <AgGridReact
           style={{ width: '100%', height: '100%;' }}
               rowData={rowData}
               columnDefs={columnDefs}
               onCellClicked={cellClicked}
               rowDragManaged={true}
               animateRows={true}
               onGridReady={onGridReady}>
           </AgGridReact>
       </div>
    </div>
  );
}

export default memo(BidsContent);
