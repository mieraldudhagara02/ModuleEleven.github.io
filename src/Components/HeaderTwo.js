import React from 'react';
import {Container, Row, Form} from 'react-bootstrap';
import Logo from '../Components/Assets/Images/Logo.jpg'

export default function Headertwo() {
  return (
    <>
      <Container fluid id='headertwo'>
        <Row>
          <div className='col-md-1' id='logo'>
            <img src={Logo} alt="..."/>
          </div>

          <div className='col-md-6'>
            <Form>
            <div className='input-group' id='ig'>
            <span id='ac'>All Category |</span>
            <input type='text' placeholder='Search' className='form-control' id='search'></input>
            <i className="bi bi-search" id='search_icon'/>
            </div>
            </Form>
          </div>
          <div className='col-md-5'>
            <div id='headertwo_right'>
              <select name="drop-down" id="location">
                <option value="your_location"> Your Location </option>
                <option value="Hindi"> 150 ft. ring road </option>
                <option value="Gujarati"> palace road </option>
                <option value="Marathi"> dr. yagnik road </option>
              </select>&nbsp; &nbsp; &nbsp;

              <span className="bi bi-heart p-3 position-relative"><div className='badge bg-success rounded-pill position-absolute' style={{left : "26px", top : "7px"}}>0</div>&nbsp; &nbsp; Wishlist </span>&nbsp; &nbsp;
              <span className="bi bi-cart position-relative p-3"><span className='badge bg-success rounded-pill position-absolute' style={{left : "26px", top : "7px"}}>0</span>&nbsp; &nbsp; Cart </span>&nbsp; &nbsp;
              <span className="bi bi-person"> Account </span>&nbsp; &nbsp;
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}
