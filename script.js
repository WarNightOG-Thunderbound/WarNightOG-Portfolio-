document.addEventListener('DOMContentLoaded', function() {
    // Loading screen handling
    const loadingScreen = document.querySelector('.loading-screen');
    const fallbackTimeout = setTimeout(() => {
        hideLoadingScreen();
    }, 5000);

    // Minimum load time
    const minLoadTime = 1500;
    const loadStart = Date.now();

    function hideLoadingScreen() {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            initAll();
        }, 500);
    }

    function initAll() {
        console.log("Initializing Cyber Systems...");
        
        // Initialize all components
        initTerminal();
        initRolesAnimation();
        initScrollAnimations();
        initNavigation();
        initStatsAnimation();
        initMatrixEffect();
        initCardEffects();
        initForm();
        initCodeAnimation();
        
        // Force show content after load
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = 'block';
        });
    }

    // Terminal animation
    function initTerminal() {
        const terminalTexts = [
            "booting cyber systems...",
            "loading core modules...",
            "establishing secure connection...",
            "system ready...",
            "welcome back, WarNightOG..."
        ];
        let currentTerminalText = 0;
        const terminalElement = document.getElementById('terminal-text');
        
        function typeTerminalText(text, callback) {
            let i = 0;
            terminalElement.textContent = '';
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    terminalElement.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setTimeout(callback, 1000);
                }
            }, 50);
        }
        
        function eraseTerminalText(callback) {
            let text = terminalElement.textContent;
            let i = text.length;
            const erasingInterval = setInterval(() => {
                if (i > 0) {
                    terminalElement.textContent = text.substring(0, i - 1);
                    i--;
                } else {
                    clearInterval(erasingInterval);
                    setTimeout(callback, 500);
                }
            }, 30);
        }
        
        function cycleTerminalText() {
            typeTerminalText(terminalTexts[currentTerminalText], () => {
                eraseTerminalText(() => {
                    currentTerminalText = (currentTerminalText + 1) % terminalTexts.length;
                    cycleTerminalText();
                });
            });
        }
        
        cycleTerminalText();
    }

    // Roles animation
    function initRolesAnimation() {
        const roles = [
            "Web Developer",
            "Game Developer",
            "Software Engineer",
            "Pivot Animator",
            "Blender Artist",
            "Content Creator",
            "Console Programmer",
            "Back-end Developer",
            "Technical Artist",
            "Systems Architect"
        ];
        let currentRole = 0;
        const rolesElement = document.getElementById('roles-text');
        
        function typeRole(text, callback) {
            let i = 0;
            rolesElement.textContent = '';
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    rolesElement.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setTimeout(callback, 2000);
                }
            }, 100);
        }
        
        function eraseRole(callback) {
            let text = rolesElement.textContent;
            let i = text.length;
            const erasingInterval = setInterval(() => {
                if (i > 0) {
                    rolesElement.textContent = text.substring(0, i - 1);
                    i--;
                } else {
                    clearInterval(erasingInterval);
                    setTimeout(callback, 500);
                }
            }, 50);
        }
        
        function cycleRoles() {
            typeRole(roles[currentRole], () => {
                eraseRole(() => {
                    currentRole = (currentRole + 1) % roles.length;
                    cycleRoles();
                });
            });
        }
        
        cycleRoles();
    }

    // Code animation in footer
    function initCodeAnimation() {
        const codeSnippets = [
            `// JavaScript\nconsole.log("Hello WarNightOG");`,
            `// C++\nstd::cout << "Hello WarNightOG" << std::endl;`,
            `// C\nprintf("Hello WarNightOG\\n");`,
            `// C#\nConsole.WriteLine("Hello WarNightOG");`,
            `// Rust\nprintln!("Hello WarNightOG");`,
            `// Ruby\nputs "Hello WarNightOG"`,
            `// PHP\necho "Hello WarNightOG";`,
            `// Python\nprint("Hello WarNightOG")`,
            `// Java\nSystem.out.println("Hello WarNightOG");`,
            `// Lua\nprint("Hello WarNightOG")`,
            `// Binary\n01001000 01100101 01101100 01101100 01101111 00100000 01010111 01100001 01110010 01001110 01101001 01100111 01101000 01110100 01001111 01000111`
        ];
        
        const codeOutput = document.getElementById('code-output');
        let currentSnippet = 0;
        
        function displayCodeSnippet() {
            let snippet = codeSnippets[currentSnippet];
            let i = 0;
            codeOutput.textContent = '';
            
            const typingInterval = setInterval(() => {
                if (i < snippet.length) {
                    codeOutput.textContent += snippet.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setTimeout(() => {
                        currentSnippet = (currentSnippet + 1) % codeSnippets.length;
                        displayCodeSnippet();
                    }, 3000);
                }
            }, 50);
        }
        
        displayCodeSnippet();
    }

    // Scroll animations
    function initScrollAnimations() {
        // Register ScrollTrigger plugin
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            // Animate sections on scroll
            gsap.utils.toArray(".section").forEach(section => {
                gsap.from(section, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });
            });
        } else {
            console.warn("GSAP ScrollTrigger not available - fallback to basic animations");
            document.querySelectorAll('.section').forEach(section => {
                section.style.opacity = '1';
            });
        }
    }

    // Navigation
    function initNavigation() {
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Update active section on scroll
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Stats animation
    function initStatsAnimation() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        function animateStats() {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000;
                const start = 0;
                const increment = target / (duration / 16);
                let current = start;
                
                const timer = setInterval(() => {
                    current += increment;
                    stat.textContent = Math.floor(current);
                    
                    if (current >= target) {
                        stat.textContent = target;
                        clearInterval(timer);
                    }
                }, 16);
            });
        }
        
        // Create intersection observer for stats
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        const inventionsSection = document.getElementById('inventions');
        if (inventionsSection) {
            observer.observe(inventionsSection);
        }
    }

    // Matrix effect
    function initMatrixEffect() {
        const matrixBackground = document.querySelector('.cyber-grid');
        if (matrixBackground) {
            const canvas = document.createElement('canvas');
            matrixBackground.appendChild(canvas);
            
            const ctx = canvas.getContext('2d');
            canvas.width = matrixBackground.offsetWidth;
            canvas.height = matrixBackground.offsetHeight;
            
            const fontSize = 14;
            const columns = canvas.width / fontSize;
            
            const drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * -100;
            }
            
            const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
            
            function draw() {
                ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                ctx.fillStyle = '#00ff00';
                ctx.font = fontSize + 'px monospace';
                
                for (let i = 0; i < drops.length; i++) {
                    const text = chars.charAt(Math.floor(Math.random() * chars.length));
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                    
                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    
                    drops[i]++;
                }
            }
            
            window.addEventListener('resize', function() {
                canvas.width = matrixBackground.offsetWidth;
                canvas.height = matrixBackground.offsetHeight;
            });
            
            setInterval(draw, 33);
        }
    }

    // Card effects
    function initCardEffects() {
        const cards = document.querySelectorAll('.invention-card, .plugin-item, .mod-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const angleX = (y - centerY) / 20;
                const angleY = (centerX - x) / 20;
                
                this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }

    // Form handling
    function initForm() {
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const submitButton = this.querySelector('button[type="submit"]');
                const originalText = submitButton.innerHTML;
                
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> SENDING...';
                submitButton.disabled = true;
                
                setTimeout(() => {
                    submitButton.innerHTML = '<i class="fas fa-check"></i> MESSAGE SENT';
                    
                    setTimeout(() => {
                        this.reset();
                        submitButton.innerHTML = originalText;
                        submitButton.disabled = false;
                        
                        const successMessage = document.createElement('div');
                        successMessage.className = 'form-success';
                        successMessage.innerHTML = '> MESSAGE TRANSMISSION COMPLETE';
                        this.appendChild(successMessage);
                        
                        setTimeout(() => {
                            successMessage.remove();
                        }, 3000);
                    }, 1500);
                }, 2000);
            });
        }
    }

    // Wait until minimum load time has elapsed
    const remainingTime = minLoadTime - (Date.now() - loadStart);
    if (remainingTime > 0) {
        setTimeout(() => {
            clearTimeout(fallbackTimeout);
            hideLoadingScreen();
        }, remainingTime);
    } else {
        clearTimeout(fallbackTimeout);
        hideLoadingScreen();
    }
});