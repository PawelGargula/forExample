const currentPeriod = new Date("2014-6");
const currentPeriodString = `${currentPeriod.getFullYear()}-${(currentPeriod.getMonth() + 1).toString().padStart(2, "0")}`;

const currentPeriodDOM = document.querySelector("#current-period");
const periodsNumberDOM = document.querySelector("input");
const createdPeriodsDOM = document.querySelector("#created-periods");

currentPeriodDOM.textContent += currentPeriodString;
createdPeriodsDOM.textContent += currentPeriodString;

periodsNumberDOM.addEventListener("input", () => {
    const value = Math.floor(Number(periodsNumberDOM.value));
    const periodsToCreate = value < 1 || value > 10_000
        ? 1
        : value;
    const periodsString = new Array(periodsToCreate)
        .fill(null)
        .map((val, index) => {
            const year = currentPeriod.getFullYear() + Math.floor((currentPeriod.getMonth() + index) / 12);
            let month = (currentPeriod.getMonth() + 1 + index) % 12;
            if (month === 0)
                month = 12;
            return `${year}-${month.toString().padStart(2, "0")}`;
        })
        .join(" / ");
    createdPeriodsDOM.textContent = periodsString;
});