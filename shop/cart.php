<?php
session_start();

function url(){
  $protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
  return $protocol . "://" .$_SERVER['HTTP_HOST'].'/BackupWebsiteBeforeWork/';
}

function urldata(){
  $protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
  return $protocol . "://" .$_SERVER['HTTP_HOST'].'/';
}
//end
if(isset($_POST['data'])) {
$page = 'PrevoiusPage.php';
$amount =0;
$Product_id = $_POST['data']['Product']['id'];
$_SESSION['cart_'.$Product_id]['no']+=1;

$_SESSION['cart_'.$Product_id]['price']=$_POST['data']['Product']['price'];
$_SESSION['cart_'.$Product_id]['product_id']= $_POST['data']['Product']['id'];
$_SESSION['cart_'.$Product_id]['product_slug']=$_POST['data']['Product']['slug'];
$_SESSION['cart_'.$Product_id]['product_title']=$_POST['data']['Product']['title'];
$_SESSION['cart_'.$Product_id]['product_add_to_cart']=$_POST['data']['Product']['add_to_cart'];
//product end
$_SESSION['cart_'.$Product_id]['ShopCurrency_code']=$_POST['data']['Shop']['Currency']['code'];
$_SESSION['cart_'.$Product_id]['Shop_id']=$_POST['data']['Shop']['id'];
$_SESSION['cart_'.$Product_id]['shop_slug']=$_POST['data']['shop']['slug'];
//shop end
$_SESSION['cart_'.$Product_id]['ProductVariation_id']=$_POST['data']['ProductVariation']['id]'];
//end projectVaration
}

//calcutate total amount
 function total_amount(){
 
	foreach($_SESSION as $name=>$val) {
	$sum= $val['no']*$val['price'];
	$amount = $amount + $sum;
	}
	return $amount;
}
//end 

// to substract the quantity
if(isset($_GET['sub']))
{
$product_ID = $_GET['sub'];
	if($_SESSION['cart_'.$product_ID]['no']!=0) {

	  $_SESSION['cart_'.$product_ID]['no']-=1;
	}
	else {
            
           unset($_SESSION['cart_'.$product_ID]);
	}
}
//end

// checking whether seesion isset or not
$quantity_of_all =0;
 foreach($_SESSION as $name=>$values){
       
	if($values['no'] == 0){
          $quantity_of_all +=1;
	}
        
 }
 if($quantity_of_all ==count($_SESSION) ) {
    header('location: /upload/shop/product/bobble-shop/17193/bobble-brush-pink.htm');
      }
//end

// to add product quantity to session
if(isset($_GET['add']))
{
$product_ID = $_GET['add'];
	if($_SESSION['cart_'.$product_ID]['no']!=0) {

	  $_SESSION['cart_'.$product_ID]['no']+=1;
	}
	
}
//end				
?>

<!DOCTYPE html>
<html lang="en">
<head prefix="og: https://ogp.me/ns# fb: http://ogp.me/ns/fb# ondango: https://ogp.me/ns/fb/ondango#">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><link href="/shop/favicon.ico" type="image/x-icon" rel="icon" /><link href="/shop/favicon.ico" type="image/x-icon" rel="shortcut icon" /><meta name="robots" content="noindex,nofollow" /><meta property="fb:app_id" content="172876086066223" /><title>SSL Secure Shop</title>
	<link rel="stylesheet" type="text/css" href="https://static.ondango.com/css/flexslider.css" />
	<link rel="stylesheet" type="text/css" href="https://static.ondango.com/css/screen.css?18" />
	<script type="text/javascript" src="/shop/js/config.js"></script>
	<script type="text/javascript" src="https://static.ondango.com/js/ondango_v4_libs.js?3"></script>
	<script type="text/javascript" src="https://static.ondango.com/js/ondango_v4.js?24"></script>
	<!--[if IE]><script src="https://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->	<!--[if lt IE 9]>
	<link rel="stylesheet" type="text/css" href="https://static.ondango.com/css/ie" />
