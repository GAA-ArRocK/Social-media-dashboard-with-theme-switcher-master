const body = document.body
const titleMain = document.querySelector('.title--main')
const titleSecondary = document.querySelector('.title--secondary')
const darkModeTitle = document.querySelector('.darkMode--title')
const darkModeSlider = document.querySelector('.darkMode--sliderRound')
const mainStatsBlock = document.querySelectorAll('.mainStats--block')
const mainStatsBlockProfileName = document.querySelectorAll('.mainStats--block__profile__name')
const mainStatsBlockNumber = document.querySelectorAll('.mainStats--block__number')
const mainStatsBlockFollowers = document.querySelectorAll('.mainStats--block__followers')
const detailedStatsTitle = document.querySelector('.detailedStats--title')
const detailedStatsGridBlock = document.querySelectorAll('.detailedStats--grid__block')
const detailedGridBlockUpperPart = document.querySelectorAll('.detailedStats--grid__block__upperPart')
const detailedStatsGridBlockBottomPart = document.querySelectorAll('.detailedStats--grid__block__bottomPart')
const attribution = document.querySelector('.attribution')

const darkModeCheckbox = document.querySelector('.darkMode--checkbox')

darkModeCheckbox.addEventListener('click', () => {
    if (darkModeCheckbox.checked == true) {
        body.classList.add('dark')
        titleMain.classList.add('dark')
        titleSecondary.classList.add('dark')
        darkModeTitle.classList.add('dark')
        darkModeSlider.classList.add('dark')
        
        mainStatsBlock.forEach(element => {
            element.classList.add('dark')
        })

        mainStatsBlockProfileName.forEach (element => {
            element.classList.add('dark')
        })

        mainStatsBlockNumber.forEach (element => {
            element.classList.add('dark')
        })

        mainStatsBlockFollowers.forEach (element => {
            element.classList.add('dark')
        })

        detailedStatsTitle.classList.add('dark')

        detailedStatsGridBlock.forEach (element => {
            element.classList.add('dark')
        })

        detailedGridBlockUpperPart.forEach (element => {
            element.classList.add('dark')
        })

        detailedStatsGridBlockBottomPart.forEach (element => {
            element.classList.add('dark')
        })
        attribution.classList.add('dark')
    } else {
        body.classList.remove('dark')
        titleMain.classList.remove('dark')
        titleSecondary.classList.remove('dark')
        darkModeTitle.classList.remove('dark')
        darkModeSlider.classList.remove('dark')
        
        mainStatsBlock.forEach(element => {
            element.classList.remove('dark')
        })

        mainStatsBlockProfileName.forEach (element => {
            element.classList.remove('dark')
        })

        mainStatsBlockNumber.forEach (element => {
            element.classList.remove('dark')
        })
        
        mainStatsBlockFollowers.forEach (element => {
            element.classList.remove('dark')
        })

        detailedStatsTitle.classList.remove('dark')

        detailedStatsGridBlock.forEach (element => {
            element.classList.remove('dark')
        })

        detailedGridBlockUpperPart.forEach (element => {
            element.classList.remove('dark')
        })

        detailedStatsGridBlockBottomPart.forEach (element => {
            element.classList.remove('dark')
        })
        attribution.classList.remove('dark')
    }
})
