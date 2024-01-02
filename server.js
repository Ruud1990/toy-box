// sk_test_51OQEbZEYWs5KjxdwUq428u3BncbG1ODzGgNgq07BhUD26tQOVXbVdMNgpo5dA4Om1BlLJVK3WC7mFwWdMZUsy0fh00xF4k4aPE

// price_1OQEoiEYWs5Kjxdw2T5vUKKw    ----   box 1

// price_1OQEpyEYWs5KjxdwBqvhxvJQ    ----   box 2

// price_1OQEqmEYWs5KjxdwXZObROum    ----   box 3


const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51OQEbZEYWs5KjxdwUq428u3BncbG1ODzGgNgq07BhUD26tQOVXbVdMNgpo5dA4Om1BlLJVK3WC7mFwWdMZUsy0fh00xF4k4aPE');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));