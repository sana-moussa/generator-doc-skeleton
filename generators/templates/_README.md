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
<!--A step by step series of examples that tell you how to  to get a development env running-->
<!--and with an example of getting some data out of the system or using it for a little demo-->
### Setup 
<% if (docker) { -%>

_Using Docker:_
- make sure you installed [Docker](https://www.docker.com/)
- go to docker folder in your project
- start docker: ```docker-machine start docker```
- set up the environment for the Docker client: ```eval `docker-machine env docker```
- opening: ```docker-compose up -d ```
- closing: ```docker-compose down ```

<% } -%>

<% if (vagrant) { -%>

_Using Vagrant:_

[vagrant](https://www.vagrantup.com/)

<% } -%>


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
