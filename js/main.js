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