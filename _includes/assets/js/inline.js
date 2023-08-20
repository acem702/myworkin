function showConfig() {
  if (offen.wert == "nein") {
    document.getElementById("myconfig").style.height = "100vh";
    document.getElementById("myconfig").style.width = "100%";
    offen.wert = "ja";
    hideFab();
  } else {
    closeConfig();
    hideFab();
  }
}
function closeConfig() {
  offen.wert = "nein";
  document.getElementById("myconfig").style.height = "0px";
  document.getElementById("myconfig").style.width = "0px";
}
