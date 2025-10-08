const doctorsData = [
  { symptom: "fever", specialist: "General Physician", doctor: "Dr. Ravi Kumar", hospital: "CityCare Clinic", medicines: ["Paracetamol", "Crocin", "Drink plenty of fluids"] },
  { symptom: "cold", specialist: "General Physician", doctor: "Dr. Ravi Kumar", hospital: "CityCare Clinic", medicines: ["Antihistamine (Cetirizine)", "Steam inhalation", "Ginger tea"] },
  { symptom: "cough", specialist: "ENT Specialist", doctor: "Dr. Anil Sharma", hospital: "HealthyEars Clinic", medicines: ["Cough syrup", "Steam inhalation", "Honey with warm water"] },
  { symptom: "headache", specialist: "Neurologist", doctor: "Dr. Priya Menon", hospital: "BrainWave Hospital", medicines: ["Paracetamol", "Ibuprofen (if advised)", "Rest in dark room"] },
  { symptom: "toothache", specialist: "Dentist", doctor: "Dr. Sneha Reddy", hospital: "Smile Dental Hospital", medicines: ["Pain relief gel", "Warm saltwater rinse"] },
  { symptom: "sore throat", specialist: "ENT Specialist", doctor: "Dr. Anil Sharma", hospital: "HealthyEars Clinic", medicines: ["Warm saltwater gargle", "Throat lozenges", "Avoid cold drinks"] },
  { symptom: "stomach pain", specialist: "Gastroenterologist", doctor: "Dr. Vivek Nair", hospital: "Digestive Care Center", medicines: ["Antacid", "Drink water", "Eat light meals"] },
  { symptom: "diarrhea", specialist: "Gastroenterologist", doctor: "Dr. Vivek Nair", hospital: "Digestive Care Center", medicines: ["ORS", "Electrolyte fluids", "Avoid spicy food"] },
  { symptom: "vomiting", specialist: "Gastroenterologist", doctor: "Dr. Ritu Sharma", hospital: "CareWell Hospital", medicines: ["Ondansetron", "ORS", "Rest and hydrate"] },
  { symptom: "constipation", specialist: "Gastroenterologist", doctor: "Dr. Meera Joshi", hospital: "Digestive Plus Clinic", medicines: ["Fiber-rich food", "Isabgol", "Drink more water"] },
  { symptom: "acidity", specialist: "Gastroenterologist", doctor: "Dr. Vivek Nair", hospital: "Digestive Care Center", medicines: ["Antacid (Gelusil)", "Avoid spicy foods", "Eat on time"] },
  { symptom: "back pain", specialist: "Orthopedic", doctor: "Dr. Rajesh Varma", hospital: "SpineCare Hospital", medicines: ["Pain relief spray", "Hot compress", "Light exercise"] },
  { symptom: "joint pain", specialist: "Rheumatologist", doctor: "Dr. Kavita Iyer", hospital: "Joint Relief Clinic", medicines: ["Pain relief gel", "Stretching", "Warm compress"] },
  { symptom: "muscle pain", specialist: "Physiotherapist", doctor: "Dr. Neha Jain", hospital: "MoveWell Physio Center", medicines: ["Pain balm", "Gentle stretching", "Hot/cold therapy"] },
  { symptom: "ear pain", specialist: "ENT Specialist", doctor: "Dr. Anil Sharma", hospital: "HealthyEars Clinic", medicines: ["Ear drops (if prescribed)", "Avoid loud noise"] },
  { symptom: "eye pain", specialist: "Ophthalmologist", doctor: "Dr. Snehal Rao", hospital: "VisionPlus Eye Hospital", medicines: ["Lubricant eye drops", "Cold compress", "Avoid screen strain"] },
  { symptom: "red eyes", specialist: "Ophthalmologist", doctor: "Dr. Snehal Rao", hospital: "VisionPlus Eye Hospital", medicines: ["Cold water wash", "Lubricant drops", "Avoid touching eyes"] },
  { symptom: "skin rash", specialist: "Dermatologist", doctor: "Dr. Pooja Deshmukh", hospital: "SkinGlow Clinic", medicines: ["Calamine lotion", "Antihistamine", "Avoid scratching"] },
  { symptom: "acne", specialist: "Dermatologist", doctor: "Dr. Pooja Deshmukh", hospital: "SkinGlow Clinic", medicines: ["Benzoyl peroxide gel", "Face wash (salicylic acid)", "Drink water"] },
  { symptom: "hair fall", specialist: "Dermatologist", doctor: "Dr. Pooja Deshmukh", hospital: "SkinGlow Clinic", medicines: ["Biotin tablets", "Oil massage", "Avoid stress"] },
  { symptom: "dandruff", specialist: "Dermatologist", doctor: "Dr. Rajeev Pillai", hospital: "HairCare Clinic", medicines: ["Anti-dandruff shampoo", "Tea tree oil massage"] },
  { symptom: "allergy", specialist: "Allergist", doctor: "Dr. Suresh Iyer", hospital: "AllergyCare Center", medicines: ["Antihistamine", "Avoid triggers", "Stay hydrated"] },
  { symptom: "asthma", specialist: "Pulmonologist", doctor: "Dr. Manoj Singh", hospital: "BreatheWell Hospital", medicines: ["Inhaler (as prescribed)", "Avoid dust", "Steam inhalation"] },
  { symptom: "chest pain", specialist: "Cardiologist", doctor: "Dr. Arvind Mehta", hospital: "HeartCare Hospital", medicines: ["Nitroglycerin (if prescribed)", "Rest", "Seek immediate help"] },
  { symptom: "high blood pressure", specialist: "Cardiologist", doctor: "Dr. Arvind Mehta", hospital: "HeartCare Hospital", medicines: ["BP medicine (as advised)", "Reduce salt", "Regular exercise"] },
  { symptom: "low blood pressure", specialist: "Cardiologist", doctor: "Dr. Swathi Rao", hospital: "HeartCare Hospital", medicines: ["Increase salt intake", "Drink water", "Rest lying down"] },
  { symptom: "diabetes", specialist: "Endocrinologist", doctor: "Dr. Vinod Jain", hospital: "SugarControl Center", medicines: ["Metformin", "Avoid sugar", "Regular blood checks"] },
  { symptom: "thyroid", specialist: "Endocrinologist", doctor: "Dr. Vinod Jain", hospital: "SugarControl Center", medicines: ["Thyroxine (if prescribed)", "Regular testing"] },
  { symptom: "urine infection", specialist: "Urologist", doctor: "Dr. Kiran Patel", hospital: "UroCare Hospital", medicines: ["Antibiotics (if prescribed)", "Drink water", "Cranberry juice"] },
  { symptom: "period pain", specialist: "Gynecologist", doctor: "Dr. Anitha Reddy", hospital: "Women’s Health Clinic", medicines: ["Pain relief tablets", "Hot compress", "Rest"] },
  { symptom: "irregular periods", specialist: "Gynecologist", doctor: "Dr. Anitha Reddy", hospital: "Women’s Health Clinic", medicines: ["Hormonal checkup", "Balanced diet", "Medical advice"] },
  { symptom: "pregnancy care", specialist: "Gynecologist", doctor: "Dr. Meenakshi Rao", hospital: "MotherCare Hospital", medicines: ["Prenatal vitamins", "Iron supplements", "Regular checkups"] },
  { symptom: "anemia", specialist: "Hematologist", doctor: "Dr. Naveen Pillai", hospital: "BloodCare Center", medicines: ["Iron tablets", "Green leafy vegetables", "Vitamin C-rich foods"] },
  { symptom: "depression", specialist: "Psychiatrist", doctor: "Dr. Rohan Desai", hospital: "MindWell Clinic", medicines: ["Counseling", "Antidepressants (if prescribed)", "Exercise and sleep well"] },
  { symptom: "anxiety", specialist: "Psychiatrist", doctor: "Dr. Rohan Desai", hospital: "MindWell Clinic", medicines: ["Breathing exercises", "Relaxation therapy", "Counseling"] },
  { symptom: "insomnia", specialist: "Psychiatrist", doctor: "Dr. Rohan Desai", hospital: "MindWell Clinic", medicines: ["Sleep hygiene", "Avoid caffeine", "Melatonin (if prescribed)"] },
  { symptom: "migraine", specialist: "Neurologist", doctor: "Dr. Priya Menon", hospital: "BrainWave Hospital", medicines: ["Painkillers (as advised)", "Avoid bright lights", "Rest in quiet room"] },
  { symptom: "dizziness", specialist: "Neurologist", doctor: "Dr. Priya Menon", hospital: "BrainWave Hospital", medicines: ["Stay hydrated", "Avoid sudden movements", "Check blood pressure"] },
  { symptom: "burn", specialist: "Dermatologist", doctor: "Dr. Pooja Deshmukh", hospital: "SkinGlow Clinic", medicines: ["Aloe vera gel", "Cold water rinse", "Avoid direct sunlight"] },
  { symptom: "cut injury", specialist: "General Surgeon", doctor: "Dr. Rajesh Gupta", hospital: "LifeCare Hospital", medicines: ["Antiseptic cream", "Clean wound", "Bandage properly"] },
  { symptom: "fracture", specialist: "Orthopedic", doctor: "Dr. Rajesh Varma", hospital: "SpineCare Hospital", medicines: ["Immobilization", "Pain relief", "Consult X-ray"] },
  { symptom: "sprain", specialist: "Orthopedic", doctor: "Dr. Rajesh Varma", hospital: "SpineCare Hospital", medicines: ["Ice pack", "Compression bandage", "Rest"] },
  { symptom: "dehydration", specialist: "General Physician", doctor: "Dr. Ravi Kumar", hospital: "CityCare Clinic", medicines: ["ORS", "Coconut water", "Rest"] },
  { symptom: "heat stroke", specialist: "General Physician", doctor: "Dr. Ravi Kumar", hospital: "CityCare Clinic", medicines: ["Cool fluids", "Rest in shade", "Avoid direct sun"] },
  { symptom: "food poisoning", specialist: "Gastroenterologist", doctor: "Dr. Vivek Nair", hospital: "Digestive Care Center", medicines: ["ORS", "Rest", "Avoid oily food"] },
  { symptom: "nosebleed", specialist: "ENT Specialist", doctor: "Dr. Anil Sharma", hospital: "HealthyEars Clinic", medicines: ["Pinch nose", "Lean forward", "Avoid picking nose"] },
  { symptom: "weight gain", specialist: "Dietitian", doctor: "Dr. Smita Joshi", hospital: "FitLife Nutrition Center", medicines: ["Balanced diet plan", "Exercise", "Avoid junk food"] },
  { symptom: "weight loss", specialist: "Dietitian", doctor: "Dr. Smita Joshi", hospital: "FitLife Nutrition Center", medicines: ["High-protein diet", "Adequate sleep", "Regular meals"] },
  { symptom: "fatigue", specialist: "General Physician", doctor: "Dr. Ravi Kumar", hospital: "CityCare Clinic", medicines: ["Balanced diet", "Iron supplements", "Adequate rest"] },
  { symptom: "throat infection", specialist: "ENT Specialist", doctor: "Dr. Anil Sharma", hospital: "HealthyEars Clinic", medicines: ["Antibiotics (if prescribed)", "Warm salt gargle", "Rest"] },
  { symptom: "hand pain", specialist: "Orthopedic", doctor: "Dr. Rajesh Varma", hospital: "SpineCare Hospital", medicines: ["Pain relief balm", "Stretching", "Hot compress"] },
  { symptom: "leg pain", specialist: "Orthopedic", doctor: "Dr. Rajesh Varma", hospital: "SpineCare Hospital", medicines: ["Pain relief spray", "Elevate leg", "Gentle massage"] },
  { symptom: "swelling", specialist: "General Physician", doctor: "Dr. Ravi Kumar", hospital: "CityCare Clinic", medicines: ["Cold compress", "Rest", "Consult if severe"] },
  { symptom: "itching", specialist: "Dermatologist", doctor: "Dr. Pooja Deshmukh", hospital: "SkinGlow Clinic", medicines: ["Antihistamine", "Moisturizer", "Avoid hot showers"] },
  { symptom: "burning urination", specialist: "Urologist", doctor: "Dr. Kiran Patel", hospital: "UroCare Hospital", medicines: ["Antibiotics (if prescribed)", "Drink water", "Avoid caffeine"] }
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
