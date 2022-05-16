import React from "react";

function App(props) {
  return (
    <HeaderDesktop
      headerNavigationProps={headerDesktopData.headerNavigationProps}
    />
  );
}

export default App;

function HeaderDesktop(props) {
  const { headerNavigationProps } = props;
  return (
    <div className="header-desktop">
      <HeaderNavigation
        headerElementsDesktopButton1Props={
          headerNavigationProps.headerElementsDesktopButton1Props
        }
        headerElementsDesktopButton2Props={
          headerNavigationProps.headerElementsDesktopButton2Props
        }
      />
      <VSF />
      <Actions />
    </div>
  );
}

function HeaderNavigation(props) {
  const {
    headerElementsDesktopButton1Props,
    headerElementsDesktopButton2Props,
  } = props;
  return (
    <div className="header__navigation">
      <div className="header-elements-desktop-buttons">
        <div className="padding"></div>
        <div className="label">
          <div className="label-1 valign-text-middle raleway-semi-bold-emerald-16px">
            <span>
              <span className="raleway-semi-bold-emerald-16px">Women</span>
            </span>
          </div>
          <div className="border"></div>
        </div>
        <div className="padding"></div>
      </div>
      <HeaderElementsDesktopButtons>
        {headerElementsDesktopButton1Props.children}
      </HeaderElementsDesktopButtons>
      <HeaderElementsDesktopButtons
        className={headerElementsDesktopButton2Props.className}
      >
        {headerElementsDesktopButton2Props.children}
      </HeaderElementsDesktopButtons>
    </div>
  );
}

function HeaderElementsDesktopButtons(props) {
  const { children, className } = props;
  return (
    <div className={`header-elements-desktop-buttons-1 ${className || ""}`}>
      <div className="padding-1"></div>
      <div className="label-2">
        <div className="label-3 valign-text-middle raleway-normal-eerie-black-16px">
          <span>
            <span className="span raleway-normal-eerie-black-16px">
              {children}
            </span>
          </span>
        </div>
        <div className="border-1"></div>
      </div>
      <div className="padding-1"></div>
    </div>
  );
}

function VSF() {
  return (
    <div className="vsf">
      <div className="group">
        <div className="svg-container">
          <img
            className="brand-icon"
            src=".../public/brand-icon.png"
            alt="brand-icon"
          />
          <img className="cart" src=".../public/cart.png" alt="cart" />
        </div>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="actions">
      <img
        className="layout-spacer-xl"
        src=".../public/layout-spacer.png"
        alt="layout-spacer"
      />
      <div className="group-1">
        <div className="price-valign-text-bottom raleway-medium-eerie-black-18px">
          <span>
            <span className="raleway-medium-eerie-black-18px">$</span>
          </span>
        </div>
        <img
          className="dropdown"
          src=".../public/dropdown.png"
          alt="dropdown-vector"
        />
      </div>
      <IconEmptyCart />
    </div>
  );
}

function IconEmptyCart() {
  return (
    <div className="icon-empty-cart">
      <img className="cart" src=".../public/cart.png" alt="cart-icon" />
    </div>
  );
}

const headerElementsDesktopButton1Data = {
  children: "Men",
};

const headerElementsDesktopButton2Data = {
  children: "Kids",
  className: "header-elements-desktop-buttons-2",
};

const headerNavigationData = {
  headerElementsDesktopButton1Props: headerElementsDesktopButton1Data,
  headerElementsDesktopButton2Props: headerElementsDesktopButton2Data,
};

const headerDesktopData = {
  headerNavigationProps: headerNavigationData,
};