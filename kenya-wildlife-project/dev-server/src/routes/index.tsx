import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wild Kenya — Safari, Wildlife & The Big Five" },
      {
        name: "description",
        content:
          "Discover Kenya's wildlife, national parks and the legendary Big Five. Book safaris and explore parks like Maasai Mara, Amboseli, Tsavo and more.",
      },
      { property: "og:title", content: "Wild Kenya — Safari, Wildlife & The Big Five" },
      {
        property: "og:description",
        content:
          "Discover Kenya's wildlife, national parks and the legendary Big Five.",
      },
    ],
  }),
  component: Index,
});

const html = `
<style>
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  :root{
    --bg:#0b0f0d;--ink:#f6f1e7;--muted:#c9c1ad;--accent:#e0a85a;--accent-2:#7a5c2e;
    --green:#1f3b2d;--red:#a23217;--card:#14191680;
    --serif:'Cormorant Garamond',Georgia,serif;
    --sans:'Inter',system-ui,sans-serif;
  }
  html{scroll-behavior:smooth}
  body.kw{font-family:var(--sans);background:var(--bg);color:var(--ink);overflow-x:hidden;line-height:1.6}
  .kw img{display:block;max-width:100%;height:auto}
  .kw a{color:inherit;text-decoration:none}
  .kw .container{max-width:1200px;margin:0 auto;padding:0 24px}

  /* NAV */
  .kw nav.kw-nav{position:fixed;top:0;left:0;right:0;z-index:50;padding:18px 0;backdrop-filter:blur(12px);background:rgba(11,15,13,.55);border-bottom:1px solid rgba(255,255,255,.06);transition:.4s}
  .kw nav .row{display:flex;justify-content:space-between;align-items:center;gap:24px}
  .kw .logo{font-family:var(--serif);font-size:24px;letter-spacing:.5px;color:var(--accent)}
  .kw .logo span{color:var(--ink)}
  .kw .links{display:flex;gap:28px;font-size:14px;letter-spacing:.08em;text-transform:uppercase}
  .kw .links a{position:relative;padding:6px 0;transition:.3s}
  .kw .links a:hover{color:var(--accent)}
  .kw .links a::after{content:"";position:absolute;left:0;bottom:0;height:1px;width:0;background:var(--accent);transition:.4s}
  .kw .links a:hover::after{width:100%}
  @media(max-width:820px){.kw .links{display:none}}

  /* HERO */
  .kw .hero{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden}
  .kw .hero-bg{position:absolute;inset:0;background:url('https://commons.wikimedia.org/wiki/Special:FilePath/Wildebeest_Migration_in_Maasai_Mara_National_Park.jpg?width=2000') center/cover no-repeat;transform:scale(1.05);animation:slowZoom 20s ease-in-out infinite alternate}
  .kw .hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,15,13,.4) 0%,rgba(11,15,13,.7) 60%,var(--bg) 100%)}
  @keyframes slowZoom{from{transform:scale(1.05)}to{transform:scale(1.18)}}
  .kw .hero .container{position:relative;z-index:2;padding-top:120px;padding-bottom:80px}
  .kw .eyebrow{display:inline-block;padding:8px 16px;border:1px solid rgba(224,168,90,.4);border-radius:999px;color:var(--accent);font-size:12px;letter-spacing:.3em;text-transform:uppercase;margin-bottom:32px;opacity:0;animation:rise 1s .2s forwards}
  .kw h1.title{font-family:var(--serif);font-weight:500;font-size:clamp(48px,9vw,128px);line-height:.95;letter-spacing:-.02em;margin-bottom:24px}
  .kw h1.title .l{display:block;overflow:hidden}
  .kw h1.title .l span{display:inline-block;transform:translateY(100%);animation:slideUp 1.1s cubic-bezier(.2,.8,.2,1) forwards}
  .kw h1.title .l:nth-child(2) span{animation-delay:.15s}
  .kw h1.title .l:nth-child(3) span{animation-delay:.3s;color:var(--accent);font-style:italic}
  @keyframes slideUp{to{transform:translateY(0)}}
  @keyframes rise{to{opacity:1}}
  .kw .hero p.lead{max-width:560px;color:var(--muted);font-size:18px;margin-top:28px;opacity:0;animation:rise 1s .9s forwards}
  .kw .cta-row{display:flex;flex-wrap:wrap;gap:16px;margin-top:40px;opacity:0;animation:rise 1s 1.1s forwards}
  .kw .btn{display:inline-flex;align-items:center;gap:10px;padding:16px 28px;border-radius:999px;font-size:14px;letter-spacing:.1em;text-transform:uppercase;transition:.35s;cursor:pointer;border:1px solid transparent}
  .kw .btn-primary{background:var(--accent);color:#1a1208}
  .kw .btn-primary:hover{background:#f0bb6f;transform:translateY(-2px);box-shadow:0 12px 30px -10px rgba(224,168,90,.6)}
  .kw .btn-ghost{border-color:rgba(246,241,231,.3);color:var(--ink)}
  .kw .btn-ghost:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}
  .kw .btn .arr{transition:.35s}
  .kw .btn:hover .arr{transform:translateX(4px)}

  /* SECTIONS */
  .kw section{padding:120px 0;position:relative}
  .kw .sec-head{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:64px;flex-wrap:wrap}
  .kw .sec-head h2{font-family:var(--serif);font-weight:500;font-size:clamp(36px,5vw,64px);line-height:1;letter-spacing:-.01em;max-width:600px}
  .kw .sec-head h2 em{color:var(--accent);font-style:italic}
  .kw .sec-head p{color:var(--muted);max-width:420px;font-size:16px}
  .kw .tag{display:inline-block;font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:var(--accent);margin-bottom:16px}

  /* BIG FIVE */
  .kw .big5{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}
  .kw .b5-card{position:relative;height:480px;border-radius:8px;overflow:hidden;cursor:pointer;background:#1a1a1a}
  .kw .b5-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:1.2s cubic-bezier(.2,.8,.2,1)}
  .kw .b5-card:hover img{transform:scale(1.08)}
  .kw .b5-card::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,rgba(0,0,0,.85) 100%)}
  .kw .b5-card .info{position:absolute;left:24px;right:24px;bottom:24px;z-index:2;transform:translateY(20px);transition:.5s}
  .kw .b5-card:hover .info{transform:translateY(0)}
  .kw .b5-card h3{font-family:var(--serif);font-size:32px;margin-bottom:6px}
  .kw .b5-card .sci{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);margin-bottom:12px}
  .kw .b5-card .desc{font-size:14px;color:var(--muted);max-height:0;overflow:hidden;transition:.5s;opacity:0}
  .kw .b5-card:hover .desc{max-height:120px;opacity:1;margin-top:8px}

  /* PARKS */
  .kw .parks{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:32px}
  .kw .park{background:var(--card);border:1px solid rgba(255,255,255,.08);border-radius:12px;overflow:hidden;transition:.5s;backdrop-filter:blur(10px)}
  .kw .park:hover{transform:translateY(-8px);border-color:rgba(224,168,90,.4);box-shadow:0 30px 60px -20px rgba(0,0,0,.6)}
  .kw .park-img{position:relative;height:260px;overflow:hidden}
  .kw .park-img img{width:100%;height:100%;object-fit:cover;transition:.8s}
  .kw .park:hover .park-img img{transform:scale(1.1)}
  .kw .park-body{padding:28px}
  .kw .park-body h3{font-family:var(--serif);font-size:28px;margin-bottom:8px}
  .kw .park-body .loc{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);margin-bottom:14px}
  .kw .park-body p{color:var(--muted);font-size:15px;margin-bottom:20px}
  .kw .park-body a.visit{display:inline-flex;align-items:center;gap:8px;color:var(--accent);font-size:13px;letter-spacing:.15em;text-transform:uppercase;border-bottom:1px solid transparent;padding-bottom:2px;transition:.3s}
  .kw .park-body a.visit:hover{border-color:var(--accent);gap:14px}
  .kw .best{display:inline-flex;align-items:center;gap:8px;font-size:12px;color:var(--accent);background:rgba(224,168,90,.08);border:1px solid rgba(224,168,90,.25);padding:8px 12px;border-radius:999px;margin-bottom:18px;letter-spacing:.04em}
  .kw .best::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 4px rgba(224,168,90,.2)}

  /* BOOK */
  .kw .book{background:linear-gradient(135deg,#1a2418,#0e1410);border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06)}
  .kw .booking-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:48px}
  .kw .book-card{padding:40px 32px;border:1px solid rgba(224,168,90,.2);border-radius:12px;background:rgba(0,0,0,.3);transition:.4s;display:flex;flex-direction:column;gap:16px}
  .kw .book-card:hover{border-color:var(--accent);background:rgba(224,168,90,.05);transform:translateY(-4px)}
  .kw .book-card h4{font-family:var(--serif);font-size:28px}
  .kw .book-card p{color:var(--muted);font-size:15px;flex:1}

  /* FOOTER */
  .kw footer{background:#070908;padding:80px 0 32px;border-top:1px solid rgba(255,255,255,.06)}
  .kw .foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:48px;margin-bottom:60px}
  @media(max-width:760px){.kw .foot-grid{grid-template-columns:1fr}}
  .kw .foot-grid h5{font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:var(--accent);margin-bottom:20px}
  .kw .foot-grid p{color:var(--muted);font-size:14px;max-width:380px}
  .kw .foot-grid ul{list-style:none;display:flex;flex-direction:column;gap:10px}
  .kw .foot-grid ul a{color:var(--muted);font-size:14px;transition:.3s}
  .kw .foot-grid ul a:hover{color:var(--accent)}
  .kw .socials{display:flex;gap:14px;margin-top:24px}
  .kw .socials a{width:42px;height:42px;border-radius:50%;border:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;transition:.3s}
  .kw .socials a:hover{background:var(--accent);border-color:var(--accent);color:#1a1208;transform:translateY(-3px)}
  .kw .socials svg{width:18px;height:18px}
  .kw .copy{padding-top:32px;border-top:1px solid rgba(255,255,255,.06);text-align:center;color:var(--muted);font-size:13px}

  /* reveal */
  .kw .reveal{opacity:0;transform:translateY(40px);transition:1s cubic-bezier(.2,.8,.2,1)}
  .kw .reveal.in{opacity:1;transform:translateY(0)}
</style>

<nav class="kw-nav"><div class="container row">
  <a href="#top" class="logo">Wild<span>Kenya</span></a>
  <div class="links">
    <a href="#big-five">Big Five</a>
    <a href="#parks">Parks</a>
    <a href="#book">Book Safari</a>
    <a href="#about">About</a>
  </div>
</div></nav>

<header class="hero" id="top">
  <div class="hero-bg"></div>
  <div class="container">
    <span class="eyebrow">Karibu Kenya · Land of the Wild</span>
    <h1 class="title">
      <span class="l"><span>Where the wild</span></span>
      <span class="l"><span>still writes the</span></span>
      <span class="l"><span>rules.</span></span>
    </h1>
    <p class="lead">From the thundering hooves of the Mara migration to elephants framed against Kilimanjaro — Kenya is the original safari. Walk with giants. Sleep under southern stars.</p>
    <div class="cta-row">
      <a href="#book" class="btn btn-primary">Plan Your Safari <span class="arr">→</span></a>
      <a href="#big-five" class="btn btn-ghost">Meet the Big Five</a>
    </div>
  </div>
</header>

<section id="big-five">
  <div class="container">
    <div class="sec-head reveal">
      <div>
        <span class="tag">The Iconic Five</span>
        <h2>Meet the <em>Big Five</em> of Kenya</h2>
      </div>
      <p>Coined by hunters of old, today the Big Five are the crown jewels of every Kenyan safari — and the soul of its conservation story.</p>
    </div>
    <div class="big5 reveal">
      <div class="b5-card">
        <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Lion_male.jpg?width=900" alt="Lion in Masai Mara, Kenya"/>
        <div class="info">
          <div class="sci">Panthera leo</div>
          <h3>The Lion</h3>
          <div class="desc">King of the Mara. Prides rule the open grasslands, hunting in coordinated golden choreography at dawn and dusk.</div>
        </div>
      </div>
      <div class="b5-card">
        <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Leopard_in_Shimba_Hills_1.jpg?width=900" alt="African Leopard in Shimba Hills, Kenya"/>
        <div class="info">
          <div class="sci">Panthera pardus</div>
          <h3>The Leopard</h3>
          <div class="desc">The ghost of the riverine forest. Solitary, secretive, and most often spotted draped over a Samburu acacia branch.</div>
        </div>
      </div>
      <div class="b5-card">
        <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/African_Bush_Elephants,_Amboseli_National_Park_(32312286377).jpg?width=900" alt="African Bush Elephants in Amboseli National Park"/>
        <div class="info">
          <div class="sci">Loxodonta africana</div>
          <h3>The Elephant</h3>
          <div class="desc">Amboseli's giants walk the salt pans beneath Kilimanjaro — among the largest tusked elephants left on earth.</div>
        </div>
      </div>
      <div class="b5-card">
        <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Black_rhino_(head_and_shoulder_view).jpeg?width=900" alt="Black Rhinoceros (Diceros bicornis)"/>
        <div class="info">
          <div class="sci">Diceros bicornis</div>
          <h3>The Rhino</h3>
          <div class="desc">Critically endangered, fiercely protected. Ol Pejeta and Lake Nakuru shelter Kenya's last black and white rhinos.</div>
        </div>
      </div>
      <div class="b5-card">
        <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Cape_Buffalo_(Syncerus_caffer)_(11491733994).jpg?width=900" alt="Cape Buffalo (Syncerus caffer)"/>
        <div class="info">
          <div class="sci">Syncerus caffer</div>
          <h3>The Buffalo</h3>
          <div class="desc">A thousand pounds of muscle and memory. Herds move like dark rivers across the floodplains of Tsavo and Mara.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="parks" style="background:#0e1311">
  <div class="container">
    <div class="sec-head reveal">
      <div>
        <span class="tag">National Parks & Reserves</span>
        <h2>Worlds within <em>one country</em>.</h2>
      </div>
      <p>Tap any park to visit its official Kenya Wildlife Service page and start planning your gate-to-gate adventure.</p>
    </div>
    <div class="parks">
      <article class="park reveal">
        <div class="park-img"><img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Lion_in_masai_mara.jpg?width=1000" alt="Lion in Maasai Mara"/></div>
        <div class="park-body">
          <div class="loc">Narok County</div>
          <h3>Maasai Mara National Reserve</h3>
          <p>The stage of the Great Migration. Endless plains, river crossings and the densest big cat population in Africa.</p>
          <span class="best">Best: Jul – Oct (Great Migration & river crossings)</span>
          <br/><a class="visit" href="https://www.maasaimara.com/" target="_blank" rel="noopener">Visit Park →</a>
        </div>
      </article>
      <article class="park reveal">
        <div class="park-img"><img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Elephants_at_Amboseli_national_park_against_Mount_Kilimanjaro.jpg?width=1000" alt="Elephants at Amboseli with Mount Kilimanjaro"/></div>
        <div class="park-body">
          <div class="loc">Kajiado County</div>
          <h3>Amboseli National Park</h3>
          <p>Elephants beneath Kilimanjaro. Swamps, salt pans and some of the most photographed wildlife on the continent.</p>
          <span class="best">Best: Jun – Oct & Jan – Feb (clear Kili views)</span>
          <br/><a class="visit" href="https://www.kws.go.ke/parks/amboseli-national-park" target="_blank" rel="noopener">Visit Park →</a>
        </div>
      </article>
      <article class="park reveal">
        <div class="park-img"><img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Red_elephant_in_dirt.jpg?width=1000" alt="Red-dust elephant of Tsavo East"/></div>
        <div class="park-body">
          <div class="loc">Taita-Taveta</div>
          <h3>Tsavo East & West</h3>
          <p>Kenya's largest wilderness. Red-dust elephants, Mzima Springs and the legends of the man-eaters of Tsavo.</p>
          <span class="best">Best: Jun – Oct & Jan – Feb (dry season game viewing)</span>
          <br/><a class="visit" href="https://www.kws.go.ke/parks/tsavo-east-national-park" target="_blank" rel="noopener">Visit Park →</a>
        </div>
      </article>
      <article class="park reveal">
        <div class="park-img"><img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Large_number_of_flamingos_at_Lake_Nakuru.jpg?width=1000" alt="Flamingos at Lake Nakuru"/></div>
        <div class="park-body">
          <div class="loc">Nakuru County</div>
          <h3>Lake Nakuru National Park</h3>
          <p>Pink curtains of flamingos, white rhino sanctuaries and yellow-fever acacia forests in the heart of the Rift Valley.</p>
          <span class="best">Best: Jul – Mar (year-round; peak birding Nov – Apr)</span>
          <br/><a class="visit" href="https://www.kws.go.ke/parks/lake-nakuru-national-park" target="_blank" rel="noopener">Visit Park →</a>
        </div>
      </article>
      <article class="park reveal">
        <div class="park-img"><img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/33016-_Ewaso_Ngiro_River.jpg?width=1000" alt="Ewaso Ng'iro River, Samburu National Reserve"/></div>
        <div class="park-body">
          <div class="loc">Samburu County</div>
          <h3>Samburu National Reserve</h3>
          <p>The wild north. Home of the Special Five — Grevy's zebra, reticulated giraffe, Beisa oryx, gerenuk and Somali ostrich.</p>
          <span class="best">Best: Jun – Oct & Dec – Mar (dry, animals near river)</span>
          <br/><a class="visit" href="https://www.kws.go.ke/parks/samburu-national-reserve" target="_blank" rel="noopener">Visit Park →</a>
        </div>
      </article>
      <article class="park reveal">
        <div class="park-img"><img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Top_of_Mount_Kenya.jpg?width=1000" alt="Top of Mount Kenya"/></div>
        <div class="park-body">
          <div class="loc">Central Highlands</div>
          <h3>Mount Kenya National Park</h3>
          <p>Africa's second-highest peak. Glacial tarns, alpine moorlands and forest elephants on the equator.</p>
          <span class="best">Best: Jan – Feb & Jul – Oct (dry climbing windows)</span>
          <br/><a class="visit" href="https://www.kws.go.ke/parks/mount-kenya-national-park" target="_blank" rel="noopener">Visit Park →</a>
        </div>
      </article>
      <article class="park reveal">
        <div class="park-img"><img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Loxodonta_africana_group_surrounded_by_game_viewer_vehicles.jpg?width=1000" alt="Wildlife viewing at Ol Pejeta Conservancy"/></div>
        <div class="park-body">
          <div class="loc">Laikipia County</div>
          <h3>Ol Pejeta Conservancy</h3>
          <p>Home of the last two northern white rhinos on earth. A model of African conservation done right.</p>
          <span class="best">Best: Jun – Oct & Jan – Mar (rhino tracking weather)</span>
          <br/><a class="visit" href="https://www.olpejetaconservancy.org/" target="_blank" rel="noopener">Visit Park →</a>
        </div>
      </article>
      <article class="park reveal">
        <div class="park-img"><img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Elefanteak.jpg?width=1000" alt="Elephants in Aberdare National Park"/></div>
        <div class="park-body">
          <div class="loc">Nyandarua County</div>
          <h3>Aberdare National Park</h3>
          <p>Moss-draped rainforest, thundering waterfalls and the famous tree-top lodges where a queen became a queen.</p>
          <span class="best">Best: Jan – Feb & Jun – Sep (drier forest trails)</span>
          <br/><a class="visit" href="https://www.kws.go.ke/parks/aberdare-national-park" target="_blank" rel="noopener">Visit Park →</a>
        </div>
      </article>
    </div>
  </div>
</section>

<section id="book" class="book">
  <div class="container">
    <div class="sec-head reveal">
      <div>
        <span class="tag">Book Your Safari</span>
        <h2>Trusted operators. <em>Real adventures.</em></h2>
      </div>
      <p>We've curated the operators we'd send our own family with. Compare itineraries, read reviews, lock in dates.</p>
    </div>
    <div class="booking-grid">
      <a href="https://www.safaribookings.com/kenya" target="_blank" rel="noopener" class="book-card reveal">
        <h4>SafariBookings</h4>
        <p>The world's largest online marketplace for African safaris. Compare 3,000+ Kenya tours from vetted operators.</p>
        <span class="btn btn-primary" style="align-self:flex-start">Browse Safaris →</span>
      </a>
      <a href="https://www.porini.com/" target="_blank" rel="noopener" class="book-card reveal">
        <h4>Porini Safari Camps</h4>
        <p>Eco-rated luxury camps in private conservancies — community-owned, low-impact, big-game.</p>
        <span class="btn btn-primary" style="align-self:flex-start">Explore Camps →</span>
      </a>
      <a href="https://magicalkenya.com/" target="_blank" rel="noopener" class="book-card reveal">
        <h4>Magical Kenya</h4>
        <p>The official tourism portal of the Republic of Kenya. Trip planning, visas, weather and inspiration.</p>
        <span class="btn btn-primary" style="align-self:flex-start">Plan Trip →</span>
      </a>
      <a href="https://www.kws.go.ke/" target="_blank" rel="noopener" class="book-card reveal">
        <h4>Kenya Wildlife Service</h4>
        <p>Official park fees, gate hours, regulations and conservation news direct from KWS.</p>
        <span class="btn btn-primary" style="align-self:flex-start">Visit KWS →</span>
      </a>
    </div>
  </div>
</section>

<footer id="about">
  <div class="container">
    <div class="foot-grid">
      <div>
        <div class="logo" style="font-size:28px;margin-bottom:16px">Wild<span>Kenya</span></div>
        <p>A celebration of Kenya's wildlife, landscapes and the people who protect them. Follow Kenya Wildlife Service for daily updates from the field.</p>
        <div class="socials">
          <a href="https://www.facebook.com/kenyawildlifeservice/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z"/></svg></a>
          <a href="https://x.com/kwskenya" target="_blank" rel="noopener" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg></a>
          <a href="https://www.instagram.com/kenyawildlifeservice/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2 0 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.4-.5.2-.9.5-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.4 2.1.2.5.5.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.4.5-.2.9-.5 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.4-2.1-.2-.5-.5-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.2-8.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z"/></svg></a>
          <a href="https://www.youtube.com/@kenyawildlifeservice" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C4.4 20.4 12 20.4 12 20.4s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg></a>
        </div>
      </div>
      <div>
        <h5>Explore</h5>
        <ul>
          <li><a href="#big-five">Big Five</a></li>
          <li><a href="#parks">National Parks</a></li>
          <li><a href="#book">Book a Safari</a></li>
        </ul>
      </div>
      <div>
        <h5>Official</h5>
        <ul>
          <li><a href="https://www.kws.go.ke/" target="_blank" rel="noopener">Kenya Wildlife Service</a></li>
          <li><a href="https://magicalkenya.com/" target="_blank" rel="noopener">Magical Kenya</a></li>
          <li><a href="https://www.tourism.go.ke/" target="_blank" rel="noopener">Ministry of Tourism</a></li>
        </ul>
      </div>
    </div>
    <div class="copy">© ${new Date().getFullYear()} WildKenya · A tribute to Kenya's wildlife. Not affiliated with KWS.</div>
  </div>
</footer>
`;

function Index() {
  useEffect(() => {
    document.body.classList.add("kw");
    // Google fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Inter:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);

    // Reveal on scroll
    const els = document.querySelectorAll<HTMLElement>(".kw .reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));

    // Nav shrink on scroll
    const nav = document.querySelector<HTMLElement>(".kw nav.kw-nav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 40) {
        nav.style.padding = "12px 0";
        nav.style.background = "rgba(7,9,8,.85)";
      } else {
        nav.style.padding = "18px 0";
        nav.style.background = "rgba(11,15,13,.55)";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.body.classList.remove("kw");
      link.remove();
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
