# 🎨 **Tilesview.ai Client Application**

A modern, high-performance **React-based** frontend application featuring **Material UI**, **Redux Toolkit**, and **Tailwind CSS**, designed for seamless user experience and robust state management.

---

## 🚀 **Features**

✅ **JWT Authentication** – Secure user login & session management.  
✅ **Redux Toolkit State Management** – Centralized state handling.  
✅ **PDF Generation (jsPDF)** – Export product catalogs as PDFs.  
✅ **Form Validation** – Ensures data integrity with validation.  
✅ **Toast Notifications** – Real-time feedback for user actions.  
✅ **Carousel/Slider Components** – Enhanced UI for product browsing.  
✅ **Responsive Design** – Mobile-friendly & optimized layouts.  
✅ **Environment Variable Support** – Secure API configurations.

---

## 🛠️ **Tech Stack**

| Technology          | Purpose                  |
| ------------------- | ------------------------ |
| **React 19**        | Frontend UI framework    |
| **Redux Toolkit**   | State management         |
| **Material UI v6**  | Pre-styled UI components |
| **Tailwind CSS**    | Utility-first styling    |
| **React Router v7** | Client-side navigation   |
| **Axios**           | API calls handling       |
| **jsPDF**           | PDF generation           |

---

## 📁 **Project Structure**

```
client/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Application pages (Home, Login, Profile, etc.)
│   ├── redux/            # Redux slices & store configuration
│   ├── services/         # API service handlers
│   ├── utils/            # Utility functions & helpers
│   ├── App.js            # Main application component
│   └── index.js          # Application entry point
└── package.json          # Project dependencies & scripts
    tailwind.config.js   # Tailwind CSS configuration
    postcss.config.js     # PostCSS configuration
    .env.example          # Environment variable example
    .gitignore             # Git ignore rules
    README.md             # Project documentation

```

---

## 📜 **Available Scripts**

### 1️⃣ **Clone Repository**

```bash
git clone https://github.com/dhaval7152/client.git
```

### 2️⃣ **Install Dependencies**

```bash
npm install
```

### 1️⃣ **Run Development Server**

```bash
npm start
```

> Runs the app in development mode at `http://localhost:3000`

### 2️⃣ **Run Tests**

```bash
npm test
```

> Launches the test runner in interactive watch mode.

### 3️⃣ **Build for Production**

```bash
npm run build
```

> Builds the app for production with optimized assets.

### 4️⃣ **Eject (⚠️ Not Recommended)**

```bash
npm run eject
```

> Removes Create React App configuration, making the setup customizable.

---

## 🔗 **Dependencies**

### **📌 UI Components**

- `@mui/material` & `@mui/icons-material` – Material UI for design.
- `@emotion/react` & `@emotion/styled` – Styling solutions for Material UI.
- `lucide-react` – Modern icon library.
- `react-slick` & `slick-carousel` – Carousel/slider support.
- `Tailwind CSS` – Customizable utility-first styling.

### **🗄️ State Management**

- `@reduxjs/toolkit` – Modern state management.
- `react-redux` – Redux integration with React.

### **🛤️ Routing**

- `react-router-dom` – Client-side routing.

### **🔗 API & Utility Libraries**

- `axios` – HTTP requests to the backend.
- `jwt-decode` – Decoding JWT tokens.
- `validator` – Form validation.
- `react-toastify` – User notifications.
- `jspdf` & `jspdf-autotable` – PDF generation & table formatting.

### **🧪 Development & Testing**

- `@testing-library/react` – UI component testing.
- `@testing-library/jest-dom` – DOM testing utilities.
- `@testing-library/user-event` – User interaction testing.
- `autoprefixer` – CSS compatibility across browsers.
- `postcss` – CSS transformations.

---

## 🌍 **Browser Support**

### ✅ **Production**

- Supports browsers with **> 0.2% market share**.
- Excludes **outdated/deprecated browsers**.
- Opera Mini is **not supported**.

### 🔍 **Development**

- Latest **Chrome, Firefox, Safari** fully supported.

---

## ⚙️ **Environment Variables**

Create a `.env` file in the root directory and add:

```env
REACT_APP_API_URL='http://localhost:5000'
```

> This variable is used to configure the backend API URL.

---

## 🔐 **Security Considerations**

🔹 **JWT Authentication** – Ensures secure user sessions.  
🔹 **Secure API Calls** – All API requests use Axios with proper authentication.  
🔹 **Input Validation** – Prevents invalid data submission.  
🔹 **Error Handling** – Graceful failures and informative messages.

---

## 🤝 **Contributing**

We welcome contributions! Follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`feature-new-ui-component`)
3. **Commit your changes**
4. **Push to your branch**
5. **Open a Pull Request**

---
