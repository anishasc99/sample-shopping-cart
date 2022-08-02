/*
1) Don't let wishlist same items again
2) Change button text to wishlisted, once it's added to wishlist
3) When item removed from wishlist, change button back to add to wishlist
*/

const url="http://localhost:3000/items";

  document.body.addEventListener('click',(e)=>{
    if(e.target.className.includes('add-item')){
        console.log("Target Clicked!");
        console.log(e.target.parentNode);
       let item=e.target.parentNode.parentNode.cloneNode(true);
        console.log("cloned Item : "+ e.target.parentNode.querySelector("a").textContent);
       let modified_item= item.querySelector("a");
       
       modified_item.textContent="Delete";
       modified_item.classList="btn-sm btn-primary del-wishlist";
       if(document.getElementById("wishlist").querySelector("#"+item.id)==null) //check if element id already present or not
        {
          e.target.parentNode.querySelector("a").textContent = "Wishlisted";
          document.querySelector("#wishlist").appendChild(item);
          //document.querySelector("#wishlist").removeChild(countBar);
         total = parseInt(document.getElementById("total").textContent);
         quantity = parseInt(item.querySelector("input").value);
         price = parseInt(item.querySelector("span").textContent);
         document.getElementById("total").textContent = total + price*quantity;
         console.log(price+""+quantity+""+total);
        }
      else
      {
        alert("already added to wishlist");
      }
      }
    });
    // Delete Part
    document.body.addEventListener('click',(e)=>{
      let item=e.target.parentNode.parentNode;
        if(e.target.className.includes('del-wishlist')){
            console.log("Target Clicked!");
            console.log(e.target.parentNode.parentNode);
            id = e.target.parentNode.parentNode.id;
            total = parseInt(document.getElementById("total").textContent);
            quantity = parseInt(item.querySelector("input").value);
            price = parseInt(item.querySelector("span").textContent);
            console.log(price+""+quantity+""+total);
            document.getElementById("total").textContent = total - price*quantity;
            document.querySelector("#wishlist").removeChild(e.target.parentNode.parentNode);
            
            document.getElementById(id).querySelector("a").textContent = "Add to wishlist";
            
            
        }
        });
  document.body.addEventListener('click',(e)=>{
    card = e.target.parentNode.parentNode.parentNode;
    //console.log("hi"+  e.target.textContent);
    item = e.target.parentNode.parentNode;
    if(card.querySelector("a").textContent == "Delete")
      {
        total = parseInt(document.getElementById("total").textContent);
        quantity = parseInt(item.querySelector("input").value);
        price = parseInt(item.querySelector("span").textContent);
        console.log(price+" "+quantity+" "+total);
        if(e.target.textContent == "+")
        {
            document.getElementById("total").textContent = total+price;
        }
        else
        {
          if(quantity!=1)
          {
          document.getElementById("total").textContent = total-price;
          }
        }
      }
    if(e.target.textContent == "+")
    {
      classname = e.target.className;
      previous = parseInt(card.querySelector("input").value);
      console.log(card.querySelector("input").value);
      card.querySelector("input").value = previous+1;
    }
    if(e.target.textContent == "-")
    {
      classname = e.target.className;
      previous = parseInt(card.querySelector("input").value);
      console.log(card.querySelector("input").value);
      previous = previous - 1;
      if(previous>=1)
        card.querySelector("input").value = previous;
      else
      card.querySelector("input").value = 1;
    }
  });
  /*
    FETCH FROM DB.JSON

  */
    fetch(url)
    .then(data=>{
        return data.json();
    })
    .then(result=>{
        console.log(result);
        result.forEach(element => {
           console.log( element.id );
        });
    });
