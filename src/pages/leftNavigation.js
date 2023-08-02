import React, { useState } from "react";

import {Drawer,Grid,List,ListItem,ListItemIcon,ListItemText,Typography, } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import {CssBaseline} from "@mui/material";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Divider } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AppsIcon from '@mui/icons-material/Apps';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ShareIcon from '@mui/icons-material/Share';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import DescriptionIcon from '@mui/icons-material/Description';
import { makeStyles } from "@mui/styles";

import checkbox from '../components/Images/checkbox.svg'
import checkboxChecked from '../components/Images/checkboxChecked.svg'
import sentinelFullLogo from '../components/Images/sentinelFullLogo.svg'
import sentinelLogo from '../components/Images/sentinelLogo.svg'
import user from '../components/Images/user.svg'
import addSection from '../components/Images/addSection.svg'


import FilterAndSort from "../components/AddSection/AddSection";
import SearchTextBox from "../components/AddSection/SearchInputBox";


const invoiceData =[
  {invNo:"A41984209"},
  {invNo:"A41984210"},
  {invNo:"A41984211"},
  {invNo:"A41984212"},
  {invNo:"A41984213"},
  {invNo:"A41984214"},
  {invNo:"A41984215"},
  {invNo:"A4198416"},
  {invNo:"A41984217"},
  {invNo:"A41984218"},
  {invNo:"A41984219"},
  {invNo:"A41984220"},
  {invNo:"A41984221"},
  {invNo:"A41984222"},
  {invNo:"A41984223"},
  {invNo:"A41984224"},
  {invNo:"A41984225"},
  {invNo:"A41984226"},
  {invNo:"A41984227"},
  {invNo:"A41984228"},
  {invNo:"A41984229"},
  {invNo:"A4198423"},
  {invNo:"A41984231"},
  {invNo:"A41984232"},
  {invNo:"A41984233"},
  {invNo:"A41984234"},
  {invNo:"A41984235"},
  {invNo:"A41984236"},
  ]


