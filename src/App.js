import React from 'react';
import { Layout, Row, Col, Typography, Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import MobileStoreButton from 'react-mobile-store-button';

const { Header, Footer, Sider, Content } = Layout;
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
                  <Title>Willkommen bei Hadu!</Title>
                  <Text>Einer wirklich sozialen App, mit der du Unternehmungen planen und neue Freunde treffen kannst.</Text>
                  <MobileStoreButton
                    store="android"
                    url={""}
                    linkProps={{ title: 'Hadu - Play Store' }}
                    className="playStore"
                  />
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <div className="textContainer">
                <Title>Eine neue Art der Ausmachung</Title>
                <Text>Hadu ist eine App, die das Treffen online mit dem Treffen in "echt" verbindet. Du kannst mit Hadu neue Leute kennenlernen oder neue Möglichkeiten der Freizeitgestaltung entdecken. Momentan ist Hadu zwar noch in Entwicklung und nur in wenigen Regionen verfügbar, jedoch wollen wir bald expandieren.</Text>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={16} xl={16}>
              <img src={require('./img/phone.png')} style={{width: '100%', height: 'auto'}} />
            </Col>
          </Row>

          <Row>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <div className="textContainer">
                <Title>Die Weiten des Internets</Title>
                <Text>Durch Netflix, Twitter und Co. wirken Aktivitäten einfach viel zu aufwendig, anstrengend und kompliziert. Noch dazu finden viele keinen Weg auf andere zuzugehen. Wir kennen das. Doch - ganz besonders bei Jugendlichen - ist die Hemmschwelle online sehr klein und man sagt und tut Dinge, die man niemals im realen Leben tun würde. Warum also nicht dieses Phänomen nutzen, um der eigenen Komfortzone zu entkommen?</Text>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={16} xl={16}>
              <img src={require('./img/phone2.png')} style={{width: '100%', height: 'auto'}} />
            </Col>
          </Row>

          <Row>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <div className="textContainer">
                <Title>Das Neuland integrieren</Title>
                <Text>Will man neue Freunden finden oder etwas Neues unternehmen, ist es nicht schwierig etwas zu finden, sondern "ja" zu sagen. Und hier gilt: Online einfacher als "offline". Schon viel zu lange wird Technologie und Alltag in vielen Bereichen seperiert, anstatt die Vorteile des Internets zu nutzen. Wakeboarden, Reiten oder Paintball interessieren viele, doch wenn sie dann von Gesicht zu Gesicht eine Entscheidung treffen müssen, gehen die meisten auf Nummer sicher. Wie? Mit einem Nein.</Text>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={16} xl={16}>
              <img src={require('./img/phone3.png')} style={{width: '100%', height: 'auto'}} />
            </Col>
          </Row>

          <Row>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <div className="textContainer">
                <Title>Just do it</Title>
                <Text>Ein Nein, dass nicht nur mögliche Erfahrungen vernichtet, sondern oft ihm Nachhinein bereut wird. "Hätte ich doch...". Und warum muss man bereuen? Weil im Alltag es schwer ist, die Möglichkeiten und Angebote im Überblick zu behalten und dann auch noch den Mut zu haben, Neues zu versuchen. Deshalb bietet Hadu die Vorteile der Übersichtlichkeit und Zeit, die einem die Technik gibt, an, um Dinge zu ermöglichen, die nicht im Web passieren. Von Gaming bis hin zum Laufen - die neuerdings entstehende Einsiedlerkultur ist ein Problem, dem man - mit ein paar Klicks - leicht entgegenwirken kann.</Text>
              </div>
            </Col>
          </Row>

        </div>
      </Content>
      
      <Footer style={{ background: '#29335C', color: 'white' }}>
        <Row>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}><span className="footerText">hadu.developers@gmail.com</span></Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}><span className="footerText">+43 660 4387699</span></Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}><span className="footerText">Landesrat-Gebhart-Straße 2, 6460 Imst</span></Col>
        </Row>
      </Footer>

    </Layout>
  );
}

export default App;
