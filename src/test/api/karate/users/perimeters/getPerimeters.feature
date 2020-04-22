Feature: Get perimeters (endpoint tested : GET /perimeters)

  Background:
   #Getting token for admin and tso1-operator user calling getToken.feature
    * def signIn = call read('../../common/getToken.feature') { username: 'admin'}
    * def authToken = signIn.authToken
    * def signInAsTSO = call read('../../common/getToken.feature') { username: 'tso1-operator'}
    * def authTokenAsTSO = signInAsTSO.authToken


  Scenario: Get perimeters
    #  get /perimeters
    # Get all perimeters
    Given url opfabUrl + 'users/perimeters'
    And header Authorization = 'Bearer ' + authToken
    When method get
    Then status 200
    And def perimeterId = response[0].id
    And def perimeterProcess = response[0].process
    And def perimeterState = response[0].state
    And def perimeterRights = response[0].rights


    # Get the first perimeter
    Given url opfabUrl + 'users/perimeters/' +  perimeterId
    And header Authorization = 'Bearer ' + authToken
    When method get
    Then status 200
    And match response.id == perimeterId
    And match response.process == perimeterProcess
    And match response.state == perimeterState
    And match response.rights == perimeterRights


  Scenario: get perimeters without authentication
    # Get all perimeters, authentication required response expected 401
    Given url opfabUrl + 'users/perimeters'
    When method get
    Then status 401


  Scenario: get perimeters with simple user
    #   Using TSO user,  expected response 403
    Given url opfabUrl + 'users/perimeters'
    And header Authorization = 'Bearer ' + authTokenAsTSO
    When method get
    Then status 403