import React from 'react';
import { Layout, Row, Col, Typography, Icon } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import MobileStoreButton from 'react-mobile-store-button';
import { motion } from "framer-motion"
import Typical from 'react-typical'

const { Footer, Content } = Layout;
const { Title, Text } = Typography;

function App() {
  return (
    <Layout>
      <Content>
        <div>

          <Row style={{ backgroundImage: 'url(' + require('./img/bg.jpg') + ')' }}>
            <Col span={24}>
              <div className="headerTextContainer">
                <div className="headerText">
                  <Typical
                    steps={['Hadu - The Social Venue 🥰', 5000, "Jetzt downloaden! 📱", 5000]}
                    loop={Infinity}
                    wrapper="h1"
                  />
                  <Text>Eine wirklich soziale App, mit der du Aktivitäten entdecken und neue Freunde finden kannst.</Text>
                  
                  <motion.div
                    animate={{ y: [300, 0], opacity: [0, 1] }}
                    transition={{ ease: "easeOut", duration: 1 }}
                  >
                    <MobileStoreButton
                      store="android"
                      url={""}
                      linkProps={{ title: 'Hadu - Play Store Download' }}
                      className="playStore"
                    />
                  </motion.div>

                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={24} sm={24} md={12} lg={9} xl={9}>
              <motion.div className="textContainer" whileHover={{
                  scale: 1.1,
                  translateX: 50,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                animate={{ x: [300, 0], opacity: [0, 1]}}
                transition={{ ease: "easeOut", duration: 1 }}
              >
                <Title>Wieso, weshalb, warum Hadu?</Title>
                <hr align="left" />
                <Text>Wir wollen das Sprichwort "allein unter Millionen" obsolet machen. Niemand soll - sofern er das nicht will - mehr alleine sein müssen. Dabei denken wir vor allem an Jugendliche, denen es schwer fällt, neue Freunde zu finden.</Text>
              </motion.div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={15} xl={15}>
              <img className="phone" src={require('./img/phone.png')} alt="Bild einer Aktivität" style={{width: '100%', height: 'auto'}} />
            </Col>
          </Row>

          <Row>
            <Col xs={24} sm={24} md={12} lg={15} xl={15}>
              <img src={require('./img/phone2.png')} alt="Bild des Splashscreens und der Hauptseite der App" style={{width: '90%', height: 'auto'}} />
            </Col>
            <Col xs={24} sm={24} md={12} lg={9} xl={9}>
              <motion.div className="textContainer" whileHover={{
                  scale: 1.1,
                  translateX: -50,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                animate={{ x: [-300, 0], opacity: [0, 1] }}
                transition={{ ease: "easeOut", duration: 1 }}
              >
                <Title>Aktivitäten?</Title>
                <hr style={{ borderColor: "#29335C" }} align="left" />
                <Text>Ja genau. Nehmen wir an, du willst Skifahren, aber keiner deiner Freunde hat Lust. Anstatt Trübsal zu blasen, kannst du auf Hadu eine Aktivität erstellen und andere treten dir dann bei. Das Ganze funktioniert natürlich auch umgekehrt.</Text>
                <br /><br />
                <Text><b>Ist das nicht irgendwie gefährlich?</b> Klar. Vielleicht? Nein. Wir haben einen Trustfactor eingeführt, der wie ein Berwertungssystem funktioniert und dir zeigt, wie vertrauenswürdig eine Person ist.<br /><br />Trotzdem, ein Restrisiko bleibt. Sei deswegen vorsichtig. Die Welt ist ein grausamer Ort.</Text>
              </motion.div>
            </Col>
          </Row>

          <Row>
            <Col xs={24} sm={24} md={12} lg={9} xl={9}>
              <motion.div className="textContainer" whileHover={{
                  scale: 1.1,
                  translateX: 50,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                animate={{ x: [300, 0], opacity: [0, 1] }}
                transition={{ ease: "easeOut", duration: 1 }}
              >
                <Title>Und was ist jetzt mit mir?</Title>
                <hr style={{ borderColor: "#FD6F1D" }} align="left" />
                <Text>Du bist die Person, die unsere (und hoffentlich jetzt auch deine) Vision Realität werden lässt. Jeder neue Nutzer und jede neue Aktivität bringt uns dem Ziel einen Schritt näher.</Text>
                <div className="playStore2Container">
                  <MobileStoreButton
                    store="android"
                    url={""}
                    linkProps={{ title: 'Hadu - Play Store Download' }}
                    className="playStore2"
                  />
                </div>
              </motion.div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={15} xl={15}>
              <img src={require('./img/phone3.png')} alt="Bild des Registerformulars und eines Nutzerprofils" style={{width: '100%', height: 'auto'}} />
            </Col>
          </Row>

        </div>
      </Content>
      
      <Footer style={{ color: 'white', backgroundImage: 'url(' + require('./img/bg.jpg') + ')' }}>
        <Row>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className="footerTextContainer">
              <Icon type="mail" className="footerIcon" />
              <span className="footerText">
                hadu.developers@gmail.com
              </span>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className="footerTextContainer">
              <Icon type="phone" className="footerIcon" />
              <span className="footerText">
                +43 660 4387699
              </span>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className="footerTextContainer">
              <Icon type="shop" className="footerIcon" />
              <span className="footerText">
                Landesrat-Gebhart-Straße 2, 6460 Imst
              </span>
            </div>
          </Col>
        </Row>
      </Footer>

    </Layout>
  );
}

export default App;
