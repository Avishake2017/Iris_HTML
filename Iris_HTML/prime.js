
<!Doctype html>
<html>

	<title>
		Prime numbers
	</title>
	
	<body>

	<label>
	Enter the number:
	</label>
	<input type = "text"
	id = "my num"
	placeholder = "" 
	/>
	<button type="button" onclick = "primeNum()" style="margin-left:100px">Generate</button>
	
	<script>
	function primeNum(){
	n = document.getElementById("my num").value;
	flag = 0;
	if(n>=100)
		alert("number cant be greater than or equal to 100);
	else
		for(i =2;i<n;i++){
			for(j=2;j<=n/2.0;j++){
				if(i%j ==0)
					flag=1;
						break;
				}
			if(flag == 1)
				alert(i);
		}
	}
	</script>
	</body>
</html>
