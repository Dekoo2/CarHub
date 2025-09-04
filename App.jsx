import { useState } from 'react'

export default function App(){
  const [lang,setLang] = useState('pt')
  const t = {
    pt: { title:'CarHub', slogan:'Marketplace de carros e serviços • Hamamatsu', demo:'Design azul/preto pronto. Suba para a Vercel.' },
    ja: { title:'CarHub', slogan:'車と自動車サービスのマーケット • 浜松', demo:'ブルー/ブラックのデザインが準備済み。Vercel にデプロイしてください。' }
  }[lang]
  return (
    <div>
      <header>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',maxWidth:960,margin:'0 auto'}}>
          <div>
            <h1 style={{margin:0,fontSize:22}}>{t.title}</h1>
            <div style={{opacity:.9,fontSize:12}}>{t.slogan}</div>
          </div>
          <select value={lang} onChange={e=>setLang(e.target.value)} style={{borderRadius:8,padding:6}}>
            <option value='pt'>Português</option>
            <option value='ja'>日本語</option>
          </select>
        </div>
      </header>
      <main style={{maxWidth:960,margin:'16px auto',padding:'0 16px'}}>
        <div className='card'>
          <h2 style={{marginTop:0}}>CarHub PWA</h2>
          <p>{t.demo}</p>
          <a className='btn' href='https://wa.me/' target='_blank' rel='noreferrer'>Contato WhatsApp (exemplo)</a>
        </div>
      </main>
    </div>
  )
}
