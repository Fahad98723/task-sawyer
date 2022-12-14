import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import DemoContent from '@fuse/core/DemoContent';
import BidsContent from '@fuse/core/BidsContent';

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
  const { t } = useTranslation('Bids Page');

  return (
    <Root
    //   header={
    //     <div className="p-24">
    //       <h4>{t('TITLE')}</h4>
    //     </div>
    //   }
      content={
        <div className="p-24">
          <h4>Bids</h4>
          <br />
          <BidsContent />
        </div>
      }
      scroll="content"
    />
  );
}

export default BidsPage;