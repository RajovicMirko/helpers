# Non coding knowledge

- [Non coding knowledge](#non-coding-knowledge)
  - [DNS](#dns)
  - [HTTP/HTTPS](#httphttps)
    - [METHODS](#methods)
  - [RESTFUL API](#restful-api)
  - [AUTHORISATION](#authorisation)
    - [SESSION](#session)
    - [JWT](#jwt)
  - [OOP (OBJECT ORIENTED PROGRAMMING) *](#oop-object-oriented-programming-)
  - [FP (FUNCTIONAL PROGRAMMING) *](#fp-functional-programming-)
  - [TDD (TEST-DRIVEN DEVELOPMENT) *](#tdd-test-driven-development-)
  - [GIT](#git)
  - [SCRUM](#scrum)

## DNS 
REF - [go to link](https://www.cloudflare.com/learning/dns/what-is-dns/)(Cloudflare DNS explenation)
REF - [go to link](https://www.youtube.com/watch?v=hIqdZgjoRuk) (DNS in depth YouTube lesson)

DNS (Domain Name System) is a hierarchical and decentralized naming system for Internet connected resources. DNS maintains a list of domain names along with the resources, such as IP addresses, that are associated with them.

The most prominent function of DNS is the translation of human-friendly domain names (such as mozilla.org) to a numeric IP address (such as 151.106.5.172); this process of mapping a domain name to the appropriate IP address is known as a DNS lookup. By contrast, a reverse DNS lookup (rDNS) is used to determine the domain name associated with an IP address.

HOW DNS WORKS

1. A user types ‘example.com’ into a web browser and the query travels into the Internet and is received by a DNS recursive resolver.
2. The resolver then queries a DNS root nameserver (.).
3. The root server then responds to the resolver with the address of a Top Level Domain (TLD) DNS server (such as .com or .net), which stores the information for its domains. When searching for example.com, our request is pointed toward the .com TLD.
4. The resolver then makes a request to the .com TLD.
5. The TLD server then responds with the IP address of the domain’s nameserver, example.com.
6. Lastly, the recursive resolver sends a query to the domain’s nameserver.
7. The IP address for example.com is then returned to the resolver from the nameserver.
8. The DNS resolver then responds to the web browser with the IP address of the domain requested initially.

Once the 8 steps of the DNS lookup have returned the IP address for example.com, the browser is able to make the request for the web page:

9. The browser makes a HTTP request to the IP address.
10. The server at that IP returns the webpage to be rendered in the browser.

![DNS diagram](/helpers/Frontend%20edu/images/dns-lookup-diagram.png)

## HTTP/HTTPS
REF - [go to link](https://flaviocopes.com/http/) (for more details about this section go to link)

WHAT IS LINK(URL):

For example, this document address is https://flaviocopes.com/http/:
*	https is the protocol.
*	flaviocopes.com is the domain name that points to my server
*	/http/ is the document URL relative to the server root path. The path can be nested: https://flaviocopes.com/page/privacy/ and in this case the document URL is /page/privacy.

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

## RESTFUL API 
REF - [go to link](https://www.sitepoint.com/developers-rest-api/)

## AUTHORISATION
### SESSION
### JWT

## OOP (OBJECT ORIENTED PROGRAMMING) *
## FP (FUNCTIONAL PROGRAMMING) *
## TDD (TEST-DRIVEN DEVELOPMENT) *

## GIT
## SCRUM