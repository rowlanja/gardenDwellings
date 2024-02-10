import './App.css';
import Stack from 'react-bootstrap/Stack';
import GardenHome from './pages/GardenHome.jpg'
import GardenHome2 from './pages/GardenHome2.jpg'
import TableOfContent from './components/ContentTable';

import Iso from './cost.png';
import IEEE from './iso.png';
import Cost from './ieee.png';

import Image from 'react-bootstrap/Image';
import { useState } from 'react'

const GardenHomeObj = ({ product, children }) => (
  <div className="homes">
    {children}
  </div>
);

const CertObj = ({ product, children }) => (
  <div className="certs">
    {children}
  </div>
);

function App() {
  const ToC = {
    padding: "10px",
    width: "20%"
  };

  const Info = {
    alignItems: "center",
    marginLeft: "100px",
    marginRight: "100px",
    width: "70%",
  };

  const HomeExamplesImgs = {
    display: 'flex',
    marginLeft: "0px",
    marginRight: "0px",
    width: "50%",
  };

  const [homes] = useState([
    { logo: GardenHome },
    { logo: GardenHome2 }
  ]);

  const [certs] = useState([
    { logo: Iso },
    { logo: IEEE },
    { logo: Cost },
  ]);

  return (
    <div className="App">
      <Stack direction="horizontal" gap={5}>
        <div style={Info}> 
          <Stack gap={5}>
          <div style={{textAlign: "center", marginBottom: "80px"}}>
          <h2 id="About us">About Us</h2> 
          <p style={{textAlign: "center"}}>
              Conor and barry, the owners of Garden Dwelliungs have a combined experience of 35 years in construction.
              What started as small projects for freinds and family has developed into a passion for providing additional 
              living space to our customer. We get amazing satisfaction when handing over 
              high quality builds to happy customers, knowing they will enjoy our builds for decase to come. 
              Our expertise ensures a streamlined and stressfree project from start to finish.
          </p>
          <div className="productsContainer">
            {homes.map((product, index) => (
              <GardenHomeObj key={index} product={product}>           
                <img src={product.logo}/>
              </GardenHomeObj>
            ))}
          </div>
        </div>
        <div style={{textAlign: "center"}}>
        <h2 id="Benefits of Garden Dwelling">Benefits of Garden Dwellings</h2>
        <p>
            Our garden dwellings provide a fully sufficient habitable space that can be used for a variety of purposes such 
            as granny flats, additional living space for growing families, source of rental income, office or gym space, 
            or art studios.
        </p>
        <div class="wrap">
            {certs.map((product, index) => (
              <CertObj key={index} product={product}>           
                <img src={product.logo}   class="midImg"/>
              </CertObj>
            ))}
          </div>
        </div>
        </Stack>
        </div>
        <div style={ToC}> <TableOfContent/> </div>
      </Stack>
    </div>
  );
}

export default App;