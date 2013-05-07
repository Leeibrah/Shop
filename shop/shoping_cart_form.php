<?php
session_start();
$amount = 0;
foreach($_SESSION as $key=>$value) {
$amount = $amount + $value['price']*$value['no'];
}
$action_url = "/upload/shop/pesapal-iframe.php";
?>
<!DOCTYPE html>
<html lang="en">
<head prefix="og: https://ogp.me/ns# fb: http://ogp.me/ns/fb# ondango: https://ogp.me/ns/fb/ondango#">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><link href="/shop/favicon.ico" type="image/x-icon" rel="icon" /><link href="/shop/favicon.ico" type="image/x-icon" rel="shortcut icon" /><meta name="robots" content="noindex,nofollow" /><meta property="fb:app_id" content="172876086066223" /><title>SSL Secure Shop</title>
	<link rel="stylesheet" type="text/css" href="https://static.ondango.com/css/flexslider.css" />
	<link rel="stylesheet" type="text/css" href="https://static.ondango.com/css/screen.css?18" />
<!--<script type="text/javascript" src="/upload/js/jquery-1.8.3.js"></script>
<script type="text/javascript" src="/upload/js/jquery.validate.js"></script>-->
<script type="text/javascript" src="http://jzaefferer.github.com/jquery-validation/jquery.validate.js"></script>
	<script type="text/javascript" src="/shop/js/config.js"></script>
	<script type="text/javascript" src="https://static.ondango.com/js/ondango_v4_libs.js?3"></script>
	<script type="text/javascript" src="https://static.ondango.com/js/ondango_v4.js?24"></script>
	<!--[if IE]><script src="https://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->	<!--[if lt IE 9]>
	<link rel="stylesheet" type="text/css" href="https://static.ondango.com/css/ie" />
<![endif]-->
<script>

$('#payment_butt').live('click',function(){

$("#information_form_of_consumer").validate();
});

</script>
</head>
<body>

<div id="fb-root"></div>
<script type="text/javascript">
//<![CDATA][
	// Facebook
	window.fbAsyncInit = function () {
		FB.init ({
			appId: 172876086066223,
			status: true,
			cookie: true,
			oauth: true,
			channelUrl: "https://www.ondango.com/shop/app/webroot/channel1.html",
			xfbml: true
		});

		FB.Canvas.setSize ();
	};

	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s);js.id = id;
		js.src = "//1connect.facebook.net/en_US/all.js";
		fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk')
	);
//]]>
</script>

<div id="main_container">
	<div id="site">
		<header>

			
		<section class="header small">
		<a href="/shop/bobble-shop" id="shop-logo" class="js-loading"><div class="mask-box"><img src="https://graph.facebook.com/393656630668109/picture?type=large" alt="bobble shop - Logo" /></div></a>
		<div class="title">
			<h1>bobble shop</h1>

						<p>Cart</p>
					</div>

	
		
<div class="go-to-cart">
	
	
	</div> <!-- /.go-to-cart -->

		<div class="clr"><!-- --></div>
	</section> <!-- /.header -->
</header>

<nav>
	<ul>
<li><a href="/upload/shop/bobble-shop.htm" class="js-loading">Home</a></li>
<li class="separator"><!-- --></li>
<li><a href="/upload/shop/cart.php" class="js-loading">1. Cart</a></li>
<li class="separator"><!-- --></li><li>2. Payment method</li>
<li class="separator"><!-- --></li><li>3. Review order</li>
<li class="separator"><!-- --></li><li>4. Confirmation</li>	
          </ul>
	<div class="clr"><!-- --></div>
</nav>

	<div class="fan-discount-banner">
		<div class="icon"><!-- --></div>
		<div class="inner-box small">
			<h6>Special fan discount!</h6>

			<p id="fanDiscountMsg">
				<span id="fanDiscountDynMsg">
								Click on the Like button to become a fan and get 10% off on your purchase. 
								</span>

								Hurry up, only the next 1 buyers will get the discount!							</p>
		</div>

		<div class="call-to-action">
			<div>
							<div class="fb-like" 
					data-href="http://www.facebook.com/bobblegermany" 
					data-send="false" 
					data-layout="button_count" 
					data-width="90" 
					data-show-faces="false" 
					data-font="lucida grande">
				</div>
						</div>
		</div>

		<div class="clr"><!-- --></div>
	</div> <!-- /.fan-discount-banner -->


<section class="checkout">
	<div class="fb-box">
		<div class="fb-box-header cart">
			<h1>Your order</h1>
			<p>Cart</p>
			<em></em>
		</div>

		<div class="fb-box-inner">

			            						<div class="product first-elem">
							
							<div class="title">
	<!--<a href="" class="js-loading"><a>-->								
