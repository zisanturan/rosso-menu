// Menüye Git butonuna tıklanınca kategorilere geçişi sağla
function goToMenu() {
  // Başlangıçtaki ekranı gizle
  document.querySelector(".initial-screen").style.display = "none";
  // Kategorileri göster
  document.querySelector(".category-container").style.display = "grid";
}
