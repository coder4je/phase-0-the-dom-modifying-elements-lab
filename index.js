// Write your code here!
const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.id = 'victory';
document.body.append(newHeader);

document.getElementById('victory').textContent = '\"TAEMIN is the champion\"';