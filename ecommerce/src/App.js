// import logo from './logo.svg';
import "./App.css";
import HeaderDesktop from "./components/header-navigation";

function App() {
  return (
    <div className="container-center-horizontal">
      <div className="category screen">
        <HeaderDesktop />
        <div className="flex-row">
          <div className="flex-col">
            <h1 className="title-1 valign-text-middle raleway-normal-eerie-black-42px">
              <span>
                <span className="raleway-normal-eerie-black-42px">
                  Category Name
                </span>
              </span>
            </h1>
            <ProductCardElementsDesktop overlapGroup="image-18.png" />
            <img
              className="product-card-desktop"
              src="product-card-desktop-1.png"
              alt="product-card-desktop-1"
            />
          </div>
          <div className="product-card-elements-desktop-container">
            <ProductCardElementsDesktop
              overlapGroup="image-17.png"
              className="product-card-elements-desktop-1"
            />
            <ProductCardElementsDesktop overlapGroup="image-18.png" />
          </div>
          <div className="product-card-elements-desktop-1">
            <div className="product-card-elements-desktop-3">
              <div className="overlap-group-1">
                <img
                  className="layout-spacer-base-1"
                  src="layout-spacer-base-16.png"
                  alt="layout-spacer-base-16"
                />
              </div>
              <Content2 />
            </div>
            <ProductCardElementsDesktop
              overlapGroup="image-9.png"
              className="products-card-elements-desktop"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCardElementsDesktop(props) {
  const { overlapGroup, className } = props;
  return (
    <div className={`product-card-elements-desktop-2${className || ""}`}>
      <div
        className="overlap-group"
        style={{ backgroundImage: `url(${overlapGroup})` }}
      >
        <img
          className="layout-spacer-base"
          src="layout-spacer-base-16.png"
          alt="layout-spacer-base-16"
        />
      </div>
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      <div className="title valign-text-middle raleway-light-eerie-black-18px">
        <span>
          <span className="raleway-light-eerie-black-16px">
            Apollo Running Shorts
          </span>
        </span>
      </div>
      <div className="label-4 raleway-medium-eerie-black-18px">
        <span className="raleway-medium-eerie-black-18px">$50.00</span>
      </div>
    </div>
  );
}

function Content2(props) {
  return (
    <div className="content-1">
      <div className="title-1 valign-text-middle raleway-light-manatee-18px">
        <span>
          <span className="raleway-light-manatee-18px">
            Apollo Running Shorts
          </span>
        </span>
      </div>
      <div className="label-5 raleway-medium-manatee-18px">
        <span className="raleway-medium-manatee-18px">$50.00</span>
      </div>
    </div>
  );
}

export default App;
