import React, { Component } from "react";
import { Hasil, ListCategories, NavbarComponents } from "./components";
import { Row, Col, Container } from "react-bootstrap";
import { API_URL } from "./utils/constants";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }
  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        console.log("Response : ", res);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error silahkan coba lagi");
      });
  }

  render() {
    const {menus} = this.state
    return (
      <div className="App">
        <NavbarComponents />
        <div className="mt-2">
          <Container fluid>
            <Row>
              <ListCategories />
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
                <Row>{menus && menus.map((menu) => (<h2>{menu.nama}</h2>))}</Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
