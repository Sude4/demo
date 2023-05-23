import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:3002/orders');
      setOrders(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Siparişler</h1>
      {orders.map((order) => (
        <div key={order.orderId}>
          <h3>Sipariş Numarası: {order.orderId}</h3>
          <p>Sipariş Tarihi: {order.orderDate}</p>
          <p>Kullanıcı ID'si: {order.userId}</p>
          <p>Toplam Tutar: {order.totalAmount}</p>
          <h4>Ürünler</h4>
          <ul>
            {order.orderItems.map((item) => (
              <li key={item.productId}>
                Ürün Adı: {item.productName}, Miktar: {item.quantity}, Fiyat: {item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Cart;
