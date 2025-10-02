// Muhammad Haseeb — Portfolio OS Behavior
(() => {
  const root = document.getElementById('mh-os');
  if (!root) return;

  // State
  const state = {
    theme: 'dark',
    zIndex: 100,
    windows: new Map(),
    projects: {
      lavacrypt: {
        name: 'LavaCrypt',
        overview: 'End‑to‑end encrypted chat with avalanche‑based randomness. OTP login, zero server‑side keys.',
        tags: ['React Native','Node.js','Encryption'],
        images: ['./images/fyp1.png','./images/fyp2.jpg','./images/fyp3.jpg','./images/fyp4.jpg','./images/fyp5.jpg','./images/fyp7.jpg','./images/fyp8.jpg'],
        links: [
          {label:'GitHub',icon:'fab fa-github',href:'https://github.com/MuhammadHaseeb0070/DialogueFrontEnd'},
        ]
      },
      cinehub: {
        name: 'CineHub',
        overview: 'Kotlin Android app using TMDB for discovery, details, and recommendations.',
        tags: ['Kotlin','TMDB','Android'],
        images: ['./images/cinehub1.jpg','./images/cinehub2.jpg'],
        links: [
          {label:'GitHub',icon:'fab fa-github',href:'https://github.com/MuhammadHaseeb0070/CineHub'},
          {label:'Download',icon:'fas fa-download',href:'https://drive.google.com/file/d/1V4HiQuVmJo3bCXOu8ZL2ciOwiUnX3oCp/view'}
        ]
      },
      flowtrack: {
        name: 'FlowTrack',
        overview: 'React Native personal finance tracker with charts, dashboards, and reports.',
        tags: ['React Native','Charts','HCI'],
        images: ['./images/flowtrack1.png','./images/flowtrack2.jpg','./images/flowtrack3.jpg','./images/flowtrack4.jpg','./images/flowtrack5.jpg','./images/flowtrack6.jpg'],
        links: [
          {label:'GitHub',icon:'fab fa-github',href:'https://github.com/MuhammadHaseeb0070/flowtrack'},
          {label:'Download',icon:'fas fa-download',href:'https://drive.google.com/file/d/1C5-6SrPHT2uCRBwfhh4quUxtgg0qnNse/view'}
        ]
      },
      resume: {
        name: 'Resume Architect',
        overview: 'Web resume builder with templates, realtime preview, and local save.',
        tags: ['React','Templates','Local Storage'],
        images: ['./images/resumearchitect.png'],
        links: [
          {label:'GitHub',icon:'fab fa-github',href:'https://github.com/MuhammadHaseeb0070/ResumeArchitect'},
          {label:'Live',icon:'fas fa-external-link-alt',href:'https://resumearchitect.netlify.app'}
        ]
      },
      uiarch: {
        name: 'UI Architect',
        overview: 'React UI component library for rapid, consistent interfaces.',
        tags: ['React','UI Library','Design'],
        images: ['./images/UIarchitect.png'],
        links: [
          {label:'GitHub',icon:'fab fa-github',href:'https://github.com/MuhammadHaseeb0070/UIArchitect'},
          {label:'Live',icon:'fas fa-external-link-alt',href:'https://uiarchitect.netlify.app'}
        ]
      }
    }
  };

  // Time
  const timeLabel = document.querySelector('[data-time]');
  const tick = () => {
    if (!timeLabel) return;
    const d = new Date();
    timeLabel.textContent = d.toLocaleString([], {hour:'2-digit', minute:'2-digit'})
      + ' • ' + d.toLocaleDateString();
  };
  tick();
  setInterval(tick, 30_000);

  // Theme
  const setTheme = (t) => {
    state.theme = t;
    if (t === 'light') document.documentElement.setAttribute('data-theme','light');
    else document.documentElement.removeAttribute('data-theme');
  };
  document.querySelectorAll('[data-action="toggle-theme"]').forEach(btn => {
    btn.addEventListener('click', () => setTheme(state.theme === 'dark' ? 'light' : 'dark'));
  });

  // Canvas neon particles
  const canvas = document.getElementById('mh-bg');
  const ctx = canvas.getContext('2d', { alpha: true });
  let w = canvas.width = canvas.offsetWidth;
  let h = canvas.height = canvas.offsetHeight;
  const particles = Array.from({length: 48}, () => ({
    x: Math.random()*w,
    y: Math.random()*h,
    r: 1 + Math.random()*2,
    vx: -0.6 + Math.random()*1.2,
    vy: -0.6 + Math.random()*1.2
  }));
  const gradient = () => {
    const g = ctx.createLinearGradient(0,0,w,h);
    g.addColorStop(0,'#00ff9d');
    g.addColorStop(1,'#00b8ff');
    return g;
  };
  const draw = () => {
    ctx.clearRect(0,0,w,h);
    ctx.globalAlpha = 0.8;
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < -10) p.x = w+10; if (p.x > w+10) p.x = -10;
      if (p.y < -10) p.y = h+10; if (p.y > h+10) p.y = -10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = '#0affc0';
      ctx.fill();
    });
    // Connections
    ctx.strokeStyle = gradient();
    ctx.globalAlpha = 0.15;
    for (let i=0;i<particles.length;i++) {
      for (let j=i+1;j<particles.length;j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y; const d = Math.hypot(dx,dy);
        if (d < 140) { ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); }
      }
    }
    requestAnimationFrame(draw);
  };
  const onResize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; };
  window.addEventListener('resize', onResize);
  draw();

  // Window manager
  const windows = Array.from(document.querySelectorAll('.mh-window'));
  function bringToFront(el){ el.style.zIndex = ++state.zIndex; }
  function toggle(el, show){ el.setAttribute('aria-hidden', show ? 'false' : 'true'); if (show) bringToFront(el); }
  function maximize(el){ el.classList.toggle('maximized'); bringToFront(el); }

  windows.forEach(win => {
    bringToFront(win);
    // Dragging
    const handle = win.querySelector('[data-drag-handle]');
    let startX=0, startY=0, origX=0, origY=0, dragging=false;
    const md = (e) => {
      if (win.classList.contains('maximized')) return; // skip
      dragging = true; bringToFront(win);
      const rect = win.getBoundingClientRect();
      origX = rect.left; origY = rect.top;
      startX = ('touches' in e) ? e.touches[0].clientX : e.clientX;
      startY = ('touches' in e) ? e.touches[0].clientY : e.clientY;
      e.preventDefault();
    };
    const mm = (e) => {
      if (!dragging) return;
      const cx = ('touches' in e) ? e.touches[0].clientX : e.clientX;
      const cy = ('touches' in e) ? e.touches[0].clientY : e.clientY;
      const nx = Math.max(8, Math.min(window.innerWidth - win.offsetWidth - 8, origX + (cx - startX)));
      const ny = Math.max(60, Math.min(window.innerHeight - win.offsetHeight - 90, origY + (cy - startY)));
      win.style.left = nx + 'px';
      win.style.top = ny + 'px';
    };
    const mu = () => { dragging = false; };
    handle.addEventListener('mousedown', md); document.addEventListener('mousemove', mm); document.addEventListener('mouseup', mu);
    handle.addEventListener('touchstart', md, {passive:false}); document.addEventListener('touchmove', mm, {passive:false}); document.addEventListener('touchend', mu);

    // Buttons
    win.querySelector('[data-close]')?.addEventListener('click', () => toggle(win, false));
    win.querySelector('[data-minimize]')?.addEventListener('click', () => toggle(win, false));
    win.querySelector('[data-maximize]')?.addEventListener('click', () => maximize(win));
    handle.addEventListener('dblclick', () => maximize(win));

    // Register
    const appId = win.getAttribute('data-app');
    state.windows.set(appId, win);
  });

  // Dock
  document.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-open');
      const win = state.windows.get(id);
      if (win) toggle(win, true);
    });
  });

  // Projects population
  const grid = document.getElementById('projects-grid');
  function makeProjectCard(key, proj){
    const card = document.createElement('article');
    card.className = 'mh-project';
    card.tabIndex = 0;
    card.setAttribute('role','button');
    card.setAttribute('aria-label', `${proj.name} — open preview`);
    const img = document.createElement('img'); img.className='mh-project__img'; img.src = proj.images[0]; img.alt = proj.name;
    const body = document.createElement('div'); body.className='mh-project__body';
    const title = document.createElement('div'); title.className='mh-project__title'; title.textContent = proj.name;
    const desc = document.createElement('div'); desc.className='mh-project__desc mh-subtle'; desc.textContent = proj.overview;
    const tags = document.createElement('div'); tags.className='mh-project__tags';
    proj.tags.slice(0,3).forEach(t=>{ const s=document.createElement('span'); s.textContent=t; tags.appendChild(s); });
    body.appendChild(title); body.appendChild(desc); body.appendChild(tags);
    card.appendChild(img); card.appendChild(body);
    card.addEventListener('click', () => openViewer(proj.images[0], proj.name));
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openViewer(proj.images[0], proj.name); }});
    return card;
  }
  if (grid) {
    const order = ['lavacrypt','cinehub','flowtrack','resume','uiarch'];
    order.forEach(k => grid.appendChild(makeProjectCard(k, state.projects[k])));
  }

  // Viewer
  const viewer = document.getElementById('mh-viewer');
  const viewerImg = document.getElementById('mh-viewer-img');
  const viewerClose = document.querySelector('[data-viewer-close]');
  function openViewer(src, alt){ viewerImg.src = src; viewerImg.alt = alt; viewer.classList.add('active'); document.body.style.overflow='hidden'; }
  function closeViewer(){ viewer.classList.remove('active'); document.body.style.overflow='auto'; }
  viewerClose?.addEventListener('click', closeViewer);
  viewer?.addEventListener('click', (e)=>{ if (e.target === viewer) closeViewer(); });
  document.addEventListener('keydown', (e)=>{ if (e.key==='Escape' && viewer.classList.contains('active')) closeViewer(); });

  // Boot splash
  const boot = document.getElementById('mh-boot');
  setTimeout(()=> boot?.classList.add('hide'), 700);
  setTimeout(()=> boot?.remove(), 1400);

  // Accessibility: secure external links
  document.querySelectorAll('a[target="_blank"]').forEach(a=>{ a.rel = 'noopener noreferrer'; });
})();

