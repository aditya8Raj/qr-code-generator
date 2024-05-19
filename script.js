// script.js
document.getElementById("generate-btn").addEventListener("click", function () {
  const text = document.getElementById("text-input").value.trim();
  const qrCodeContainer = document.getElementById("qr-code");
  qrCodeContainer.innerHTML = ""; // Clear previous QR code

  if (text !== "") {
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      text
    )}`;
    const img = document.createElement("img");
    img.src = apiUrl;
    img.alt = "QR Code";
    img.id = "qr-image";
    qrCodeContainer.appendChild(img);
    console.log("QR code generated!");

    // Create and append the download button
    const downloadBtn = document.createElement("button");
    downloadBtn.textContent = "Download QR Code";
    downloadBtn.id = "download-btn";
    qrCodeContainer.appendChild(downloadBtn);

    downloadBtn.addEventListener("click", function () {
      const link = document.createElement("a");
      link.href = apiUrl;
      link.download = "qr-code.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  } else {
    alert("Please enter text to generate QR code.");
  }
});
