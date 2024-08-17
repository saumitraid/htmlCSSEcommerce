    //for combo page link
    function openPage1() {
        window.location.href = 'grocery.html';
    }
    function openPage2() {
        window.location.href = 'mobiles.html';
    }
    function openPage3() {
        window.location.href = 'fassion.html';
    }
    function openPage4() {
        window.location.href = 'electronics.html';
    }
    function openPage5() {
        window.location.href = 'kids.html';
    }
    function openPage6() {
        window.location.href = 'home_furniture.html';
    }
    function openPage7() {
        window.location.href = 'electrical.html';
    }
    function openPage8() {
        window.location.href = 'toys.html';
    }
    function openPage9() {
        window.location.href = 'two-wheelers.html';
    }
  
  //for nav link
    function OpenPageNav1() {
        window.location.href = 'grocery.html';
    }
    function OpenPageNav2() {
        window.location.href = 'mobiles.html';
    }
    function OpenPageNav3() {
        window.location.href = 'fassion.html';
    }
    function OpenPageNav4() {
        window.location.href = 'electronics.html';
    }
    function OpenPageNav5() {
        window.location.href = 'kids.html';
    }
    function OpenPageNav6() {
        window.location.href = 'home_furniture.html';
    }
    function OpenPageNav7() {
        window.location.href = 'electrical.html';
    }
    function OpenPageNav8() {
        window.location.href = 'toys.html';
    }
    function OpenPageNav9() {
        window.location.href = 'two-wheelers.html';
    }

    //for Products Section 
    function openMobilePage() {
        window.location.href = 'mobiles.html';
    }
    function ElectronicsPage() {
        window.location.href = 'electronics.html';
    }
    function home_furniture() {
        window.location.href = 'home_furniture.html';
    }
    


// Login / Logout js code start ->

    function usrLogin() {
        let email = document.getElementById('email_id').value;
        let pwd = document.getElementById('pwd').value;
        if (email != '' && pwd != '') {
            let data = { "email": email, "pwd": pwd };
            localStorage.setItem('userInfo', JSON.stringify(data));
            alert('Your Login Successful.');
            window.location = 'index.html';
        } else {
            alert('Please insert your login details');
        }
    }
    
    function usrLogout() {
        localStorage.removeItem('userInfo');
        window.location = 'index.html';
    }
    
    function checkLoginStatus() {
        let logoutButton = document.getElementById('logoutButton');
        let loginForm = document.getElementById('loginForm');
        let logbtn = document.getElementById('logbtn');
        if (localStorage.getItem('userInfo')) {
            let user = localStorage.getItem('userInfo');
            let val = JSON.parse(user);
            document.getElementById('greeting').innerText = 'Hello, ' + val.email;
            logoutButton.style.display = 'inline';
            if (loginForm) loginForm.style.display = 'none';
            if (logbtn) logbtn.style.display = 'none';
        } else {
            if (logoutButton) logoutButton.style.display = 'none';
            if (loginForm) loginForm.style.display = 'block';
        }
    }
    // without login access any page
    function checkAccess() {
        if (!localStorage.getItem('userInfo')) {
            alert('You must be logged in to access this page.');
            window.location = 'index.html';
        }
    }
    
    window.onload = function() {
        checkLoginStatus();
        if (document.body.classList.contains('protected')) {
            checkAccess();
        }
    };
    // login end............

   //start set Wishlist...............

function wishList(title, img, price) {
    // Retrieve existing wishlist from localStorage
    let arr = JSON.parse(localStorage.getItem('wish')) || [];
    
    // Define the item to be added
    let data = { title, img, p: price };

    // Check if the item already exists in the wishlist
    let itemExists = arr.some(item => item.title === data.title && item.img === data.img && item.p === data.p);

    if (itemExists) {
        // alert(itemExists);
        alert('Item already in wishlist');
    } else {
        // Add the item to the wishlist
        arr.push(data);
        localStorage.setItem('wish', JSON.stringify(arr));
        alert('Item added to wishlist');
    }
}

// Remove wish list...........
function remWishList(ind) {
    let wlist=JSON.parse(localStorage.getItem('wish'));
    let removed = wlist.splice(ind, 1);
    localStorage.setItem('wish',JSON.stringify(wlist));
    alert(`${removed.title} Item removed form wishlist`);
    window.location.reload();
}


// remove cart.......

function remcart(index) {
    let arr = JSON.parse(localStorage.getItem('quantity'));
    if (arr && arr.length > 0) {
        arr.splice(index, 1);
        localStorage.setItem('quantity', JSON.stringify(arr));
        location.reload(); // Reload page to reflect changes
    }
}

  // start set cart.................
function addcart(title, img, price,oprice,discount) {
    // Retrieve existing cart from localStorage
    let arr = JSON.parse(localStorage.getItem('quantity')) || [];
    
    // Define the item to be added
    let itemIndex = arr.findIndex(item => item.title === title && item.img === img);

    if (itemIndex > -1) {
        // Item exists, increase quantity
        arr[itemIndex].quantity += 1;
    } else {
        // Item does not exist, add to cart with quantity 1
        let data = { title, img, p: price, o:oprice, dis:discount, quantity: 1 };
        arr.push(data);
    }

    // Save updated cart to localStorage
    localStorage.setItem('quantity', JSON.stringify(arr));
    alert('Item added to cart');
}

// // rz-pay for card psage..
document.getElementById('rzp-button').onclick = function(e) {
    var options = {
        "key": "rzp_test_LOQW4a93WLPyup", // Replace with your Razorpay Key ID
        "amount": totamount *100 , // Amount in paise (50000 paise = 500 INR)
        "currency": "INR",
        "name": "ClikShop || E-Commerce Site",
        "description": "E-Commerce Site",
        "image": "./img/logo.png", // Optional
        "handler": function (response){
            localStorage.removeItem('quantity');
            alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
            window.location='success.html';
        },
        "prefill": {
            // "name": "Your Name",
            // "email": "your-email@example.com",
            // "contact": "9999999999"
        },
        "theme": {
            "color": "#013435"
        }
    };
    var paymentObject = new Razorpay(options);
    paymentObject.open();
};
   

// rz-pay for catagory psage..
function buyNow(name, price) {
    const amount = parseInt(price.replace('₹', '').replace(',', '')) * 100; // Convert to paise
    const options = {
      "key": "rzp_test_LOQW4a93WLPyup", // Replace with your Razorpay Key ID
      "amount": amount, // Amount in paise
        "currency": "INR",
        "name": "ClikShop || E-Commerce Site",
        "description": name,
        "image": "./img/logo.png",
        "handler": function (response){
            alert('Payment successful! ' + name + '. Payment ID: ' + response.razorpay_payment_id);
            window.location='success.html';
        },
     
        "theme": {
            "color": "#0f6bcb"
        }
    };
    const rzp1 = new Razorpay(options);
    rzp1.open();
}