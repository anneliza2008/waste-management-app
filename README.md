# Waste Management App (Plastic & E-Waste Tracking)

A simple React app that helps users track their waste habits and encourages proper recycling.  
Built as part of the **DevPost / YPStem Green Pioneers Hackathon (2025)**.  

🌍 **Live Demo**: https://fancy-ganache-941ea0.netlify.app  
📝 **DevPost Project**: https://devpost.com/software/waste-management-app-plastic-e-waste-tracking-system  

---

## ✨ Features
- **Waste Logging** – log daily waste by type (Plastic, E-waste, Paper, Organic).  
- **Waste Summary** – weekly tracking with item counts and simple summaries.  
- **Recycling Directory** – static list of nearby recycling centers (expandable later with maps API).  
- **Eco-Friendly UI** – minimal green/white theme to encourage sustainable habits.  

---

## 🛠️ Tech Stack
- **Frontend**: React (Create React App)  
- **State Management**: React useState hook  
- **Storage**: LocalStorage (MVP)  
- **Deployment**: Netlify  

---

## 📂 Project Structure
```
src/
  components/
    WasteLogger.js
    WasteSummary.js
    RecyclingCenters.js
  App.js
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/waste-management-app.git
cd waste-management-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm start
```
App runs at: [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
```

---

## 📸 Screenshots
(Add screenshots in `/docs` folder and reference here, e.g.)  

![Waste Logger](docs/logger.png)  
![Waste Summary](docs/summary.png)  

---

## 📈 Future Improvements
- Add Firebase backend for real-time storage  
- Integrate Google Maps API for recycling centers  
- Visual charts for monthly waste trends  
- User authentication and profiles  

---

## 📜 License
This project is licensed under the [MIT License](./LICENSE).  