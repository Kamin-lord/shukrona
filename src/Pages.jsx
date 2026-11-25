import { useState, useEffect, useMemo } from 'react'

const Letters = ({ t, d = 0, s = .05 }) => { let k = 0
  return t.split(' ').map((w, wi) => <span key={wi} className="w">{w.split('').map(c => <span key={k} className="ch" style={{ animationDelay: `${d + (k++) * s}s` }}>{c}</span>)}</span>) }
const Fade = ({ d = 0, children, as: T = 'p', cls = '' }) => <T className={'fd ' + cls} style={{ animationDelay: d + 's' }}>{children}</T>

const Confetti = ({ n = 54 }) => {
  const a = useMemo(() => Array.from({ length: n }, (_, i) => ({ l: Math.random() * 100, d: Math.random() * 1.4, s: 5 + Math.random() * 8, t: 2.6 + Math.random() * 2.4, star: i % 3 === 0, r: Math.random() * 360, g: i % 2 })), [n])
  return <div className="confetti">{a.map((p, i) => <i key={i} className={(p.star ? 'star ' : '') + (p.g ? 'gr' : '')} style={{ left: p.l + '%', animationDelay: p.d + 's', animationDuration: p.t + 's', '--s': p.s + 'px', '--r': p.r + 'deg' }}>{p.star ? '✦' : ''}</i>)}</div>
}

/* 01 — Quvonch */
export function P1({ next }) {
  return <div className="in">
    <div className="curtain" />
    <Fade d={1} cls="date">25 · 11</Fade>
    <h1 className="display"><Letters t="Happy Birthday, Shukrona." d={1.6} /></h1>
    <Fade d={4.6} cls="lead">Bugun oddiy kun emas. Bugun dunyoga yana bir yaxshi inson kelgan kun.</Fade>
    <Fade d={5.6} cls="small">Bu kichik sayt sen uchun tayyorlandi. Har bir sahifada alohida bir tilak, xotira va yaxshi niyat yashiringan.</Fade>
    <Fade d={6.6} as="div"><button className="cta" onClick={next}>Hikoyani boshlash →</button></Fade>
  </div>
}

/* 02 — Ilhom: chiziqli funksiya */
const F = ['y = kx + b', 'y = 2x + 1', 'k = Δy / Δx', 'f(x) = −x + 3', 'x = (y − b) / k', 'y = 0 ⇒ x = −b / k', 'k > 0 ↗', 'k < 0 ↘', 'b — boshlang‘ich nuqta', 'Δ', 'f(0) = b', 'y = 3x − 2']
function Graph({ k, b }) {
  const Y = v => 120 - v * 6
  return <svg className="graph" viewBox="0 0 240 150" role="img" aria-label="chiziqli funksiya grafigi">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => <path key={i} className="gr" d={`M${40 + i * 20} 6V140`} />)}
    {[-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(i => <path key={i} className="gr" d={`M20 ${Y(i)}H228`} />)}
    <path className="ax" d="M16 120H230M40 144V4" />
    <path className="ln" pathLength="1" d={`M20 ${Y(b - k)}L200 ${Y(k * 8 + b)}`} />
    <circle className="dot" cx="40" cy={Y(b)} r="4" /><text className="tx" x="46" y={Y(b) + 14}>b = {b}</text>
    {[1, 3, 5].map((x, i) => <circle key={x} className="dot d2" style={{ animationDelay: 3.2 + i * .4 + 's' }} cx={40 + x * 20} cy={Y(k * x + b)} r="3" />)}
  </svg>
}
export function P2() {
  const [k, setK] = useState(2)
  return <>
    {F.map((f, i) => <span key={i} className="formula" style={{ top: (i * 8.3 + 4) % 92 + '%', left: (i * 37) % 70 + '%', animationDuration: 38 + (i % 5) * 9 + 's', animationDelay: -i * 5 + 's' }}>{f}</span>)}
    <div className="in">
      <h2 className="title"><Letters t="Matematika — faqat raqamlar emas." d={.3} s={.035} /></h2>
      <div className="eq"><span style={{ animationDelay: '1.6s' }}>y = {k}x + 1</span></div>
      <Fade d={2} as="div"><Graph k={k} b={1} />
        <div className="kctl"><button onClick={() => setK(Math.max(-2, k - 1))} aria-label="k kamaytirish">−</button><span>k = {k}</span><button onClick={() => setK(Math.min(3, k + 1))} aria-label="k oshirish">+</button></div>
        <p className="small">{k > 0 ? 'k musbat: chiziq yuqoriga ko‘tariladi.' : k < 0 ? 'k manfiy: chiziq pastga tushadi.' : 'k = 0: chiziq tekis — harakat yo‘q.'} Sinab ko‘r!</p>
      </Fade>
      <Fade d={4} cls="lead">Chiziqli funksiyada eng muhimi — k, ya’ni qiyalik: yo‘nalish. Sen har kuni oz-ozdan oldinga yursang, hayotingning grafigi doim yuqoriga qarab boradi.</Fade>
      <Fade d={5} cls="lead">Dilmurod domlaning darslarida ba'zida murakkab tuyulgan masalalar ham yechimini topadi. Har bir misol, har bir formula va har bir yangi mavzu seni maqsadingga yana bir qadam yaqinlashtirsin.</Fade>
      <Fade d={6} cls="small">Mayli, ba'zi misollar qiyin bo‘lsin. Muhimi, sen ularni yechishga qodirsan!</Fade>
    </div>
  </>
}