const useStyles = makeStyles((theme) => ({
  drawer: {
    "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
      marginRight: "21px ",
      // height:"90vh",
    },
  },
  drawerOpen: {
    width: "231px ",
    // height:"100vh",
    "& .MuiListItem-root":{
      width:"218px",
      height:"40px",
      padding:"8px"
      // marginLeft:"8px"
    },
    // transition:" width 0.5s",
    position: "relative !important",
    overflow: "hidden",
    // marginRight:"4px !important",
    whiteSpace: "nowrap",
    "& .css-cveggr-MuiListItemIcon-root": {
      minWidth: "36px",
    },
    "&::-webkit-scrollbar": {
      width: "6px",
      height: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#CDCFD3",
      height: "76.58px !important",
      borderRadius: "22px",
    },
    "& .MuiTypography-root": {
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "16px",
      color: "#626776",
      fontFamily:"inter"
    },
  },
  drawerClose: {
    width: "55px",
    // height:"100vh",
    // transition:" width 0.5s",
    overflow: "hidden",
    // marginRight:"4px !important",
    
    "& .MuiListItem-root":{
      width:"58px",
      height:"40px",
      padding:"8px"
      // marginLeft:"8px"
    },
    
    whiteSpace: "nowrap",
    "& .MuiSvgIcon-root": {
      fill: "white",
    },
    // "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper":{
    //   position:"relative",
    //   border:"1px solid red !important"
    // },
    "& .css-cveggr-MuiListItemIcon-root": {
      minWidth: "45px",
    },
    "&::-webkit-scrollbar": {
      width: "6px",
      height: "16px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#CDCFD3",
      // height: "76.58px !important",
      borderRadius: "22px",
    },
    "&::-webkit-scrollbar-track": {
      // height: "76.58px !important",
      borderRadius: "16px",
    },
    "& .MuiTypography-root": {
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "16px",	
      color: "#626776",
    },
  },

  arrow: {
    position: "fixed",
    left: "48px",
    top: "17px",
    background: "#FFFFFF",
    fill: "#626776 !important",
    boxShadow: "0px 0px 13px #EEEEF8",
    borderRadius: "19px",
    height: "24px !important",
    width: "24px !important",
  },
  arrow2: {
    position: "fixed",
    left: "226px",
    top: "16px",
    background: "#FFFFFF",
    fill: "#626776 !important",
    boxShadow: "0px 0px 13px #EEEEF8",
    borderRadius: "16px",
    height: "24px !important",
    width: "24px !important",
  },
  listItem: {
    "& .MuiSvgIcon-root": {
      fontSize: "30px",
    },
    "& .MuiTypography-root": {
      fontSize: "23px",
      fontWeight: "bold",
    },
  },
  
  typography:{
      fontSize:"12px !important",
      color:"#626776"
  },

  // inovice items
  invoices:{
    fontWeight:"600 !important",
    fontFamily:"Inter !important",
    fontSize:"14px !important",
    lineHeight:"18px !important",
    color:"#050E25 !important",
    marginLeft:"8px !important",
  },
  invDivider:{
    height: "20px !important",
    backgroundColor: "#EFF0F1",
    margin: "0px 8px 0px 8px !important",
  },
  invoiceFooterIcons:{
    height:"16px !important",
    width:"16px !important",
    marginRight:"16px",
    cursor:"pointer"
  },
  selectAll:{
    fontSize:"12px !important",
    color:"#3874FF",
    cursor:"pointer"
  },
  invoiceContainer:{
    overflowX:"hidden",
    // width:"221px",
    paddingRight:"8px !important",
    backgroundColor:"#FFFFFF",
    "&::-webkit-scrollbar": {
      width: "6px",
      height: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#CDCFD3",
      height: "76.58px !important",
      borderRadius: "22px",
    },
    "& .MuiTypography-root": {
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "16px",	
      color: "#626776",
    },
    '& .MuiListItem-root':{
      padding:"0px !important",
      marginLeft:"2px"
    }
  },
  
  invoiceContainer2:{
    overflowX:"hidden",
    overflowY:"auto",
    // width:"221px",
    // paddingRight:"8px !important",
    // backgroundColor:"#FFFFFF",
    "&::-webkit-scrollbar": {
      width: "6px",
      height: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#CDCFD3",
      height: "76.58px !important",
      borderRadius: "22px",
    },
    '& .MuiListItem-root':{
      padding:"0px !important",
      // marginLeft:"2px"
    },
    "& .MuiTypography-root": {
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "16px",	
      color: "#626776",
      fontFamily:"Inter !important"  
    },
    // '& .MuiListItem-root':{
    //   padding:"0px !important",
    //   marginLeft:"2px"
    // }
  },
  invoiceListItem:{
    height:"48px",
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    
  },
  invoiceItem:{
    height:"48px",
    // width:"208px !important",
    // marginTop:"16px !important",
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',  
  },
  checkbox:{
    padding:"0px !important",
    marginRight:"8px !important",
    marginLeft:"8px !important"
  },
  serialNo:{
    marginRight:"8px",
    // height:"16px"
  },
  addIcon:{
    cursor:"pointer",
    height:"12px !important",
    width:"12px !important",
    position:"absolute"
  },
  deleteInvoice:{
    height:"16px !important",
    width:"16px !important",
    cursor:"pointer"
  }
 
 
  
}));



const LeftNavigation = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [openInvoice,setOpenInvoice] = useState(false)
  const [data, setData] = useState(props.homeData?props.homeData:[]);
  const[filter,setOpenFilter] = useState(false)
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);


  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAddSection = ()=>{
    setOpenFilter(true)
}
const handleData = (sectionIds) => {
  const filteredAddData = data.map((add) => {
    if (sectionIds.includes(add.id)){
        add.checked=true
    }
    else if (add.id !== "jobDetails" && add.id !== "invoiceDetails"){
      add.checked = false
    }
    return add
  })
  setData(filteredAddData)
  setOpenFilter(false)
  
}

const handleOpenInvoice = ()=>{
  setOpenInvoice(true)
  setData(props.invoicesData?props.invoicesData:invoiceData)
}

const handleCloseInvoice = ()=>{
  setOpenInvoice(false)
  setData(props.homeData)
  
}

const handleSearch = userValue =>{
  console.log(typeof(userValue))
  console.log(invoiceData)
  const filteredInvData = invoiceData.filter((inv)=>(
    
    inv.invNo.includes(userValue)
  ))
  console.log(filteredInvData)
  setData(filteredInvData)
}

