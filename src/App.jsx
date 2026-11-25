import { useState, useRef } from 'react'
import Particles from './Particles.jsx'
import { P1, P2, P3, P4, P5, P6, P7 } from './Pages.jsx'

const pages = [P1, P2, P3, P4, P5, P6, P7]
const names = ['A Special Day', 'The Mathematics', 'The Dream of A+', 'People Around You', 'The Most Important Person', 'Make a Wish', 'A Letter for You']

export default function App() {
  const [i, setI] = useState(0)
  const sx = useRef(0)
  const go = n => n >= 0 && n < 7 && setI(n)
  const P = pages[i], dark = i !== 4, n2 = String(i + 1).padStart(2, '0')
  return (
    <div className={'app ' + (dark ? 'dark' : 'light')} onTouchStart={e => (sx.current = e.touches[0].clientX)}
      onTouchEnd={e => { const d = e.changedTouches[0].clientX - sx.current; if (Math.abs(d) > 90 && !e.target.closest('.letter,.cake,.card')) go(i + (d < 0 ? 1 : -1)) }}>
      <Particles dark={dark} />
      <div className="num" key={'n' + i}>{n2}</div>
      <div className="top"><span>{n2} / 07</span><span className="brand">{names[i]}</span></div>
      <div className="bar"><i style={{ width: ((i + 1) / 7) * 100 + '%' }} /></div>
      <div className="page" key={i}><P next={() => go(i + 1)} /></div>
      <div className="nav">
        <button className="ghost" style={{ visibility: i > 0 ? 'visible' : 'hidden' }} onClick={() => go(i - 1)}>← Orqaga</button>
        {i < 6 && <button className="ghost" onClick={() => go(i + 1)}>Keyingisi →</button>}
      </div>
    </div>
  )
}
