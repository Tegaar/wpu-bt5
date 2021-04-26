// gallery > aos
const galleryImage = document.querySelectorAll('.gallery-img');
    
galleryImage.forEach((img, i) => {
    img.dataset.aos = 'fade-down';
    img.dataset.aosDelay = i * 100;
    img.dataset.aosDuration = 800;
});

// AOS
AOS.init({
    once: true,
});


// GSAP

// Plugin,kalau nambah pake , aja abis TextPlugin
gsap.registerPlugin(TextPlugin);


    gsap.to('.lead', {duration:2, delay:1.5, text: 'Student | Student', ease: 'bounce'});
    gsap.from('.jumbotron img', { duration: 1, rotateY: 360, opacity:0});
    gsap.from('.navbar', { duration: 1.5, y: '-100%', opacity:0, ease: 'bounce'});
    gsap.from('.display-4', { duration: 1, x: -50, opacity:0, delay:0.5, ease: 'back'});






// Contact form

const scriptURL = 'https://script.google.com/macros/s/AKfycbynxecEUwX3N09YQb8GCGYFDVs2IZzP7xU6p86yxtAAZZwPO0y8qOdqhVuq_tf8-xF8/exec'
const form = document.forms['wpu-bt5-contact']
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const alertContact = document.querySelector('.alert-contact')

form.addEventListener('submit', e => {
    e.preventDefault()
    // ketika tombol submit diklik
    // tampilkan tombol loading,hilangkan tombol kirim
    btnLoading.classList.toggle('d-none')
    btnKirim.classList.toggle('d-none')

    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            // tampilkan kirim loading,hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // tampilkan alert-contact
            alertContact.classList.toggle('d-none');
            // reset form
            form.reset();

            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})