import '@testing-library/jest-dom'
import {screen, within} from '@testing-library/dom'
import { readFileSync } from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import {profile, profileEnd} from 'console'

const __dirname = dirname(fileURLToPath(import.meta.url));

describe('Body Sample 1', () => {

  beforeEach(() => {
    document.body.innerHTML = readFileSync(__dirname + '/fixture/body-sample-1.html')
    profile(expect.getState().currentTestName)
  })
  
  it('getAllByRole', () => {
    expect(screen.getAllByRole('row')).toHaveLength(8)
  })
  
  it('getByRole name option literal value', () => {
    expect(screen.getByRole('row', {name: 'POTTER Harry Flèche dans le genou Carte Vitale Private health insurance Prescription Quotation 2 sessions to bill 18/03/2023 10h50 Créer une facture'})).toBeVisible()
  })
  
  it('getByRole name option with a regexp', () => {
    expect(screen.getByRole('row', {name: /potter/i})).toBeVisible()
  })

  afterEach(() => {
    profileEnd(expect.getState().currentTestName)
  })

})

describe('Body Sample 2', () => {

  beforeEach(() => {
    document.body.innerHTML = readFileSync(__dirname + '/fixture/body-sample-2.html')
    profile(expect.getState().currentTestName)
  })
  
  it('queryAllByRole', () => {
    expect(screen.queryAllByRole('button')).toHaveLength(15)
  })
  
  it('getByRole name option literal value', () => {
    expect(screen.getByRole('button', { name: 'Dr. Gregory House 1 Dentiste'})).toBeVisible()
  })
  
  it('queryAllByRole name option with a regexp', () => {
    expect(screen.queryAllByRole('button', { name: /gregory house/i })).toHaveLength(13)
  })

  it('queryAllByRole with regexp checks inside', () => {
    let matches = 0
    screen.queryAllByRole('button').forEach((buttonEl) => {
      if(within(buttonEl).queryByText(/gregory house/i)){
        matches++
      }
    })
    expect(matches).toEqual(13)
  })

  afterEach(() => {
    profileEnd(expect.getState().currentTestName)
  })

})
