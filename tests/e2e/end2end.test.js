const { chromium } = require('playwright')
const config = require('../../server/db/knexfile').development
const db = require('knex')(config)

jest.setTimeout(20000)

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

test('Home page should display logo', async () => {
  await page.goto('localhost:3000')
  expect(await page.title()).toMatch('ParkWire')
  const ParkWire = await page.isVisible('xpath = //*[@id="app"]/div/img')
  expect(ParkWire).toBeTruthy()
  await waitForAmount(timeOut)
})

test('Main page should display map', async () => {
  await page.goto('localhost:3000')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  const map = page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]')
  expect(map).toBeTruthy()
  await waitForAmount(timeOut)
})

test('User can log in and log out', async () => {
  await page.goto('localhost:3000')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  await page.click('text=Login')
  await page.fill('#username', 'johannbesas@gmail.com')
  await page.fill('#password', 'test123!')
  await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
  await page.waitForNavigation()
  expect(await page.title()).toMatch('ParkWire')
  await waitForAmount(timeOut)
  expect(await page.content()).toMatch('Logout')
  expect(await page.content()).toMatch('Admin')
  expect(await page.content()).toMatch('Profile')
  await page.click('text=Logout')
  expect(await page.content()).toMatch('Explore')
  await waitForAmount(timeOut)
})

// USER STORY 2 - PARK DETAILS

