function selectBrand(name) {
  document.getElementById('brand').value = name;
  highlightSelected('brand-buttons', name);
}

function selectProcessorBrand(brand) {
  document.getElementById('processor').value = "";
  document.getElementById('model-label').style.display = "block";
  const modelContainer = document.getElementById('processor-model-buttons');
  modelContainer.style.display = "flex";
  modelContainer.innerHTML = "";

  const models = brand === "Intel"
    ? ["i3", "i5", "i7", "i9"]
    : ["Ryzen 3", "Ryzen 5", "Ryzen 7", "Ryzen 9"];

  models.forEach(model => {
    const btn = document.createElement('button');
    btn.textContent = model;
    btn.type = "button";
    btn.onclick = () => selectProcessorModel(brand, model);
    modelContainer.appendChild(btn);
  });

  highlightSelected('processor-brand-buttons', brand);
}

function selectProcessorModel(brand, model) {
  const full = `${brand} ${model}`;
  document.getElementById('processor').value = full;
  highlightSelected('processor-model-buttons', model);
}

function highlightSelected(groupId, selectedText) {
  const group = document.getElementById(groupId);
  [...group.children].forEach(btn => {
    if (btn.textContent === selectedText) {
      btn.style.backgroundColor = '#28a745';
      btn.style.color = 'white';
    } else {
      btn.style.backgroundColor = '';
      btn.style.color = '';
    }
  });
}

