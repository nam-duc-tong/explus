document.getElementById("openModalBtn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
});

document.getElementById("closeModalBtn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block"; // Hiển thị modal khi click vào "Close"
});

document.getElementById("yesBtn").addEventListener("click", function() {
    // Xử lý khi người dùng chọn "Yes"
    alert("Bạn đã chọn Yes. Xoá dữ liệu ở đây.");
    document.getElementById("modal").style.display = "none"; // Đóng modal
});

document.getElementById("noBtn").addEventListener("click", function() {
    // Xử lý khi người dùng chọn "No"
    alert("Bạn đã chọn No. Không xoá dữ liệu.");
    document.getElementById("modal").style.display = "none"; // Đóng modal
});

// Đóng modal nếu người dùng click bên ngoài modal
window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
});
