import { useEffect } from 'react';

export const useProfileLogic = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll('.bento-box');

    const handleMouseMove = (e: MouseEvent) => {
      boxes.forEach((box) => {
        const htmlBox = box as HTMLElement;
        const rect = htmlBox.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        htmlBox.style.background = `
          radial-gradient(
            800px circle at ${x}px ${y}px, 
            rgba(255,255,255,0.04), 
            transparent 40%
          ),
          rgba(24, 24, 27, 0.6)
        `;
      });
    };

    const handleMouseLeave = function (this: HTMLElement) {
      this.style.background = 'rgba(24, 24, 27, 0.6)';
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    boxes.forEach((box) => {
      box.addEventListener('mouseleave', handleMouseLeave as EventListener);
    });

    // Terminal Typewriter Logic
    const tw = document.getElementById('typewriter');
    const termBody = document.querySelector('.term-body');
    const messages = [
      '> Initializing virtual environment...',
      '> Secure connection established.',
      "> Welcome to Lucas Borges' ecosystem.",
    ];

    let msgIdx = 0;
    let charIdx = 0;
    let currentHTML = '';
    let typingTimeout: ReturnType<typeof setTimeout>;
    let isTyping = true;

    function type() {
      if (!tw || !isTyping) return;
      const currentMsg = messages[msgIdx];

      tw.innerHTML = currentHTML + currentMsg.substring(0, charIdx + 1);
      charIdx++;

      let typeSpeed = 35;

      if (Math.random() > 0.8) {
        typeSpeed += 100;
      }

      if (charIdx === currentMsg.length) {
        msgIdx++;

        if (msgIdx < messages.length) {
          typingTimeout = setTimeout(() => {
            currentHTML += currentMsg + '<br>';
            charIdx = 0;
            type();
          }, 800);
          return;
        } else {
          typingTimeout = setTimeout(() => {
            const cat = document.createElement('pre');
            cat.className = 'ascii-cat';
            cat.innerHTML = ' /\\_/\\ \n( ^.^ )\n > ^ < ';
            if (termBody) termBody.appendChild(cat);
            setTimeout(() => cat.classList.add('show'), 50);
          }, 1000);
          return;
        }
      }

      typingTimeout = setTimeout(type, typeSpeed);
    }

    if (tw) {
      typingTimeout = setTimeout(type, 1500);
    }

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      boxes.forEach((box) => {
        box.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      });
      isTyping = false;
      clearTimeout(typingTimeout);
      if (tw) tw.innerHTML = '';
    };
  }, []);
};
