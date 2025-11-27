
document.addEventListener('DOMContentLoaded', function() {
 
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            

            sections.forEach(section => {
                section.classList.remove('active');
            });
            
     
            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
            
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    
    const cartinhaForm = document.getElementById('cartinha-form');
    const confirmationModal = document.getElementById('confirmation-modal');
    const closeModal = document.querySelector('.close');
    const modalCloseBtn = document.getElementById('modal-close');
    
    cartinhaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const pedidos = document.getElementById('pedidos').value;
        
        if (!nome || !idade || !pedidos) {
            alert('Por favor, preencha todos os campos obrigatórios!');
            return;
        }
        
        
        setTimeout(() => {
            
            confirmationModal.style.display = 'block';
            
            
            cartinhaForm.reset();
        }, 1000);
    });
    
   
    closeModal.addEventListener('click', function() {
        confirmationModal.style.display = 'none';
    });
    
    modalCloseBtn.addEventListener('click', function() {
        confirmationModal.style.display = 'none';
    });
    
   
    window.addEventListener('click', function(e) {
        if (e.target === confirmationModal) {
            confirmationModal.style.display = 'none';
        }
    });
    
    
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
       
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset();
    });
    
   
    createSnowflakes();
    
    function createSnowflakes() {
        const snowflakesContainer = document.createElement('div');
        snowflakesContainer.className = 'snowflakes';
        snowflakesContainer.style.position = 'fixed';
        snowflakesContainer.style.top = '0';
        snowflakesContainer.style.left = '0';
        snowflakesContainer.style.width = '100%';
        snowflakesContainer.style.height = '100%';
        snowflakesContainer.style.pointerEvents = 'none';
        snowflakesContainer.style.zIndex = '1';
        document.body.appendChild(snowflakesContainer);
        
        
        for (let i = 0; i < 50; i++) {
            const snowflake = document.createElement('div');
            snowflake.innerHTML = '❄';
            snowflake.style.position = 'absolute';
            snowflake.style.color = 'white';
            snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';
            snowflake.style.opacity = Math.random() * 0.5 + 0.3;
            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
            snowflake.style.animationDelay = Math.random() * 5 + 's';
            snowflakesContainer.appendChild(snowflake);
        }
        
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fall {
                0% {
                    transform: translateY(-100px) rotate(0deg);
                }
                100% {
                    transform: translateY(100vh) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
});