import React from 'react'
import {Container, Row} from 'react-bootstrap';

export default function Headerone() {
  return (
    <>
      <Container fluid id='headerone'>
        <Row>

          <div className='col-md-4' id='headerone_left'>
            <ul>
              <li className='d-inline'>About Us</li>
              <li className='d-inline'>My Account</li>
              <li className='d-inline'>Wishlist</li>
              <li className='d-inline'>Order Tracking</li>
            </ul>
          </div>

          <div className='col-md-4' id='headerone_middle'>
            <div className='text'>Get greate devices up to 50% off <a href='#' id='vd'><span className='text-success'>View details</span></a></div>
          </div>

          <div className='col-md-4' id='headerone_right'>
            <div className='text'>Need help? Call us: <span className='text-success'>1100 800</span>&nbsp; |&nbsp;

              <select name="drop-down" id="language">
                <option value="English"> English </option>
                <option value="Hindi"> Hindi </option>
                <option value="Gujarati"> Gujarati </option>
                <option value="Marathi"> Marathi </option>
              </select>       
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}