const handleCheckboxChange = (event, index) => {
    const checked = event.target.checked;
    const newSelectedItems = [...selectedItems];
    if (checked) {
      newSelectedItems.push(index);
    } else {
      const indexToRemove = newSelectedItems.indexOf(index);
      if (indexToRemove !== -1) {
        newSelectedItems.splice(indexToRemove, 1);
      }
  }
  setSelectedItems(newSelectedItems);
  const allSelected = newSelectedItems.length === data.length;
  setSelectAll(allSelected);
};

const handleSelectAll = () => {
  if (selectAll) {
    setSelectedItems([]);
  } else {
    setSelectedItems([...Array(data.length).keys()]);
  }
  setSelectAll(!selectAll);
};

const handleDeleteInvoice = ()=>{
  const updatedData = data.filter((inv,index) => !selectedItems.includes(index))
  setData(updatedData)
  setSelectedItems([])
}

const handleAddItem =(event,index) => {
  let initialSqNo = 0
  data.filter(invSq => invSq.sqNo >= initialSqNo ? (initialSqNo = invSq.sqNo, true) : false);
  const newItem =  {invNo:"Untitled - "+(initialSqNo+1),sqNo:initialSqNo+1}
  const updatedData = [...data]
  updatedData.splice(index+1,0,newItem) 
  setData(updatedData)
}

  return (
    <Grid>
      <CssBaseline />
      <Drawer variant="permanent" 
      className={classes.drawer}
      >
        <List
          style={{paddingBottom: "0.5rem",marginLeft:"8px", display: "flex", flexDirection: "column", }}
          className={open ? classes.drawerOpen : classes.drawerClose}
        >
          <ListItem key="sentinel-logo">
            <ListItemIcon>
             {open? <img src={sentinelFullLogo} alt="Sentinel"/>: <img src={sentinelLogo} alt="Sentinel"/>} 
            </ListItemIcon>
            
            {open ? (
              <ChevronLeftOutlinedIcon
                onClick={handleDrawerClose}
                className={classes.arrow2}
              />
            ) : (
              <ChevronRightOutlinedIcon
                onClick={handleDrawerOpen}
                className={classes.arrow}
              />
            )}
          </ListItem>
        </List>
        {!openInvoice? <List
          style={{paddingBottom: "0px",paddingTop:"0px",overflowY: "auto",display: "flex",flexDirection: "column",width:open?"228px":"51px",flex: 1,marginLeft:"8px"}}
          className={open ? classes.drawerOpen : classes.drawerClose}
         >
          {data.map((item) => {
            if (item.name === "Invoice Details"  && open===true) {
              return (
                <ListItem key={item.name} style={{marginBottom:"8px"}}>
                  <ListItemIcon style={{minWidth:"24px",marginRight:"8px"}}>
                    <DescriptionIcon style={{ fill: "#92E5FF" }} />
                  </ListItemIcon>
                  <ListItemText >{item.name}</ListItemText>
                  <ArrowRightIcon style={{ fill: "#323232",cursor:"pointer"}} onClick={handleOpenInvoice} /> 
                </ListItem>
              );
            } else {
              return (
                (open && item.checked)?
                <ListItem button key={item.name} style={{marginBottom:"8px"}}>
                  <ListItemIcon style={{minWidth:"24px",marginRight:"8px"}}>  <img src={item.icon} /> </ListItemIcon>
                  <ListItemText>{item.name}</ListItemText>
                </ListItem>:
                item.checked &&
                <ListItem style={{width:"40px",height:"40px",marginBottom:"8px"}}>
                <ListItemIcon style={{minWidth:"24px"}}> <img src={item.icon}/> </ListItemIcon> 
                </ListItem>
              );
            }
          })}
        </List>: open?
        <Grid style={{overflow:"hidden",display: "flex",flexDirection: "column",flex: 1,width:open?"235px":"60px"}}>
          <Grid style={{display:"flex",alignItems:"center",marginLeft:"16px",minHeight:"40px",width:"208px"}}>
              <ChevronLeftOutlinedIcon  onClick={handleCloseInvoice} style={{cursor:"pointer",}} />
              <Typography className={classes.invoices}>Invoices (8)</Typography>
          </Grid>
        <Grid style={{margin:"7px 0px 17px 16px"}}>
         <SearchTextBox handleSearchInputChange = {handleSearch}  width={"208px"} dropDown={true} text={"Enter No."}/> {/* */}
        </Grid>
         <List className={classes.invoiceContainer2} style={{paddingTop:"1px",paddingBottom:"0px",marginLeft:"14px"}}>
        
  {data.map((item, index) => (
    <>
        <ListItem style={{width:"208px",marginLeft:"2px"}} className={classes.invoiceListItem} key={item.invNo}
         onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}
        >
           <Checkbox
                icon={ <img src={checkbox} alt={"checkbox"}/>} checkedIcon={ <img src={checkboxChecked} alt={"checkbox"}/>} 
                checked={selectedItems.includes(index)}
                onChange={(event) => handleCheckboxChange(event, index)}
                className={classes.checkbox}
              />
              
              <ListItemText><span className={classes.serialNo}>{index + 1}.</span>{item.invNo}</ListItemText>
        </ListItem>
            <Grid item xs={12} style={{height:"16px",width:"208px",display: "flex", justifyContent:"center",alignItems:"center",marginLeft:"2px" }}
                onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}
            >
            {hoveredIndex === index &&  <Divider sx={{width:"203px",backgroundColor:"blue",}}/>}
            {hoveredIndex === index && <AddIcon className={classes.addIcon} onClick={(event) => handleAddItem(event, index)} />}
            </Grid>
        </>
        ))}
      </List>
        </Grid>:<List className={classes.invoiceContainer2} style={{width:"51px",marginLeft:"8px",paddingTop:"0px",paddingBottom:"0px",marginTop:"12px",flex:1}}>
          {data.map((item,index)=>(
            <ListItem style={{height:"40px",width:"40px",marginBottom:"8px"}} key={item.invNo}>
              <ListItemText style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{index<9?"0"+(index+1):index+1}</ListItemText>
            </ListItem>
          ))}
        </List>
        }
      
       
       {!openInvoice? <List
          style={{paddingBottom:"0px",paddingTop:"0px",marginLeft:"8px",marginTop:"24px", display: "flex", flexDirection: "column",width:open?"225px":"51px"}}
          className={open ? classes.drawerOpen : classes.drawerClose}
        >
          <ListItem style={{borderTop:"1px solid #EFF0F1",cursor:"pointer"}} onClick={handleAddSection} key="add-section">
            <ListItemIcon>
            <img src={addSection} alt="add Section"/>
            </ListItemIcon>
            {open && <ListItemText>Add Sections</ListItemText>}
            {filter && 
             <FilterAndSort
              myArray={data}
              addFieldsTrue={true}
              openDialog={true}
              setOpenFilter={setOpenFilter}
              handleData={handleData}
            />}

          </ListItem>
        </List>
        :
       open?
       <Grid
          style={{ paddingTop: "17px",paddingBottom:"16px",paddingLeft: "16px", display: "flex", flexDirection: "column", borderTop:"1px solid #EFF0F1"}}  
          >
        <Grid style={{display:"flex",fontSize:"12px",alignItems:"center"}}>
          {selectAll? <Typography className={classes.selectAll} 
          onClick={handleSelectAll}
          >UnSelect All</Typography>
          : 
          <Typography className={classes.selectAll} 
          onClick={handleSelectAll}
          >Select All</Typography>}
         
          <Divider orientation="vertical" className={classes.invDivider}/>
          <ErrorOutlineIcon style={{height:"12px",width:"12px",marginRight:"4px"}} />
          <Typography className={classes.typography}>Selected {selectedItems.length} Invoices</Typography>
        </Grid>
        <Grid style={{marginTop:"16px",width:"190px",display:"flex",alignItems:"center",height:"20px"}}>
          <AppsIcon className={classes.invoiceFooterIcons}/>
          <AutoFixHighIcon className={classes.invoiceFooterIcons}/>
          <LibraryAddIcon className={classes.invoiceFooterIcons}/>
          <ShareIcon className={classes.invoiceFooterIcons}/>
          <DeleteOutlineIcon className={classes.deleteInvoice}
           onClick={handleDeleteInvoice}
            />
        </Grid>
          </Grid>
          :
          <Grid style={{width:"40px",height:"40px",marginLeft:"8px",display:"flex",justifyContent:"center",marginTop:"8px"}}>
            <img src={user} alt="user"/>
          </Grid>
        }
      </Drawer>
    </Grid>
  );
}

export default LeftNavigation;
