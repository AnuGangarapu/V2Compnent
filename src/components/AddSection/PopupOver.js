import React from 'react';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import styled from "styled-components";

export const TopArrowDialogBox = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: #050e25;
  position: relative;
  top: 20px;
  cursor: pointer;
  border-radius: 10px;

  &:before {
    content: "";
    position: absolute;
    top: -12px;
    left: ${(props) => props.ArrowPosition};
    height: 15px;
    width: 15px;
    background-color: #050e25;
    box-sizing: border-box;
    transform: rotate(225deg) translate(-50%);
    border-bottom: inherit;
    border-right: inherit;
    box-shadow: inherit;
  }
`;
export const BottomArrowDialogBox = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: #050e25;
  position: relative;
  top: 20px;
  cursor: pointer;
  border-radius: 10px;

  &:before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: ${(props) => props.ArrowPosition};
    height: 15px;
    width: 15px;
    background-color: #050e25;
    box-sizing: border-box;
    transform: rotate(225deg) translate(-50%);
    border-bottom: inherit;
    border-right: inherit;
    box-shadow: inherit;
  }
`;



export default function BasicPopover(props) {
  const { open, setOpen, style , ArrowPosition , Arrow } = props;
  const handleClose = () => {
    setOpen(false);
    props.setOpenFilter(false)
  };

  return (
    <div>
      {open && (
        <ClickAwayListener onClickAway={handleClose}>
          {Arrow==="top" ? <TopArrowDialogBox style={style} ArrowPosition={ArrowPosition}>
            {props.children}
          </TopArrowDialogBox> : <BottomArrowDialogBox style={style} ArrowPosition={ArrowPosition}>
            {props.children}
          </BottomArrowDialogBox>}
        </ClickAwayListener>
      )}
    </div>
  );
}
