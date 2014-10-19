<?php

$title = "Do It Yourself: Figure Out Your Company's Information Productivity";
$author = "Larry Dignan with Paul Strassmann";
$date = "October 18, 2004";

include("utils.php");
echo ( baseline_header($title, $author, $date));
?>
<script language="JavaScript" src="ip-calc.js"></script>


<p>Want to figure out how well your company manages information? Here are
the steps and financial data you need to calculate your own
Information Productivity. You will need two financial reports from
your company:<p>
 
<ul>
<li> Income statement 
<li> Balance sheet
</ul>

<P>You want the most recent full-year statements, audited by an outside accountant. If your company is public, these will be found in the most recent 10-K form filed with the Securities and Exchange Commission by your company's top executives. If your firm is privately held, you will have to ask your chief financial officer to provide the statements or make the calculations.</P>

<P>You will also need access to a Capital Asset Pricing Model. Links are provided below to a free calculator and a related measure of risk called the beta factor.</P>

<P><b>Part I: Calculate the value created for your company by managing information effectively.</b></P>

<P>This is the Information Value-Added (IVA). There are three pieces to this calculation:</P>

<P>The Profit of your company, adjusted for one-time events and preferred dividends</P>

<P>The Rate of Return your owners expect (a.k.a. cost of capital)</P>

<P>The Shareholders' Investment in your company, which is the total amount of capital invested by its owners</P>

<form method=post>

<p><b>A. Profit</b></P>

<P> Find the income statement of your company. Look for a line item that reflects profit after taxes, but before dividends and special charges.</P>

<P> The name might be "income before adjustments" with unusual items
 being write-offs, currency or non-operating one-time losses or similar
 nomenclature.*</p>

<P>Enter that number here:

<?php 
   echo (input_box("profit", "A. Profit"));
 ?>
</P>

<P><b>B. Rate of Return </b></P>

<P>Find the rate of return your company's owners expect for the capital they provide. This means consulting, at a library or online, one of these Capital Asset Pricing Models: 
<ul>
<li> <a href="http://www.standardandpoors.com">Standard & Poor's</a>,
<li> <a href="http://www.thomson.com/financial/financial.jsp">Thomson Financial Reports</a>, or 
<li> <a href="http://www.valueline.com/">Value Line Reports</a>.
</ul>
</P>

<P>Each site above requires a subscription.** </p>

<p>You can estimate your company's expected return with the free
calculator that can be found at:
<a href="http://www.moneychimp.com/articles/valuation/capm.htm">moneychimp.com</a>.</P>

<P>The Beta factor can be found on <a
href="http://finance.yahoo.com">Yahoo Finance</a>. Get a stock quote
for your company, then click on the Key Statistics link.</P>

<P> When you're done, enter the percentage shown by the Capital Asset Pricing Model for your company's expected annual rate of return to  shareholders here: 
<?php 
   echo input_box("returnrate", "B. Rate of return (%)")
?>
</P>

<P><b>C. Shareholders' Investment</b></P>

<P> Find the balance sheet for your company. Go to the bottom half of the Liabilities section. Look for the line item called "shareholders' equity." Enter that amount here:  
<?php 
   echo (input_box("equity", "C. Shareholder's Equity"));
 ?>

</P>

<P> Multiply the rate of return (B) by shareholders' equity (C). The result is calculated here: 
<?php 
   echo (output_box("investment", "Investment"));
 ?>
</P>

<P> Subtract that amount from profit (A). The result is calculated here:
<?php 
   echo (output_box("iva", "Information Value-Added"));
 ?>
</P>



<P> That is your company's Information Value-Added (IVA).</P>

<P><b>Part II: Calculate your company's Information Productivity.</b></P>

<P>This shows how much it costs your company to add that value from effective management of information. The highest results come when there is great value added and low information transaction costs. You need just one new number, the transaction costs.</P>

<P><b>A. Transaction Costs </b></P>

<P>Find the line item on the income statement that is called "sales,
general and administrative expense" (colloquially referred to as
SG&A). Sometimes it is listed just as "sales and administrative
expense" or another shortened form. Enter that number here:
<?php 
   echo (input_box("sga", "A. Transaction costs"));
 ?>
</P>


<P><b>B. Information Productivity</b> </P>

<P>Divide Information Value-Added (from first calculation) by your transaction costs.</P>

<P> This will result in a percentage:</p>


<?php 
   echo (output_box("productivity", "B. Information productivity (%)"));
 ?>




<P>Voila! You have just calculated how productively your company as a whole manages information for the basic goal</P>

<input type=reset value="Erase and start again">
</form>

<hr>
<P> *Alternately, find "net income after taxes" and add back any
dividends paid to preferred shareholders, plus one-time charges
reported by your company.</P>

<P> **In most instances, the Capital Asset Pricing Model price can be
obtained from subscription-based sources. However, most textbooks on
corporate financial analysis will also contain instructions on how to
come up with this number using published data from the Federal Reserve
Board and quotations from stock exchanges that list the fluctuations
in the price of a firm's shares. Here is one such explanation, at
<a href="http://www.investopedia.com/university/concepts/concepts8.asp">CAPM at www.investopedia.com</a>.

<?php 
  echo (baseline_footer());
?>