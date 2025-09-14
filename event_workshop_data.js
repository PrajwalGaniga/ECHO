// event_workshop_data.js

const eventsData = [
    {
        id: 4, 
        title: 'Smart India Hackathon 2025', 
        description: 'A national-level event focused on solving real-world problems using technology. Open to all students.', 
        thumbnail: 'assets/images/events/event/sih.jpg', 
        college: 'SIT Collage', 
        date: '2025-11-22', 
        time: '10:00 AM', 
        fee: 'Free', 
        status: 'Active',
        category: 'technical',  // Added: categorized as technical due to "hackathon" and "technology"
        type: 'event'          // Added: this is an event
    }
];

const workshopsData = [
    {
        id: 3, 
        title: 'Introduction to AI & Machine Learning', 
        description: 'A beginner-friendly workshop covering the fundamentals of AI, ML, and how to build your first predictive model.', 
        thumbnail: 'assets/images/events/workshop/dhaarini.jpg', 
        college: 'ECHO University - Lab 3', 
        date: '2025-10-10', 
        time: '1:00 PM', 
        fee: '2500', 
        status: 'Active',
        category: 'technical',  // Added: categorized as technical due to "AI & Machine Learning"
        type: 'workshop'       // Added: this is a workshop
    }
];





document.addEventListener('DOMContentLoaded', () => {
        // --- 1. PAGE LOADER ---
        const loader = document.getElementById('loader');
        setTimeout(() => {
            if (loader) loader.classList.add('loader-hidden');
        }, 2000);

        // --- 2. NAVBAR & THEME LOGIC ---
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

        // --- 3. DATA MANAGEMENT ---
        let allItems = [];
        let filteredItems = [];
        let currentFilter = 'all';
        let currentView = 'grid';

        

        // Use sample data or load from external file
        if (typeof eventsData !== 'undefined' && typeof workshopsData !== 'undefined') {
            allItems = [...eventsData, ...workshopsData];
        } else {
            allItems = sampleData;
        }

        filteredItems = [...allItems];

        // --- 4. STATS CALCULATION ---
        function calculateStats() {
            const totalEvents = allItems.length;
            const activeEvents = allItems.filter(item => item.status === 'Active').length;
            const freeEvents = allItems.filter(item => item.fee.toLowerCase() === 'free').length;
            const upcomingEvents = allItems.filter(item => new Date(item.date) > new Date()).length;

            return { totalEvents, activeEvents, freeEvents, upcomingEvents };
        }

        // --- 5. RENDER STATS DASHBOARD ---
        function renderStats() {
            const stats = calculateStats();
            const statsContainer = document.getElementById('stats-dashboard');
            
            statsContainer.innerHTML = `
                <div class="stat-card">
                    <div class="stat-number">${stats.totalEvents}</div>
                    <div class="stat-label">Total Events</div>
                    <i class="fas fa-calendar-alt stat-icon"></i>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.activeEvents}</div>
                    <div class="stat-label">Active Events</div>
                    <i class="fas fa-bolt stat-icon"></i>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.freeEvents}</div>
                    <div class="stat-label">Free Events</div>
                    <i class="fas fa-gift stat-icon"></i>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.upcomingEvents}</div>
                    <div class="stat-label">Upcoming</div>
                    <i class="fas fa-clock stat-icon"></i>
                </div>
            `;

            // Animate stats
            gsap.from('.stat-card', {
                duration: 0.8,
                y: 50,
                opacity: 0,
                stagger: 0.1,
                delay: 2.5
            });
        }

        // --- 6. COUNTDOWN TIMER ---
        function calculateTimeLeft(dateString) {
            const eventDate = new Date(dateString);
            const now = new Date();
            const difference = eventDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                
                if (days > 0) return `${days}d ${hours}h left`;
                if (hours > 0) return `${hours}h left`;
                return 'Starting soon';
            }
            return 'Event ended';
        }

        // --- 7. RENDER FUNCTIONS ---
        function getCategoryClass(category) {
            const categoryMap = {
                'technical': 'category-technical',
                'cultural': 'category-cultural',
                'sports': 'category-sports',
                'workshop': 'category-workshop',
                'seminar': 'category-seminar'
            };
            return categoryMap[category] || 'category-technical';
        }

        function renderGridView() {
            const container = document.getElementById('all-items-grid');
            if (!container) return;

            container.innerHTML = filteredItems.map((item, index) => {
                const formattedDate = new Date(item.date).toLocaleDateString('en-IN', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric' 
                });
                const isFree = item.fee.toLowerCase() === 'free';
                const hasThumbnail = item.thumbnail && item.thumbnail.trim() !== '';
                const defaultIcon = item.type === 'event' ? 'fas fa-trophy' : 'fas fa-tools';
                const categoryClass = getCategoryClass(item.category);
                const timeLeft = item.status === 'Active' ? calculateTimeLeft(item.date) : '';
                
                const thumbnailHTML = hasThumbnail
                    ? `<img src="${item.thumbnail}" alt="${item.title}" class="thumbnail" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
                    : '';
                
                let footerHTML = `<span style="color: var(--text-muted-color); font-weight: 500;"><i class="fas fa-check-circle"></i> Completed</span>`;
                if (item.status === 'Active') {
                    const messageTemplate = `
🎉 Welcome to the ECHO Club Registration! 🎉

I would like to register for the following event:
*Event Name:* ${item.title}

Please fill out your details below:
-----------------------------------
*👤 Name:* 
*🌿 Branch:* 
*🎓 Year:* 
*📧 Email:* 
*👥 Team Name (if applicable):* 
-----------------------------------

Looking forward to seeing you there!
                    `.trim();

                    const encodedMessage = encodeURIComponent(messageTemplate);
                    const whatsappURL = `https://wa.me/919110687983?text=${encodedMessage}`;
                    footerHTML = `<a href="${whatsappURL}" target="_blank" rel="noopener noreferrer" class="register-btn">
                        <i class="fas fa-paper-plane"></i> Register Now
                    </a>`;
                }
                
                return `
                <div class="item-card" style="animation-delay: ${index * 100}ms" data-category="${item.category}" data-status="${item.status.toLowerCase()}" data-fee="${isFree ? 'free' : 'paid'}">
                    <div class="thumbnail-container">
                        ${thumbnailHTML}
                        <div class="empty-thumbnail" style="${hasThumbnail ? 'display: none;' : 'display: flex;'}">
                            <div class="placeholder-3d">
                                <div class="placeholder-3d-face"><i class="${defaultIcon}"></i></div>
                                <div class="placeholder-3d-face"><i class="fas fa-calendar-alt"></i></div>
                                <div class="placeholder-3d-face"><i class="fas fa-star"></i></div>
                                <div class="placeholder-3d-face"><i class="fas fa-heart"></i></div>
                            </div>
                        </div>
                        <span class="status-badge ${item.status.toLowerCase()}">${item.status}</span>
                        ${timeLeft && item.status === 'Active' ? `<div class="countdown-timer">${timeLeft}</div>` : ''}
                    </div>
                    <div class="card-content">
                        <div class="category-tag ${categoryClass}">${item.category}</div>
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-description">${item.description}</p>
                        <div class="details-grid">
                            <span><i class="fas fa-map-marker-alt fa-fw"></i> ${item.college}</span>
                            <span><i class="fas fa-calendar-alt fa-fw"></i> ${formattedDate}</span>
                            <span><i class="fas fa-clock fa-fw"></i> ${item.time}</span>
                        </div>
                        <div class="card-footer">
                            <span class="fee-badge ${isFree ? 'free' : 'paid'}">
                                <i class="fas fa-${isFree ? 'gift' : 'tag'}"></i> ${item.fee}
                            </span>
                            ${footerHTML}
                        </div>
                    </div>
                </div>
                `;
            }).join('');

            // Animate cards
            gsap.from('.item-card', {
                duration: 0.6,
                y: 50,
                opacity: 0,
                stagger: 0.1
            });
        }

        function renderTimelineView() {
            const container = document.getElementById('timeline-container');
            if (!container) return;

            const sortedItems = [...filteredItems].sort((a, b) => new Date(a.date) - new Date(b.date));
            
            container.innerHTML = `
                <div class="timeline-line"></div>
                ${sortedItems.map((item, index) => {
                    const formattedDate = new Date(item.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                    });
                    const categoryClass = getCategoryClass(item.category);
                    
                    return `
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <div class="category-tag ${categoryClass}">${item.category}</div>
                                <h3 style="margin-bottom: 10px; color: var(--text-color);">${item.title}</h3>
                                <p style="color: var(--text-muted-color); margin-bottom: 15px;">${item.description}</p>
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-weight: 600; color: var(--primary-color);">${formattedDate}</span>
                                    <span class="fee-badge ${item.fee.toLowerCase() === 'free' ? 'free' : 'paid'}">
                                        ${item.fee}
                                    </span>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            `;

            // Animate timeline items
            gsap.from('.timeline-item', {
                duration: 0.8,
                x: (index) => index % 2 === 0 ? -100 : 100,
                opacity: 0,
                stagger: 0.2
            });
        }

        // --- 8. SEARCH AND FILTER LOGIC ---
        // --- 8. SEARCH AND FILTER LOGIC --- (FIXED)
function filterItems(searchTerm = '', filterType = 'all') {
    filteredItems = allItems.filter(item => {
        const matchesSearch = searchTerm === '' || 
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.college.toLowerCase().includes(searchTerm.toLowerCase());
        
        let matchesFilter = false;
        
        // Fixed filtering logic
        if (filterType === 'all') {
            matchesFilter = true;
        } else if (filterType === 'active') {
            matchesFilter = item.status === 'Active';
        } else if (filterType === 'free') {
            matchesFilter = item.fee.toLowerCase() === 'free';
        } else if (filterType === 'workshop') {
            // Filter by TYPE for workshops
            matchesFilter = item.type === 'workshop';
        } else {
            // Filter by CATEGORY for technical, cultural, sports, etc.
            matchesFilter = item.category === filterType;
        }
        
        return matchesSearch && matchesFilter;
    });
    
    if (currentView === 'grid') {
        renderGridView();
    } else {
        renderTimelineView();
    }
}


        // --- 9. EVENT LISTENERS ---
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            filterItems(e.target.value, currentFilter);
        });

        // Filter buttons
        document.getElementById('filterButtons').addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                currentFilter = e.target.dataset.filter;
                filterItems(searchInput.value, currentFilter);
            }
        });

        // View toggle
        document.getElementById('gridViewBtn').addEventListener('click', () => {
            currentView = 'grid';
            document.getElementById('gridView').style.display = 'block';
            document.getElementById('timelineView').style.display = 'none';
            document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById('gridViewBtn').classList.add('active');
            renderGridView();
        });

        document.getElementById('timelineViewBtn').addEventListener('click', () => {
            currentView = 'timeline';
            document.getElementById('gridView').style.display = 'none';
            document.getElementById('timelineView').style.display = 'block';
            document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById('timelineViewBtn').classList.add('active');
            renderTimelineView();
        });

        // Image modal functionality
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const closeBtn = document.getElementsByClassName('close')[0];

        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('thumbnail')) {
                modal.style.display = 'flex';
                modalImg.src = event.target.src;
            }
        });

        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };

        modal.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };

        // FAB functionality
        document.getElementById('fabBtn').addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // --- 10. INITIALIZE PAGE ---
        renderStats();
        renderGridView();

        // Update countdowns every minute
        setInterval(() => {
            if (currentView === 'grid') {
                const timers = document.querySelectorAll('.countdown-timer');
                timers.forEach((timer, index) => {
                    const item = filteredItems.find(item => item.status === 'Active');
                    if (item) {
                        timer.textContent = calculateTimeLeft(item.date);
                    }
                });
            }
        }, 60000);
    });