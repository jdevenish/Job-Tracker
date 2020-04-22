### MVP
#### Responsive
   - Mobile first
   - Tablet
   - Desktop
  
#### Build Welcome Page - **DRI: Justin** 
- Add large clean background graphic
- Add Name/Logo
- Add description of service
  - Create Account / Login 
  - Header with naviagtion links
	
#### Build Target Companies / Applications - **DRI: Julie**
##### Cards displaying each job
##### Contains:
- Company Name
- Job Title 
- Link to posting
- Status
- Date Submitted
- HR Contact

##### Add Card Form
##### Contains:
- Company Name 
- Job Title 
- Link to posting
- Status
- Date Submitted
- HR Contact
- Image? 

#### Build Job Search Materials - **DRI: Justin** 
##### Table Displaying Materials For Applying to Jobs:
- Brand Statement document url
- Resume url
- GitHub URL
- LinkedIn URL
- Replit URL
- Portfolio URL
  

#### Build Networking Contacts - **DRI: Jayne**
##### Cards displaying:
- Name
- Email
- Phone #
- Company
##### Add Contact Form
##### Fields: 
- Name
- Email
- Phone #
- Company

#### Build Resource Table - **DRI: Cameron**
##### Table displaying job searching resources
##### Sections:
- Job Boards
- Personal Branding
- Resume + Cover Letter Help
- Networking + LinkedIn
- Interviewing
- Salary / Negotiation
- Imposter Syndrome + Confidence Boosters
- Technical (all areas)
  
### Post MVP
- [ ] Events Page
- [ ] Add drag and drop for application status
- [ ] Inline editing for Resources and Contacts

## Functional Components
Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Build Welcome Page on Mobile | H | 8hrs| 6hrs | 0hrs |
| Build Welcome Page on Desktop | H | 8hrs| 6hrs | 0hrs |
| Build Welcome Page API | H | 4hrs| 8hrs | 0hrs |
| Build Target Companies / Applications on Mobile | H | 8hrs| 0hrs | 0hrs |
| Build Target Companies / Applications on Desktop | H | 8hrs| 0hrs | 0hrs |
| Build Target Companies / Applications API | H | 4hrs| 0hrs | 0hrs |
| Build Job Search Materials on Mobile | H | 8hrs| 3hrs | 0hrs |
| Build Job Search Materials on Desktop | H | 8hrs| 3hrs | 0hrs |
| Build Job Search Materials API | H | 4hrs| 1.5hrs | 0hrs |
| Build Networking Contacts on Mobile | H | 8hrs| 0hrs | 0hrs |
| Build Networking Contacts on Desktop | H | 8hrs| 0hrs | 0hrs |
| Build Networking Contacts API | H | 4hrs| 1.5hrs | 0hrs |
| Build Resources on Mobile | H | 8hrs| 0hrs | 0hrs |
| Build Resources on Desktop | H | 8hrs| 0hrs | 0hrs |
| Build Resources API | H | 4hrs| 1.5hrs | 0hrs |
| Frontend Deployment | H | 4hrs | 2hrs | 0hrs |
| Backend Deployment | H | 4hrs | 2hrs | 0hrs |
| Styling Cleanup | M | 4hrs | 0hrs | 0hrs |
| Code clean up & Testing | M | 3hrs | 0hrs | 0hrs |
| Write medium article / release notes | M | 3hrs | 0hrs | 0hrs |
| Total | H | 118hrs| 34.5hrs | 0hrs |


## Additional Libraries ##
Front End:
* react-responsive
* react-bootstrap
* react-strap


Back End:
* bcrypt
* Cors
* JSON web token

## Code Snippet

## Issues and Resolutions
### Front End
#### Forms are only rendering the last input provided
Forms with multiple input fields were visually showing the data the user typed in, 
but once they submitted the form, only the last input field was retained. 

To fix this, we added a state object to hold the values of each input field 

### Back End
#### Chrome would not send header's which contained cookies from a different domain
This issue appeared while building out the user account creation flow. 

The initial design was to set a cookie containing the user's authentication token and attach the
cookie to any requests for the server to authenticate. With the emerging privacy regulations
world wide, browsers have begun taking action to help protect the end user. 

We changed the design to include the auth token as a url parameter. The token is stored
in local storage during page refreshes and is re-validated each time the App component renders. 

To protect user data, we added a 1 hour lifespan to the token, so inactive accounts cannot be accessed without entering credentials. 

 