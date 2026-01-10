import React, { useState, useEffect } from 'react';
import "./TotalCost.css";

const TotalCost = (props) => {
  const { totalCosts, cartItems, numberOfPeople } = props
  console.log(cartItems)

  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <div className="preheading"><h3>Total cost for the event</h3></div>
        </div>
        <div>
          <h2 id="pre_fee_cost_display" className="price">
            ${totalCosts}
          </h2>
          <div className="display_box1">
            {cartItems.length === 0 && <p>No items selected</p>}
            {cartItems.length !== 0 &&
              <table className="table_item_data">
                <thead>
                  <tr>
                    <th style={{textAlign:"left"}}>Name</th>
                    <th style={{textAlign:"right"}}>Unit Cost</th>
                    <th style={{textAlign:"right"}}>Quantity</th>
                    <th style={{textAlign:"right"}}>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td style={{textAlign:"left"}}>{item.name}</td>
                      <td style={{textAlign:"right"}}>${item.cost}</td>
                      <td style={{textAlign:"right"}}>
                        {item.type === "meals"
                          ? ` For ${numberOfPeople} people`
                          : item.quantity}
                      </td>
                      <td style={{textAlign:"right"}}>{item.type === "meals"
                        ? `$${item.cost * numberOfPeople}`
                        : `$${item.cost * item.quantity}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCost;
