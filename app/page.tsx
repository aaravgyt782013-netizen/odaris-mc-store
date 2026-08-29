'use client';
import { useState } from 'react';
import { Copy, ShoppingCart, Sparkles, Shield, Zap, MessageCircle, Check } from 'lucide-react';

const products = [
  {name:'Lifesteal Rank', price:'₹199', tag:'POPULAR', icon:'⚔️', desc:'Powerful perks for your next adventure.'},
  {name:'Champion Rank', price:'₹399', tag:'BEST VALUE', icon:'👑', desc:'Premium perks, commands and cosmetics.'},
  {name:'Crate Key Pack', price:'₹149', tag:'5 KEYS', icon:'🔑', desc:'Unlock rewards from the Odaris crates.'},
  {name:'1000 Coins', price:'₹99', tag:'COINS', icon:'💎', desc:'Spend coins on in-game goodies.'},
  {name:'Warrior Bundle', price:'₹599', tag:'BUNDLE', icon:'🛡️', desc:'A complete starter bundle for warriors.'},
  {name:'Mystery Crate', price:'₹79', tag:'LUCKY', icon:'🎁', desc:'Open for a surprise reward.'}
];

export default function Home(){
 const [copied,setCopied]=useState(false); const [cart,setCart]=useState<string[]>([]);
 const copy=()=>{navigator.clipboard?.writeText('zerithmc67.mcsh.io');setCopied(true);setTimeout(()=>setCopied(false),1500)};
 return <main>
  <nav className="nav"><div className="brand"><span className="cube">◆</span> ODARIS <b>MC</b></div><div className="links"><a href="#store">Store</a><a href="#why">Why Us</a><a href="https://discord.gg/6ERJ8t7FtX">Discord</a><a href="/admin">Admin</a></div><button className="cart">Cart <span>{cart.length}</span><ShoppingCart size={17}/></button></nav>
  <section className="hero"><div className="stars"/><div className="hero-inner"><div className="pill"><span/> ODARIS MC NETWORK</div><h1>YOUR NEXT<br/><em>ADVENTURE</em> AWAITS.</h1><p>Dominate the battlefield. Build your legacy.<br/>Join the community and experience Minecraft differently.</p><div className="actions"><button className="primary" onClick={()=>document.getElementById('store')?.scrollIntoView({behavior:'smooth'})}>EXPLORE STORE <Zap size={17}/></button><button className="secondary" onClick={copy}>{copied?<><Check size={17}/> COPIED</>:<><Copy size={17}/> COPY IP</>}</button></div><div className="server"><span className="online"/> <b>SERVER ONLINE</b><span className="divider"/> zerithmc67.mcsh.io</div></div></section>
  <section className="features" id="why"><div><Shield/><h3>SECURE</h3><p>Reliable purchases and protected checkout.</p></div><div><Sparkles/><h3>PREMIUM</h3><p>Unique perks made for the Odaris community.</p></div><div><Zap/><h3>INSTANT</h3><p>Fast digital delivery after checkout.</p></div><div><MessageCircle/><h3>COMMUNITY</h3><p>Need help? Join our Discord anytime.</p></div></section>
  <section className="store" id="store"><div className="section-head"><div><span>OFFICIAL STORE</span><h2>POWER UP YOUR <i>GAME.</i></h2></div><p>Choose your upgrade and get ready for battle.</p></div><div className="grid">{products.map(p=><article className="card" key={p.name}><div className="product-icon">{p.icon}</div><div className="tag">{p.tag}</div><h3>{p.name}</h3><p>{p.desc}</p><div className="buy"><strong>{p.price}</strong><button onClick={()=>setCart(c=>[...c,p.name])}>ADD <ShoppingCart size={15}/></button></div></article>)}</div></section>
  <footer><div className="brand"><span className="cube">◆</span> ODARIS <b>MC</b></div><p>© 2026 Odaris MC. Not affiliated with Mojang Studios.</p><a href="https://discord.gg/6ERJ8t7FtX">Join Discord →</a></footer>
 </main>
}
