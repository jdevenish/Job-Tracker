### MVP
- Responsive
  - [ ] Mobile first
  - [ ] Tablet
  - [ ] Desktop
  
- Build Welcome Page - DRI: Justin 
	- [ ] Add large clean background graphic
	- [ ] Add Name/Logo
	- [ ] Add description of service
  - [ ] Create Account / Login 
  - [ ] Header with naviagtion links
	
- Build Target Companies / Applications - DRI: Julie
	- [ ] Cards displaying each job
        - [ ] Contains:
                - Company Name 
                - Job Title 
                - Link to posting
                - Status
                - Date Submitted
                - HR Contact
                - Image?
	- [ ] Add Card Form
	    - [ ] Contains:
                - Company Name 
                - Job Title 
                - Link to posting
                - Status
                - Date Submitted
                - HR Contact
                - Image? 

- Build Job Search Materials - DRI: Justin 
	- [ ] Table Displaying Materials For Applying to Jobs:
                - Brand Statement document url
                - Resume url
                - GitHub URL
                - LinkedIn URL
                - Replit URL
                - Portfolio URL
  

- Build Networking Contacts - DRI: Jayne
	- [ ] Cards displaying:
                - Name
                - Email
                - Phone #
                - Company
  - [ ] Add Contact Form
          - Fields: 
              - Name
              - Email
              - Phone #
              - Company

- Build Resource Table - DRI: Cameron
	- [ ] Table displaying job searching resources
        - [ ] Sections:
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
| Add large clean background graphic | H | 0.5hrs| 0.5hrs | 0hrs |
| Add brand/mission statement / paragraph | H | 0.5hrs| 0.5hrs | 0hrs |
| Column for Education | H | 1.5hrs| 2hrs | 0hrs |
| Column for Work History | H | 1.5hrs| 2hrs | 0hrs |
| Column for Achievments / Certifications | H | 0.5hrs| 2hrs | 0hrs |
| Update projects sheet | H | 1.0hrs| 0.5hrs | 0hrs |
| Grid layout of projects | H | 2.0hrs| 0hrs | 0hrs |
| Pop over modal with project details | H | 3.0hrs| 4.0hrs | 0hrs |
| Links to social platforms | H | 0.5hrs| 0.5hrs | 0hrs |
| Make site responsive | H | 3hrs | 8hrs | 0hrs |
| Email Me Interface | H | 3hrs| 4hrs | 0hrs |
| Floating mobile navigation button | M | 5hrs| 5hrs | 0hrs |
| Bouncing scroll down arrow on page load | L | 2hrs| 0hrs | 0hrs |
| Collapse navigation menu | L | 1.5hrs| 3hrs | 0hrs |
| Grid to Carousel Switcher | M | 0.5hrs| 0hrs | 0hrs |
| Carousel for projects | M | 4.5hrs| 0hrs | 0hrs |
| Create Youtube video about this project | H | 4hrs | 0hrs | 0hrs |
| Clean up Codepen projects | L | 1hrs | 1hrs | 0hrs |
| Clean up Github projects | L | 1hrs | 0hrs | 0hrs |
| Clean up Repl.it projects | L | 1hrs | 0hrs | 0hrs |
| Code clean up & Testing | M | 3hrs | 4hrs | 0hrs |
| Total | H | 40hrs| 33hrs | 0hrs |


## Additional Libraries ##
Fonts:
```
        <link href="https://fonts.googleapis.com/css?family=Audiowide&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Architects+Daughter&display=swap" rel="stylesheet">
```

Icons:
Used for the floating mobile navigation menu
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
```
 

## Code Snippet
Below is the code for my mobile navigation menu. It's a floating icon that sits in the bottom left corner and when clicked has delayed flyout icons for each of my websites sections. 

HTML
```
<div class="container">
    <a href="#welcomePage" class="navAboutMe"><i class="fa fa-home fa-2x"></i></a>
    <a href="#work" class="navWorkHistory"><i class="fa fa-user fa-2x"></i></a>
    <a href="#myProject" class="navProjects"><i class="fa fa-code fa-2x"></i></a>
    <a href="#contact" class="navContact"><i class="fa fa-envelope-o fa-2x"></i></a>
    <a class="bigOne"><i class="fa fa-bars fa-3x"></i></a>
</div>
```
CSS
```
.container {
    bottom:15px;
    left:15px;
    position:fixed;
    display:block;
    width:100px;
    height:100px;
    background-color:transparent;
    border-radius:50%;
    z-index:20;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
}

.navAboutMe {
    width:60%;
    height:60%;
    border-radius:50%;
    position:absolute;
    color:white;
    text-align:center;
    line-height:75px;
    bottom:25%;
    left:25%;
    z-index:19;
    transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    background-color: #F7B90B;
    border: 2px solid #CAC4C6;
}

.navWorkHistory {
    width:60%;
    height:60%;
    border-radius:50%;
    position:absolute;
    color:white;
    text-align:center;
    line-height:75px;
    bottom:25%;
    left:25%;
    z-index:19;
    transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550) .2s;
    background-color: #F7B90B;
    border: 2px solid #CAC4C6;
}

.navProjects {
    width:60%;
    height:60%;
    border-radius:50%;
    position:absolute;
    color:white;
    text-align:center;
    line-height:70px;
    bottom:25%;
    left:25%;
    transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550) .4s;
    background-color: #F7B90B;
    border: 2px solid #CAC4C6;
}

.navContact {
    width:60%;
    height:60%;
    border-radius:50%;
    position:absolute;
    color:white;
    text-align:center;
    line-height:70px;
    bottom:25%;
    left:25%;
    transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550) .6s;
    background-color: #F7B90B;
    border: 2px solid #CAC4C6;
}

.bigOne {
    bottom:15px;
    left:15px;
    width:100px;
    height:100px;
    background:#212121;
    border-radius:50%;
    z-index:21;
    color:white;
    text-align:center;
    line-height:120px;
    cursor:pointer;
    position:fixed;
}
```
Java Script
```
/*===============================

    CSS Objects

 ===============================*/
let navAboutMeON = {
    "transform": "translate(0px,-125px)"
};

let navWorkHistoryON = {
    "transform": "translate(60px,-105px)"
};

let navProjectsON = {
    "transform": "translate(105px,-60px)"
};

let navContactON = {
    "transform": "translate(125px,0px)"
};

let navOFF = {
    "transform": "none"
};

$(".container").on("click", function() {
    if (!active1){
        $(this).find(".navAboutMe").css(navAboutMeON);
        $(this).find(".navWorkHistory").css(navWorkHistoryON);
        $(this).find(".navProjects").css(navProjectsON);
        $(this).find(".navContact").css(navContactON);
    } else{
        $(this).find(".navAboutMe").css(navOFF);
        $(this).find(".navWorkHistory").css(navOFF);
        $(this).find(".navProjects").css(navOFF);
        $(this).find(".navContact").css(navOFF);
    }

    // Invert boolean values. Faster than setting in if/else
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
});

```

## Issues and Resolutions
* Click listener executing before it should. 
	* **RESOLUTION** Remove the function brackets on listeners ie function ~~()~~
* Stacking project modals
	* **RESOLUTION** Referencing wrong ID on click event
* Project modal images drawing outside boundary of pop up modal.
	* **RESOLUTION** Made the image size a percentage of the pop up modal instead of fixed size
