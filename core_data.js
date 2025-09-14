const defaultProfilePic = 'assets/images/members/23/def.png';
        const coreTeam = [
            // Leadership
            {
                id:1, 
                name:"Prajwal", 
                role:"President", 
                funFact:"Leads every meeting with energy and vision ⚡", 
                category:"Leadership", 
                profilePic:"assets/images/core/profile_prajwal.png",
                phone:"+91 9110687983",
                email:"prajwalganiga06@gmail.com",
                linkedin:"https://www.linkedin.com/in/prajwalganiga/"
            },
            {
                id:2, 
                name:"Sanvi S Shetty", 
                role:"Vice President", 
                funFact:"Keeps balance between innovation and execution 🔄", 
                category:"Leadership", 
                profilePic:"assets/images/core/sanvi.jpg",
                phone:"+91 9074263305",
                email:"sanviiishettyyyy@gmail.com",
                linkedin:"https://www.linkedin.com/in/sanvi-shetty-65386332a"
            },

            // Operations & Management
            {
                id:3, 
                name:"Ishwarya", 
                role:"General Secretary", 
                funFact:"Records every detail to keep the club on track 📑", 
                category:"Operations & Management", 
                profilePic:"assets/images/core/ishu.jpg",
                phone:"+91 73385 32833",
                email:"ishwaryapoojaray@gmail.com",
                linkedin:"https://www.linkedin.com/in/ishwarya-p-2671a232b"
            },
            {
                id:4, 
                name:"Varshini", 
                role:"Joint Secretary", 
                funFact:"Ensures no update slips through unnoticed 📬", 
                category:"Operations & Management", 
                profilePic:"assets/images/core/varshini.jpg",
                phone:"+91 6361762421",
                email:"varshiniganiga35@gmail.com",
                linkedin:"https://www.linkedin.com/in/varshini-87237232b"
            },
            {
                id:5, 
                name:"Sharanya", 
                role:"Treasurer", 
                funFact:"Tracks expenses as carefully as coding bugs 💹", 
                category:"Operations & Management", 
                profilePic:"assets/images/core/sharanya.jpg",
                phone:"+91 7736114876",
                email:"rsharanya77@gmail.com",
                linkedin:"https://linkedin.com/in/nikhilagarwal"
            },
             {
                id:6, 
                name:"Naman", 
                role:"Vice Treasurer", 
                funFact:"Balances accounts like balancing logic in code 📊", 
                category:"Operations & Management", 
                profilePic:"assets/images/core/naman.jpg",
                phone:"+91 7736114876",
                email:"naman@gmail.com",
                linkedin:"https://linkedin.com/in/nikhilagarwal"
            },
             {
                id:7, 
                name:"Bangera Ujwal", 
                role:"Speaker", 
                funFact:"Transforms complex ideas into clear simple talks 🎤", 
                category:"Operations & Management", 
                profilePic:"assets/images/core/ujwal.jpg",
                phone:"+91 9324815718",
                email:"bangeraujwal35@gmail.com",
                linkedin:"https://linkedin.com/in/nikhilagarwal"
            },

            // Technical Division Leads
            {
                id:8, 
                name:"Rakshitha K", 
                role:"Website & Tech Lead", 
                funFact:"Turns designs into working websites overnight 🌐", 
                category:"Technical Division Leads", 
                profilePic:"assets/images/core/rakshitha.png",
                phone:"+91 7736593675",
                email:"bhat.rakshu6@gmail.com",
                linkedin:"https://www.linkedin.com/in/rakshitha-k-63718332b"
            },
            {
                id:9, 
                name:"Swathi", 
                role:"AI/ML/DL Lead", 
                funFact:"Finds patterns in data faster than search engines 📡", 
                category:"Technical Division Leads", 
                profilePic:"assets/images/core/swathi.jpg",
                phone:"+91 7619636740",
                email:"swathigowda2100@gmail.com",
                linkedin:"https://www.linkedin.com/in/swathi-73986232a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            },
            {
                id:8, 
                name:"Jaswin", 
                role:"Hackathon & Project Lead", 
                funFact:"Builds prototypes before deadlines even arrive ⏱️", 
                category:"Technical Division Leads", 
                profilePic:"assets/images/core/kavya.jpg",
                phone:"+91 9876543217",
                email:"kavya.nair@echo.com",
                linkedin:"https://linkedin.com/in/kavyanair"
            },

            // Non-Technical Leads
            {
                id:9, 
                name:"Ashika", 
                role:"Cultural Lead", 
                funFact:"Adds rhythm and tradition to every event 🎶", 
                category:"Non-Technical Leads", 
                profilePic:"assets/images/core/ashika.jpg",
                phone:"+91 9876543218",
                email:"sneha.reddy@echo.com",
                linkedin:"https://linkedin.com/in/snehareddy"
            },
            {
                id:10, 
                name:"Srujan", 
                role:"Design & Graphics Lead", 
                funFact:"Transforms concepts into visuals that tell stories 🎨", 
                category:"Non-Technical Leads", 
                profilePic:"assets/images/core/srujan.jpg",
                phone:"+91 9019885706",
                email:"srujan901988@gmail.com",
                linkedin:"https://www.linkedin.com/in/srujan-s-1b2a3b4c5"
            },
            {
                id:11, 
                name:"Deena", 
                role:"Event Organizer", 
                funFact:"Plans events with timelines sharper than code ⏳", 
                category:"Non-Technical Leads", 
                profilePic:"assets/images/core/deena.jpg",
                phone:"+91 8548810655",
                email:"bangeradeena@gmail.com",
                linkedin:"https://www.linkedin.com/in/deena-95684632b"
            },{
                id:12, 
                name:"Poorvitha", 
                role:"Documentaion", 
                funFact:"Writes docs that make projects crystal clear 📝", 
                category:"Non-Technical Leads", 
                profilePic:"assets/images/core/poori.jpg",
                phone:"+91 9141195047",
                email:"poorvithashetty912@gmail.com",
                linkedin:"https://www.linkedin.com/in/poorvitha-shetty-35676432a"
            },{
                id:13, 
                name:"Sanika K M", 
                role:"Public Speaking", 
                funFact:"Captivates audiences with confident impactful words 🎙️", 
                category:"Non-Technical Leads", 
                profilePic:"assets/images/core/poo.jpg",
                phone:"+91 6363833165",
                email:"sanikakm555@gmail.com",
                linkedin:"https://www.linkedin.com/in/sanika-k-m-31149732b"
            },{
                id:14, 
                name:"Sanngam", 
                role:"Aptitude", 
                funFact:"Solves puzzles faster than compilers optimize code 🧩", 
                category:"Non-Technical Leads", 
                profilePic:"assets/images/core/sangam.jpg",
                phone:"+91 7618726880",
                email:"swamisangam45@gmail.com",
                linkedin:"https://www.linkedin.com/in/sangam-s-m-390747383"
            },{
                id:14, 
                name:"Vinayak", 
                role:"Editing Lead", 
                funFact:"Edits media with precision frame by frame 🎬", 
                category:"Non-Technical Leads", 
                profilePic:"assets/images/core/vinayak.jpg",
                phone:"+91 6362266761",
                email:"akkasaligavinayak@gmail.com",
                linkedin:"https://www.linkedin.com/in/vinayak-akkasaliga-1b52992ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            },
            {
                id:15, 
                name:"Shashank Naik", 
                role:"Social Media & Content Lead", 
                funFact:"Keeps feeds engaging with creative fresh posts 📱", 
                category:"Non-Technical Leads", 
                profilePic:"assets/images/core/shashank.jpg",
                phone:"+91 9483798690",
                email:"naikshashank2005@gmail.com",
                linkedin:"https://www.linkedin.com/in/shashank-naik-25b86332a"
            }
        ];

        const roleIcons = {
            "President":"👑",
            "Vice President":"🛡️",
            "General Secretary":"📝",
            "Joint Secretary":"📋",
            "Treasurer":"💰",
            "Website & Tech Lead":"🌐",
            "AI/ML/GenAl Lead":"🤖",
            "Hackathon & Project Lead":"⚙️",
            "Design & Graphics Lead":"🎨",
            "Social Media & Content Lead":"📱",
            "Cultural & Event Lead":"🎪"
        };

        document.addEventListener('DOMContentLoaded', () => {
            // --- NAVBAR & THEME LOGIC ---
            const themeBtn = document.getElementById('theme-btn');
            if (themeBtn) {
                const savedTheme = localStorage.getItem('echoTheme') || 'dark';
                document.documentElement.setAttribute('data-theme', savedTheme);
                themeBtn.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
                themeBtn.addEventListener('click', () => {
                    const newTheme = (document.documentElement.getAttribute('data-theme') || 'dark') === 'dark' ? 'light' : 'dark';
                    document.documentElement.setAttribute('data-theme', newTheme);
                    themeBtn.textContent = newTheme === 'dark' ? '🌙' : '☀️';
                    localStorage.setItem('echoTheme', newTheme);
                });
            }
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-menu');
            if (hamburger && navMenu) {
                hamburger.addEventListener('click', () => {
                    hamburger.classList.toggle('active');
                    navMenu.classList.toggle('active');
                });
            }

            // --- RENDER LOGIC ---
            function createCardHTML(member, index) {
                const icon = roleIcons[member.role] || '⭐';
                return `
                    <div class="core-card" style="animation-delay: ${index * 50}ms">
                        <div class="profile-image-container">
                            <img src="${member.profilePic}" alt="${member.name}" class="profile-image" loading="lazy" onerror="this.src='${defaultProfilePic}'">
                        </div>
                        <h3 class="member-name">${member.name}</h3>
                        <p class="member-role">${icon} ${member.role}</p>
                        <p class="fun-fact">"${member.funFact}"</p>
                        
                        <div class="contact-info">
                            <div class="contact-item">
                                <span class="contact-icon"><i class="fas fa-phone"></i></span>
                                <span class="contact-text">${member.phone}</span>
                            </div>
                            <div class="contact-item">
                                <span class="contact-icon"><i class="fas fa-envelope"></i></span>
                                <span class="contact-text">${member.email}</span>
                            </div>
                            
                            <div class="social-links">
                                <a href="${member.linkedin}" target="_blank" class="social-link linkedin" title="LinkedIn">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="mailto:${member.email}" class="social-link email" title="Email">
                                    <i class="fas fa-envelope"></i>
                                </a>
                                <a href="tel:${member.phone}" class="social-link phone" title="Call">
                                    <i class="fas fa-phone"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            }

            function renderTeam() {
                const containers = {
                    "Leadership": document.getElementById('leadership-grid'),
                    "Operations & Management": document.getElementById('operations-grid'),
                    "Technical Division Leads": document.getElementById('tech-leads-grid'),
                    "Non-Technical Leads": document.getElementById('nontech-leads-grid')
                };

                Object.values(containers).forEach(c => { if(c) c.innerHTML = '' });
                
                let categoryCounts = {};

                coreTeam.forEach(member => {
                    const container = containers[member.category];
                    if (container) {
                        const index = categoryCounts[member.category] || 0;
                        container.innerHTML += createCardHTML(member, index);
                        categoryCounts[member.category] = index + 1;
                    }
                });
            }

            renderTeam();

            // Adding subtle floating animation to each core-card using GSAP
            const cards = document.querySelectorAll('.core-card');
            cards.forEach((card, i) => {
              gsap.to(card, {
                y: 10,
                duration: 3 + Math.random() * 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                delay: i * 0.2
              });
            });
        });