<br />

															</div>

							<form action="<?php echo $action_url; ?>" method="post" id="information_form_of_consumer">
	<table>
		<tr>
			<td>Amount:</td>
			<td><input type="text" name="amount" id="amount" value="<?php  echo $amount; ?>" required="required" />
			(in &#8364;)
			</td>
		</tr>
		<tr>
			<td>Type:</td>
			<td><input type="text" name="type" value="MERCHANT" readonly="readonly" />
			(leave as default - MERCHANT)
			</td>
		</tr>
		<tr>
			<td>Description:</td>
			<td><input type="text" name="description" id="description"  value="Order Description" required="required" /></td>
		</tr>
		<tr>
			<td>Reference:</td>
			<td><input type="text" name="reference" id="reference"  value="001"  required="required"/>
			(the Order ID )
			</td>
		</tr>
		<tr>
			<td>Shopper's First Name:</td>
			<td><input type="text" name="first_name" id="first_name"  value="" required="required" /></td>
		</tr>
		<tr>
			<td>Shopper's Last Name:</td>
			<td><input type="text" name="last_name" value="" id="last_name"  required="required" /></td>
		</tr>
		<tr>
			<td>Shopper's Email Address:</td>
			<td><input type="text" name="email" value="" id="email" required="required" /></td>
		</tr>
		<tr style="position:absolute;right:100px;bottom:60px;">
			<td colspan="2"><input id='payment_butt' type="submit" value="Make Payment"/></td>
		</tr>
	</table>
</form>						</div>
						</div>
													
					</div>									
			
				
									<!--<form id="coupon-box" class="default" method="post" action="/shop/cart/redeem-coupon" accept-charset="utf-8">
									<div style="display:none;"><input type="hidden" name="_method" value="POST" /></div>				
									<input type="hidden" name="data[Shop][slug]" value="bobble-shop" id="ShopSlug" />					
									<input name="data[Shop][coupon_discount_code]" type="text" maxlength="12" id="ShopCouponDiscountCode" />				
									<input class="button light small" type="submit" value="Redeem coupon" />
					<div id="coupon-message"></div>
				</form>-->			</div>
                        

		<div class="button-box">
			<!--<a href="/upload/shop/product/bobble-shop/17193/bobble-brush-pink.htm" class="button light left js-loading">Continue shopping</a>-->		
			<!--<a href="/upload/shop/shoping_cart_form.php" class="button js-loading">Pesapal</a>		
			</div>-->
	</div> <!-- /.fb-box (Cart) -->


	<!--<div id="recommendations-box" data-shop-slug="bobble-shop" class="loading-content"></div>-->
</section>




<footer>
	<ul class="seals">
	
		<li><span class="ssl-icon" title="SSL Secure Shop">SSL Secure Shop</span></li>
	</ul>
	
	
	<ul class="navi">
	<li><a href="#imprint" class="legal-btn">Imprint</a></li><li>�</li><li><a href="#privacy_policy" class="legal-btn">Privacy Policy</a></li><li>�</li>	
	<li><a href="#shipping-details" class="shipping-btn-footer">Shipping</a></li>
	</ul>

		<ul class="ondango">
		<li>
			<span>Powered by:</span>
			Ondango - Your online shop on Facebook
		</li>
		<li><a href="http://www.ondango.com?ref=shop-footer" target="_blank">Create your own Shop</a></li>
	</ul>
	</footer>

		<div class="clr"><!-- --></div>
	</div>

	<div id="fb-loading-box">
		<p>Please wait while we process your order...</p>
	</div>

	</div>





	<script type="text/javascript" src="https://static.ondango.com/js/webtrekk_v3.js"></script>
<script type="text/javascript">
//<![CDATA][

	// Google analytics
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-21629519-1']);
	_gaq.push(['_trackPageview']);
	_gaq.push(['_anonymizeIp']);

	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
//]]>
</script>

		
	
	<script type="text/javascript">
//<![CDATA[

			var pageConfig = {
				linkTrack:	"link",		// Activate Link Tracking [link or standard]
				heatmap:	"0",		// Activate Heatmap Tracking [1 = on | 0 = off]
				form:		"1",		// Activate Form Tracking [1 = on | 0 = off]
				contentId:	""
			};
			var wt = new webtrekkV3( pageConfig );
			
			

			wt.sendinfo( {"contentId":"Ondango.bobble-shop.checkout.1-cart","contentGroup":{"1":"bobble-shop","2":"checkout","10":"1-cart"}} );
		
//]]>
</script>
	<noscript><div><img src="http://q3.webtrekk.net/980157259404316/wt.pl?p=322,0" height="1" width="1" alt="" /></div></noscript>
</body>
</html>
