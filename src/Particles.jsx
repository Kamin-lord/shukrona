import { useEffect, useRef } from 'react'
export default function Particles({ dark }) {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, x = c.getContext('2d')
    let w, h, raf
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const fit = () => { w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; x.setTransform(dpr, 0, 0, dpr, 0, 0) }
    fit(); addEventListener('resize', fit)
    const ps = Array.from({ length: 46 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.6 + .4, v: Math.random() * .00012 + .00003, a: Math.random() * .5 + .15 }))
    const loop = () => {
      x.clearRect(0, 0, w, h)
      for (const p of ps) {
        p.y -= p.v; if (p.y < -.02) { p.y = 1.02; p.x = Math.random() }
        x.globalAlpha = p.a; x.fillStyle = dark ? '#fff' : '#080808'
        x.beginPath(); x.arc(p.x * w, p.y * h, p.r, 0, 7); x.fill()
      }
      raf = requestAnimationFrame(loop)
    }
    loop()
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', fit) }
  }, [dark])
  return <canvas ref={ref} />
}
