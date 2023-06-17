import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

// Redux Store
import { showRightSidebarAction, toggleLeftmenu } from "../../store/actions";
// reactstrap
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Container,
} from "reactstrap";

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import megamenuImg from "../../assets/images/megamenu-img.png";
import logo from "../../assets/MSCS_LOGO.png";
import lion from "../../assets/lion.png";
import logoLight from "../../assets/images/logo-light.png";
import logoLightSvg from "../../assets/images/logo-light.svg";
import logoDark from "../../assets/images/logo-dark.png";

// import images
import github from "../../assets/images/brands/github.png";
import bitbucket from "../../assets/images/brands/bitbucket.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import slack from "../../assets/images/brands/slack.png";
import background from "../../assets/header-bg.png";

//i18n
import { withTranslation } from "react-i18next";

const Header = (props) => {
  const [menu, setMenu] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [socialDrp, setsocialDrp] = useState(false);

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
  return (
    <header
      id="page-topbar"
      style={{
        // backgroundImage: `url(${background})`,
        background: "#171941",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        boxShadow: "none",
        // backgroundSize: "",
      }}
    >
      <div
        className="d-flex"
        style={{
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            gap: "18px",
            color: "#ffffff",
            alignItems: "center",
          }}
          className="d-none d-lg-flex"
        >
          <div
            style={{
              padding: "7px",
              borderRadius: "7px",
              background: "#ffffff",
            }}
          >
            <img src={lion} alt="logo" height={90} />
          </div>

          <div>
            <h2 style={{ color: "#ffffff", fontWeight: "bold" }}>
              Central Registrar for Cooperative Societies
            </h2>
            <h5 style={{ color: "#ffffff" }}>
              Ministry of Cooperation, Govt. of India
            </h5>
          </div>
        </div>

        <img src={logo} alt="logo" className="navbar-logo" />

        <button
          type="button"
          className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
          data-toggle="collapse"
          onClick={() => {
            props.toggleLeftmenu(!props.leftMenu);
          }}
          data-target="#topnav-menu-content"
        >
          <i className="fa fa-fw fa-bars" />
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  leftMenu: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
};

const mapStatetoProps = (state) => {
  const { layoutType, showRightSidebar, leftMenu } = state.Layout;
  return { layoutType, showRightSidebar, leftMenu };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
})(withTranslation()(Header));
