const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    const img = document.querySelector('img');
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);

}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
