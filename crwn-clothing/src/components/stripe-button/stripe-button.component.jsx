import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) =>{

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51GsGiJLHAcaXZ5ZQTli8tcaQVWGm8DHhvkRIG2QW2XIOxv41pGqgCXUQ1xy2Uv7yMoWnHxxDOcGfnGaAIkcccIDk00L3u0Kbgb";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    };

    return (
        <StripeCheckout
            label={"Pay Now"}
            name={"CRWN Cloting Ltd."}
            billingAddress
            shippingAddress
            image={"https://svgshare.com/i/CUz.svg"}
            description={`Your total is $${priceForStripe}`}
            amount={priceForStripe}
            panelLabel={"Pay Now"}
            token={onToken}
            stripeKey={publishableKey}
        />
    )

};

export default StripeCheckoutButton;