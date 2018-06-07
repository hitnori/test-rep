<script type="text/javascript">
function entryChange1(){
radio = document.getElementsByName('entryPlan') 
if(radio[0].checked) 
{
//フォーム
document.getElementById('firstBox').style.display = "";
document.getElementById('secondBox').style.display = "none";
//特典
document.getElementById('firstNotice').style.display = "";
}else if(radio[1].checked)
 {
//フォーム
document.getElementById('firstBox').style.display = "none";
document.getElementById('secondBox').style.display = "";
//特典
document.getElementById('firstNotice').style.display = "none";
}
}
 
//オンロードさせ、リロード時に選択を保持
window.onload = entryChange1;
</script>

