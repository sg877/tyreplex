import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const paymentModes = [
  ["Deposit to Account", "Credit Card/Debit Card", "Wallets (PayTM/PhonePe/Amazon etc.)"],
  ["Net Banking", "UPI"]
];

function PaymentComp() {
  return (
    <div>
      <div className="container Payment_comp py-2 mt-4">
        <h2>Payment Mode</h2>
        <div className="row">
          {paymentModes.map((column, columnIndex) => (
            <div className="col-md-4" key={columnIndex}>
              {column.map((mode, index) => (
                <h1 key={index}>
                  <FaCheck color="#40FF40" size="35px" className="px-2" />
                  {mode}
                </h1>
              ))}
            </div>
          ))}
          <div className="col-md-4 d-none"></div>
        </div>
      </div>
    </div>
  );
}

export default PaymentComp;
