---
desc: ZDnet
title: 'Government Gmail use following Google&rsquo;s China news'
original: 'http://www.zdnet.com/blog/btl/guest-post-government-gmail-use-following-googles-china-news/29511'
summary: Paul Strassman outlines some of the technical issues raised for government agencies using Gmail in light of the China cyberattack on Google. 
date: 2010-1-13
---

> <a href="http://www.strassmann.com/">Paul Strassmann</a> is a
> Distinguished Professor of Information Sciences at George Mason
> University's Center for Secure Information Systems. He's also a
> long-time technology executive in the private sector and
> government. In 2002, he served as acting CIO of NASA. Here's his take
> on the Google-China showdown and some of the technical issues the
> incident raises.


> **Updated:** A Google spokesman responds with the following: 
>
> The premise of Mr. Strassmann's post is without merit:  There's no
> need to withdraw servers that store Gmail information from China
> because there aren't any there.


Federal Chief Information Officer Vivek Kundra has been a consistent
advocate of increasing the government's use of commercially available
technologies, such as Gmail. In fact, as the District of Columbia's
chief technology officer, Kundra implemented Google Apps, including
Gmail, for all District employees.


A number of Department of Defense (DoD) organizations are already
using Gmail. Meanwhile, Google has made secure Gmail [the default
choice](http://gmailblog.blogspot.com/2010/01/default-https-access-for-gmail.html)
in light of the cyberattack the company detailed on Tuesday.

Since there are DoD organizations that have already advocated the
adoption of Gmail, the following advisory is offered.

The most probable, and easiest way, would be for Chinese agents with
physical access to Google servers to insert physical wiretaps. A
modified version of a Cisco switch with an extra optic fiber leading
off to the police would be easy to hide.  It would be reasonable to
assume that Google does not encrypt traffic sent between machines in
the same subnet (i.e. in the same physical cabinet).


Once you can wiretap, you can eventually figure out how to distinguish
Gmail traffic from other traffic, and reverse engineer how Gmail data
is replicated across servers.

<span style="text-decoration: line-through;">There is no defense
against a hostile party with full physical access to your server
room. That is why Google's only logical option is to withdraw all
physical servers from China.</span>


<span style="text-decoration: line-through;">There are two Google data
centers in China, almost surely co-hosted on shared facilities and not
owned by Google. Similarly, there is a co-hosted facility in
Russia. Unless a facility is owned and operated by Google it would be
always suspect, and even then it would not qualify to operate DoD
classified mail.</span>


DoD should therefore not consider Gmail as a viable option because it
cannot be trusted. Only a secure DoD Private Cloud, isolated from the
Internet, can be seen as an acceptable option.

> **Ed note:** Google said it doesn't have servers that hold Gmail data
> within China. Strassmann maintains his reservations about cloud
> applications within the DoD.