<![endif]-->
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
		<li><a href="/upload/shop/bobble-shop.htm" class="js-loading">Home</a></li><li class="separator"><!-- --></li><li><a href="/upload/shop/cart.php" class="js-loading">1. Cart</a></li><li class="separator"><!-- --></li><li>2. Payment method</li><li class="separator"><!-- --></li><li>3. Review order</li><li class="separator"><!-- --></li><li>4. Confirmation</li>	</ul>
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

			            <?php
						 foreach($_SESSION as $key=>$value) 
						 {
						// $image_url = "https://".$_SERVER['HTTP_HOST'].$value['product_id'].
						?>
						<div class="product first-elem">
							<a href="" class="img js-loading"><img height="50" width="50" src="/upload/<?php  echo $value['product_id'] ; ?>/bobble_brush_018764_x2_white_pink_small_rgb_xxl.jpg" alt="bobble jug grün"/></a>
							<div class="title">
	<!--<a href="" class="js-loading"><a>-->								
<br />

															</div>

							<form data-unique-id="<?php  echo $value['product_id']; ?>" class="quantity-box" method="post" action="/upload/shop/shoping_cart_form.php" accept-charset="utf-8">
							<div style="display:none;"><input type="hidden" name="_method" value="POST" /></div>							
							<input type="hidden" name="data[Shop][id]" value="<?php  echo $value['Shop_id']; ?>" id="ShopId_.<?php  echo $value['product_id']; ?>._0" />							
							<input type="hidden" name="data[Shop][slug]" value="<?php  echo $value['Shop_slug']; ?>" id="ShopSlug_.<?php  echo $value['product_id']; ?>._0" />							
							<input type="hidden" name="data[Currency][code]" value="<?php  echo $value['ShopCurrency_code']; ?>" id="CurrencyCode_.<?php  echo $value['product_id']; ?>._0" />							
							<input type="hidden" name="data[Product][id]" value="<?php  echo $value['product_id']; ?>" id="ProductId_.<?php  echo $value['product_id']; ?>._0" />							
							<input type="hidden" name="data[Product][price]" value="<?php  echo $value['price'] ; ?>" id="ProductPrice_.<?php  echo $value['product_id']; ?>._0" />							
							<input type="hidden" name="data[Product][title]" value="<?php  echo $value['product_title']; ?>" id="ProductTitle_.<?php  echo $value['product_id']; ?>._0" />						
							<input type="hidden" name="data[Product][quantity]" value="<?php  echo $value['no']; ?>" id="ProductQuantity_.<?php  echo $value['product_id']; ?>._0" />							
							<input type="hidden" name="data[ProductVariation][id]" value="<?php  echo $value['ProductVariation_id']; ?>" id="ProductVariationId_.<?php  echo $value['product_id']; ?>._0" />							
							<input type="hidden" name="data[ProductVariation][index]" value="<?php  echo $value['ProductVariation_id']; ?>" id="ProductVariationIndex_.<?php  echo $value['product_id']; ?>._0" />							
								Quantity: 

								<span class="quantity"><?php  echo $value['no'] ; ?></span>
								<a class="one-less" href="<?php urldata();?>cart.php?sub=<?php echo $value['product_id'] ; ?>" id='subs' alt="<?php  echo $value['product_id']; ?>"><!-- --></a>
								<a class="one-more" href="<?php urldata();?>cart.php?add=<?php echo $value['product_id'] ; ?>" id='add' alt="<?php  echo $value['product_id']; ?>"><!-- --></a>
							</form>
							<div class="price-box">
								<div class="price">&#8364;<?php  echo $value['price'] ; ?></div>

								<form method="post" action="/shop/cart/remove-product" accept-charset="utf-8"><div style="display:none;">
								<input type="hidden" name="_method" value="POST" /></div>								
								<input type="hidden" name="data[Product][id]" value="<?php  echo $value['product_id']; ?>" id="Product_Id" />								
								<input type="hidden" name="data[ProductVariation][index]" value="<?php  echo $value['ProductVariation_id']; ?>" id="ProductVariation_Index" />							
								<!--<a href="#" id='remove_product' class="remove-btn js-loading">Remove Item</a>-->						
								</form>							</div>
						</div>
						<?php
						}
						?>
							
					</div>									
			<div class="amount-box">
								
								
				
				<div class="value" id="total">&#8364;<?php  echo total_amount(); ?></div>
				<div class="label">Total Price*</div>
				<div class="clr"><!-- --></div>

								<div class="value light">&#8364;<?php $a = total_amount(); echo number_format (($a*19)/100,2);?></div>
				<div class="label light">Taxes included (19%):</div>
				
				<div class="clr"><!-- --></div>
				<p class="info light">* <a href="#shipping" class="shipping-btn">Shipping</a> costs may be added to the total price depending on your payment method.</p>
				<div class="clr"><!-- --></div>
				
									<!--<form id="coupon-box" class="default" method="post" action="/shop/cart/redeem-coupon" accept-charset="utf-8">
									<div style="display:none;"><input type="hidden" name="_method" value="POST" /></div>				
									<input type="hidden" name="data[Shop][slug]" value="bobble-shop" id="ShopSlug" />					
									<input name="data[Shop][coupon_discount_code]" type="text" maxlength="12" id="ShopCouponDiscountCode" />				
									<input class="button light small" type="submit" value="Redeem coupon" />
					<div id="coupon-message"></div>
				</form>-->			</div>
                        

		<div class="button-box">
			<a href="/upload/shop/product/bobble-shop/17193/bobble-brush-pink.htm" class="button light left js-loading">Continue shopping</a>		
			<a href="/upload/shop/shoping_cart_form.php" class="button js-loading">Pesapal</a>		
			</div>
	</div> <!-- /.fb-box (Cart) -->


	<!--<div id="recommendations-box" data-shop-slug="bobble-shop" class="loading-content"></div>-->
</section>




<footer>
	<ul class="seals">
	
		<li><span class="ssl-icon" title="SSL Secure Shop">SSL Secure Shop</span></li>
	</ul>
	
	
	<ul class="navi">
	<li><a href="#imprint" class="legal-btn">Imprint</a></li><li>·</li><li><a href="#privacy_policy" class="legal-btn">Privacy Policy</a></li><li>·</li>	
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