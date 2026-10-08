/*
  ============================
  محمد ضياء Games - قائمة الألعاب
  ============================
  لإضافة لعبة جديدة:
  انسخ لعبة من داخل القائمة games
  وعدّل الاسم والوصف والتصنيف والرابط.

  play: رابط تشغيل اللعبة.
  download: اختياري، اتركه فارغًا إذا لا يوجد تحميل.
  icon: إيموجي مؤقت بدل صورة.
*/

const games = [
  /*
  مثال جاهز لإضافة لعبة:
  {
    name: "اسم اللعبة",
    description: "وصف قصير للعبة.",
    category: "أكشن",
    version: "1.0",
    date: "2026-10-08",
    icon: "🎮",
    play: "games/my-game/index.html",
    download: ""
  }
  */
];

const grid = document.getElementById("gamesGrid");
const empty = document.getElementById("empty");
const countText = document.getElementById("countText");
const search = document.getElementById("search");
const category = document.getElementById("category");
const sort = document.getElementById("sort");

function esc(value){
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}

function buildCategories(){
  const cats = [...new Set(games.map(g => g.category).filter(Boolean))].sort();
  cats.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    category.appendChild(option);
  });
}

function render(){
  const q = search.value.trim().toLowerCase();
  let list = games.filter(g => {
    const text = `${g.name} ${g.description} ${g.category}`.toLowerCase();
    return text.includes(q) && (category.value === "all" || g.category === category.value);
  });

  if(sort.value === "az"){
    list.sort((a,b) => a.name.localeCompare(b.name,"ar"));
  }else{
    list.sort((a,b) => String(b.date).localeCompare(String(a.date)));
  }

  grid.innerHTML = list.map(g => `
    <article class="card">
      <div class="cover">${esc(g.icon || "🎮")}</div>
      <div class="card-body">
        <span class="tag">${esc(g.category || "ألعاب")}</span>
        <h3>${esc(g.name)}</h3>
        <p>${esc(g.description || "")}</p>
        <div class="meta"><span>الإصدار ${esc(g.version || "1.0")}</span><span>${esc(g.date || "")}</span></div>
        ${g.play ? `<a class="btn primary" href="${esc(g.play)}">▶️ تشغيل اللعبة</a>` : `<button class="btn" disabled>قريبًا</button>`}
        ${g.download ? `<a class="btn" style="margin-top:8px" href="${esc(g.download)}" download>⬇️ تحميل</a>` : ""}
      </div>
    </article>
  `).join("");

  empty.style.display = list.length ? "none" : "block";
  countText.textContent = `${list.length} لعبة`;
}

buildCategories();
render();
search.addEventListener("input", render);
category.addEventListener("change", render);
sort.addEventListener("change", render);
