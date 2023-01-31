import React from 'react'
import northernLights from "../../assets/img/image1.jpg";

const Image = () => {
  return (
    <div>
        {/* External url*/}
        <img src="https://images.unsplash.com/photo-1672572305595-c0a319dc09f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fnature%2F&psig=AOvVaw00kr9CsPj3Gd1uG9dYKqhI&ust=1673375948112000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCDg6qRu_wCFQAAAAAdAAAAABAE" alt="" width="300" />

        {/* Statik yöntemde görüntüler public klasörü içinde aranır.*/}
        <img src="assets/img/car.jpg" alt="" width="300" />

        {/* Import ve require yönteminde dosyalar src için olmalıdır.*/}
        <img src={northernLights} alt="" width="300" />

        {/* Import ve require yönteminde dosyalar src için olmalıdır.*/}
        <img src={require("../../assets/img/image2.jpg")} alt="" width="300" />
    </div>
  )
}

export default Image