/* 03 — Maqsad */
export function P3() {
  return <div className="in">
    <div className="book"><div className="pg" /><div className="pg r" /><div className="cover" /></div>
    <h2 className="title"><Letters t="Bir kun kelib, mehnat natija beradi." d={1.4} s={.03} /></h2>
    <Fade d={3.2} cls="lead">Ona tilidan milliy sertifikatga tayyorlanayotganingni unutma. Har bir o‘qilgan mavzu, bajarilgan test va sarflangan vaqt seni maqsadingga yaqinlashtiradi.</Fade>
    <Fade d={4.6} cls="serif">A yoki A+ — eng chiroyli natijalardan biri!</Fade>
    <div className="cert"><span className="aplus">A+</span></div>
    <Fade d={6.6} cls="small">Imtihon kuni o‘zingga ishon. Sen bunga erishishingni chin dildan tilayman!</Fade>
  </div>
}

/* 04 — Do‘stlik */
const FR = [['Azizaxon', 'Tarix', '◷', 'O‘tmish — kelajak darsi.'], ['Faridabonu', 'Matematika', '∑', 'Har bir yechim — kichik g‘alaba.'], ['Yasmina', 'Matematika', 'π', 'Aniqlik ham go‘zallik.'], ['Shirina', 'Ona tili', '¶', 'So‘z — eng katta kuch.']]
export function P4() {
  const [o, setO] = useState(-1)
  return <div className="in">
    <h2 className="title"><Letters t="Yaxshi insonlar bilan o‘tgan kunlar boshqacha." s={.03} /></h2>
    <div className="cards">
      {FR.map(([n, s, g, q], i) => <button key={n} className={'card' + (o === i ? ' flip' : '')} style={{ animationDelay: .8 + i * .15 + 's' }} onClick={() => setO(o === i ? -1 : i)}>
        <span className="face f"><b className="glyph">{g}</b><strong>{n}</strong><em>{s}</em></span>
        <span className="face bk"><em>{q}</em></span>
      </button>)}
    </div>
    <Fade d={2} cls="small">Har kimning o‘z yo‘li, o‘z orzusi va o‘z qiziqishlari bor. Ammo birga o‘tilgan kunlar va yaratilgan xotiralar doimo qadrli bo‘lib qoladi.</Fade>
  </div>
}

