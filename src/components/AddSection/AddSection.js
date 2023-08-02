import React from "react";
import { useState } from "react";

import { Button, Box} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import "./AddSection.css";

import SuccessView from "./SuccessView";
import BasicPopover from "./PopupOver";
import SearchField from "./SearchField";



const useStyles = makeStyles({
  heading: {
    width: "286px",
    // height: "18px",
    paddingLeft: 16,
    paddingTop: 16,
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "18px",
    color: "#FFFFFF",
    textAlign: "start",
  },
  listDataContainer: {
    paddingLeft: 0,
    maxHeight: "190px",
    overflow: "auto",

    "&::-webkit-scrollbar": {
      width: "6px",
      height: "10px",
      backgroundColor: "#505767",
    },
    "&::-webkit-scrollbar-thumb": {
      height: "154px",
      borderRadius: "22px",
    },
  },
  snackBar: {
    borderRadius: "4px",
  },
  checkIcon: {
    color: "#ffffff",
    height: "14px",
    width: "14px",
  },
  alertBox: {
    display: "flex",
    alignItems: "center",
    width: "414px",
    height: "50px",
    gap: "10px",
    left: "calc(50% - 414px/2)",
    backgroundColor: "#00B196",
    "& .css-ptiqhd-MuiSvgIcon-root": {
      color: "#FFFFFF",
    },
  },

  container1: {
    marginTop: "16px !important",
  },
  gridItem: {
    display: "flex",
    alignItems: "start",
  },
  paragraph1: {
    width: "50%",
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "12px !important",
    lineHeight: "16px !important",
    color: "#626776 !important",
    minHeight: "16px",
  },
  paragraph2: {
    width: "50%",
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "12px !important",
    lineHeight: "16px !important",
    color: "#050E25 !important",
  },
  paragraph3: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "12px !important",
    lineHeight: "16px !important",
    //color: "#3874FF !important",
   
  },
  textField: {
    width: "50%",
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "16px !important",
    color: "#050E25 !important",
  },
});

const apiStatusConstants = {
  inital: "INTIAL",
  inProgress: "IN_PROGRESS",
  failure: "FAILURE",
  success: "SUCCESS",
};
const loadingView = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "302px",
      height: "247px",
    }}
  >
    <CircularProgress sx={{ width: "20px", height: "20px" }} />
  </Box>
);

const failureView = () => (
  <Box
    sx={{
      width: "302px",
      height: "247px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      src="https://res.cloudinary.com/duoqwzxmo/image/upload/v1685289673/2634442_fjpepr.jpg"
      alt="404"
      className="error-img"
    />
    <h1 className="no-result">No Result Found</h1>
    <p className="failure-msg">
      We cannot find the item you are searching, may be enter the correct value
    </p>
  </Box>
);
export default function FilterAndSort(  props) {
  const [listOfResults, setSearchListItems] = useState(props.myArray);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.success);

  const [openDialog, setOpenDialog] = React.useState(props.openDialog);
  const [checkedList, setCheckedList] = useState([]);
  const [isCheckboxClicked,setCheckboxClicked] = useState(false)
  const classes = useStyles();
console.log("==>",props.myArray)
console.log("==>",listOfResults)

  const handleSearchInputChange = (searchInput) => {
    console.log(searchInput)
    let filteredResults = props.myArray.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
    );
    console.log(filteredResults)
   
    setSearchListItems(filteredResults);
  };

  const handleSnackClick = () => {

    console.log("...",listOfResults)
    const checkedIds = []
    // console.log(checkedList)
      if (isCheckboxClicked){
        for (const key in checkedList) {
          if (checkedList[key].checked) {
            checkedIds.push(checkedList[key].id)
          }
        }
      }
      else{
        for (const key in listOfResults) {
          if (listOfResults[key].checked) {
            checkedIds.push(listOfResults[key].id)
          }
        }
      }
    props.handleData(checkedIds);
   
  };

  const handleAnyCheckboxClick = (status, newList) => {
    setCheckedList(newList);
    setCheckboxClicked(true)
    // setCheckboxClicked(true)
  };

  const renderAllViews = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return (
          <SuccessView
            listItems={listOfResults}
            handleAnyCheckboxClick={handleAnyCheckboxClick}
          />
        );
      case apiStatusConstants.failure:
        return failureView();
      case apiStatusConstants.inProgress:
        return loadingView();
      default:
        return null;
    }
  };

  return (
    <div style={{ position: "relative" }}>
    <div style={{ position: "fixed", bottom:"71px" , left:"1%" ,zIndex:'999' }}>

        <BasicPopover
          open={openDialog}
          setOpen={setOpenDialog}
          setOpenFilter={props.setOpenFilter}
          style={{height:"400px",width:"280px"}}
          ArrowPosition={"15px"}
          Arrow="bottom"
          anchorOrigin={{ vertical: "center", horizontal: "center" }}
        >
          <h1 className={classes.heading}>Filter by</h1>
        
            <>
              
              <ul className="search-list-container">
               
                  <SearchField
                    text={"Search....."}
                    // key={each.label}
                    // width={each.width}
                    handleSearchInputChange={handleSearchInputChange}
                  />
              
              </ul>
              <p className="results">{listOfResults.length} Results</p>
              {renderAllViews()}
            </>
      
          <div className="button-container">
            <Button
              variant="text"
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "12px",
                lineHeinght: "16px",
                textTransform: "none",
                color: "#3874FF",
              }}
            >
              Cancel
            </Button>
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeinght: "16px",
                  height: "24px",
                  textTransform: "none",
                }}
                onClick={handleSnackClick}
              >
                Apply
              </Button>
            
          </div>
        </BasicPopover>
      </div>
    </div>
  );
}
