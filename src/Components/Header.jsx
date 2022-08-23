import image from "../Images/header.jpg";
export default function Header() {
  return (
    <>
      <div className="Header">
        <img
          className="vh-100"
          src={image}
          width="100%"
          alt="header-image"
        ></img>
      </div>
    </>
  );
}
