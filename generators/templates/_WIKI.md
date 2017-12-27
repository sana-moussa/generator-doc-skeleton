# <%= name %> - WIKI -

<% if (internal) { -%>
## Internal
This is a private wiki used as a reference for developers.
<!--Here you can write all specific commands and notes that you need to share with all committers of this project-->

### Links
* Staging system
* Live system

### Credentials
<!--access credentials-->
* For  test users/ each existing Role

### Notes
<!--internal notes to developers-->

### Important Commands to run
<!--Important Commands to run with a short description of the context-->

### Contacts
<!--How to contact the responsible person for this project -->
<% } -%>

<% if (translations) { -%>
## Translations
<!--Where are the translation documents and how to generate translation files-->
### links
### commands
<% } -%>

<% if (mobile) { -%>
## Mobile Env Setup
<!--All about mobile env: certificates, SDK, special config...-->
## Mobile Build
<!--Notes on how to build the app -->

<% } -%>