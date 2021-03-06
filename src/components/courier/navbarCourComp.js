import React from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import GifPlayer from "react-gif-player";
import logogif from "../../assets/img/Purwa Express.gif";
import logo from "../../assets/img/logo.png";
import "../../assets/css/style.css";
import logo1 from "../../assets/img/logo.gif";
import loginback from "../../assets/img/loginback.jpg";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authLogin, authLogout } from "../../actions";

class NavbarCourComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, modal: false };
  }

  onBtLogin = () => {
    this.props.authLogin(this.inputEmail.value, this.inputPassword.value);

    this.setState({ modal: false });
  };

  render() {
    return (
      <Navbar
        expand="md"
        style={{ backgroundColor: "rgb(247,190,103)" }}
        className="mb-3 my-navbar navbar-light"
      >
        <NavbarBrand href="/">
          {/* <GifPlayer gif={logo} style={{ width: "20%" }} autoplay={true} /> */}
          {/* <img src={logo} width="40%" alt="logo" /> */}
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen });
          }}
        />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink href="#">
                <Link className="d-flex pr-5" to="/">
                  <h5 style={{ color: "rgb(254,104,84)" }}>HOME</h5>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <Link className="d-flex pr-5" to="/input">
                  <h5 style={{ color: "rgb(254,104,84)" }}>INPUT PENGIRIMAN</h5>
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavItem style={{ listStyleType: "none" }}>
          {this.props.username ? (
            <UncontrolledDropdown>
              <DropdownToggle
                DropdownToggle
                nav
                caret
                style={{ color: "gray" }}
              >
                Hello, {this.props.username}
              </DropdownToggle>
              <DropdownMenu right>
                {this.props.idrole == 2 || this.props.idrole == 3 ? (
                  <>
                    <DropdownItem>Status Pengiriman</DropdownItem>
                  </>
                ) : (
                  <>
                    <DropdownItem>
                      <Link
                        to="/admin"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Pengiriman Baru
                      </Link>
                    </DropdownItem>
                    <DropdownItem>History Pengiriman</DropdownItem>
                  </>
                )}
                <DropdownItem divider />
                <DropdownItem onClick={this.props.authLogout}>
                  Sign Out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          ) : (
            <>
              <NavbarText>
                <a
                  className="btncustom"
                  onClick={() => {
                    this.setState({ modal: !this.state.modal });
                  }}
                >
                  LOGIN
                </a>
              </NavbarText>
              &nbsp;
              <NavbarText>
                <Link className="d-flex pr-5" to="/register">
                  <a className="btncustom d-fllex justify-content-center text-decoration-none align-items-center">
                    SIGNUP
                  </a>
                </Link>
              </NavbarText>
            </>
          )}
        </NavItem>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ usersReducer }) => {
  return {
    idrole: usersReducer.idrole,
    username: usersReducer.username,
  };
};

export default connect(mapStateToProps, { authLogin, authLogout })(
  NavbarCourComp
);
