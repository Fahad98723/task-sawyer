import FuseNavigation from '@fuse/core/FuseNavigation';
import clsx from 'clsx';
import { memo, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavigation } from 'app/store/fuse/navigationSlice';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { navbarCloseMobile } from 'app/store/fuse/navbarSlice';
import { Link } from 'react-router-dom';
import { fontSize } from '@mui/system';
import DownloadIcon from '@mui/icons-material/Download';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

function Navigation(props) {
  const navigation = useSelector(selectNavigation);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  const dispatch = useDispatch();
  const {navbardata} = useSelector((state) => state.fuse.navbar)
  
  const [data, setData] = useState([
    {
      link:'/example',
      name : 'Example',
      
    },
    {
      link:'/bids',
      name : 'Bids'
    }
  ])

  console.log(navbardata);

  useEffect(() => {
    if(navbardata === 'TACOM'){
      setData([
        {
          link:'/example',
          name : 'Upload',
          icon: <DownloadIcon/>,
        },
        {
          link:'/bids',
          name : 'Bids',
          icon:<LocalFireDepartmentIcon/>
        },
        {
          link:'/example',
          name : 'Bids Details',
          icon:<LocalFireDepartmentIcon/>
        },
        {
          link:'/bids',
          name : 'la',
          icon:<LocalFireDepartmentIcon/>

        },
        {
          link:'/example',
          name : 'Rfq',
          icon:<LocalFireDepartmentIcon/>
        },
        {
          link:'/bids',
          name : 'Qoutes',
          icon:<FormatQuoteIcon/>
        
        },
        {
          link:'/bids',
          name : 'Reports',
          icon:<ReportGmailerrorredIcon/>
        }
      ])
    }
    else{
      setData([
        {
          link:'/example',
          name : 'ba'
        },
        {
          link:'/bids',
          name : 'la'
        },
       
      ])
    }
  },[navbardata])
  return useMemo(() => {
    function handleItemClick(item) {
      if (isMobile) {
        dispatch(navbarCloseMobile());
      }
    }
 
    return (
      <div>
      <p style={{color:'white', marginBottom:'10px',marginLeft:'8px'}}>{navbardata}</p>
      {
        data.map((a) => 
     <div style={{marginBottom:'10px'}}>
       <Link style={{
        textDecoration:'none',
        color:'white',
        fontSize:'18px',
        textTransform:'uppercase',
        display:'flex',
      }} to={a.link}>
       <div style={{marginLeft:'10px'}}>
        {a.icon}
       </div>
        <p style={{marginLeft:'10px'}}>{a.name}</p>
        </Link>
     </div>
        )
      }
      </div>
    );
  }, [dispatch, isMobile, props.active, props.className,data, props.dense, props.layout]);
}

Navigation.defaultProps = {
  layout: 'vertical',
};

export default memo(Navigation);
