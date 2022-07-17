
 let array= JSON.parse(localStorage.getItem("product")) || [];
function Product(n,c,i,p,g,s){
    this.name=n;
    this.category=c;
    this.image=i;
    this.price=p;
    this.gender=g;
    this.sold=s;
}

function submitForm(e){
    e.preventDefault();
    // console.log("aman")

    let form=document.querySelector("#form")
    let name=form.name.value;
    let category=form.category.value;
    let image=form.image.value;
    let price=form.price.value;
    let gender=form.gender.value;
    let sold=form.sold.value;

    // console.log(name,category,image,price,gender,sold)

    let pro= new Product(name,category,image,price,gender,sold)
  array.push(pro);

  localStorage.setItem("Products", JSON.stringify(array))
  window.location.reload();
}