test('User can view park details', async () => {
  await page.goto('localhost:3000')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  await page.click('xpath= //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
  await page.click('xpath= //*[@id="app"]/div/div[3]/div[2]/div[1]/div[6]/div/div[1]/div/a')
  expect(await page.content()).toMatch('Mt Hobson Path')
  const rating = await page.isVisible('xpath = //*[@id="app"]/div/div[2]/div[1]/div[1]/div[1]/div/div/div')
  expect(rating).toBeTruthy()
  expect(await page.content()).toMatch('229 Remuera Road, Remuera')
  expect(await page.content()).toMatch('Facilities')
  const tramp = await page.isVisible('xpath =//*[@id="app"]/div/div[2]/div[1]/div[1]/div[3]/div/img[1]')
  expect(tramp).toBeTruthy()
  const dogWalking = await page.isVisible('xpath = //*[@id="app"]/div/div[2]/div[1]/div[1]/div[3]/div/img[2]')
  expect(dogWalking).toBeTruthy()
  expect(await page.content()).toMatch('council website')
  const parkImage = await page.isVisible('xpath = //*[@id="app"]/div/div[2]/div[1]/div[2]/img')
  expect(parkImage).toBeTruthy()
  expect(await page.content()).toMatch('Comments')
  expect(await page.content()).toMatch('Charlie')
  expect(await page.content()).toMatch('Happy place.')
  expect(await page.content()).toMatch('Diane')
  expect(await page.content()).toMatch('Very green.')
  await page.click('text=View Description')
  expect(await page.content()).toMatch('Ōhinerau / Mt Hobson')
  await page.click('text=Hide Description')
})

test('Admin can view edit button on Park Details', async () => {
  await page.goto('localhost:3000')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  await page.click('text=Login')
  await page.fill('#username', 'johannbesas@gmail.com')
  await page.fill('#password', 'test123!')
  await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
  await page.waitForNavigation()
  expect(await page.title()).toMatch('ParkWire')
  await waitForAmount(timeOut)
  await page.click('xpath= //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
  await page.click('xpath= //*[@id="app"]/div/div[3]/div[2]/div[1]/div[6]/div/div[1]/div/a')
  expect(await page.content()).toMatch('Mt Hobson Path')
  const editButton = await page.isVisible('xpath = //*[@id="app"]/div/div[2]/div[1]/div[1]/a/button')
  expect(editButton).toBeTruthy()
  await page.click('text=Logout')
  expect(await page.content()).toMatch('Explore')
})

// USER STORY 3 - RATE A PARK

test('Member can add a comment and rate the park', async () => {
  await page.goto('localhost:3000')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  await page.click('text=Login')
  await page.fill('#username', 'ksina_72@yahoo.com')
  await page.fill('#password', 'HardPassword0')
  await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
  await page.waitForNavigation()
  expect(await page.title()).toMatch('ParkWire')
  await waitForAmount(timeOut)
  const doveMyer = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[1]')
  expect(doveMyer).toBeTruthy()
  await page.click('xpath=//*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[1]')
  await page.click('text=Dove-Myer Robinson Park')
  expect(await page.content()).toMatch('Dove-Myer Robinson Park')
  const commentsSection = await page.isVisible('xpath = //*[@id="app"]/div/div[2]/div[2]/div')
  expect(commentsSection).toBeTruthy()
  const addComment = await page.isVisible('xpath = //*[@id="app"]/div/div[2]/div[2]/div/div[2]/input')
  expect(addComment).toBeTruthy()
  await page.click('xpath = //*[@id="app"]/div/div[2]/div[2]/div/div[1]/div/span[5]')
  // await waitForAmount(timeOut)
  await page.fill('xpath = //*[@id="app"]/div/div[2]/div[2]/div/div[2]/input', 'This is a lovely park')
  await page.click('xpath = //*[@id="app"]/div/div[2]/div[2]/div/div[2]/button')
  expect(await page.content()).toMatch('Sina')
  expect(await page.content()).toMatch('This is a lovely park')
  await page.click('text=Logout')
  expect(await page.content()).toMatch('Explore')
})

// USER STORY 4 - PROFILE PAGE

test('Member can view their profile', async () => {
  await page.goto('localhost:3000')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  await page.click('text=Login')
  await page.fill('#username', 'johannbesas@gmail.com')
  await page.fill('#password', 'test123!')
  await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
  await page.waitForNavigation()
  expect(await page.title()).toMatch('ParkWire')
  await waitForAmount(timeOut)
  await page.click('text=Profile')
  expect(await page.content()).toMatch('Favourite Parks')
  expect(await page.content()).toMatch('Parks to Visit')
})

test('Member can add parks to their favourites from Map', async () => {
  await page.goto('localhost:3000')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  await page.click('text=Login')
  await page.fill('#username', 'johannbesas@gmail.com')
  await page.fill('#password', 'test123!')
  await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
  await page.waitForNavigation()
  expect(await page.title()).toMatch('ParkWire')
  const onehungaBay = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
  expect(onehungaBay).toBeTruthy()
  await page.click('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
  expect(await page.content()).toMatch('Add to favourites')
  await page.click('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[6]/div/div[1]/div/div[2]/div/button')
  expect(await page.content()).toMatch('Remove from favourites')
  await page.click('text = Profile')
  expect(await page.content()).toMatch('Onehunga Bay Reserve')
  // expect(await page.content()).toMatch('Mt Hobson Path')
  await page.click('xpath = //*[@id="app"]/div/div[1]/div[1]/a/img')
  await page.click('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
  expect(await page.content()).toMatch('Remove from favourites')
  await page.click('text = Remove from favourites')
  expect(await page.content()).toMatch('Add to favourites')
})

test('Member can remove parks from their favourites from profile', async () => {
  await page.goto('localhost:3000')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  await page.click('text=Login')
  await page.fill('#username', 'johannbesas@gmail.com')
  await page.fill('#password', 'test123!')
  await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
  await page.waitForNavigation()
  expect(await page.title()).toMatch('ParkWire')
  const onehungaBay = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
  expect(onehungaBay).toBeTruthy()
  await page.click('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
  expect(await page.content()).toMatch('Add to favourites')
  await page.click('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[6]/div/div[1]/div/div[2]/div/button')
  expect(await page.content()).toMatch('Remove from favourites')
  await page.click('text = Profile')
  expect(await page.content()).toMatch('Onehunga Bay Reserve')
  await page.click('xpath = //*[@id="app"]/div/div[2]/div[1]/ul/div[5]/div/button/img')
  await page.click('xpath = //*[@id="app"]/div/div[1]/div[1]/a/img')
  await page.click('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
  expect(await page.content()).toMatch('Add to favourites')
})

test('Member can add parks to their watchlist from Map', async () => {
  await page.goto('localhost:3000')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  await page.click('text=Login')
  await page.fill('#username', 'johannbesas@gmail.com')
  await page.fill('#password', 'test123!')
  await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
  await page.waitForNavigation()
  expect(await page.title()).toMatch('ParkWire')
  const mtHobson = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
  expect(mtHobson).toBeTruthy()
  await page.click('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
  expect(await page.content()).toMatch('Add to watchlist')
  await page.click('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[6]/div/div[1]/div/div[3]/div/button/img')
  expect(await page.content()).toMatch('Remove from watchlist')
  await page.click('text = Profile')
  expect(await page.content()).toMatch('Mt Hobson Path')
  await page.click('xpath = //*[@id="app"]/div/div[1]/div[1]/a/img')
  await page.click('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
  expect(await page.content()).toMatch('Remove from watchlist')
  await page.click('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[6]/div/div[1]/div/div[3]/div/button/img')
  expect(await page.content()).toMatch('Add to watchlist')
})

test('Member can remove parks from their watchlist from profile', async () => {
  await page.goto('localhost:3000')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  await page.click('text=Login')
  await page.fill('#username', 'johannbesas@gmail.com')
  await page.fill('#password', 'test123!')
  await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
  await page.waitForNavigation()
  expect(await page.title()).toMatch('ParkWire')
  const mtHobson = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
  expect(mtHobson).toBeTruthy()
  await page.click('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
  expect(await page.content()).toMatch('Add to watchlist')
  await page.click('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[6]/div/div[1]/div/div[3]/div/button/img')
  expect(await page.content()).toMatch('Remove from watchlist')
  await page.click('text = Profile')
  expect(await page.content()).toMatch('Mt Hobson Path')
  await page.click('xpath = //*[@id="app"]/div/div[2]/div[2]/ul/div/div/button/img')
  await page.click('xpath = //*[@id="app"]/div/div[1]/div[1]/a/img')
  await page.click('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
  expect(await page.content()).toMatch('Add to watchlist')
})

// // USER STORY 6 - FILTER PARKS

test('User can filter on map', async () => {
  await page.goto('localhost:3000')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  const playground = 'xpath = //*[@id="playground"]'
  const toilets = 'xpath = //*[@id="toilets"]'
  const picnicSite = 'xpath = //*[@id="picnic_site"]'
  const sportsField = 'xpath = //*[@id="sports_field"]'
  const tramp = 'xpath = //*[@id="tramp"]'
  const dogWalking = 'xpath = //*[@id="dog_walking"]'
  let harbutt = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[1]')
  let domain = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
  let doveMyer = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[3]')
  let mtHobson = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[4]')
  let onehungaBay = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
  expect(harbutt).toBeTruthy()
  expect(domain).toBeTruthy()
  expect(doveMyer).toBeTruthy()
  expect(mtHobson).toBeTruthy()
  expect(onehungaBay).toBeTruthy()
  await page.click(playground)
  harbutt = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[1]')
  domain = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
  doveMyer = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[3]')
  mtHobson = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[4]')
  onehungaBay = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
  expect(harbutt).toBeTruthy()
  expect(domain).toBeFalsy()
  expect(doveMyer).toBeFalsy()
  expect(mtHobson).toBeFalsy()
  expect(onehungaBay).toBeTruthy()
  await page.click(playground)
  harbutt = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[1]')
  domain = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
  doveMyer = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[3]')
  mtHobson = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[4]')
  onehungaBay = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
  expect(harbutt).toBeTruthy()
  expect(domain).toBeTruthy()
  expect(doveMyer).toBeTruthy()
  expect(mtHobson).toBeTruthy()
  expect(onehungaBay).toBeTruthy()
  await page.click(playground)
  await page.click(toilets)
  await page.click(picnicSite)
  await page.click(sportsField)
  await page.click(tramp)
  await page.click(dogWalking)
  harbutt = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[1]')
  domain = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
  doveMyer = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[3]')
  mtHobson = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[4]')
  onehungaBay = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[2]')
  expect(harbutt).toBeTruthy()
  expect(domain).toBeFalsy()
  expect(doveMyer).toBeFalsy()
  expect(mtHobson).toBeFalsy()
  expect(onehungaBay).toBeFalsy()
})

// USER STORY 7 - ADD A PARK

test('Member can add a park for an admin to approve', async () => {
  await page.goto('localhost:3000')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  await page.click('text=Login')
  await page.fill('#username', 'ksina_72@yahoo.com')
  await page.fill('#password', 'HardPassword0')
  await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
  await page.waitForNavigation()
  await page.click('text=Suggest a Park')
  expect(await page.content()).toMatch('Add a Park')
  await page.fill('#name', 'Mount Sina')
  await page.fill('#address', '308 Mount Sina Road')
  await page.fill('#lat', '-36.87719899702789')
  await page.fill('#lon', '174.7649336114591')
  await page.fill('#url', 'https://mountSina.io')
  await page.fill('#description', 'Mount Sina is a beautiful meadow on the north side of Mount Hood.')
  await page.check('#playground')
  await page.check('#toilets')
  await page.check('#picnicSite')
  await page.check('#sportsField')
  await page.check('#tramp')
  await page.check('#dogWalking')
  await page.click('text=Add Park')
  expect(await page.content()).toMatch('SELECT A PARK FOR DETAILS')
  await page.click('text=Logout')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  await page.click('text=Login')
  await page.fill('#username', 'ksina.72@gmail.com')
  await page.fill('#password', 'HardPassword0')
  await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
  await page.waitForNavigation()
  await page.click('text=Admin')
  expect(await page.content()).toMatch('Mount Sina')
  await page.click('xpath = //*[@id="app"]/div/div[2]/ul/div[6]/div/button[1]/img')
  const mountSina = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[6]')
  expect(mountSina).toBeTruthy()
  await page.click('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[6]')
  expect(await page.content()).toMatch('Mount Sina')
  expect(await page.content()).toMatch('308 Mount Sina Road')
})

// USER STORY 8 - ADMIN PAGE MODERATION

test('Admin can toggle approval status and see markers have appeared/disappeared', async () => {
  await page.goto('localhost:3000')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  await page.click('text=Login')
  await page.fill('#username', 'johannbesas@gmail.com')
  await page.fill('#password', 'test123!')
  await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
  await page.waitForNavigation()
  let harbutt = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
  expect(harbutt).toBeTruthy()
  await page.click('text=Admin')
  await page.click('xpath=//*[@id="app"]/div/div[2]/ul/div[4]/div/button[1]/img')
  await page.click('xpath=//*[@id="app"]/div/div[1]/div[1]/a/img')
  waitForAmount(timeOut)
  harbutt = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
  expect(harbutt).toBeFalsy()
  await page.click('text=Admin')
  await page.click('xpath=//*[@id="app"]/div/div[2]/ul/div[4]/div/button[1]/img')
  await page.click('xpath=//*[@id="app"]/div/div[1]/div[1]/a/img')
  waitForAmount(timeOut)
  harbutt = await page.isVisible('xpath = //*[@id="app"]/div/div[3]/div[2]/div[1]/div[4]/img[5]')
  expect(harbutt).toBeTruthy()
})

test('Admin can access edit park through Admin page and update details', async () => {
  await page.goto('localhost:3000')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  await page.click('text=Login')
  await page.fill('#username', 'johannbesas@gmail.com')
  await page.fill('#password', 'test123!')
  await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
  await page.waitForNavigation()
  await page.click('text=Admin')
  expect(await page.content()).toMatch('Dove-Myer Robinson Park')
  await page.click('xpath = //*[@id="app"]/div/div[2]/ul/div[1]/a/img')
  expect(await page.content()).toMatch('Edit Park')
  await page.fill('xpath=//*[@id="name"]', 'Ignis Fates Memorial Park')
  await page.click('text=Update Park')
  expect(await page.content()).toMatch('Ignis Fates Memorial Park')
})

// // Additional Tests - User Authorization

test('Un-logged in users cannot access specific pages without logging in', async () => {
  await page.goto('localhost:3000/admin')
  expect(await page.content()).toMatch('This section is for authorised users only.')
  await page.goto('localhost:3000/profile')
  expect(await page.content()).toMatch('This section is for authorised users only.')
  await page.goto('localhost:3000/add-park')
  expect(await page.content()).toMatch('This section is for authorised users only.')
})

test('Member cannot access Admin page', async () => {
  await page.goto('localhost:3000')
  await page.click('text=Explore')
  expect(await page.title()).toMatch('ParkWire')
  await page.click('text=Login')
  await page.fill('#username', 'ksina_72@yahoo.com')
  await page.fill('#password', 'HardPassword0')
  await page.click('xpath=/html/body/div/main/section/div/div/div/form/div[2]/button')
  waitForAmount(timeOut)
  await page.goto('localhost:3000/admin')
  expect(await page.content()).toMatch('This section is for authorised users only.')
})