/* 05 — Mehr */
export function P5() {
  return <>
    <div className="glow" />
    <div className="in calm">
      <h2 className="title"><Letters t="Avval onangizni tabriklang." d={.5} s={.07} /></h2>
      <Fade d={3} cls="lead">Bugun sizning tug‘ilgan kuningiz. Ammo bir narsani unutmang: bu kun faqat sizning bayramingiz emas. Bu kun sizni dunyoga keltirgan, mehr bergan va tarbiyalagan inson — onangiz uchun ham alohida kun.</Fade>
      <Fade d={6.5} cls="lead">Shuning uchun bugun birinchi bo‘lib onangizni tabriklang. Chunki sizning borligingiz — u kishining eng katta baxtlaridan biri.</Fade>
      <Fade d={10} cls="serif">Onangiz doimo sog‘-salomat bo‘lsin. Siz esa u kishining faxri bo‘lib yuring.</Fade>
    </div>
  </>
}

/* 06 — Bayram */
const WISHES = ['Sog‘liging doim mustahkam bo‘lsin.', 'Oilangda tinchlik va baxt hukm sursin.', 'Har kuning quvonchli xabarlar bilan boshlansin.', 'Matematikadagi har bir masala senga bo‘ysunsin.', 'Ona tilidan milliy sertifikatda A+ natija ol.', 'Yaxshi dugonalaring hech qachon yoningdan arimasin.', 'Har bir qiyinchilikdan kuchliroq bo‘lib chiq.', 'O‘zingga bo‘lgan ishonching hech qachon so‘nmasin.', 'Orzularing kattaligidan qo‘rqma — ular aynan sen uchun.', 'Onangning duolari doim senga yo‘ldosh bo‘lsin.', 'Mehnating o‘z vaqtida mukofotini bersin.', 'Yuzingdan tabassum, qalbingdan nur aksiz bo‘lmasin.', 'Eng katta orzuing haqiqatga aylansin.']
const POS = Array.from({ length: 13 }, (_, i) => i < 7 ? { l: 7 + i * 14.3, row: 0 } : { l: 14 + (i - 7) * 14.3, row: 1 })
export function P6({ next }) {
  const [lit, setLit] = useState(Array(13).fill(true))
  const [cur, setCur] = useState(null)
  const left = lit.filter(Boolean).length
  const done = left === 0
  const out = i => { if (!lit[i]) return; setCur(13 - left); setLit(l => l.map((v, k) => k === i ? false : v)) }
  return <div className="in">
    <Fade d={.2} cls="serif sm">13 ta sham. 13 ta yangi imkoniyat.</Fade>
    <Fade d={.6} cls="small">Har bir shamga bitta yaxshi niyat yashiringan.</Fade>
    <div className="cake">
      <div className="topt">
        <div className="frost" />
        <div className="candles">{POS.map((p, i) => <button key={i} aria-label={`Sham ${i + 1}`} className={'candle r' + p.row} style={{ left: p.l + '%' }} onClick={() => out(i)}>
          {lit[i] ? <span className="flame" style={{ animationDelay: -i * .13 + 's' }} /> : <span className="smoke" />}
        </button>)}</div>
      </div>
      <div className="t2" /><div className="t3" /><div className="plate" />
    </div>
    <div className="wishbox">{cur === null ? <p className="small">Shamni bosib o‘chir — tilak ochiladi.</p> : <p key={cur} className="fd wishtxt"><b>{cur + 1} / 13</b>{WISHES[cur]}</p>}</div>
    {done && <><Confetti /><h2 className="serif wish">Endi eng katta orzuingni tilak qil!</h2><button className="cta" onClick={next}>Keyingi sahifa →</button></>}
  </div>
}

