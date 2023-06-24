import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTwitter, FaFacebookSquare, FaInstagram, FaSkype, FaLinkedinIn } from 'react-icons/fa';

function FooterEnd() {
  return (
    <>
      <Card className="text-center text-white pt-5 pb-5" style={{ backgroundColor: '#011272' }}>
      <Card.Title className="card-title p-4" data-aos="fade-up">Bocor</Card.Title>
      <Card.Text className="card-text" data-aos="fade-up">Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</Card.Text>
      <Container className="mt-4 pb-4" data-aos="fade-up" data-aos-duration="2000">
        <FaTwitter className="fa-xl m-1" />
        <FaFacebookSquare className="fa-xl m-1" />
        <FaInstagram className="fa-xl m-1" />
        <FaSkype className="fa-xl m-1" />
        <FaLinkedinIn className="fa-xl m-1" />
      </Container>
      <Container data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
        <Row>
          <Col><small>© Copyright Bocor. All Rights Reserved</small></Col>
          <Col><small>Designed by <span className="text-warning">IRFAH</span></small></Col>
        </Row>
      </Container>
    </Card>
    </>
  )
}

export default FooterEnd