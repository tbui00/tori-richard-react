import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Header, Menu, Container, Image, Icon, Grid, List, Divider, Input } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className='topmenu'>
          <Container>
            <Menu.Item link>MEN's</Menu.Item>
            <Menu.Item link>WOMEN'S</Menu.Item>
            <Menu.Item link>KID'S</Menu.Item>
            <Menu.Item link><Image size='small' src='https://courses.ics.hawaii.edu/ics314f21/morea/ui-frameworks/bwod-tori-richard-logo.svg'/></Menu.Item>
            <Menu.Item link>STORES</Menu.Item>
            <Menu.Item link>ABOUT</Menu.Item>
            <Menu.Item link>BLOG</Menu.Item>
            <Menu.Item link position='right'><Icon name='search'/></Menu.Item>
            <Menu.Item link><Icon name='user outline'/></Menu.Item>
            <Menu.Item link><Icon name='shopping bag'/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class MiddleMenu extends React.Component {
  render() {
    const fontStyle = { fontsize: "24px" };
    return (
        <div className='trending-title-color'>
        <Header as='h2' textAlign='center'>TRENDING IN TORI</Header>
        <Menu borderless className='middlemenu'>
          <Grid centered container>
            <Menu.Item link>VIEW MEN'S</Menu.Item>
            <Menu.Item link>VIEW WOMEN'S</Menu.Item>
          </Grid>
        </Menu>
        </div>
    );
  }
}

class MiddleBody extends React.Component {
  render() {
    return (
        <div className='middlebody'>
          <Grid centered container>
            <Grid.Row columns={5} textAlign='center'>
              <Grid.Column>
                <Image size='large' src='https://courses.ics.hawaii.edu/ics314f21/morea/ui-frameworks/bwod-9179.jpg'/>
              </Grid.Column>
              <Grid.Column>
                <Image size='large' src='https://courses.ics.hawaii.edu/ics314f21/morea/ui-frameworks/bwod-1956-MK09-102.png'/>
              </Grid.Column>
              <Grid.Column>
                <Image size='large' src='https://courses.ics.hawaii.edu/ics314f21/morea/ui-frameworks/bwod-1956-MK14-415.png'/>
              </Grid.Column>
              <Grid.Column>
                <Image size='large' src='https://courses.ics.hawaii.edu/ics314f21/morea/ui-frameworks/bwod-1204-MM90-484.jpg'/>
              </Grid.Column>
              <Grid.Column>
                <Image size='large' src='https://courses.ics.hawaii.edu/ics314f21/morea/ui-frameworks/bwod-1956-MK01-001.png'/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5}>
              <Grid.Column textAlign='center'>Surf N Turf Performance Shorts - Tradewind Technology™</Grid.Column>
              <Grid.Column textAlign='center'>Constantinople</Grid.Column>
              <Grid.Column textAlign='center'>Lucky Bamboo</Grid.Column>
              <Grid.Column textAlign='center'>Monte Carlo Cotton & Tencel™ Short</Grid.Column>
              <Grid.Column textAlign='center'>Verdant</Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5}>
              <Grid.Column textAlign='center'>$88.00</Grid.Column>
              <Grid.Column textAlign='center'>$105.00</Grid.Column>
              <Grid.Column textAlign='center'>$105.00</Grid.Column>
              <Grid.Column textAlign='center'>$98.00</Grid.Column>
              <Grid.Column textAlign='center'>$105.00</Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  };
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className='footer-background'>
          <Grid container columns={3}>
              <Grid.Column>
                <Header as='h4'>HELP</Header>
                <List>
                  <List.Item>SHIPPING & HANDLING</List.Item>
                  <List.Item>RETURNS</List.Item>
                  <List.Item>ADA ACCESSIBILITY</List.Item>
                  <List.Item>PRIVACY POLICY</List.Item>
                  <List.Item>FIND A STORE</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as='h4'>COMPANY</Header>
                <List>
                  <List.Item>CONTACT US</List.Item>
                  <List.Item>GIFT CARDS</List.Item>
                  <List.Item>SHOP OUR INSTAGRAM</List.Item>
                  <List.Item>REVIEWS</List.Item>
                  <List.Item>JOIN US</List.Item>
                  </List>
              </Grid.Column>
              <Grid.Column>
                <Header as='h4'>LETS STAY IN TOUCH</Header>
                <List>
                  <List.Item>Join our 'ohana and receive FREE SHIPPING off your first online order!</List.Item>
                  <Input transparent icon='mail outline' placeholder='Email address'/>
                  <List.Item>
                    <Icon className='icon-color' size='huge' name='facebook' link/>
                    <Icon className='icon-color' size='huge' name='instagram' link/>
                  </List.Item>
                </List>
              </Grid.Column>
          </Grid>
          <Container textAlign='center'>
            <Header className='trending-title-color' as='h5'>© Tori Richard Ltd. 2021</Header>
          </Container>
        </div>
    );
  }
}


class ToriRichard extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <MiddleBody/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<ToriRichard />, document.getElementById('root'));