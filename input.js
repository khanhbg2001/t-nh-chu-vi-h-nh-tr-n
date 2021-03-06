function DienTich() {
    let r = document.getElementById("r").value
    r = Number(r)
    let PI = 3.14
    let DienTich = r*r*PI
    alert(DienTich)
    document.getElementById("DienTich").innerText = DienTich
}
function ChuVi() {
    let r = document.getElementById("r").value
    r = Number(r)
    let PI = 3.14
    let ChuVi = r*2*PI
    alert(ChuVi)
    document.getElementById("ChuVi").innerText = ChuVi
}