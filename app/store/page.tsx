'use client';
import { useMemo, useState } from 'react';
import { ShoppingCart, Menu, X, Copy, CheckCircle2, MessageCircle } from 'lucide-react';

const products = [
  {name:'GOD Rank',price:2700,category:'lifesteal',icon:'👑',desc:'Premium Lifesteal rank with exclusive perks.'},
  {name:'BOSS Rank',price:2200,category:'lifesteal',icon:'⚔️',desc:'Powerful perks for competitive Lifesteal players.'},
  {name:'ACE Rank',price:1220,category:'lifesteal',icon:'🔥',desc:'Stand out with premium server perks.'},
  {name:'DEADLIEST Rank',price:670,category:'lifesteal',icon:'☠️',desc:'A strong upgrade for your next adventure.'},
  {name:'IMMORTAL Rank',price:440,category:'lifesteal',icon:'💀',desc:'Exclusive perks for dedicated players.'},
  {name:'Champion Monthly',price:220,category:'lifesteal',icon:'🏆',desc:'Monthly Champion subscription.'},
  {name:'Elite Monthly',price:100,category:'lifesteal',icon:'⭐',desc:'Monthly Elite subscription.'},
  {name:'15600 Coins',price:1220,category:'classic',icon:'💎',desc:'Coins for the Classic gamemode shop.'},
  {name:'7800 Coins',price:650,category:'classic',icon:'💎',desc:'A large Classic coin balance.'},
  {name:'5660 Coins',price:460,category:'classic',icon:'🪙',desc:'Classic coins for keys and perks.'},
  {name:'2800 Coins',price:250,category:'classic',icon:'🪙',desc:'Classic coin pack.'},
  {name:'1500 Coins',price:124,category:'classic',icon:'🪙',desc:'Classic coin starter pack.'},
  {name:'700 Coins',price:62,category:'classic',icon:'🪙',desc:'Small Classic coin pack.'}
];
const categories = [['home','HOME'],['fireplus','🔥 FIRE +'],['lifesteal','LIFESTEAL RANKS'],['classic','CLASSIC RANKS'],['coins','COINS']];

export default function StorePage(){
  const [category,setCategory]=useState('home'); const [cart,setCart]=useState<typeof products>([]); const [menu,setMenu]=useState(false); const [username,setUsername]=useState(''); const [copied,setCopied]=useState(false);
  const visible=useMemo(()=>category==='home'?products.slice(0,8):category==='coins'?products.filter(p=>p.category==='classic'&&p.name.includes('Coins')):products.filter(p=>p.category===category),[category]);
  const total=cart.reduce((s,p)=>s+p.price,0);
  const copyIp=async()=>{await navigator.clipboard?.writeText('zerithmc67.mcsh.io');setCopied(true);setTimeout(()=>setCopied(false),1400)};
  return <main className="fire-store">
    <header className="fire-topbar"><a href="/store" className="fire-logo"><span>◆</span> ODARIS <b>MC</b></a><div className="fire-server"><span className="online-dot"/><strong>zerithmc67.mcsh.io</strong><button onClick={copyIp}>{copied?<CheckCircle2 size={15}/>:<Copy size={15}/>}</button></div><div className="fire-actions"><a href="https://discord.gg/6ERJ8t7FtX"><MessageCircle size={17}/> DISCORD</a><button onClick={()=>setMenu(true)}><Menu size={20}/></button></div></header>
    <div className="fire-layout">
      <aside className="fire-sidebar"><div className="player-login"><div className="mc-avatar">◈</div><div><small>PLAYER LOGIN</small><strong>{username||'Guest'}</strong></div></div><label className="username-field"><span>MINECRAFT USERNAME</span><input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Enter username"/></label><div className="sidebar-title">SELECT A CATEGORY</div>{categories.map(([id,label])=><button key={id} className={category===id?'side-active':''} onClick={()=>setCategory(id)}>{label}<span>›</span></button>)}<a className="side-link" href="/">← BACK TO WEBSITE</a><a className="side-link" href="https://discord.gg/6ERJ8t7FtX">NEED SUPPORT?</a></aside>
      <section className="fire-content"><div className="fire-welcome"><div><span className="fire-eyebrow">WELCOME TO THE OFFICIAL</span><h1>ODARIS MC <em>STORE</em></h1><p>Support the network and unlock awesome in-game perks, ranks and rewards.</p></div><div className="fire-cart"><ShoppingCart/><span>{cart.length}</span><strong>₹{total}</strong></div></div>
        <div className="fire-category-head"><div><span className="fire-eyebrow">{category==='home'?'FEATURED PACKAGES':category.toUpperCase()}</span><h2>{category==='home'?'FEATURED PACKAGES':'CHOOSE YOUR UPGRADE'}</h2></div><span className="java-bedrock">JAVA + BEDROCK</span></div>
        <div className="fire-products">{visible.map(p=><article className="fire-product" key={p.name}><div className="fire-product-image"><span>{p.icon}</span></div><div className="fire-product-body"><small>{p.category==='lifesteal'?'LIFESTEAL':'CLASSIC'}</small><h3>{p.name}</h3><p>{p.desc}</p><div className="fire-buy"><strong>₹{p.price}</strong><button onClick={()=>setCart(c=>[...c,p])}>ADD TO CART <ShoppingCart size={15}/></button></div></div></article>)}</div>
        <section className="fire-info"><div><span className="fire-eyebrow">SUPPORT</span><h2>NEED HELP?</h2><p>Questions before checkout or a missing package? Join our Discord community and open a support ticket.</p><a href="https://discord.gg/6ERJ8t7FtX">JOIN DISCORD <MessageCircle size={15}/></a></div><div><span className="fire-eyebrow">IMPORTANT</span><h2>STORE POLICY</h2><p>Purchases are final. Delivery can take a few minutes. If your package does not arrive, contact staff with proof of purchase.</p></div></section>
        <footer className="fire-footer"><div><a href="/terms">TERMS & CONDITIONS</a><a href="/faq">FAQ</a><a href="https://discord.gg/6ERJ8t7FtX">DISCORD</a></div><p>© 2026 Odaris MC. Not affiliated with Mojang Studios or Microsoft.</p></footer>
      </section>
    </div>
    {menu&&<div className="fire-mobile-overlay" onClick={()=>setMenu(false)}><aside className="fire-mobile-menu" onClick={e=>e.stopPropagation()}><button onClick={()=>setMenu(false)}><X/></button><a href="/">HOME</a><a href="/store">STORE</a><a href="/#why">ABOUT</a><a href="https://discord.gg/6ERJ8t7FtX">DISCORD</a><a href="/terms">TERMS</a><a href="/faq">FAQ</a></aside></div>}
  </main>
}
