const currentPeriod = new Date("2014-01");

const periodsNumberDOM = document.querySelector("input");
const createdPeriodsDOM = document.querySelector("#created-periods");

periodsNumberDOM.addEventListener("input", () => {
    let periodsToCreate = Number(periodsNumberDOM.value) < 1 || Number(periodsNumberDOM.value) > 10_000
        ? 1
        : Math.floor(Number(periodsNumberDOM.value));
    let periodsString = new Array(periodsToCreate)
        .fill(null)
        .map((val, index) => {
            let year = currentPeriod.getFullYear() + Math.floor(index / 12);
            let month = currentPeriod.getMonth() + 1 + index % 12;
            return `${year}-${month.toString().padStart(2, "0")}`;
        })
        .join(" / ");
    createdPeriodsDOM.textContent = periodsString;
});