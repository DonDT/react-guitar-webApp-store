import React, { Component } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

class Paypal extends Component {
  render() {
    const onSuccess = payment => {
      //console.log(JSON.stringify(payment));
      this.props.onSuccess(payment);
    };
    const onCancel = data => {
      console.log(JSON.stringify(data));
    };
    const onError = err => {
      console.log(JSON.stringify(err));
    };

    let env = "sandbox";
    let currency = "USD";
    let total = this.props.toPay;

    const client = {
      sandbox:
        "AX7V-yutH3IOl_WL71PKsHWA6avjgatNxbBIBI8GWt_mtVLwxWTZvc5XZtJesUJhn37lOtQ-eE466gfh",
      production: ""
    };

    return (
      <div>
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size: "large",
            color: "blue",
            label: "checkout"
          }}
        />
      </div>
    );
  }
}

export default Paypal;
