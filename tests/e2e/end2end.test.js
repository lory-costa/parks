const { chromium } = require('playwright')
const config = require('../../server/db/knexfile').development
const db = require('knex')(config)

jest.setTimeout(15000)

const imgpath = 'tests/e2e/screenshots/'
const timeOut = 2000

let browser
let page
beforeAll(async () => {
  browser = await chromium.launch({ headless: false, slowMo: 500 })
  await db.migrate.latest({ directory: './server/db/migrations' })
})

beforeEach(async () => {
  const context = await browser.newContext()
  page = await context.newPage()
  await db.seed.run({ directory: './server/db/seeds' })
})

afterEach(async () => {
  await page.close()
})

afterAll(async () => {
  await browser.close()
})

function waitForAmount (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

// USER TESTS

// USER STORY 1 - Map Displayed

// test('Home page should display the text Parkwise', async () => {
//   await page.goto('localhost:3000')
//   expect(await page.title()).toMatch('ParkWire')
//   await page.screenshot({ path: imgpath + 'home.png' })
//   await waitForAmount(timeOut)
// })

// test('Main page should display map', async () => {
//   await page.goto('localhost:3000')
//   await page.click('text=Explore')
//   expect(await page.title()).toMatch('ParkWire')
//   const map = page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]')
//   expect(map).toBeTruthy()
//   await waitForAmount(timeOut)
// })

// test('User can log in and log out', async () => {
//   await page.goto('localhost:3000')
//   await page.click('text=Explore')
//   expect(await page.title()).toMatch('ParkWire')
//   await page.click('text=Login')
//   await page.fill('#username', 'johannbesas@gmail.com')
//   await page.fill('#password', 'test123!')
//   await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
//   await page.waitForNavigation()
//   expect(await page.title()).toMatch('ParkWire')
//   await waitForAmount(timeOut)
//   expect(await page.content()).toMatch('Logout')
//   expect(await page.content()).toMatch('Admin')
//   expect(await page.content()).toMatch('Profile')
//   await page.click('text=Logout')
//   expect(await page.content()).toMatch('Explore')
//   await waitForAmount(timeOut)
// })

// USER STORY 2 - PARK DETAILS

// test('User can view park details', async () => {
//   await page.goto('localhost:3000')
//   await page.click('text=Explore')
//   expect(await page.title()).toMatch('ParkWire')
//   await page.click('xpath= //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
//   await page.click('xpath= //*[@id="app"]/div/div[3]/div[2]/div[1]/div[6]/div/div[1]/div/a')
//   expect(await page.content()).toMatch('Mt Hobson Path')
//   const rating = await page.isVisible('xpath = //*[@id="app"]/div/div[2]/div[1]/div[1]/div[1]/div/div/div')
//   expect(rating).toBeTruthy()
//   expect(await page.content()).toMatch('229 Remuera Road, Remuera')
//   expect(await page.content()).toMatch('Facilities')
//   const tramp = await page.isVisible('xpath =//*[@id="app"]/div/div[2]/div[1]/div[1]/div[3]/div/img[1]')
//   expect(tramp).toBeTruthy()
//   const dogWalking = await page.isVisible('xpath = //*[@id="app"]/div/div[2]/div[1]/div[1]/div[3]/div/img[2]')
//   expect(dogWalking).toBeTruthy()
//   expect(await page.content()).toMatch('council website')
//   const parkImage = await page.isVisible('xpath = //*[@id="app"]/div/div[2]/div[1]/div[2]/img')
//   expect(parkImage).toBeTruthy()
//   expect(await page.content()).toMatch('Comments')
//   expect(await page.content()).toMatch('Charlie')
//   expect(await page.content()).toMatch('Happy place.')
//   expect(await page.content()).toMatch('Diane')
//   expect(await page.content()).toMatch('Very green.')
//   await page.click('text=View Description')
//   expect(await page.content()).toMatch('Ōhinerau / Mt Hobson')
//   await page.click('text=Hide Description')
// })

// USER STORY 3 - RATE A PARK

// test('User can add a comment and rate the park', async () => {
//   await page.goto('localhost:3000')
//   await page.click('text=Explore')
//   expect(await page.title()).toMatch('ParkWire')
//   await page.click('text=Login')
//   await page.fill('#username', 'johannbesas@gmail.com')
//   await page.fill('#password', 'test123!')
//   await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
//   await page.waitForNavigation()
//   expect(await page.title()).toMatch('ParkWire')
//   await waitForAmount(timeOut)
//   const doveMyer = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[1]')
//   expect(doveMyer).toBeTruthy()
//   await page.click('xpath=//*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[1]')
//   await page.click('text=Dove-Myer Robinson Park')
//   expect(await page.content()).toMatch('Dove-Myer Robinson Park')
//   const commentsSection = await page.isVisible('xpath = //*[@id="app"]/div/div[2]/div[2]/div')
//   expect(commentsSection).toBeTruthy()
//   const addComment = await page.isVisible('xpath = //*[@id="app"]/div/div[2]/div[2]/div/div[2]/input')
//   expect(addComment).toBeTruthy()
//   await page.click('xpath = //*[@id="app"]/div/div[2]/div[2]/div/div[1]/div/span[5]')
//   // await waitForAmount(timeOut)
//   await page.fill('xpath = //*[@id="app"]/div/div[2]/div[2]/div/div[2]/input', 'This is a lovely park')
//   await page.click('xpath = //*[@id="app"]/div/div[2]/div[2]/div/div[2]/button')
//   expect(await page.content()).toMatch('Johann')
//   expect(await page.content()).toMatch('This is a lovely park')
//   await page.click('text=Logout')
//   expect(await page.content()).toMatch('Explore')
// })

// USER STORY 4 - PROFILE PAGE

// test('Member can view their profile', async () => {
//   await page.goto('localhost:3000')
//   await page.click('text=Explore')
//   expect(await page.title()).toMatch('ParkWire')
//   await page.click('text=Login')
//   await page.fill('#username', 'johannbesas@gmail.com')
//   await page.fill('#password', 'test123!')
//   await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
//   await page.waitForNavigation()
//   expect(await page.title()).toMatch('ParkWire')
//   await waitForAmount(timeOut)
//   await page.click('text=Profile')
//   // TODO: needs proper assertions
// })

// USER STORY 5 - FILTER PARKS

// test('User can filter on map', async () => {
//   await page.goto('localhost:3000')
//   await page.click('text=Explore')
//   expect(await page.title()).toMatch('ParkWire')
//   const playground = 'xpath = //*[@id="playground"]'
//   const toilets = 'xpath = //*[@id="toilets"]'
//   const picnicSite = 'xpath = //*[@id="picnic_site"]'
//   const sportsField = 'xpath = //*[@id="sports_field"]'
//   const tramp = 'xpath = //*[@id="tramp"]'
//   const dogWalking = 'xpath = //*[@id="dog_walking"]'
//   let harbutt = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[1]')
//   let domain = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
//   let doveMyer = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[3]')
//   let mtHobson = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[4]')
//   let onehungaBay = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
//   expect(harbutt).toBeTruthy()
//   expect(domain).toBeTruthy()
//   expect(doveMyer).toBeTruthy()
//   expect(mtHobson).toBeTruthy()
//   expect(onehungaBay).toBeTruthy()
//   await page.click(playground)
//   harbutt = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[1]')
//   domain = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
//   doveMyer = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[3]')
//   mtHobson = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[4]')
//   onehungaBay = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
//   expect(harbutt).toBeTruthy()
//   expect(domain).toBeFalsy()
//   expect(doveMyer).toBeFalsy()
//   expect(mtHobson).toBeFalsy()
//   expect(onehungaBay).toBeTruthy()
//   await page.click(playground)
//   harbutt = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[1]')
//   domain = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
//   doveMyer = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[3]')
//   mtHobson = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[4]')
//   onehungaBay = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
//   expect(harbutt).toBeTruthy()
//   expect(domain).toBeTruthy()
//   expect(doveMyer).toBeTruthy()
//   expect(mtHobson).toBeTruthy()
//   expect(onehungaBay).toBeTruthy()
//   await page.click(playground)
//   await page.click(toilets)
//   await page.click(picnicSite)
//   await page.click(sportsField)
//   await page.click(tramp)
//   await page.click(dogWalking)
//   harbutt = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[1]')
//   domain = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
//   doveMyer = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[3]')
//   mtHobson = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[4]')
//   onehungaBay = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
//   expect(harbutt).toBeTruthy()
//   expect(domain).toBeFalsy()
//   expect(doveMyer).toBeFalsy()
//   expect(mtHobson).toBeFalsy()
//   expect(onehungaBay).toBeFalsy()
// })
