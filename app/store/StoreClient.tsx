'use client';
import { useMemo, useState } from 'react';
import { Check, ChevronRight, Copy, MessageCircle, Menu, ShoppingCart, X } from 'lucide-react';

type Product={name:string;price:number;category:'lifesteal'|'classic';icon:string;description:string;tag:string};
const products:Product[]=[
{name:'GOD Rank',price:2700,category:'lifesteal',icon:'👑',tag:'LIFESTEAL RANKS',description:'Premium rank with exclusive Lifesteal perks.'},
{name:'BOSS Rank',price:2200,category:'lifesteal',icon:'⚔️',tag:'LIFESTEAL RANKS',description:'Powerful perks for competitive players.'},
{name:'ACE Rank',price:1220,category:'lifesteal',icon:'🔥',tag:'LIFESTEAL RANKS',description:'A premium upgrade for your next adventure.'},
{name:'DEADLIEST Rank',price:670,category:'lifesteal',icon:'☠️',tag:'LIFESTEAL RANKS',description:'A strong rank for dedicated players.'},
{name:'IMMORTAL Rank',price:440,category:'lifesteal',icon:'💀',tag:'LIFESTEAL RANKS',description:'Exclusive perks and a premium experience.'},
{name:'Champion Monthly',price:220,category:'lifesteal',icon:'🏆',tag:'LIFESTEAL RANKS',description:'Monthly Champion subscription.'},
{name:'Elite Monthly',price:100,category:'lifesteal',icon:'⭐',tag:'LIFESTEAL RANKS',description:'Monthly Elite subscription.'},
{name:'15600 Coins',price:1220,category:'classic',icon:'💎',tag:'CLASSIC COINS',description:'Large Classic coin pack.'},
{name:'7800 Coins',price:650,category:'classic',icon:'💎',tag:'CLASSIC COINS',description:'Classic coins for your in-game purchases.'},
{name:'5660 Coins',price:460,category:'classic',icon:'🪙',tag:'CLASSIC COINS',description:'Classic coin pack.'},
{name:'2800 Coins',price:250,category:'classic',icon:'🪙',tag:'CLASSIC COINS',description:'Classic coin pack.'},
{name:'1500 Coins',price:124,category:'classic',icon:'🪙',tag:'CLASSIC COINS',description:'Classic starter coin pack.'},
{name:'700 Coins',price:62,category:'classic',icon:'🪙',tag:'CLASSIC COINS',description:'Small Classic coin pack.'}
];
const cats=[['featured','🔥 ODARIS +'],['lifesteal','LIFESTEAL RANKS'],['classic','CLASSIC RANKS'],['coins','COINS']];

