        document.getElementById('billingToggle').addEventListener('change', function() {
            const isAnnual = this.checked;
            const starterPrice = document.getElementById('starterPrice');
            const starterPeriod = document.getElementById('starterPeriod');
            const proPrice = document.getElementById('proPrice');
            const proPeriod = document.getElementById('proPeriod');
            const enterprisePrice = document.getElementById('enterprisePrice');
            const enterprisePeriod = document.getElementById('enterprisePeriod');
            
            if (isAnnual) {
                // Annual pricing (20% discount)
                starterPrice.textContent = '$279';
                starterPeriod.textContent = 'per year';
                proPrice.textContent = '$759';
                proPeriod.textContent = 'per year';
                enterprisePrice.textContent = '$1910';
                enterprisePeriod.textContent = 'per year';
            } else {
                // Monthly pricing
                starterPrice.textContent = '$29';
                starterPeriod.textContent = 'per month';
                proPrice.textContent = '$79';
                proPeriod.textContent = 'per month';
                enterprisePrice.textContent = '$199';
                enterprisePeriod.textContent = 'per month';
            }
        });
        
        // FAQ accordion functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentNode;
                item.classList.toggle('active');
            });
        });
        
        // Add smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });