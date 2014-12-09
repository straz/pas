<?php

require("utils.php");

$title = "Problems with authentication";
$ftitle = $title;

$date = "10 Apr 2002";
$copyright = "2002";
$url = "http://searchsecurity.techtarget.com/tip/1,289483,sid14_gci816117,00.html";

$about = "Paul A. Strassmann is the former Director of Defense Information, U.S.
Department of Defense. He serves on the Board of Directors of
TrioSecurity of Colorado Springs, Colo., a firm pursuing the development
of innovative network authentication technologies. </P>";


ssecurity_head ($title, $ftitle, $date, $url);

?>

<p>Purloining a person's electronic authenticity is the most insidious way
for invading individual privacy. If you can masquerade as another
person, there are no limits on how much you can compromise the privacy
and integrity of anyone's online data. For this reason, I will
concentrate today on the adequacy of personal authentication
methods.</P>

<P>Last month, a close relative -- a computer consultant -- died
suddenly. Just about all of his affairs, including financial records,
were on his laptop, without backups. When I finally got hold of the
laptop, it was relatively easy to retrieve his records. I did not bother
trying to crack his password with one of the hacker programs readily
available (see <A
href="http://www.passwordportal.net/">passwordportal.net</A>.  All I had
to do was install another version of a Microsoft operating system and
pretend I was the deceased relative. The e-mails and financial records
became instantly available!  </P>

<P>This story illustrates what is perhaps most often missed when experts
discuss privacy matters. Nowadays, protecting data transmissions as well
as safeguarding data files attracts disproportionate attention. As I see
it, the major threats originate from perpetrators masquerading as
persons who already have the necessary access privileges. The bogus
personalities can be just about anyone, but most often they are
insiders, such as maintenance programmers, consultants or equipment
repairmen.  </P>

<P>Perhaps the single most important requirement for safeguarding
personal privacy in a networked world is to positively and reliably
assure the authentication of an individual who is requesting valuable
network services. All privacy safeguards are easily swept away if a
hostile intrusion can be launched to appear as coming from a trusted
source. For this reason, I will devote this article to reviewing the
problems with the existing approaches to authentication. I will also
suggest how one ought to deal with questions of trustworthiness.</P>

<BR><B>The problems with passwords</B><BR>

<P>Passwords are by far the most used and most easily subverted method
of personal authentication. If an organization institutes policies to
ensure secure passwords (such as frequently changed alphanumeric
upper/lower case combination of at least 10 characters) the
inconvenience is so great that such a policy will be violated in an
overwhelming number of cases. I know that such is the case from
inspections of data centers containing classified data. </P>

<P>If security personnel do enforce a policy of elaborate passwords, the
employees will write down the incomprehensible codes for easy access --
usually in places where such paper records are easily compromised. If an
organization does not impose tight rules for the management of
passwords, easily memorable words (and therefore easily cracked) will be
preferred. Such practice tends to encourage re-use of easily memorized
words for repeated uses. As an example, I find that just about every
online business will always ask me to set up unique personal
authentication as well as a new password.  As a matter of principle, I
never use the identical password twice.  Consequently, I have
accumulated over the past two years 292 unique active passwords! For
instance, I have passwords for Adobe, Active Share, Amazon retail,
Amazon publisher, American Airlines, American TownNetwork, Amtrak,
Apple, Army (four sets), AT&T, Auction Watch and AuthorizeNet. This
accounts just for all my "A"s! If I would not follow the policy of
assigning unique passwords every time I am asked to set up one, I would
increase my risks because any intrusion attempt into my records would
commence with picking up a password from a known and less protected
site, assuming that I use the same name for all.</P>

<P>To get around the problem of too simple passwords or of identical
passwords for access to diverse sites, we now have a single sign-on
solution from Microsoft (Passport). Accordingly, a single access code
will unlock a central password "vault" that will then automate
authentication processes. Though the concept of a single access master
password solves many of the problems noted above, it saddles the
authentication process with the risk that if access to the Microsoft
operated "vault" is compromised, all privacy becomes compromised.</P>

<BR><B>The problems with smartcards </B><BR>

<P>Every time a person uses a smartcard, the implicit assumption is that
the computer has not been compromised. The possibility always exists
that the computer (or any other device implanted on the Net along the
way) has been infected by a hidden software routine that exploits the
user's identity after authentication has been accomplished. Because
users authenticate themselves to a potentially compromised computer,
they can never be secure in their subsequent computer transactions.</P>

<P>Perhaps the greatest inhibition to the use of smartcards in
electronic commerce is their variety. The chances of adoption of
smartcards as the universal means for authentication of individuals in
electronic commerce are nil. Access security requirements vary depending
on the severity of risks and local circumstances. Therefore, a wide
range of smartcard solutions is almost certain to persist. Technology
obsolescence and proliferation will continue to inhibit the adoption of
smartcards and reduce the applicability of this means for solving
personal privacy issues.</P>

<BR><B>The problems with biometrics</B><BR>

<P>Certainly a fingerprint or iris scan can identify an individual.
Unfortunately, the means for acquiring biometric records are neither
convenient nor inexpensive. Even then, biometrical records will not
result in a completely secure system. Obtaining a copy of an
individual's biometrics can be trivial. I have seen two movies where a
waitress lifted a fingerprint from a glass in a restaurant for nefarious
uses. There are also devices that can capture iris images of a person
walking within a few feet of a video camera (often behind a one-way
mirror) so that it can be duplicated and used for illegitimate purposes.
The real problem with biometrics is that once an individual's biometrics
has been compromised, they are compromised for life and can never be
trusted again. However, my most severe objection to biometrics as an
authentication method is their reliance on a central database that
contains the identifying graphic templates.  If such database is
compromised, then the biometrics of ALL users in the database are
compromised for life.</P>

<P>Voice recognition must be also considered as a potential
authentication biometric.  Unfortunately, the technology is as yet not
sufficiently reliable, is expensive and difficult to implement.  It also
suffers from all of the disadvantages of having to rely on a central
database for storing voiceprint templates.  </P>

<BR><B>The solution to personal authentication</B><BR>

<P>We are witnessing a rapid shift from desktop computing to mobile
computing wherein the functions of cell phones are integrated with the
functionality of personal data appliances (PDAs). I happen to own such a
device (the Kyocera Smartphone with full Palm PDA features, running on
Sprint Network). In effect, the cell phone/PDA device makes available an
authentication means that combines the best of password vaults,
smartcards and biometrics, while avoiding most of their disadvantages.
How can that be done?</P>

<P>The solution is to utilize the cell phone/PDA to combine all of the
available authentication methods into a single device and thus rely on
the combinatorial powers of three (or four) separate and distinct
security methods to deliver verified authentication of a person. In
other words, my cell phone/PDA becomes the smartest of the smartcards
one can conceive because its contents are entirely under the owner's
physical control. It is not under control of a centrally administered
database that can be compromised. The only way to corrupt the uses of
the cell phone/PDA phone is to steal it, but even then it would be of no
use to anyone since unlocking its utility, as a smartcard, requires
additional steps.</P>

<P>Here is how the additional steps work (it works on my Kyocera): Step
#1: When I turn the device on, it asks me for a password to access to
the highly encrypted password vault stored in the flash memory. That
opens the PDA, which is now capable of acting as if it were my
smartcard. Step #2: The PDA then asks me for my signature or a
pre-defined handwritten phrase. The idiosyncrasies of my writing style
have been already captured in an encrypted template. If my writing and
the template match, I have positively identified myself and I am ready
to conduct business. Step #3: Under certain circumstances, additional
security can be obtained by voice recognition. Since the device in my
hand is already a cell phone, this supplemental means for authentication
can be advantageous, especially when dealing with lower security
needs.</P>

<BR><B>Summary</B><BR>

<P>Concerns about the preservation of personal privacy in electronic
commerce involve a wide range of security measures. I have concluded
that obtaining assured authentication of a person's identity is by far
the most critical inhibitor to future progress to expand electronic
commerce on an all-pervasive global scale. With the rapid availability
of increasingly powerful cell phone/PDA devices, time has come to
abandon the current approach of viewing passwords, smartcards and
biometrics as isolated solutions for securing assured authentications.
Combining multiple authentication techniques in a personally owned and
individually calibrated physical device seems to hold the promise of
protecting individuals against purloined access codes to their private
data.</P>


<?php	
ssecurity_foot ($copyright);
?>
