import React from "react";
import Navigation from "../Navigation/Navigation";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Accord from "./Accord";

const Explorer = () => {
  return (
    <>
      <Navigation />
      <div className="explorer-container">
        <div className="first-aside">
          <div className="  dropdown-container-aside">
            {/*  <Dropdown>
              <DropdownToggle>Dropdown ejemplo</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Accion 1</DropdownItem>
                <DropdownItem>Accion 1</DropdownItem>
                <DropdownItem>Accion 1</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownToggle>Dropdown ejemplo</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Accion 1</DropdownItem>
                <DropdownItem>Accion 1</DropdownItem>
                <DropdownItem>Accion 1</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownToggle>Dropdown ejemplo</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Accion 1</DropdownItem>
                <DropdownItem>Accion 1</DropdownItem>
                <DropdownItem>Accion 1</DropdownItem>
              </DropdownMenu>
            </Dropdown> */}
            <Accord />
          </div>
        </div>
        <div class="explorer-mid"></div>
        <div class="second-aside"></div>
      </div>
    </>
  );
};

export default Explorer;
