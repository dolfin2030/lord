// Admin Panel JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navItems = document.querySelectorAll('.nav-item[data-section]');
    const sections = document.querySelectorAll('.admin-section');
    const pageTitle = document.getElementById('pageTitle');
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');

    // Section Navigation
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.classList.contains('logout')) return;
            
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            
            // Show target section
            const targetSection = this.getAttribute('data-section');
            document.getElementById(targetSection).classList.add('active');
            
            // Update page title
            pageTitle.textContent = this.querySelector('span').textContent;
            
            // Close sidebar on mobile
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Mobile Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Product Modal
    const addProductBtn = document.getElementById('addProductBtn');
    const productModal = document.getElementById('productModal');
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    const productForm = document.getElementById('productForm');

    if (addProductBtn) {
        addProductBtn.addEventListener('click', function() {
            document.getElementById('modalTitle').textContent = 'افزودن محصول جدید';
            productForm.reset();
            productModal.classList.add('active');
        });
    }

    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            productModal.classList.remove('active');
        });
    });

    // Close modal when clicking outside
    productModal.addEventListener('click', function(e) {
        if (e.target === productModal) {
            productModal.classList.remove('active');
        }
    });

    // Product Form Submission
    if (productForm) {
        productForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const productName = document.getElementById('productName').value;
            const productCategory = document.getElementById('productCategory').value;
            const productPrice = document.getElementById('productPrice').value;
            const productStock = document.getElementById('productStock').value;
            const productDescription = document.getElementById('productDescription').value;
            
            // Here you would typically send this data to a server
            console.log('Product Data:', {
                name: productName,
                category: productCategory,
                price: productPrice,
                stock: productStock,
                description: productDescription
            });
            
            // Show success message
            alert('محصول با موفقیت ذخیره شد!');
            
            // Close modal
            productModal.classList.remove('active');
            
            // In a real application, you would refresh the products table
        });
    }

    // Edit Product Buttons
    const editButtons = document.querySelectorAll('.btn-edit');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const productName = row.cells[1].textContent;
            
            document.getElementById('modalTitle').textContent = 'ویرایش محصول';
            document.getElementById('productName').value = productName;
            
            // In a real application, you would load all product data
            productModal.classList.add('active');
        });
    });

    // Delete Product Buttons
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('آیا از حذف این محصول اطمینان دارید؟')) {
                const row = this.closest('tr');
                row.remove();
                alert('محصول با موفقیت حذف شد!');
            }
        });
    });

    // View Order Buttons
    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const orderId = row.cells[0].textContent;
            alert('مشاهده جزئیات سفارش: ' + orderId);
            // In a real application, open a modal with order details
        });
    });

    // Reply Message Buttons
    const replyButtons = document.querySelectorAll('.btn-reply');
    replyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.message-card');
            const customerName = card.querySelector('h4').textContent;
            alert('پاسخ به پیام: ' + customerName);
            // In a real application, open a reply modal
        });
    });

    // Settings Form Submission
    const settingsForm = document.querySelector('.settings-form');
    if (settingsForm) {
        const saveButton = settingsForm.querySelector('.btn-primary');
        if (saveButton) {
            saveButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get form values
                const siteName = document.getElementById('siteName').value;
                const siteEmail = document.getElementById('siteEmail').value;
                const sitePhone = document.getElementById('sitePhone').value;
                const siteAddress = document.getElementById('siteAddress').value;
                
                // Here you would typically send this data to a server
                console.log('Settings Data:', {
                    name: siteName,
                    email: siteEmail,
                    phone: sitePhone,
                    address: siteAddress
                });
                
                // Show success message
                alert('تنظیمات با موفقیت ذخیره شد!');
            });
        }
    }

    // Filter Orders
    const orderFilter = document.querySelector('#orders .form-select');
    if (orderFilter) {
        orderFilter.addEventListener('change', function() {
            const status = this.value;
            console.log('Filtering orders by status:', status);
            // In a real application, filter the orders table
        });
    }

    // Stats Animation (Optional)
    const statNumbers = document.querySelectorAll('.stat-info h3');
    
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            
            // Format number with commas
            element.textContent = value.toLocaleString('fa-IR');
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Initialize stats animation on page load
    // Uncomment to enable animation
    // statNumbers.forEach(stat => {
    //     const endValue = parseInt(stat.textContent.replace(/,/g, ''));
    //     animateValue(stat, 0, endValue, 2000);
    // });

    // Table Row Click for Details
    const tableRows = document.querySelectorAll('.data-table tbody tr');
    tableRows.forEach(row => {
        row.style.cursor = 'pointer';
        row.addEventListener('click', function(e) {
            // Don't trigger if clicking on buttons
            if (e.target.closest('button')) return;
            
            row.style.background = '#ebf8ff';
            setTimeout(() => {
                row.style.background = '';
            }, 300);
        });
    });

    // Search Functionality (Optional - can be added to tables)
    function filterTable(tableId, searchTerm) {
        const table = document.getElementById(tableId);
        if (!table) return;
        
        const rows = table.querySelectorAll('tbody tr');
        const term = searchTerm.toLowerCase();
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(term) ? '' : 'none';
        });
    }

    // Make filterTable available globally
    window.filterTable = filterTable;

    console.log('Admin Panel initialized successfully!');
});
