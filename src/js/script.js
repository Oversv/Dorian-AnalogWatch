const handHour = document.getElementById('handHour')
const handMinutes = document.getElementById('handMinutes')
const handSeconds = document.getElementById('handSeconds')



const startWatch = () =>{
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    handHour.style.transform = `rotate(${(hours * 30) + minutes / 2}deg)`
    handMinutes.style.transform = `rotate(${(minutes * 6) + seconds / 10}deg)`
    handSeconds.style.transform = `rotate(${seconds * 6}deg)`
    
}

setInterval(startWatch, 1000)