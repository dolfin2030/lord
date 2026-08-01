// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Filter Products
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        productCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                if (card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !phone) {
            alert('لطفاً نام و شماره تماس خود را وارد کنید.');
            return;
        }
        
        // Here you would normally send the data to a server
        // For demo purposes, we'll just show a success message
        alert(`با تشکر از پیام شما، ${name} عزیز!\nبه زودی با شماره ${phone} تماس خواهیم گرفت.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Show Product Details (Placeholder function)
function showProductDetails(productId) {
    // In a real application, this would open a modal or navigate to a product page
    const products = {
        'classic-diamond': {
            name: 'درب کلاسیک مدل الماس',
            price: '۱۸,۵۰۰,۰۰۰ تومان',
            description: 'طراحی کلاسیک با ورق فولادی ۱.۵ میلی‌متری، قفل ضد سرقت درجه یک، رنگ الکترواستاتیک کوره‌ای'
        },
        'modern-platinum': {
            name: 'درب مدرن مدل پلاتین',
            price: '۲۲,۰۰۰,۰۰۰ تومان',
            description: 'طراحی مینیمال با رنگ الکترواستاتیک، ورق فولادی ۲ میلی‌متری، عایق صوتی و حرارتی'
        },
        'luxury-royal': {
            name: 'درب لوکس مدل سلطنتی',
            price: '۳۵,۰۰۰,۰۰۰ تومان',
            description: 'طراحی خاص با روکش چوب طبیعی بلوط، قفل هوشمند، سیستم ضد سرقت پیشرفته'
        },
        'classic-ruby': {
            name: 'درب کلاسیک مدل یاقوت',
            price: '۲۰,۵۰۰,۰۰۰ تومان',
            description: 'مناسب برای ساختمان‌های لوکس و قدیمی، طراحی دست‌ساز، گارانتی ۵ ساله'
        }
    };
    
    const product = products[productId];
    if (product) {
        alert(`${product.name}\nقیمت: ${product.price}\n\n${product.description}\n\nبرای اطلاعات بیشتر با ما تماس بگیرید.`);
    }
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Animate Elements on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .product-card, .stat-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on page load

// Phone Number Formatting (Optional)
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) {
            value = value.substring(0, 11);
        }
        e.target.value = value;
    });
}

// Console log for development
console.log('Security Door Shop Website Loaded Successfully!');
console.log('For inquiries, contact: 021-12345678');
