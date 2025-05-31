let step = 1;
let userSelection = { rahang: '', hidung: '', alis: '', bibir: '' };

function selectOption(kriteria, nilai) {
  userSelection[kriteria] = nilai;
  document.getElementById('step' + step).classList.remove('active');
  step++;
  if (step <= 4) {
    document.getElementById('step' + step).classList.add('active');
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('result').classList.add('active');

  const r = userSelection.rahang;
  const h = userSelection.hidung;
  const a = userSelection.alis;
  const b = userSelection.bibir;

  let visual = 'look visual';
  let makeup = 'natural look';
  let imageHtml = '';

  const highVisualCombinations = [
    ["hidung mancung", "alis tebal", "bibir tebal", "rahang tegas"],
    ["hidung mancung", "alis tipis", "bibir tipis", "rahang tegas"],
    ["hidung mancung", "alis tipis", "bibir tebal", "rahang tegas"],
    ["hidung pendek", "alis tebal", "bibir tebal", "rahang tegas"],
    ["hidung mancung", "alis tebal", "bibir tipis", "rahang tegas"]
  ];

  const naturalVisualCombinations = [
    ["hidung pendek", "alis tebal", "bibir tipis", "rahang halus"],
    ["hidung pendek", "alis tipis", "bibir tipis", "rahang tegas"],
    ["hidung mancung", "alis tebal", "bibir tebal", "rahang halus"],
    ["hidung mancung", "alis tipis", "bibir tipis", "rahang halus"],
    ["hidung pendek", "alis tebal", "bibir tipis", "rahang halus"],
    ["hidung pendek", "alis tipis", "bibir tebal", "rahang halus"]
  ];

  let found = false;

  for (const combo of highVisualCombinations) {
    if (h === combo[0] && a === combo[1] && b === combo[2] && r === combo[3]) {
      visual = 'high visual';
      makeup = 'bold look';
      imageHtml =
        '<img src="boldmakeup1.jpg" alt="Contoh Bold Look 1" />' +
        '<img src="boldmakeup2.jpg" alt="Contoh Bold Look 2" />' +
        '<img src="boldmakeup3.jpg" alt="Contoh Bold Look 3" />';
      found = true;
      break;
    }
  }

  if (!found) {
    for (const combo of naturalVisualCombinations) {
      if (h === combo[0] && a === combo[1] && b === combo[2] && r === combo[3]) {
        visual = 'natural visual';
        makeup = 'natural look';
        imageHtml =
          '<img src="naturalmakeup1.jpg" alt="Contoh Natural Look 1" />' +
          '<img src="naturalmakeup2.jpg" alt="Contoh Natural Look 2" />' +
          '<img src="naturalmakeup3.jpg" alt="Contoh Natural Look 3" />';
        found = true;
        break;
      }
    }
  }

  if (!found && makeup === 'natural look') {
    imageHtml =
      '<img src="naturalmakeup1.jpg" alt="Contoh Natural Look 1" />' +
      '<img src="naturalmakeup2.jpg" alt="Contoh Natural Look 2" />' +
      '<img src="naturalmakeup3.jpg" alt="Contoh Natural Look 3" />';
  }

  const output =
    '<ul style="list-style: none; padding: 0; margin: 0 auto 20px auto; max-width: 300px; color: #073763; font-weight: 600;">' +
    '<li style="margin-bottom: 8px;">✅ Rahang: ' + r + '</li>' +
    '<li style="margin-bottom: 8px;">✅ Hidung: ' + h + '</li>' +
    '<li style="margin-bottom: 8px;">✅ Alis: ' + a + '</li>' +
    '<li>✅ Bibir: ' + b + '</li>' +
    '</ul>' +
    '<div style="text-align: center; margin-bottom: 20px;">' +
    '<strong>Kriteria Visual:</strong> ' + visual + '<br>' +
    '<strong>Rekomendasi Makeup:</strong> ' + makeup +
    '</div>' +
    imageHtml;

  document.getElementById('output').innerHTML = output;
}

function resetApp() {
  step = 1;
  userSelection = { rahang: '', hidung: '', alis: '', bibir: '' };
  document.querySelectorAll('.step, .result').forEach(el => el.classList.remove('active'));
  document.getElementById('step1').classList.add('active');
  document.getElementById('output').innerHTML = '';
}
