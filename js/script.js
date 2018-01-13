simpleCart({
        // array representing the format and columns of the cart,
        // see the cart columns documentation
        cartColumns: [
        { attr: "name", label: "Produkt"},
        { view: "currency", attr: "price", label: "Preis"},
        { view: "decrement", label: false},
        { attr: "quantity", label: "Anzahl"},
        { view: "increment", label: false},
        { view: "currency", attr: "total", label: "Gesamt" },
        { view: "remove", text: "Remove", label: false}
        ],
        // "div" or "table" - builds the cart as a 
        // table or collection of divs
        cartStyle: "table", 
        // how simpleCart should checkout, see the 
        // checkout reference for more info 
        checkout: { 
            type: "PayPal" , 
            email: "you@yours.com" 
        },
        // set the currency, see the currency 
        // reference for more info
        currency: "EUR",
        // collection of arbitrary data you may want to store 
        // with the cart, such as customer info
        data: {},
        // set the cart langauge 
        // (may be used for checkout)
        language: "english-us",
        // array of item fields that will not be 
        // sent to checkout
        excludeFromCheckout: [],
        // custom function to add shipping cost
        shippingCustom: null,
        // flat rate shipping option
        shippingFlatRate: 0,
        // added shipping based on this value 
        // multiplied by the cart quantity
        shippingQuantityRate: 0,
        // added shipping based on this value 
        // multiplied by the cart subtotal
        shippingTotalRate: 0,
        // tax rate applied to cart subtotal
        taxRate: 0,
        // true if tax should be applied to shipping
        taxShipping: false,
        // event callbacks 
        beforeAdd            : null,
        afterAdd            : null,
        load                : null,
        beforeSave        : null,
        afterSave            : null,
        update            : null,
        ready            : null,
        checkoutSuccess    : null,
        checkoutFail        : null,
        beforeCheckout        : null,
        beforeRemove           : null
    });