import React from 'react';
import Apple from '../Components/Assets/Images/Red_Apple.jpg';
import Cabbage from '../Components/Assets/Images/Cabbage.jpg';
import Strawberry from '../Components/Assets/Images/Strawberry.jpg';
import Kiwi from '../Components/Assets/Images/Organic_Kiwi.jpg';
import CusturdApple from '../Components/Assets/Images/Custurd_Apple.jpg';
import Plum from '../Components/Assets/Images/Block_Plum.jpg';
import CoffeeTea from '../Components/Assets/Images/Coffee_Tea.jpg';
import Snacks from '../Components/Assets/Images/Snacks.jpg';


const Categories = () => {
  return (
    <>
      <div className='container-fluid'>
         <div className="text-group p-md-5 d-flex align-items-center justify-content-evenly w-50">
            <p className='fs-4 fw-bold'>Featured Categories</p>
            <p>Coke & Mix</p>
            <p>Coffes & Teas</p>
            <p className='text-success'>Pet Foods</p>
            <p>Vegetables</p>
         </div>

         {/* =========== ROW PART =========== */}

         <div className=" ps-md-5 pe-md-5 gap-3 gap-md-4 over ">

         <div className="col-md-2 col-10 bg-first py-5 pb-md-3 rounded-5  text-center">
               <img src={Apple} alt="" className='img-card'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Red Apple </p>
               <p>21 Items</p>
            </div>

            <div className="col-md-2 bg-first py-5 pb-md-3 rounded-5 text-center">
               <img src={Cabbage} alt="" className='img-card'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Vegetables </p>
               <p>20 Items</p>
            </div>
            
            
            <div className="col-md-2 bg-first py-5 pb-md-3 rounded-5 text-center">
               <img src={Strawberry} alt="" className='img-card'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Stawberry </p>
               <p>26 Items</p>
            </div>


            <div className="col-md-2 width-lemon bg-first py-5 px- pb-md-3 rounded-5 text-center">
               <img src={Kiwi} alt="" className='img-lemon'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Kiwi </p>
               <p>31 Items</p>
            </div>


            <div className="col-md-2  bg-first py-5 pb-md-3 rounded-5 text-center">
               <img src={CusturdApple} alt="" className='img-card'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Custurd Apple </p>
               <p>10 Items</p>
            </div>

            <div className="col-md-2 bg-first py-5 pb-md-3 rounded-5 text-center">
               <img src={Plum} alt="" className='img-card'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Plum </p>
               <p>29 Items</p>
            </div>


            <div className="col-md-2 bg-first py-5 pb-md-3 rounded-5 text-center">
               <img src={CoffeeTea} alt="" className='img-card'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Cofee-Tea</p>
               <p>5 Items</p>
            </div>

            <div className="col-md-2 bg-first py-5 pb-md-3 rounded-5 text-center">
               <img src={Snacks} alt="" className='img-card'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Snacks </p>
               <p>5 Items</p>
            </div>


        </div> 
      </div>
    </>
  )
}

export default Categories