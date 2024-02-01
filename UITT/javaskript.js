window.addEventListener("scroll",function()
{
    const header = document.querySelector("header");
    const navlinks = document.querySelectorAll("nav a");
    const hamburgerMenu = document.getElementById('hamburger-menu');

   if(window.scrollY>0)
   {
    hamburgerMenu.classList.add('skrollovano');
    header.style.backgroundColor = "#fff";
    navlinks.forEach(function(link)
    {
        link.style.color = "#000";
    });
   }
   else
   {
    hamburgerMenu.classList.remove('skrollovano');
    header.style.backgroundColor = "transparent";
    navlinks.forEach(function(link)
    {
        link.style.color = "#fff";
    });
   }

});
   
   document.addEventListener('DOMContentLoaded', function() {
        const section = document.querySelector('.sekcija');

        function skroll() {
            if (window.scrollY > 75) {
                section.classList.add('popup');
            } else {
                section.classList.remove('popup');
            }
        }

        window.addEventListener('scroll', skroll);
        document.addEventListener('DOMContentLoaded', skroll);
    });

    document.addEventListener('DOMContentLoaded', function () {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const nav = document.querySelector('nav');

        hamburgerMenu.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const prva = document.getElementById('firstimg');
        const druga = document.getElementById('secondimg');
        const treca = document.getElementById('thirdimg');
        const cetvrta = document.getElementById('fourthimg');
        let animacijaizvrsena = false;
    
        function skroll1() {
            
            const polozaj = prva.getBoundingClientRect();// dimenzija i polozaj elementa u odnosu na viewport - ugao koji vidi korisnik
            const visina = window.innerHeight || document.documentElement.clientHeight; // konstanta koja cuva visinu ekrana
            const trigger = visina * 0.75; // animacija ce se pokrenuti kada element dođe do 75%
    
            // da li je gornja granica elementa unutar ugla koji vidi korisnik
            if (polozaj.top <= trigger && !animacijaizvrsena) {
                prva.classList.add('prvaslika');
                druga.classList.add('scale');
                treca.classList.add('drugaslika');
                cetvrta.classList.add('scale');
                animacijaizvrsena = true;
    
                window.removeEventListener('scroll', skroll1);
                document.removeEventListener('DOMContentLoaded', skroll1);
            }
        }
    
        window.addEventListener('scroll', skroll1);
        document.addEventListener('DOMContentLoaded', skroll1);
    });
    
    document.addEventListener('DOMContentLoaded', function () {
        var sections = document.querySelectorAll('.destsekcija');
    
        function checkVisibility() {
            sections.forEach(function (section) {
                var bounding = section.getBoundingClientRect();
    
                if (bounding.top >= 0 && bounding.bottom <= window.innerHeight && !section.classList.contains('animated')) {
                    section.classList.add('active','animated');
                } else {
                    section.classList.remove('active');
                }
            });
        }
    
        checkVisibility();
    
        window.addEventListener('scroll', function () {
            checkVisibility();
        });
    });
    
    function validateForm(event) {
        var password = document.getElementById('password').value;
        var password2 = document.getElementById('password2').value;
        var passwordError = document.getElementById('password-error');
        var telefon = document.getElementById('telefon').value;
        var telefonError = document.getElementById('telefon-error');


        if (password.length < 6) {
            alert('Lozinka mora imati barem 6 karaktera.');
            event.preventDefault()
            return;
        }

        if (password !== password2) {
            alert('Lozinka i potvrda lozinke se ne podudaraju.');
            event.preventDefault()
            return;
        }

        passwordError.innerHTML = '';
        passwordError.style.display = 'none';
    }

    /*document.getElementById('forma').addEventListener('submit', function (event) {
        var password = document.getElementById('password').value;
        var password2 = document.getElementById('password2').value;
        var passwordError = document.getElementById('password-error');

        if (password !== password2) {
            passwordError.innerText = 'Lozinka i potvrda lozinke se ne podudaraju.';
            passwordError.style.color = 'red'; 
            event.preventDefault(); 
        } else {
            passwordError.innerText = '';
        }
    });*/

document.addEventListener('DOMContentLoaded', function () {
    var dugmescroll = document.querySelector('button a[href="#obeogradu"]');

    dugmescroll.addEventListener('click', function (event) {
    event.preventDefault();

    var sekcija = document.getElementById('obeogradu');

    sekcija.scrollIntoView({
    behavior: 'smooth'
         });
    });
});




