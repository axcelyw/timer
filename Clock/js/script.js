const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes')


function clock() {

    let time = new Date()
    let second = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30

    sec.style.transform = `rotate(${second}deg)`
    min.style.transform = `rotate(${minutes}deg)`
    hour.style.transform = `rotate(${hours}deg)`

    // innerHTML - это свойство, которое позволяет получить или изменить содержимое HTML-элемента.

    hoursNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
    minutesNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()

    // ! рекурсия - функция вызывает саму себя

    setTimeout(() => {
        clock()
    }, 1000);
}


clock()

// setTimeout(() => {
//     console.log('hello');
// }, 5000);


// setInterval(() => {
//     console.log('hello');
// }, 2000)

const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem')

// console.log(tabsItem);
// console.log(tabsContentItem);

tabsItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        removeAndAddActiveClass(item, tabsItem)
        removeAndAddActiveClass(tabsContentItem[i], tabsContentItem)
    })
})

function removeAndAddActiveClass(element, arr) {
    arr.forEach(item => {
        item.classList.remove('active')
    })
    element.classList.add('active')
}


const stopWatchBtn = document.querySelector('.stopwatch__btn'),
    secondWatch = document.querySelector('.stopwatch__seconds'),
    minuteWatch = document.querySelector('.stopwatch__minutes'),
    hourWatch = document.querySelector('.stopwatch__hours'),
    stopWatchInfo = document.querySelector('.tabsLink__span')
    
    
    stopWatchBtn.addEventListener('click', () => {
    if (stopWatchBtn.innerHTML == 'start') {
        stopWatchBtn.innerHTML = 'stop'
        stopWatchInfo.classList.add('active')
        let i = 0
        setTimeout(() => {
            stopWatch(stopWatchBtn, i)
        }, 1000);
    }else if (stopWatchBtn.innerHTML == 'stop') {
        stopWatchBtn.innerHTML = 'reset'
        stopWatchInfo.classList.remove('active')
        stopWatchInfo.classList.add('active_clear')
    }else {
        stopWatchInfo.classList.remove('active_clear')
        stopWatchBtn.innerHTML = 'start'
        secondWatch.innerHTML = 0
        minuteWatch.innerHTML = 0
        hourWatch.innerHTML = 0 
    }
})

function stopWatch(element, i) {
    if (element.innerHTML == 'stop') {
        if(i == 59) {
            i = 0
            secondWatch.innerHTML = i
            if(minuteWatch.innerHTML = i) {
                minuteWatch.innerHTML = 0
                hourWatch.innerHTML++
            }else {
                minuteWatch.innerHTML++
            }
        }else {
            i++
            secondWatch.innerHTML = i
        }
        setTimeout(() => {
            stopWatch(element, i)
        }, 1000);
    }
}