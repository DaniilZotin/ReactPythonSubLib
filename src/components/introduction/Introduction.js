import "./introduction.css";
import imgRel from './../../img/relation.jpg';

const Introduction = () => {





    return(
        <div className="container__intro">
            <div className="general">
                <div className="info__project">
                    <h1 className="title__project">Laboratory work 8</h1>
                    <h2 className="name__lander">Zotin Daniil</h2>
                </div>
                <div className="img__rel">
                    <img className="img__rel__property" src={imgRel}></img>
                </div>
            </div>
            
        </div>
    );
};

export default Introduction;