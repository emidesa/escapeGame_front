import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


const Footer = () => {
    return <>

    <footer style={{ background: 'linear-gradient( #1A0A53, #4D22B3, #9929BD)', color: '#FFF', padding: '20px 0' }}>
      <div className="container text-center">
        {/* logo */}
        <div className="mb-3">
          <img
            src="src\assets\Design_sans_titre3.png" 
            alt="Logo"
            width="80"
            height="80"
          />
        </div>

        {/* Titre */}
        <h4>Rejoignez nos réseaux sociaux !</h4>

        {/* Icônes des réseaux sociaux */}
        <div className="social-icons mt-3 mb-4">
          <a href="#facebook" className="social-link mx-2">
            <i className="bi bi-facebook" style={{ fontSize: '24px', color: '#FFF' }}></i>
          </a>
          <a href="#instagram" className="social-link mx-2">
            <i className="bi bi-instagram" style={{ fontSize: '24px', color: '#FFF' }}></i>
          </a>
          <a href="#twitter" className="social-link mx-2">
            <i className="bi bi-twitter" style={{ fontSize: '24px', color: '#FFF' }}></i>
          </a>
        </div>

        {/* Ligne de séparation */}
        <hr style={{ backgroundColor: '#FFF' }} />

        {/* Sections du footer */}
        <div className="row text-start mt-4">
          <div className="col-md-4">
            <h5>Confidentialité</h5>
            <ul className="list-unstyled">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <h5>Localisation</h5>
            <div
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: '#CCC',
                margin: '0 auto',
              }}
            ></div>
          </div>
          <div className="col-md-4 text-end">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Qui sommes-nous ?</li>
              <li>Aide et contact</li>
            </ul>
            <div className="d-flex justify-content-end mt-2">
              <div style={{ width: '20px', height: '20px', backgroundColor: '#FFF', margin: '0 5px' }}></div>
              <div style={{ width: '20px', height: '20px', backgroundColor: '#FFF', margin: '0 5px' }}></div>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="text-center mt-4" style={{ fontSize: '14px', background: '#6C2EB9', padding: '10px 0' }}>
          Copyright © Lorem Ipsum est simplement du faux texte employé dans la composition
        </div>
      </div>
    </footer>
    
    </>;
}
 
export default Footer;