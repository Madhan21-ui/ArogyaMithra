const doctorsData = [
    { symptom: "fever", specialist: "General Physician", doctor: "Dr. Ravi Kumar", hospital: "CityCare Clinic", medicines: ["Paracetamol", "Crocin", "Drink plenty of fluids"] },
    { symptom: "toothache", specialist: "Dentist", doctor: "Dr. Sneha Reddy", hospital: "Smile Dental Hospital", medicines: ["Pain relief gel", "Warm saltwater rinse"] },
    { symptom: "cough", specialist: "ENT Specialist", doctor: "Dr. Anil Sharma", hospital: "HealthyEars Clinic", medicines: ["Cough syrup", "Steam inhalation", "Honey with warm water"] },
    { symptom: "headache", specialist: "Neurologist", doctor: "Dr. Priya Menon", hospital: "BrainWave Hospital", medicines: ["Paracetamol", "Ibuprofen (if advised)", "Rest in dark room"] },
    { symptom: "cold", specialist: "General Physician", doctor: "Dr. Ravi Kumar", hospital: "CityCare Clinic", medicines: ["Antihistamine (Cetirizine)", "Steam inhalation", "Ginger tea"] },
];

function findDoctor() {
    const symptomInput = document.getElementById("symptomInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");

    const filtered = doctorsData.filter(d => d.symptom === symptomInput);

    if (filtered.length === 0) {
        resultDiv.innerHTML = "⚠️ Sorry, no doctor found for this symptom. Please try another one.";
        return;
    }

    let output = "";
    filtered.forEach(d => {
        output += `
      🩺 Specialist: <b>${d.specialist}</b><br>
      👨‍⚕️ Doctor: <b>${d.doctor}</b><br>
      🏥 Hospital: <b>${d.hospital}</b><br>
      💊 Medicines / Care Tips:
      <ul>
        ${d.medicines.map(m => `<li>${m}</li>`).join("")}
      </ul>
      <p style="font-size:12px; color:#ccc;">
⚠️ Medicines listed are for mild symptoms only. Always consult a certified doctor for accurate diagnosis and dosage.
</p>

      <hr>
    `;
    });

    resultDiv.innerHTML = output;
}
