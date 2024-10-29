import React from 'react';
import './Ministers.css';
import AlbertObede from '../images/AlbertObede.jpg';
import Bernard from '../images/Bernard.jpg';
import Christopher from '../images/Christopher.jpg';
import Daniel from '../images/Daniel.jpg';
import Hardson from '../images/Hardson.jpg';
import Harman from '../images/Harman.jpg';
import Isaac from '../images/Isaac.jpg';
import Japheth from '../images/Japheth.jpg';
import Joash from '../images/Joash.jpg';
import Joel from '../images/Joel.jpg';
import Maina from '../images/Maina.jpg';
import MamaMissionJenitaMachayo from '../images/MamaMissionJenitaMachayo.jpg';
import Noah from '../images/Noah.jpg';
import John from '../images/John.jpg';
import Joseph from '../images/Joseph.jpg';
import Protas from '../images/Protas.jpg';
import Ruben from '../images/Ruben.jpg';
import AlbertandEphraim  from '../images/AlbertandEphraim.jpg';
import Jacob from '../images/Jacob.jpg';
import Mulati from '../images/Mulati.jpg';
import Mable from '../images/Mable.jpg';


const Ministers = () => {
  const archbishops = [
    { name: 'First Archbishop Japheth Zare ', image: Japheth },
    { name: 'Second Archbishop Christopher Ondolo Obede ', image: Christopher },
    { name: 'Third Archbishop Joel Sande', image: Joel },
    { name: 'Fourth Archbishop Isaac Bandi Mgodo', image: Isaac },
    { name: 'Fifth Archbishop Joseph Kaduyu Zare', image: Joseph },
    { name: ' Sixth Archbishop Albert Obede and Assistant Archbishop Ephraim Senelwa', image: AlbertandEphraim },
   
  ];

  const bishops = [
    { name: 'Bishop Noah Muyeyia', diocese: 'Diocese of Vihiga', image: Noah  },
    { name: 'Bishop Harman Agaligi', diocese: 'Diocese of Sabatia', image: Harman  },
    { name: 'Bishop Ruben Munala ', diocese: 'Diocese of Kakamega', image: Ruben  },
    { name: 'Bishop Joash Abong`o', diocese: 'Diocese of Bunyore', image: Joash },
    { name: 'Bishop Daniel Natembea', diocese: 'Diocese of Trans-nzoia', image: Daniel },
    { name: 'Bishop John Maina', diocese: 'Diocese of Central', image: Maina  },
    { name: 'Bishop Protas Liyali', diocese: 'Diocese of Dagoretti', image: Protas },
    { name: 'Bishop John Chamazare', diocese: 'Diocese of Nairobi East', image: John },
    { name: 'Bishop Bernard Adeka', diocese: 'Diocese of Nairobi', image: Bernard  },
    { name: 'Bishop Hardson Induswe', diocese: 'Diocese of Butere Mumias', image: Hardson },
    { name: 'The Chief Priest and Prophet The Late Bishop Jacob Shilaho Shitochi', diocese: 'Diocese of Butere Mumias', image:Jacob },
    { name: 'Mama Mission Jenita Machayo', image: MamaMissionJenitaMachayo},
    { name: 'Former Mama Mission The Late Florah Mulati ', image: Mulati },
    { name: 'Mother`s Union Flag Bearer Mama Mable Mugara', image: Mable }
  
    
  ];

  return (
    <div className="ministers-section">
      <h1 className="section-title">Our Ministers</h1>

      <h2 className="sub-title">Archbishops</h2>
      <div className="archbishops">
        {archbishops.map((archbishop, index) => (
          <div key={index} className="card archbishop-card">
            <img src={archbishop.image} alt={archbishop.name} className="minister-image" />
            <h3>{archbishop.name}</h3>
            <p>{archbishop.diocese}</p>
          </div>
        ))}
      </div>

      <h2 className="sub-title">Bishops</h2>
      <div className="bishops">
        {bishops.map((bishop, index) => (
          <div key={index} className="card bishop-card">
            <img src={bishop.image} alt={bishop.name} className="minister-image" />
            <h3>{bishop.name}</h3>
            <p>{bishop.diocese}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ministers;
