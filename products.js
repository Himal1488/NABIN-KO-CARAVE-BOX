
const box=document.getElementById("products");
foods.forEach(f=>{
 box.innerHTML+=`
 <div class="card" id="p${f.id}">
  <img src="${f.image}">
  <h4>${f.name}</h4>
  <div class="price">NRP ${f.price}</div>
  <button>View</button><button>Add</button><button>Buy</button>
 </div>`;
});

// highlight from hash
const pid = location.hash.replace('#','');
if(pid){
 const el = document.getElementById('p'+pid);
 if(el){
   el.classList.add('highlight');
   el.scrollIntoView({behavior:'smooth',block:'center'});
 }
}
