/// <reference types="cypress" />

describe('Hotel Booking Web App Tests', () => {
  let bookingID
  

  beforeEach('Visit the homepage', () => {
    cy.Open_Booking_App()  
  })

  it('HB001 - Create Booking', () => {
    cy.Get_POST_Req()
    cy.Enter_Std_Data()
    cy.Save_Btn().click()

    cy.wait('@postReq')
      .its('response.statusCode').should('eq',200)
    
    cy.get('@postReq').then((getBookingID) => {
      bookingID = getBookingID.response.body.bookingid
      cy.log('New booking with ID', bookingID)
    })
    
  })
  it('HB002 - Delete Booking', () => {
    let deleteBTN = `input[onclick="deleteBooking(${bookingID})`
    
    cy.intercept('DELETE', '/booking/'+bookingID).as('deleteBooking')
    cy.get(deleteBTN).click()
    cy.wait('@deleteBooking')
      .its('response.statusCode').should('eq',201)

    cy.log('Booking ID', bookingID, 'now Deleted')
  })
})
