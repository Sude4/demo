import React from 'react';

function Cart({ orders }) {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Sepet</h2>
      {orders.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={index} className="border p-4 mb-4">
              <h3 className="text-lg font-bold">Sipariş Numarası: {order.orderNumber}</h3>
              <p>Sipariş Tarihi: {order.orderDate}</p>
              <p>Kullanıcı ID'si: {order.userId}</p>
              <p>Toplam Tutar: ${order.totalAmount}</p>
              <h4 className="mt-4 font-bold">Ürünler:</h4>
              <ul>
                {order.products.map((product) => (
                  <li key={product.id}>{product.product_name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
