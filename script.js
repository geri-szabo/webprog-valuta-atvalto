document.getElementById("button-valtas").addEventListener("click", () => {
    fetch(`https://hexarate.paikama.co/api/rates/${document.getElementById("select-valuta-from").value}/${document.getElementById("select-valuta-to").value}/latest`)
        .then(resp => resp.json())
        .then(json => {
            const mid = json.data.mid;
            const input = document.getElementById("input-osszeg");
            const output = document.getElementById("atvaltott-osszeg")
            if (mid < 1) {
                output.value = input.value * mid;
            } else {
                output.value = input.value / mid;
            }
        })
})