import { defineConfig } from 'vite';
import process from "process";

// Uygulama adı ve modu
const appName = process.env.npm_package_name;
const appMode = process.env.NODE_ENV; // Development or Production
console.log(appMode === "development" ? "/" : `/${appName}/`);
export default defineConfig({
// Uygulama yolu 
    base:appMode === "development" ? "/" : `/${appName}/`,
// Çalışma Dizini
 root: "src", 
 server: {
    port: 2110, // Port numarası
    open: true, // Tarayıcıyı otomatik aç
    cors: true, // CORS etkinleştir (Dış Api kullanımı için)
    
 },
 build: {
    outDir: "../dist", // Çıktı dizini
    emptyOutDir: true, // Çıktı dizinini temizle
 },
});