/* 07 — Minnatdorchilik */
export function P7() {
  const [st, setSt] = useState('closed') // closed → opening → read → final
  const [n, setN] = useState(0)
  useEffect(() => { if (st === 'opening') { const t = setTimeout(() => setSt('read'), 2300); return () => clearTimeout(t) } }, [st])
  const swapped = n % 2 === 1, g = Math.min(n, 3)
  if (st === 'final') return <div className="final"><Confetti n={70} />
    <div className="in">
      <div className="smile">☺</div>
      <Fade d={.4} cls="serif sm">THANK YOU FOR OPENING THIS LITTLE STORY.</Fade>
      <Fade d={2} cls="studio">Dasada.Studios</Fade>
      <Fade d={3.2} cls="small">Created by</Fade>
      <h1 className="kamin"><Letters t="KAMIN" d={3.6} s={.18} /></h1>
      <Fade d={5.6} cls="small">Specially made for Shukrona.</Fade>
    </div></div>
  if (st === 'read') return <div className="in letterview">
    <div className="stars" />
    <article className="letter">
      <h3>Dear Shukrona,</h3>
      <p>Tug‘ilgan kuning muborak bo‘lsin!</p>
      <p>Senga avvalo mustahkam sog‘lik, oilaviy baxt, ko‘plab quvonchli kunlar va barcha orzularing amalga oshishini tilayman.</p>
      <p>13 yosh — hayotning yangi bobi boshlanadigan davr. Bu yoshda qilingan har bir yaxshi odat, o‘qilgan har bir kitob kelajakdagi katta yutuqning poydevori bo‘ladi.</p>
      <p>O‘qishlaringda omad, milliy sertifikatda A yoki A+ natija, hayotingda esa faqat yaxshi insonlar hamroh bo‘lishini istayman.</p>
      <p>Matematikada chiziqli funksiyagacha yetib keldingiz — bu allaqachon katta yo‘l. Eslab qol: y = kx + b da k — qiyalik. Sen har kuni oz-ozdan oldinga yursang, hayotingning k si doim musbat bo‘ladi.</p>
      <p>Xato qilishdan qo‘rqma: har bir xato to‘g‘ri yechimga olib boradigan bir qadamdir. Qiyin masala oldida to‘xtab qolsang ham, ertaga u albatta yechiladi.</p>
      <p>Azizaxon, Faridabonu, Yasmina, Shirina kabi samimiy insonlar bilan o‘tgan kunlar eng chiroyli xotiraga aylansin. Yaxshi do‘st — hayotdagi eng katta boylik.</p>
      <p>Onangning mehrini, duosini va qo‘llab-quvvatlashini har doim qadrla. Sening muvaffaqiyating — u kishining eng katta quvonchi.</p>
      <p>Doimo shunday yaxshi, samimiy va mehribon inson bo‘lib qol.</p>
      <p>Kelajakdagi barcha maqsadlaringga erishishingni chin dildan tilayman!</p>
      <p className="sign">Hurmat bilan,<br />Muhammadibrohim.</p>
    </article>
    <div className="choice">
      <button className="ok" style={{ transform: `translateX(${swapped ? 104 : 0}%) scale(${1 + g * .1})`, zIndex: 2 }} onClick={() => setSt('final')}>❤️ ZO‘R</button>
      <button className="bad" style={{ transform: `translateX(${swapped ? 0 : 104}%) scale(${1 - g * .08})` }} onClick={() => setN(n + 1)}>👎 YOMON</button>
    </div>
    <p className="small hint">{n === 0 ? '' : n < 3 ? 'Hmm… ZO‘R tugmasi kattalashib ketdi 😄' : 'Mayli, ZO‘R ni bosaylik 🙂'}</p>
  </div>
  return <div className="in">
    <div className="stars" />
    <div className={'env' + (st === 'opening' ? ' open' : '')} onClick={() => st === 'closed' && setSt('opening')} role="button" tabIndex={0}>
      <div className="paper" /><div className="front" /><div className="flap" />
    </div>
    <Fade d={.4} cls="serif sm">Shukrona uchun maxsus xat.</Fade>
    <Fade d={1.2} cls="small">Uni ochish uchun ustiga bosing.</Fade>
  </div>
}
