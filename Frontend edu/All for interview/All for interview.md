# All for interview

- [All for interview](#all-for-interview)
  - [DNS](#dns)
  - [HTTP/HTTPS](#httphttps)
  - [RESTFUL API](#restful-api)
    - [METHODS](#methods)
  - [AUTHORISATION](#authorisation)
    - [SESSION](#session)
    - [JWT](#jwt)
  - [JS (JavaSript)](#js-javasript)
    - [EVENT LOOP](#event-loop)
    - [SCOPE](#scope)
    - [HOISTING](#hoisting)
    - [CLOSURE](#closure)
    - [IMUTABLE (BY VALUE)/MUTABLE (BY REF)](#imutable-by-valuemutable-by-ref)
    - [ES6](#es6)
      - [LET/CONST](#letconst)
      - [PROMISE](#promise)
      - [FIND/MAP/FILTER/REDUCE…](#findmapfilterreduce)
    - [ALGORITHMS](#algorithms)
    - [LIBRARIES](#libraries)
      - [REACT](#react)
    - [FRAMEWORKS](#frameworks)
      - [VUE.JS](#vuejs)
      - [ANGULAR](#angular)
  - [OOP (OBJECT ORIENTED PROGRAMMING) *](#oop-object-oriented-programming-)
  - [FP (FUNCTIONAL PROGRAMMING) *](#fp-functional-programming-)
  - [TDD (TEST-DRIVEN DEVELOPMENT) *](#tdd-test-driven-development-)
  - [GIT](#git)
  - [SCRUM](#scrum)
 
## DNS 
REF - [go to link](https://www.youtube.com/watch?v=hIqdZgjoRuk) (DNS in depth YouTube lesson)

DNS (Domain Name System) is a hierarchical and decentralized naming system for Internet connected resources. DNS maintains a list of domain names along with the resources, such as IP addresses, that are associated with them.

The most prominent function of DNS is the translation of human-friendly domain names (such as mozilla.org) to a numeric IP address (such as 151.106.5.172); this process of mapping a domain name to the appropriate IP address is known as a DNS lookup. By contrast, a reverse DNS lookup (rDNS) is used to determine the domain name associated with an IP address.

HOW DNS WORKS
When we type www.google.com in browser:
1.	Client sends request for DN (www.google.com) to DNS Resolver
2.	DNS Resolver – translate human-friendly text DN (www.google.com) into IP address 8.8.8.8
3.	With given IP address it connects to the Root Server and try to find data for the given IP address
4.	If Root Server don’t have any data about asked IP address, it forward request to the TLD Server
5.	TLD Server (Top Level Domain Server) finds the Google server, and it forward request to the Google server
6.	Google server then finds the result and sends response back to DNS Resolver
7.	DNS Resolver forward the response to client

## HTTP/HTTPS
REF - [go to link](https://flaviocopes.com/http/) (for more details about this section go to link)

WHAT IS LINK:

For example, this document address is https://flaviocopes.com/http/:
*	https is the protocol.
*	flaviocopes.com is the domain name that points to my server
*	/http/ is the document URL relative to the server root path. The path can be nested: https://flaviocopes.com/page/privacy/ and in this case the document URL is /page/privacy.

 
## RESTFUL API 
### METHODS
MUST KNOW
*	GET - is the most used method here. It’s the one that’s used when you type an URL in the browser address bar, or when you click a link. It asks the server to send the requested resource as a response.
*	POST - The client uses the POST method to send data to the server. It’s typically used in forms, for example, but also when interacting with a REST API.
*	PUT -The PUT method is intended to create a resource at that specific URL, with the parameters passed in the request body. Mainly used in REST APIs.
*	DELETE - The DELETE method is called against an URL to request deletion of that resource. Mainly used in REST APIs

OTHERS
*	HEAD - is just like GET, but tells the server to not send the response body back. Just the headers.
*	OPTIONS -	When a server receives an OPTIONS request it should send back the list of HTTP methods allowed for that specific URL.
*	TRACE - Returns back to the client the request that has been received. Used for debugging or diagnostic purposes.

## AUTHORISATION
### SESSION
### JWT

## JS (JavaSript)
### EVENT LOOP
Visual explanation of event loop: [go to link](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

### SCOPE

### HOISTING

### CLOSURE

### IMUTABLE (BY VALUE)/MUTABLE (BY REF)

### ES6
#### LET/CONST

#### PROMISE

#### FIND/MAP/FILTER/REDUCE…

### ALGORITHMS

### LIBRARIES 
#### REACT

### FRAMEWORKS
#### VUE.JS

#### ANGULAR

## OOP (OBJECT ORIENTED PROGRAMMING) *
## FP (FUNCTIONAL PROGRAMMING) *
## TDD (TEST-DRIVEN DEVELOPMENT) *

## GIT
## SCRUM