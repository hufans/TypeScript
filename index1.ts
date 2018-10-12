function getName(name: () => void) {
	console.log("getName is first")
}


getName(()=>console.log("Param is first"))

console.log("hufanx")