import React from 'react';
import {Container, Row} from 'react-bootstrap';

export default function navigation() {
  return (
    <>
      <Container fluid id='navigation'>
        <Row>
          <div id='navigation_left' className='col-md-2 p-2'>
            <div className='bi bi-grid 3*3 text-white bg-success ps-2 border border-top-0 border-end-0 border-start-0 border-bottom-0 rounded' id="category">
              <select name="drop-down" className='border border-top-0 border-end-0 border-start-0 border-bottom-0 text-white p-2'>
                <option value="your_category"> Browse Your Categories </option>
                <option value="category_1"> Category 1 </option>
                <option value="category_2"> Category 2 </option>
                <option value="category_3"> Category 3 </option>
              </select>
            </div> 
          </div>

          <div className='col-md-8' id='navigation_middle'>
            <ul>
              <li><i className="bi bi-fire"></i>Hot Deals</li>
              <li>
                <select name="drop-down">
                  <option value="home"> Home </option>
                  <option value="home_1"> home-1 </option>
                  <option value="home_2"> home-2 </option>
                  <option value="home_3"> home-3 </option>
                </select>
              </li>
              <li>About</li>
              <li>
                <select name="drop-down">
                  <option value="shop"> Shop </option>
                  <option value="clothes"> Clothes </option>
                  <option value="grocery"> Grocery </option>
                  <option value="jwellery"> Jwellery </option>
                </select>
              </li>
              <li>
                <select name="drop-down">
                  <option value="venders"> Venders </option>
                  <option value="vender_1"> Vender-1 </option>
                  <option value="vender_2"> Vender-2 </option>
                  <option value="vender_3"> Vender-3 </option>
                </select>
              </li>
              <li>
                <select name="drop-down">
                  <option value="mega_menu"> Mega Menu </option>
                </select>
              </li>
              <li>
                <select name="drop-down">
                  <option value="blog"> Blog </option>
                </select>
              </li>
              <li>
                <select name="drop-down">
                  <option value="pages"> Pages </option>
                </select>
              </li>
              <li>Contacts</li>
            </ul>
          </div>

          <div className='col-md-2' id='navigation_right'>
            <i class="bi bi-headset float-start" id='headset'></i><div className='text-success float-start' style={{fontSize : "20px"}}>&nbsp; 1900 - 888</div><br></br>
            <div className='text-dark float-start' style={{fontSize : "10px", paddingLeft : "14px"}}>24/7 Support Center</div>
          </div>
        </Row>
      </Container>
    </>
  )
}
