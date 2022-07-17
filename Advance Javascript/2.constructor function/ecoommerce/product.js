

let array=JSON.parse(localStorage.getItem("Products"));


function Count() {
   let length=array.length
   document.getElementById("tota").innerText=length;
}
Count();


function showTotal() {
    var total = array.reduce(function (acc,item) {
       return acc + Number(item.price);
    }, 0)

    console.log(total)
    document.getElementById('total').innerText = total
}

showTotal()

display(array)
;


 function display(array)
 {
    array.map((elem,index)=> {
  

        let div= document.createElement("div");
        let name= document.createElement("p");
        name.innerText=`name:${elem.name}`
        let image= document.createElement("img");
        image.src=`${elem.image}`

        let price= document.createElement("p");
        price.innerText=` price:${elem.price}`
        let gender= document.createElement("p");
        gender.innerText=`Gender:${elem.gender}`;
   
         // checking check box 

        // 1 ifstatement

        if(elem.sold === true){

            var sold = document.createElement("p");
            sold.innerText="Sold: Available"

            //  *button
            var soldbutton = document.createElement("button");
            soldbutton.innerText="sold";
            soldbutton.style.backgroundColor="green";

            // addEventListener to button
            soldbutton.addEventListener("click",function() {

                // 1st if statement
            if(soldbutton.style.backgroundColor=="green"){
                 soldbutton.style.backgroundColor="red"
                 sold.innerText="Sold: Not Available";
                 elem.check=false; 

            }
                //  1st else statement
            else {
            soldbutton.style.backgroundColor="green"
            sold.innerText="Sold: Available";
            elem.check=true;
           }
        
        

        })
        
        }

        // 2 else statement
        else{
            var sold = document.createElement("p");
            sold.innerText="Sold: Not Available";

        //    creating button
            var soldbutton = document.createElement("button");
           soldbutton.innerText="sold";
           soldbutton.style.backgroundColor="red";

        //   addEventListener to the button
        soldbutton.addEventListener("click",function(){

            // 2nd if statement
           if(soldbutton.style.backgroundColor=="green"){
                 soldbutton.style.backgroundColor="red"
                 sold.innerText="Sold:Not Available" 
                 elem.check=false;  
           }
            // 2nd else statement
           else{
            soldbutton.style.backgroundColor="green"
            sold.innerText="Sold: Available";
            elem.check=true;
           }
        

        })
        }
      

        let btn =document.createElement("button");
        btn.innerText="Remove"

        btn.addEventListener("click",function(){
            removeElement(index);
        })

        div.append(image,name,price,gender,sold,btn,soldbutton)
        document.querySelector("#container").append(div)
     
      

    })
 }

 function removeElement(index){
    array.splice(index,1);
    localStorage.setItem("Products",JSON.stringify(array))
   window.location.reload();
}