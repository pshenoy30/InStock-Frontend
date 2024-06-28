import Buttons from "../Buttons/Buttons";
import backImg from "../../assets/icons/arrow_back-24px.svg"
import "./EditNav.scss";

function EditNav({title, buttonText}) {
    return (
      <>
        <section className="editNav">
          <div className="editNav__card">
            <img src={backImg} alt="back button" className="editNav__img"/>
            <h1 className="editNav__title">{title}</h1>
          </div>
          <Buttons buttonName={buttonText} />
        </section>
      </>
    );
  }

export default EditNav;