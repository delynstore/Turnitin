
function goToStep(step) {
    document.querySelectorAll('.form-step').forEach(el => el.classList.remove('active'));
    document.getElementById('step' + step).classList.add('active');
}

document.getElementById('filterSourceCheckbox').addEventListener('change', function () {
    document.getElementById('sourceDetails').style.display = this.checked ? 'block' : 'none';
});

function showQR() {
    const method = document.getElementById('paymentMethod').value;
    const qrDiv = document.getElementById('paymentInfo');
    qrDiv.style.display = method ? 'block' : 'none';
}
