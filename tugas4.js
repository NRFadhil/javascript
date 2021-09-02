var budi = 150
var adi = 160
var ucup = 170

if (budi>adi){
	if (budi>ucup){
		console.log ("siswa1 adalah yang tertinggi")
		console.log ("urutan tinggi:","siswa1:",budi,"siswa2:",adi,"siswa3:",ucup)
	}else {
		console.log ("siswa3 lebih tinggi dari siswa2")
		console.log ("urutan tinggi:","siswa1:",budi,"siswa3:",ucup,"siswa2:",adi)

	}

}else {
	if (budi < ucup){
		console.log ("siswa1 lebih pendek dari siswa3")
		console.log ("urutan tinggi:","siswa3:",ucup,"siswa2:",adi,"siswa1:",budi)
	}else {
		console.log ("siswa3 adalah yang terpendek")
		console.log ("urutan tinggi:","siswa2:",adi,"siswa1:",budi,"siswa3:",ucup)

	}

}
