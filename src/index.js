import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React from 'react';
import ReactDOM from 'react-dom/client'; // Menggunakan client API dari ReactDOM
import './index.css'; // Custom styles jika ada
import App from './App'; // Impor komponen utama aplikasi

// Inisialisasi root dengan createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render aplikasi
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
