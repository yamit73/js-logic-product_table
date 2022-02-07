document.getElementById("addProduct").onclick= function addProductToCart(){
    var proId=document.getElementById("productId").value;
    var proName=document.getElementById("productName").value;
    var proPrice=document.getElementById("productPrice").value;
    display(proId,proName,proPrice);
}
function display(proId,proName,proPrice){
    var p={
            name:proName,
            id:proId,
            price:proPrice
        };
    document.getElementById("productTable").style.display="block";
    var row=document.getElementById("productTableBody").insertRow(0);
    row.insertCell(0).innerHTML=p.id;
    row.insertCell(1).innerHTML=p.name;
    row.insertCell(2).innerHTML=p.price;

}
function isEmpty(productId,productName,productPrice){
    if(productId.length==0 || productName.length==0 || productPrice.length==0){
        return true;
    }
    return false;
}