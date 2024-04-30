let devInput;
let devPufferInput;
let devCheckInput;
let devTestInput;
let devDocInput;
let custProvInput;
let custDelInput;
let custGarInput;
let resultInput;
let lockCalc = false;

document.addEventListener("DOMContentLoaded", () => {
    devInput = document.getElementById("dev-input");
    devPufferInput = document.getElementById("dev-puffer-input");
    devCheckInput = document.getElementById("dev-check-input");
    devTestInput = document.getElementById("dev-test-input");
    devDocInput = document.getElementById("dev-doc-input");
    custProvInput = document.getElementById("cust-prov-input");
    custDelInput = document.getElementById("cust-del-input");
    custGarInput = document.getElementById("cust-gar-input");
    resultInput = document.getElementById("result-input");
});

function onInputDev(event) {
    if (lockCalc === false)
        updateCorrInputs();
    calcResult();
}

function onInputDevPuffer(event) {
    devPufferChanged = event.target.value !== 0;
    calcResult();
}

function onInputDevCheck(event) {
    devPufferChanged = event.target.value !== 0;
    calcResult();
}

function onInputDevTest(event) {
    devPufferChanged = event.target.value !== 0;
    calcResult();
}

function onInputDevDoc(event) {
    devPufferChanged = event.target.value !== 0;
    calcResult();
}

function onInputCustProv(event) {
    devPufferChanged = event.target.value !== 0;
    calcResult();
}

function onInputCustDel(event) {
    devPufferChanged = event.target.value !== 0;
    calcResult();
}

function onInputCustGar(event) {
    devPufferChanged = event.target.value !== 0;
    calcResult();
}

function onInputLockCalc(event) {
    lockCalc = !event.target.checked;
}

function onClickCalcButton() {
    updateCorrInputs();
    calcResult();
}

function updateCorrInputs() {
    devCheckInput.value = ((+devInput.value) * 0.1).toFixed(2);
    devTestInput.value = ((+devInput.value) * 0.1).toFixed(2);
    if (+devTestInput.value < 1)
        devTestInput.value = 1;
    custProvInput.value = ((+devInput.value) * 0.05).toFixed(2);
    if (+custProvInput.value < 1)
        custProvInput.value = 1;
}

function calcResult() {
    const result = (+devInput.value) + (+devPufferInput.value) + (+devCheckInput.value) + (+devTestInput.value) + (+devDocInput.value) + (+custProvInput.value) + (+custDelInput.value) + (+custGarInput.value);
    resultInput.value = result.toFixed(2);
}
