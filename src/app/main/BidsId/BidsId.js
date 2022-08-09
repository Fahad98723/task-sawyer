import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useSelector } from 'react-redux';


const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

function BidsPage(props) {
  const { t } = useTranslation('Bids Id Page');

  const {tabledata} = useSelector((state) => state.fuse.navbar)

  console.log(tabledata);
  return (
    <Root
    //   header={
    //     <div className="p-24">
    //       <h4>{t('TITLE')}</h4>
    //     </div>
    //   }
      content={
        <div className="p-24">
          <h4>Data Showing By Click</h4>
          <br />
          <p>Id : {tabledata?.id}</p>
          <p>Name : {tabledata?.name}</p>
          <p>Comment : {tabledata?.comment}</p>
          <p>Cage : {tabledata?.cage}</p>
          <p>Comptype Id : {tabledata?.comType?.id}</p>
          <p>Comptype Name : { tabledata?.comType?.name}</p>
         
        </div>
      }
      scroll="content"
    />
  );
}

export default BidsPage;