export default function StoreClient(){
 const [cat,setCat]=useState('featured'); const [cart,setCart]=useState<Product[]>([]); const [username,setUsername]=useState(''); const [copied,setCopied]=useState(false); const [menu,setMenu]=useState(false); const [cartOpen,setCartOpen]=useState(false);
 const visible=useMemo(()=>cat==='featured'?products.slice(0,8):cat==='coins'?products.filter(p=>p.category==='classic'):products.filter(p=>p.category===cat),[cat]);
 const total=cart.reduce((a,p)=>a+p.price,0);
 const copyIp=async()=>{await navigator.clipboard?.writeText('zerithmc67.mcsh.io');setCopied(true);setTimeout(()=>setCopied(false),1400)};
 const add=(p:Product)=>{setCart(c=>[...c,p]);setCartOpen(true)};
 return <main className="store">
  <header className="top"><a className="logo" href="/"><i>◆</i> ODARIS <b>MC</b></a><div className="top-right"><div className="ip-mini"><span className="dot"/><strong>zerithmc67.mcsh.io</strong><button className="copy" onClick={copyIp}>{copied?<Check size={14}/>:<Copy size={14}/>}</button></div><a className="discord" href="https://discord.gg/6ERJ8t7FtX"><MessageCircle size={15}/> DISCORD</a><button className="hamb" onClick={()=>setMenu(true)}><Menu size={20}/></button></div></header>
  <div className="layout">
   <aside className="sidebar"><div className="login-card"><div className="avatar">◈</div><div><small>PLAYER</small><strong>{username||'Guest'}</strong></div></div><label className="field"><span>MINECRAFT USERNAME</span><input value={username} onChange={e=>setUsername(e.target.value.replace(/\s/g,''))} placeholder="Enter username"/></label><div className="side-label">SELECT A CATEGORY</div>{cats.map(([id,label])=><button className={`cat ${cat===id?'active':''}`} key={id} onClick={()=>setCat(id)}>{label}<b><ChevronRight size={14}/></b></button>)}<div className="side-bottom"><a href="/">← BACK TO WEBSITE</a><a href="https://discord.gg/6ERJ8t7FtX">NEED SUPPORT?</a><a href="/terms">TERMS & CONDITIONS</a><a href="/faq">FAQ</a></div></aside>
   <section className="main"><div className="welcome"><div><span className="eyebrow">WELCOME TO THE OFFICIAL</span><h1>ODARIS MC <em>STORE</em></h1><p>Odaris MC is a free-to-play Minecraft network. Support the server and unlock optional ranks, coins and special perks for your gameplay.</p></div><button className="cart-button" onClick={()=>setCartOpen(true)}><ShoppingCart size={17}/><span className="count">{cart.length}</span><strong>₹{total}</strong></button></div>
    <div className="category-head"><div><span className="eyebrow">{cat==='featured'?'FEATURED PACKAGES':cat.toUpperCase()}</span><h2>{cat==='featured'?'Featured Packages':cat==='lifesteal'?'Lifesteal Ranks':cat==='classic'?'Classic Ranks':'Coins'}</h2></div><span className="edition">JAVA + BEDROCK</span></div>
    <div className="grid">{visible.map(p=><article className="card" key={p.name}><div className="art"><span className="item">{p.icon}</span></div><div className="body"><span className="tag">{p.tag}</span><h3>{p.name}</h3><p>{p.description}</p><div className="buy"><span className="price">₹{p.price}</span><button onClick={()=>add(p)}>ADD TO CART <ShoppingCart size={13}/></button></div></div></article>)}</div>
    <section className="info"><div className="info-box"><span className="eyebrow">SUPPORT</span><h2>NEED HELP?</h2><p>Questions before checkout or a package that has not arrived? Join the Odaris MC Discord and contact staff with your Minecraft username and payment details.</p><a href="https://discord.gg/6ERJ8t7FtX">DISCORD SERVER <MessageCircle size={13}/></a></div><div className="info-box"><span className="eyebrow">REFUND POLICY</span><h2>IMPORTANT</h2><p>All store purchases are digital Minecraft server benefits. Review your username and package before checkout. For payment or delivery problems, contact Odaris MC support through Discord.</p></div></section>
    <footer className="footer"><div><a href="/faq">FAQ</a><a href="/terms">TERMS</a><a href="https://discord.gg/6ERJ8t7FtX">DISCORD</a></div><p>© 2026 Odaris MC. Not affiliated with Mojang Studios or Microsoft.</p></footer>
   </section>
  </div>
  {menu&&<div className="overlay" onClick={()=>setMenu(false)}><nav className="drawer" onClick={e=>e.stopPropagation()}><button onClick={()=>setMenu(false)}><X/></button><a href="/">HOME</a><a href="/store">STORE</a><a href="/faq">FAQ</a><a href="/terms">TERMS & CONDITIONS</a><a href="https://discord.gg/6ERJ8t7FtX">DISCORD</a></nav></div>}
  {cartOpen&&<div className="overlay" onClick={()=>setCartOpen(false)}><aside className="cart-panel" onClick={e=>e.stopPropagation()}><div className="cart-head"><h2>YOUR CART</h2><button className="close" onClick={()=>setCartOpen(false)}><X/></button></div>{cart.length===0?<p className="empty">Your cart is empty. Select a package from the store to begin.</p>:cart.map((p,i)=><div className="cart-item" key={`${p.name}-${i}`}><div><strong>{p.name}</strong><small>₹{p.price}</small></div><button className="remove" onClick={()=>setCart(c=>c.filter((_,x)=>x!==i))}>REMOVE</button></div>)}<div className="cart-total"><span>TOTAL</span><strong>₹{total}</strong></div><a className="checkout" href="https://discord.gg/6ERJ8t7FtX">CONTINUE TO DISCORD CHECKOUT</a><p className="notice">Enter your Minecraft username in the sidebar before contacting staff. Payment processing is intentionally handled through your configured store/payment provider rather than collecting payment details here.</p></aside></div>}
 </main>
}