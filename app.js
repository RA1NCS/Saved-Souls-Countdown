const countDown = () => {
	const targetDateUTC = new Date('May 12, 2023 22:00:00 UTC')
	const now = new Date()

	const gap = targetDateUTC.getTime() - now.getTime()

	const second = 1000
	const minute = second * 60
	const hour = minute * 60
	const day = hour * 24

	const textDay = Math.floor(gap / day)
	const textHour = Math.floor((gap % day) / hour)
	const textMinute = Math.floor((gap % hour) / minute)
	const textSecond = Math.floor((gap % minute) / second)

	document.querySelector('.day').innerText = textDay
	document.querySelector('.hour').innerText = textHour
	document.querySelector('.minute').innerText = textMinute
	document.querySelector('.second').innerText = textSecond
}

countDown()

setInterval(countDown, 1000)
