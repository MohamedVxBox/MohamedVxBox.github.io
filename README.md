# محمد ضياء Games

منصة ألعاب ويب ثابتة تعمل على GitHub Pages.

## إضافة لعبة جديدة

افتح ملف `games.js`، ثم داخل `const games = [...]` أضف:

```js
{
  name: "اسم اللعبة",
  description: "وصف اللعبة",
  category: "أكشن",
  version: "1.0",
  date: "2026-10-08",
  icon: "🎮",
  play: "games/my-game/index.html",
  download: ""
}
```

### تشغيل لعبة
ضع ملفات اللعبة داخل:
`games/my-game/`

ويجب أن يكون ملف تشغيل اللعبة:
`games/my-game/index.html`

ثم اجعل قيمة `play`:
`games/my-game/index.html`

### تحميل APK أو ملف
ضع رابط الملف في `download`. اتركه فارغًا إذا لم يوجد تحميل.

لا تحتاج إلى تعديل `index.html` عند إضافة لعبة؛ غالبًا يكفي تعديل `games.js` ورفع ملفات اللعبة.
