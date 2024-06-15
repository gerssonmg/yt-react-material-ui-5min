import './style.css';
import logo from './images/logo.png';
import chip from './images/chip.png';

const CardReactCSS = () => {
    return (


        <div className="containerUI">
            <header>
                <span className="logoUI">
                    <img src={logo} alt="Logo" />
                    <h5>Master Card</h5>
                </span>
                <img src={chip} alt="Chip" className="chipUI" />
            </header>

            <div className="card-detailsUI">
                <div className="name-numberUI">
                    <h6>Numero do Cartão</h6>
                    <h5 className="numberUI">8050 5040 2030 3020</h5>
                    <h5 className="nameUI">Prem Kumar Shahi</h5>
                </div>
                <div>
                    <h6>Valido até</h6>
                    <h5>05/28</h5>
                </div>
            </div>
        </div>
    )
}

export default CardReactCSS