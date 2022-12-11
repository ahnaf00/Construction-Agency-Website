const counters = document.querySelectorAll(".counter")
const speed = 300
const section_counter = document.querySelector(".counter-area")





let CountObserver = new IntersectionObserver(
	(entries, observer) => {
		let [entry] = entries;
		if( !entry.isIntersecting ) return
			// Main Code
			counters.forEach(counter =>{
			const updateCount = () => {
				const target = +counter.getAttribute("data-target")
				const count = +counter.innerText

				const inc = target / speed

				if( count < target )
				{
					counter.innerText = Math.floor(count + inc)
					setTimeout(updateCount, 1)
				}else{
					count.innterText = Math.floor(target)
				}
				// console.log(Math.floor(inc))

			}

			updateCount()
		})
			// Main code
	}, {
	root:null,
	threshold:0.4
})

CountObserver.observe(section_counter)