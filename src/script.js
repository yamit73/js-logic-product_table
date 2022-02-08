var products = [];
document.getElementById("addProduct").onclick=function addToCart() {
  var proId = document.getElementById("productId").value;
  var proName = document.getElementById("productName").value;
  var proPrice = document.getElementById("productPrice").value;
  var proJson = {
    id: proId,
    name: proName,
    price: proPrice,
  };
  if (proId != "" && proName != "" && proPrice != "") {
    if(!checkProduct(proJson.id)){
        products.push(proJson);
    }else{
        alert("Product "+proJson.id+" Already exist")
    }
    display();
  }
}
//to check if products already exist in the product array
function checkProduct(proId) {
    for (var i = 0; i < products.length; i++) {
        if (proId == products[i].id) {
            return true;
        }
    }
    return false;
}

//to display the products 
function display() {
    var tBody="";
  for (var i = 0; i< products.length; i++) {
     tBody+=' <tr>\
                <td>'+products[i].id+'</td>\
                <td>'+products[i].name+'</td>\
                <td>'+products[i].price+'</td>\
            </tr>';
  }
  document.getElementById("productBody").innerHTML=tBody
  document.getElementById("productTable").style.display = "block";
}
