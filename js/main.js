
var n=parseInt(prompt("Enter the number of rows of pattern(1-9)"));
for(let i=1;i<=n;i++)
{
	for(let j=n;j>i;j--)
	{
		document.write("*");
		document.write("&nbsp;");
	}
	
	for(let k=1;k<=i;k++)
	{
		document.write(i);
		document.write("&nbsp;");
	}
	for(let l=1;l<=i;l++)
	{
		document.write(i);
		document.write("&nbsp;");
	}
	for(let m=n;m>i;m--)
	{
		document.write("*");
		document.write("&nbsp");
	}
	document.write("<br>");
}
	