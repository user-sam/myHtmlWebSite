var foto;
foto=new Foto()
function selectImage(){
	document.getElementById("foto-file").click()
}
function gray(){
	foto.grayscale()
}
function Bright(){
	foto.makeBright()
}
function Darker(){
	foto.makeDark()
}
function Blur(){
	foto.applyBlurFilter()
}
function Emboss(){
	foto.applyEmbossFilter()
}
function Sharp(){
	foto.applySharpFilter()
}
function download(){
	foto.export()
}