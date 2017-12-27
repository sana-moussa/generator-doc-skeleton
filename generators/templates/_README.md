# <%= name %>

> <%= description %>


<% if (requirements || installation) { -%>
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on a live system.

<% if (requirements) { -%>
### Requirements
<!--What things you need to install the software and how to install them-->
<% } -%>

<% if (installation) { -%>
### Installation
<!--A step by step series of examples that tell you have to get a development env running-->
<!--End with an example of getting some data out of the system or using it for a little demo-->
<% } -%>
<% } -%>

<% if (utils) { -%>
## Good to know
<!--A list of useful notes-->
<% } -%>

<% if (tests) { -%>
## Running the tests
<!--Explain how to run the automated tests for this system-->
<!--Explain what these tests test and why-->
<!--Explain what these tests test and why-->
<% } -%>

<% if (deployment) { -%>
## Deployment
<!--Add additional notes about how to deploy this on a live system-->

### Built With
<!--All things you use for deployment-->

### Versioning
<!--Add a note about versioning-->

<% } -%>

<% if (acknowledgments) { -%>
## Acknowledgments
<!--- Hat tip to anyone who's code was used-->
<!--- Inspiration-->
<!--- etc-->
<% } -%>
