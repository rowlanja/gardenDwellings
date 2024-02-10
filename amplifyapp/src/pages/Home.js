import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GardenHome from './GardenHome.jpg'

function Home() {
    return (
        <Container>
            <Row xs={12} sm={6} md={6} lg={1}> <h2 id="About us">About Us</h2> </Row>
            <Row xs={12} sm={6} md={6} lg={11}>
            <p>
                    Conor and barry, the owners of Garden Dwelliungs have a combined experience of 35 years in construction.
                    What started as small projects for freinds and family has developed into a passion for providing additional 
                    living space to our customer. We get amazing satisfaction when handing over 
                    high quality builds to happy customers, knowing they will enjoy our builds for decase to come. 
                    Our expertise ensures a streamlined and stressfree project from start to finish.
                </p>
            </Row>

            <Row>
                <h2 id="Benefits of Garden Dwelling">Benefits of Garden Dwellings</h2>
                <p>
                    Our garden dwellings provide a fully sufficient habitable space that can be used for a variety of purposes such 
                    as granny flats, additional living space for growing families, source of rental income, office or gym space, 
                    or art studios.
                </p>
            </Row>
        </Container>
    );
};
  
export default Home;