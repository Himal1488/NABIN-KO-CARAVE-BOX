
const rec=document.getElementById("recommended");
function draw(){
 rec.innerHTML="";
 foods.sort(()=>0.5-Math.random()).slice(0,5).forEach(f=>{
  rec.innerHTML+=`
  <div class="card" onclick="location.href='products.html#'+${f.id}">
   <img src="${f.image}">
   <h4>${f.name}</h4>
   <div class="price">NRP ${f.price}</div>
   <button>View</button><button>Add</button><button>Buy</button>
  </div>`;
 });
}
draw(); setInterval(draw,5000);
