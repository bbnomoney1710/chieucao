function tinhBMI(chieuCao, canNang) {
    // Chuyển đổi chiều cao từ mét sang mét vuông
    var chieuCaoM2 = chieuCao / 100;

    // Tính BMI
    var BMI = canNang / (chieuCaoM2 * chieuCaoM2);
    return BMI;
}

function danhGiaBMI(BMI) {
    if (BMI < 18.5) {
        return "Dưới cân";
    } else if (BMI >= 18.5 && BMI < 24.9) {
        return "Bình thường";
    } else if (BMI >= 25 && BMI < 29.9) {
        return "Thừa cân";
    } else {
        return "Béo phì";
    }
}

// Sử dụng hàm tính BMI
var chieuCao = 170; // Đơn vị: cm
var canNang = 65; // Đơn vị: kg

var BMI = tinhBMI(chieuCao, canNang);
var danhGia = danhGiaBMI(BMI);

console.log("BMI của bạn là: " + BMI.toFixed(2)); // Hiển thị BMI với 2 chữ số thập phân
console.log("Phân loại BMI: " + danhGia);
