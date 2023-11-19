import React, {useState, useEffect} from 'react';
import './CreateBlog.css';
import { useDispatch, useSelector } from 'react-redux'
// import {  getShop } from '../../Actions/ShopAction';
// import { buyProduct } from '../../Actions/FruitAction';
// import { productAction } from '../../Redux/ProductSlice';
function CreateBlog({modelHandler,item,user}) {
  const [count, setCount] = useState(1);
  // const shop = useSelector(state => state.shop.shop)
  const dispatch = useDispatch();

  const countHandler = (e) => {
    setCount(e.target.value)
  }

  // useEffect(() => {
  //   dispatch(getShop(item.shopId))
  // },[item,dispatch])
  
  async function handleSubmit(e){
      e.preventDefault();
      // item.push({count:count})
      const data = {
        // productId:item._id,
        count:count,
        // userId:user._id
      }
      // dispatch(buyProduct(data))
      modelHandler(false);
      // dispatch(productAction.toggleLoadingSpinner())
      // window.location.reload(true);

  }

  const closeModal = () => {
    modelHandler(false);
  }

  return (
    <div className="modal-style">
      <div className="background"> 
        <div className="header-modal">
          
          <div  className="header-model-header">
              <div className="header-model-header-title">
                  <h3 >Buy The Product</h3>
              </div>
              <div className="header-model-header-close-btn">
                <h3  onClick={closeModal}>X</h3>
              </div>
          </div>
        </div>
          <div className="addpostModel-section">
              <div className="addpostModel-section-group">
              <div></div>

                <h4>Product Name </h4>
                {/* <p className='text-field'>{item.name}</p> */}
                <div></div>

              </div>

              <div className="addpostModel-section-group">
              <div></div>

                <h4>No of Product </h4>
                <input type='number' defaultValue={count} name='count' className='text-field' min='1' onChange={countHandler} />
                <div></div>

              </div>
              
              <div className="addpostModel-section-group">
              <div></div>

                <h4>Price </h4>
                {/* <p className='text-field'>{item.price * count}</p> */}
                <div></div>

              </div>

              <div className="addpostModel-section-group">
                <div></div>
                <h4>Shop </h4>
                {/* <p className='text-field'>{shop.name}</p> */}
                <div></div>

              </div>

              
              <div className="addpostModel-section-group">
              <div></div>

                <h4>image </h4>
                {/* <img src={item.images} alt="" /> */}
              </div>
              <div></div>

            </div>        

              <div className="buy-button">
                      <button 
                      type='submit'
                      // disabled={loading}
                      onClick={handleSubmit}
                      >
                        {/* {loading? 'Loading..': 'Post'} */}
                      Create</button>
                  </div>
            </div>
    </div>
  )
}

export default CreateBlog