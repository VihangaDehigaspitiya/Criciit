var ProductArray = [];
        function myFunction(){
            console.log(ProductArray);
            var myWindow = window.open("", "MsgWindow", "width=300,height=250");
            for(var i = 0;i<ProductArray.length;i++){
               
                myWindow.document.write("Item : " + ProductArray[i]['Item'] + "<br>");
                myWindow.document.write("Price : " + ProductArray[i]['Price'] + "<br>");
                myWindow.document.write("Quantity : " + ProductArray[i]['Quantity'] + "<br>");
                myWindow.document.write("<br>");
            }
            var total = 0;
            for(var j = 0;j<ProductArray.length;j++){      
                total = total+ProductArray[j]['Price'];
            }
            myWindow.document.write("Total Price  : " + total + "<br>");
            myWindow.document.write("Thank You for shopping with CRICKIT!!<br> We hope to see you again,soon! <br>");
            
            
            
        }
        function displayShoppingCart(){
            var orderedProductsTableBody=document.getElementById("orderedProductsTableBody");
            while(orderedProductsTableBody.rows.length>0) {
                orderedProductsTableBody.deleteRow(0);
            }
            var TotPrice=0;
            for(var product in ProductArray){                   
                var row=orderedProductsTableBody.insertRow();        
                var itemCell = row.insertCell(0);
                var quantityCell = row.insertCell(1);
                var priceCell =  row.insertCell(2);
                priceCell.align="right";
                //fill cells with values from current product object of our array
                itemCell.innerHTML = ProductArray[product].Item;
                quantityCell.innerHTML = ProductArray[product].Quantity;
                priceCell.innerHTML = ProductArray[product].Price;
                TotPrice+=(ProductArray[product].Price);
            }           
            document.getElementById("cart_total").innerHTML=TotPrice;
        }
        
           function AddtoCart(item,quantity,price){
               
            
           //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Quantity and Price
           var singleProduct = {};
           //Fill the product object with data
           singleProduct.Item=item;
           singleProduct.Quantity=quantity;
        if (Number(quantity)==0){
           alert("Enter a quantity greater than zero ")
        }else{
           if (Number(quantity)>1){
                singleProduct.Price=Number(price)*Number(quantity);
           }else{
                singleProduct.Price=price;
           }
           //Add newly created product to our shopping cart 
           ProductArray.push(singleProduct);
           //call display function to show on screen
           displayShoppingCart();
        }
        
        } 

function checkOut(){
    alert(itemCell.innerHTML+" "+quantityCell.innerHTML+" "+priceCell.innerHTML);
}