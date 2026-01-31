//  <!-- Core strengths were moved into the main content for a cleaner flow -->

    
        // Simple reviews carousel
        const reviews = [
            {
                text: '"GuideLy made my first flight smooth and stress-free."',
                author: 'Maria K., first-time flyer',
                photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=60'
            },
            {
                text: '"The guides were patient and caring with my father."',
                author: 'Rahul S., family',
                photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=60'
            },
            {
                text: '"Perfect support for elderly passengers — highly recommended."',
                author: 'Evelyn P., senior traveler',
                photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=60'
            }
        ];

        let idx = 0;
        const photo = document.getElementById('review-photo');
        const text = document.getElementById('review-text');
        const author = document.getElementById('review-author');

        function showReview(i){
            const r = reviews[i];
            photo.classList.remove('fade-in');
            text.classList.remove('fade-in');
            author.classList.remove('fade-in');
            // small timeout to restart animation
            setTimeout(()=>{
                photo.src = r.photo;
                text.textContent = r.text;
                author.textContent = '— ' + r.author;
                photo.classList.add('fade-in');
                text.classList.add('fade-in');
                author.classList.add('fade-in');
            }, 80);
        }

        document.getElementById('prevBtn').addEventListener('click', ()=>{
            idx = (idx - 1 + reviews.length) % reviews.length;
            showReview(idx);
        });
        document.getElementById('nextBtn').addEventListener('click', ()=>{
            idx = (idx + 1) % reviews.length;
            showReview(idx);
        });

        // auto-rotate
        setInterval(()=>{ idx = (idx + 1) % reviews.length; showReview(idx); }, 6000);

        // initial
        showReview(0);
        document.getElementById('year').textContent = new Date().getFullYear();
  
        function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  if (menu.style.left === "0px") {
    menu.style.left = "-260px";
  } else {
    menu.style.left = "0px";
  }
}