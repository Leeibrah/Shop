function is_FB(){return typeof FB=="object"}function set_fanStatus(){$.get(cfg.paths.ajax+"customer/set-fan",{is_fan:1},function(){needToReload(),$("#fanDiscountDynMsg").text(cfg.i18n.fanDiscountMsg),$("#fanDiscountMsg, #fanDiscountMsg > span").animate({color:"#000"},300,function(){$(this).delay(1e3).animate({color:"#999"},2e3)})})}function unset_fanStatus(){$.get(cfg.paths.ajax+"customer/set-fan",{is_fan:0},function(){needToReload(),$("#fanDiscountDynMsg").text(cfg.i18n.nonFanDiscountMsg),$("#fanDiscountMsg, #fanDiscountMsg > span").animate({color:"#000"},300,function(){$(this).delay(1e3).animate({color:"#999"},2e3)})})}function needToReload(){if(window.location.href.indexOf(cfg.paths.base+"cart/")!=-1||window.location.href.indexOf(cfg.paths.base+"review-order/")!=-1)window.location.href=window.location.href}(function(e){e.imgPreLoad=function(){function u(){return window.Image?new Image:document.createElement("img")}function a(t,n){var r=u(),i=function(r){var i=this,s=arguments;clearTimeout(o),e(this).unbind("load error"),t[1].apply(i,s),n.apply(i,s)};r.src=t[0],r.complete?i.call(r,{type:"cacheLoad"}):(clearTimeout(o),o=setTimeout(function(){i.call(r,{type:"timeouterror"})},s),e(r).bind("load error",i))}function f(){if(t.length&&n){r=!0;var e=t.shift();a(e,f)}else r=!1}function l(){r=!1,n=!1}function c(){i&&(n=!0,f())}function h(e,t){l(),t=t||function(){},a([e,t],c)}var t=[],n=!1,r=!1,i=!1,s=5e3,o;return{add:function(e,i,s){i=i||function(){},e=[e,i],s?t.unshift(e):t.push(e),n&&!r&&f()},loadNow:h,ready:function(){i=!0,n=!0,f()}}}(),e.windowLoaded?e.imgPreLoad.ready():e(window).bind("load",e.imgPreLoad.ready)})(jQuery),$.fn.focusBlur=function(){var e=$(this).val();$(this).focus(function(){$(this).val()==e&&$(this).addClass("focus").val("")}).blur(function(){$(this).val()==""&&$(this).removeClass("focus").val(e)})},function(e){e.fn.extend({actual:function(t,n){var r,i,s,o,u,a,f,l;if(!this[t])throw'$.actual => The jQuery method "'+t+'" you called does not exist';return s=e.extend({absolute:!1,clone:!1,includeMargin:undefined},n),i=this,s.clone===!0?(f=function(){i=i.filter(":first").clone().css({position:"absolute",top:-1e3}).appendTo("body")},l=function(){i.remove()}):(f=function(){r=i.parents().andSelf().filter(":hidden"),o=s.absolute===!0?{position:"absolute",visibility:"hidden",display:"block"}:{visibility:"hidden",display:"block"},u=[],r.each(function(){var e={},t;for(t in o)e[t]=this.style[t],this.style[t]=o[t];u.push(e)})},l=function(){r.each(function(e){var t=u[e],n;for(n in o)this.style[n]=t[n]})}),f(),a=/(outer)/g.test(t)?i[t](s.includeMargin):i[t](),l(),a}})}(jQuery),$.fn.FB_likeCallback=function(setFunctionName,unsetFunctionName){is_FB()?(FB.Event.subscribe("edge.create",eval(setFunctionName)),unsetFunctionName!=undefined&&FB.Event.subscribe("edge.remove",eval(unsetFunctionName))):setTimeout($(this).FB_likeCallback,1e3,setFunctionName,unsetFunctionName)},function(e){e.widget("Ondango.combobox",{id:"",cb:null,list:null,items:null,found_item:-1,found_pressedKey:"",caption:"",options:{cb_class:"",hide_label:!1,is_disabled:!1,changed_callback:function(e){}},_create:function(){var t=this,n="ui-combobox"+(this.options.cb_class.length?" "+this.options.cb_class:"")+(this.options.is_disabled?" disabled":"");this.id=(new Date).getTime(),this.cb=e('<div id="cbMain_'+this.id+'" class="'+n+'"><span></span><em></em></div>'),this.list=e(this._get_list()),this.list.appendTo("body"),this.items=e(".option",this.list),this.element.hide(),this._init_caption(),this.cb.insertAfter(this.element).css("width",this._get_cbWidth(this.cb)),this.options.is_disabled||this._bind_main_events(),this.list.css("width",this._get_cbWidth(this.list)),this.items.each(function(n){e(this).click(function(r){e(this).is(".disabled")||(t._center_scroll(n),t.select(e(r.currentTarget),n))})})},select:function(t,n){var r=this;e(r.items[r.selectedIndex]).removeClass("selected"),t.addClass("selected"),r.found_item=-1,r.found_pressedKey="",r.selectedIndex=n,r.caption.text(t.text()),r.element.val(t.attr("data-value")),r.element.trigger("change"),r.options.changed_callback(r.element)},close:function(){this.cb.removeClass("focus"),this.list.hide()},close_allOptions:function(){var t=this;e("body").find(".ui-combobox").each(function(){e(this).attr("id")!="cbMain_"+t.id&&e(this).removeClass("focus")}).end().find(".ui-opts").each(function(){e(this).attr("id")!="cbOpts_"+t.id&&e(this).hide()})},enable:function(){this.cb.removeClass("disabled"),this._bind_main_events()},_bind_main_events:function(){var t=this;this.cb.bind("click.combobox",function(n){t.close_allOptions(),t._set_listPos(),t.list.toggle(),t.list.is(":visible")&&t._center_scroll(t.selectedIndex),e(this).toggleClass("focus"),e(document).one("click",function(){t.close()}),typeof FB!="undefined"&&FB.Canvas.setSize({width:810,height:e("#site").outerHeight()}),n.stopPropagation()}).bind("mousedown.combobox",function(){e(this).setFocus()}).bind("keypress.combobox",function(n){var r="",i=n.charCode||n.which,s=-1;i==13&&e(t.items[t.found_item]).hasClass("found")&&(e(t.items[t.found_item]).removeClass("found"),t.select(e(t.items[t.found_item]),t.found_item),t.found_item=-1,t.found_pressedKey="",t.close()),i&&i>=32&&(r=String.fromCharCode(i).toUpperCase(),t.items.removeClass("found").each(function(n){var i=e(this).text().toUpperCase().indexOf(r);i===0&&s<0&&(s=n);if(r!=t.found_pressedKey){if(i===0)return t.found_pressedKey=r,t.found_item=n,t._center_scroll(n),e(this).addClass("found"),!1}else{if(n>t.found_item&&i===0)return t.found_item=n,t._center_scroll(n),e(this).addClass("found"),!1;if(n==t.items.length-1)return t.found_item=s,t._center_scroll(n),e(t.items[s]).addClass("found"),!1}}))})},_init_caption:function(){this.caption=e("span",this.cb);if(this.options.hide_label){var t=this.element.prev("label");t.length&&(this.caption.text(t.text()),t.hide())}else this.caption.text(e(e(".option",this.list)[this.element[0].selectedIndex]).text())},_center_scroll:function(t){var n=e(this.items[t]),r=e(".cb-scroll-box",this.list);r.scrollTop(n.position().top-168+parseInt(r.height()/2))},_get_cbWidth:function(e){var t=this._toInt(e.css("border-left-width")),n=this._toInt(e.css("border-right-width")),r=this._toInt(e.css("padding-left")),i=this._toInt(e.css("padding-right"));return this.element.outerWidth()-t-n-r-i},_set_listPos:function(){var e=this.cb.offset();this.list.css({left:e.left+"px",top:this.cb.height()+e.top+"px"})},_toInt:function(e){return parseInt(e.substr(0,e.length-2))},_get_list:function(){var t=this,n="";return e("option",this.element).each(function(r){var i="option";e(this).is(":disabled")&&(i+=" disabled");if(t.selectedIndex==r||e(this).is(":selected"))t.selectedIndex=r,i+=" selected";n+='<li class="'+i+'" data-value="'+e(this).attr("value")+'">'+e(this).text()+"</li>"}),'<div id="cbOpts_'+this.id+'" class="ui-opts"><div class="cb-scroll-box"><ul>'+n+"</ul></div></div>"}})}(jQuery),function(e){e.widget("Ondango.checkbox",{chb:null,label:null,options:{chb_class:""},_create:function(){var t=this,n="ui-checkbox"+(this.options.chb_class.length?" "+this.options.chb_class:"");n=this.element.is(":checked")?n+" checked":n,this.chb=e('<div class="'+n+'"><!-- --></div>'),this.label=e("label[for="+this.element.attr("id")+"]"),this.element.hide(),this.chb.insertAfter(this.element).click(function(){t.toggleStatus()}),this.label.length&&this.label.addClass("ui-label").mouseover(function(){t.chb.addClass("hover")}).mouseout(function(){t.chb.removeClass("hover")}).click(function(e){e.preventDefault(),t.toggleStatus()})},toggleStatus:function(){this.element.is(":checked")?(this.element.removeAttr("checked"),this.chb.removeClass("checked")):(this.element.attr("checked","checked"),this.chb.addClass("checked")),this.element.trigger("change")}})}(jQuery),function(e){e.widget("Ondango.countdown",{deal_status:null,date_start:null,date_end:null,time_range:null,setInt:null,options:{show_days:!0},_create:function(){var t=this;this.deal_status=e(this.element).attr("data-deal-status"),this.date_start=new Date,this.date_end=new Date(this.date_start.valueOf()+e(this.element).attr("data-remaining-time")*1e3),this.time_range=this.date_end-this.date_start,this.options.show_days||e(".days",this.element).next("sup").remove().end().remove(),this.display(),this.setInt=setInterval(function(){t.display()},1e3)},display:function(){var t=new Date-this.date_start,n=this.time_range-t;if(n<=0){clearInterval(this.setInt),this.deal_status=="going_to_start"||this.deal_status=="started";return}var r=this.get_timeLeft(n);this.options.show_days&&e(".days",this.element).html(r.days),e(".hrs",this.element).html(r.hours),e(".mins",this.element).html(r.minutes),e(".secs",this.element).html(r.seconds)},get_timeLeft:function(e){var t=new Object,n=Math.floor(e/864e5);e-=n*864e5,t.days=this._add_zero(n);var r=Math.floor(e/36e5);e-=r*36e5,r=this.options.show_days?r:r+n*24,t.hours=this._add_zero(r);var i=Math.floor(e/6e4);e-=i*6e4,t.minutes=this._add_zero(i);var s=Math.floor(e/1e3);return t.seconds=this._add_zero(s),t},_add_zero:function(e){return(e<10?"0":"")+e.toString()}})}(jQuery),function(e){e.widget("Ondango.gallery",{is_popup_slider_initialized:!1,video_source_code:null,options:{thumb_btn:"a.thumb-btn",video_btn:".video-large-btn, .video-thumb-btn",large_btn:"a.large-btn",close_btnCaption:"Close",ajax_path:"",popup_html:'<div id="ui-img-xl-box">	<div class="img-xl-gallery">		<div class="xlarge-boxes">	 		<div class="xlarge-box"> 				<img src="" class="xlarge" alt="" /> 			</div>		</div>	</div>	<div class="xlarge-box-video"></div>	<div class="button-box"><a href="#" class="button">Close</a></div></div>'},_create:function(){var t=this;this.thumb_btns=e(this.options.thumb_btn,this.element),this.video_btns=e(this.options.video_btn,this.element),this.large_btn=e(this.options.large_btn,this.element),this.large_img=e(this.options.large_btn+" img",this.element),e(this.options.popup_html).appendTo("body").hide(),this.xlarge_popup=e("#ui-img-xl-box","body"),this.xlarge_gallery=e(".img-xl-gallery",this.xlarge_popup),this.xlarge_box=e(".xlarge-box",this.xlarge_popup),this.xlarge_box_video=e(".xlarge-box-video",this.xlarge_popup),this.xlarge_closeBtn=e("a.button",this.xlarge_popup),this.element.hide().delay(1e3).css({visibility:"hidden",display:"block"}),setTimeout(function(){typeof FB!="undefined"&&FB.Canvas.setSize()},1500),this.element.css({visibility:"visible",display:"none"}).fadeIn("fast"),e(this.thumb_btns[0]).click(),this.preload_images(),this.init_video(),this.init_close_popup(),this.check_isOnlyOneImage(),this.init_keyboardEvents(),this.thumb_btns.click(function(n){n.preventDefault();var r=e(this).data("src-l");t.large_img.attr("src")!=r&&(t.large_btn.data("src-xl",e(this).data("src-xl")),t.large_img.attr("src",r),typeof FB!="undefined"&&FB.Canvas.setSize())}),e(t.options.large_btn,e(t.element)).click(function(e){e.preventDefault(),this.is_popup_slider_initialized?t.show_popup_gallery(e.currentTarget):(t.init_popup_gallery(e.currentTarget),this.is_popup_slider_initialized=!0)})},preload_images:function(){this.thumb_btns.each(function(){e.imgPreLoad.add(e(this).data("src-l")),e.imgPreLoad.add(e(this).data("src-xl"))})},check_isOnlyOneImage:function(){this.thumb_btns.length>0?this.is_only_one_image=!1:this.is_only_one_image=!0},init_video:function(){var t=this;this.video_btns.click(function(n){n.preventDefault(),t.video_source_code!==null?t.show_popup_with_video():t.load_video(e(this).data("product_id"))})},load_video:function(t){var n=this;e.ajax({url:n.options.ajax_path+"product/video/"+t,type:"POST",dataType:"json",data:{is_ajax:!0},success:function(e){!e.length&&e.error=="ERROR"?console.log("Something went wrong with the video."):(n.video_source_code=e.video_embed,n.show_popup_with_video())}})},show_popup_with_video:function(){this.xlarge_box_video.html(this.video_source_code),this.toggle_galleryVideo("video"),this.xlarge_popup.show()},init_close_popup:function(){var e=this;this.xlarge_closeBtn.text(this.options.close_btnCaption).click(function(t){t.preventDefault(),e.xlarge_popup.fadeOut("fast"),key.setScope("all"),e.xlarge_box_video.html("")})},init_popup_gallery:function(e){this.is_only_one_image?this.prepare_one_big_image():(this.prepare_big_images(),this.create_navigation()),this.show_popup_gallery(e)},show_popup_gallery:function(t){this.toggle_galleryVideo("gallery"),this.xlarge_popup.show();var n=e(t).data("src-xl"),r=this.xlarge_gallery.find("img").filter('[src="'+n+'"]').closest(".xlarge-box");this.show_big_image(r),key.setScope("galleryActive")},show_big_image:function(e){this.xlarge_gallery.find(".xlarge-box").hide(),e.show(),this.$currently_visible_big_image=e},toggle_galleryVideo:function(e){e==="gallery"?(this.xlarge_box_video.hide(),this.xlarge_gallery.show()):e==="video"&&(this.xlarge_gallery.hide(),this.xlarge_box_video.show())},create_navigation:function(){var t=this;this.xlarge_gallery.prepend('	<div class="pager"><div class="prev"><span> </span></div><div class="next"><span> </span></div></div>').hover(function(){e(this).find(".pager").show()},function(){e(this).find(".pager").hide()}),this.$prevLink=e("div.prev span"),this.$nextLink=e("div.next span"),this.$prevLink.click(function(e){t.$currently_visible_big_image.prev().length>0?t.show_big_image(t.$currently_visible_big_image.prev()):t.show_big_image(t.xlarge_gallery.find(".xlarge-box").last())}),this.$nextLink.click(function(e){t.$currently_visible_big_image.next().length>0?t.show_big_image(t.$currently_visible_big_image.next()):t.show_big_image(t.xlarge_gallery.find(".xlarge-box").first())})},prepare_big_images:function(){var t=this,n=e("");this.thumb_btns.each(function(r,i){var s=t.xlarge_box.clone();s.find("img").attr("src",e(i).data("src-xl")),n=n.add(s)}),t.xlarge_gallery.find(".xlarge-boxes").html(n)},prepare_one_big_image:function(){var t=this.xlarge_box.clone();t.find("img").attr("src",e(this.options.large_btn).data("src-xl")),this.xlarge_gallery.find(".xlarge-boxes").html(t)},init_keyboardEvents:function(){var t=this;key("esc",function(){t.xlarge_closeBtn.trigger("click")}),key("left","galleryActive",function(){e("div.prev span").trigger("click")}),key("right","galleryActive",function(){e("div.next span").trigger("click")})}})}(jQuery),function(e){e.widget("Ondango.lightbox",{popup:null,close_btn:null,pos_allowed:new Array("center","top","bottom","above","below"),options:{position:"top",pos_margin:6,content_maxHeight:460,borders_height:88,content:"",contentAJAX:{url:"",params:{}},onLoad_callback:function(e,t){},closeBtn_label:"Close",html:'<div class="ui-lightbox">	<div class="lbox-main">		<div class="lbox-content loading"></div>		<div class="button-box">			<a class="close button right no-mar" href="#"></a>		</div>	</div></div>'},_create:function(){var t=this;e(this.element).click(function(){return t._remove_popups(),t.popup=e(t.options.html).appendTo("body").hide(),t.close_btn=e(".close.button",t.popup).text(t.options.closeBtn_label).click(function(){return t.close_popup(),!1}),t.load_content(),!1})},_remove_popups:function(){e(".ui-lightbox").remove()},load_content:function(){var t=this,n=e(".lbox-content",this.popup);this.options.contentAJAX.url!=undefined&&this.options.contentAJAX.url.length?(this.show_popup(),e.post(this.options.contentAJAX.url,this.options.contentAJAX.params,function(r){n.removeClass("loading"),n.html(r),t.set_height(),t.set_position(),t.options.onLoad_callback(e(t.element),t.popup)})):(n.removeClass("loading"),n.html(this.options.content),this.set_height(),this.show_popup(),this.options.onLoad_callback(e(this.element),this.popup))},show_popup:function(){this.set_position(),this.popup.fadeIn(0)},close_popup:function(){this.popup.fadeOut("fast",this._remove_popups)},set_position:function(t){var n=this._validate_pos(t!=undefined?t:this.options.position),r=this.popup.outerHeight(),i=e(this.element).offset();this.popup.css("position","absolute");switch(n){case"center":var s=(e(window).height()-r)/2+e(window).scrollTop();this.popup.css("top",(s<0?0:s)+"px");break;case"top":var s=this.options.pos_margin;this.popup.css("top",(s<0?0:s)+"px");break;case"bottom":var s=this.options.pos_margin;this.popup.css("bottom",(s<0?0:s)+"px");break;case"above":var s=i.top-(r+this.options.pos_margin);this.popup.css("top",(s<0?0:s)+"px");break;case"below":var s=i.top+this.element.height()+this.options.pos_margin;this.popup.css("top",(s<0?0:s)+"px")}},set_height:function(){var t=e(window).height(),n=this.popup.height()>this.options.content_maxHeight+this.options.borders_height?this.options.content_maxHeight+this.options.borders_height:this.popup.height(),r=e(".lbox-content",this.popup);n>t?r.css("max-height",t-this.options.borders_height+"px"):r.css("max-height",this.options.content_maxHeight+"px")},_validate_pos:function(e){var t=!1;for(var n=0;n<this.pos_allowed.length;n++)if(e==this.pos_allowed[n]){t=!0;break}return t?e:"center"}})}(jQuery),function(e){function n(){e.ajax({url:cfg.paths.ajax+"payment/hosted/status",dataType:"json",cache:!1,success:function(e){e.do_redirect?window.location.href=e.url:setTimeout(n,1e3)}})}function r(t){var n=e("#site"),r=e("#fb-loading-box"),t=t!=undefined?t:!1;t==1?r.find("p").show():r.find("p").hide(),n.is(":visible")?(n.hide(),r.show(),i.update({w:810,h:320,scroll_toTop:!0})):(r.hide(),n.fadeIn("fast"),i.update({w:810,h:n.outerHeight(!0),scroll_toTop:!1}));try{parent.socket!=undefined&&parent.socket.postMessage("scrollToTop")}catch(s){}}function s(t){r(),setTimeout(function(){e.ajax({url:cfg.paths.ajax+"products/deep_linking_redirect/",type:"POST",dataType:"script",data:{app_url:t}})},1500)}function o(t){e("#SaleComment").val()==cfg.i18n.enterMessage&&e("#SaleComment").val("");if(t.PaymentMethod.use_gateway==1){var n=e("head").hasClass("is_SooF");e.ajax({url:cfg.paths.ajax+"payment/get-gateway/"+t.Shop.slug,type:"POST",dataType:"json",cache:!1,data:{is_ajax:!0,is_shopInIframe:n,host_url:n?parent.easyXDM.query.host_url:null,gateway:t.PaymentMethod.gateway_name,"Customer-id":t.Customer.id,"Sale-comment":e("#SaleComment").val(),"Sale-order_published":e("#SaleOrderPublished").val()},success:function(n,i){if(n.error)r(),e("<a></a>").appendTo("body").lightbox({closeBtn_label:cfg.i18n.Close,content:'<div class="content"><p>'+n.error_msg+"</p></div>"}).click().remove(),e("a.place-order").removeClass("disabled"),e("a.place-order").removeAttr("disabled");else if(n.do_redirect){var s=n.gateway_url[0].replace(/\\/gi,"");parent.location.href=s}else{var s=n.gateway_url[0].replace(/\\/gi,"");location.href=cfg.paths.ajax+"payment/hosted/"+t.Shop.slug+"/?optile_url="+escape(s)}}})}else e("a.place-order").closest("form").submit();return r(!0),!1}projectInit={immediate:function(){},domReadyOnce:function(){e(".hidden").hide().removeClass("hidden"),e("#site").hide(),i.init(),r(),u.check_hash(),e(".categories").each(function(){e(this).css({visibility:"hidden",display:"block"});var t=e(this).prev(".select-category"),n=t.find("em"),r=t.width()-n.outerWidth();e(this).css({display:"none",left:r+"px",visibility:"visible"})})},everyDomReady:function(f){function g(){var t=e(".fb_send_button_form_widget");if(t.length&&t.is(":visible")){var n=e("#site").outerHeight(!0),r=t.outerHeight(!0),s=t.offset(),o=s.top+r;o>n&&(e(".social-plugins").die("hover"),e("#main_container, #site").height(o),i.update({w:810,h:s.top+r,scroll_toTop:!1}))}}function y(){g(),setTimeout(g,5e3)}e(".js-loading").click(function(){return r(),!0});if(e.browser.webkit!=undefined){var l=e("#ProductVariationId");if(l.length){var c=l.children();for(var h=0;h<c.length;h++)if(e(c[h]).attr("disabled")!="disabled"){l.val(e(c[h]).val());break}}}e(".fan-discount-banner .call-to-action").FB_likeCallback("set_fanStatus","unset_fanStatus"),e("input.custom[type=checkbox]").checkbox(),e(".alert-box, .info-box").delay(12e3).slideUp("fast"),e(".select-category").click(function(t){function s(){n.toggleClass("clicked")}var n=e(this),r=n.next(".categories"),i=e(".selected",r);e(document).one("click",function(){r.toggle(0,s)}),r.toggle(0,s),t.stopPropagation()}),e(".search-ipt").focusBlur(),e(".search-btn").click(function(){var t=e(this),n=t.next("form"),r=t.closest(".search");n.toggle(0,function(){r.toggleClass("clicked")})}),e(".legal-btn").each(function(){var t=e(this).attr("href").substr(1);e(this).lightbox({position:"above",closeBtn_label:cfg.i18n.Close,onLoad_callback:u.init_inPopupLinks,contentAJAX:{url:cfg.paths.ajax+"shop/get-info/"+t,params:{is_ajax:!0}}})}),e(".shipping-btn").each(function(){var t=e(this).attr("data-pos")!=undefined?e(this).attr("data-pos"):"top";e(this).lightbox({position:t,pos_margin:45,closeBtn_label:cfg.i18n.Close,contentAJAX:{url:cfg.paths.ajax+"shop/get-shipping-cost",params:{is_ajax:!0}}})}),e(".shipping-btn-footer").lightbox({position:"above",closeBtn_label:cfg.i18n.Close,contentAJAX:{url:cfg.paths.ajax+"shop/get-shipping-cost",params:{is_ajax:!0}}}),e(".countdown").countdown(),a(f),e(".highlight .mask-box .cover").positionate_cover(),e(".products").set_uniformHeight(),e(".ui-gallery").gallery({ajax_path:cfg.paths.ajax,close_btnCaption:cfg.i18n.Close}),e(".cart[type=submit]").click(function(){return e(this).hasClass("disabled")||(r(),e(this).closest("form").submit()),!1});var p=function(t){e.ajax({type:"POST",url:cfg.paths.ajax+"should_i_get_it/publish/",dataType:"json",data:{is_ajax:!0,widget_id:t},success:function(e){e.success===!0},error:function(e){console.log("Ajax error")}})},d=function(e){FB.ui({method:"feed",link:e.widget_page_url,display:"iframe",actions:{name:"Visit shop",link:e.link_to_shop}},function(t){t&&t.post_id&&p(e.widget_id)})};e("#should-i-get-it-button").click(function(t){t.preventDefault();var n=e(this);e.ajax({type:"POST",url:cfg.paths.ajax+"should_i_get_it/create/",dataType:"json",data:{is_ajax:!0,customer_id:n.data("customer"),product_id:n.data("product"),shop_id:n.data("shop"),fanpage_id:n.data("fanpage")},success:function(e){e.success===!0?d(e):console.log("Widget not created")},error:function(e){console.log("Ajax error")}})});var v=function(){var t=e("#sigi-widget-container");t.length>0&&e.ajax({type:"POST",url:cfg.paths.ajax+"should_i_get_it/"+t.data("wid"),dataType:"html",data:{is_ajax:!0},success:function(e){t.html(e).removeClass("loading-content")},error:function(e){console.log("Ajax error")}})};v();var m=function(){var t=e("#should-i-get-it-tooltip-content");setTimeout(function(){t.css({opacity:0}).show().animate({bottom:29,opacity:1},"fast")},6e3),setTimeout(function(){t.fadeOut("fast")},11e3)};m(),e(".social-plugins").hover(y,y);if(e(".share-link").length){var b=e(".share-link"),w=e(".sl-btn",b),E='<div class="sl-wrapper">	<div class="sl-neck"><!-- --></div>	<div class="sl-box">		<input class="sl-input" type="text" readonly="readonly" value="" />	</div></div>';e(E).appendTo(b),e(".sl-input",b).val(w.attr("href")),w.click(function(){return e(this).toggleClass("clicked"),e(".sl-wrapper").toggle().find(".sl-input").select(),!1})}e(".deep-linking").length&&s(e(".deep-linking").attr("data-app-url")),e(".description .short").length&&e('<a class="see-more" href="#">'+cfg.i18n.See_more+"<em></em></a>").insertAfter(".description .long").click(function(){return e(this).hide(),e(".description .short, .description .long").toggle(),i.update(),!1}),e(".shipping-price").each(function(){var t=e(this),n=e(".price",t),r=e(".additional-price",t),i=e(".additional-price-label",t),s=e(".brazil-info",t);e(".country",t).change(function(){if(e(this).val()=="BR|BR")s.show(),n.html(""),r.hide(),i.hide();else{var t=e(this).val().split("|");n.html(t[0]),r.html(t.length==1?t[0]:t[1]),r.is(":visible")||(s.hide(),r.show(),i.show())}})}),e(".remove-btn").click(function(){return e(this).closest("form").submit(),!1}),e(".one-less, .one-more").click(function(){if(e(this).hasClass("disabled"))return!1;var t=1,n=e(this).closest("form"),i=e("#ProductQuantity_"+n.attr("data-unique-id")),s=parseInt(i.val());return e(this).hasClass("one-less")&&(t=-1),r(),i.val(s+t),n.submit(),!1}),e("#coupon-box").submit(function(){return e("#coupon-message").text(""),e.post(cfg.paths.ajax+"cart/redeem-coupon",{is_ajax:!0,"Shop-coupon_discount_code":e("#ShopCouponDiscountCode").val()},function(t){t.is_error==0?(e("#coupon-message").text(""),window.location.href=window.location.href):e("#coupon-message").text(t.error_msg)},"json"),!1}),e(".brazil-shipping-estimation .estimate-shipping-btn").click(function(){var t=e("#shipping_estimation span");return e.getJSON(cfg.paths.ajax+"shipping/estimate-price",{is_ajax:1,zipcode:e("#CustomerZipcode").val(),shipping_type:e("#CustomerShippingService").val(),product_id:e(this).attr("product-data"),slug_shop:e(this).attr("shop-data")},function(n){n.error==1?t.html(cfg.i18n.Error+", "+n.message):t.html("R$ "+n.value),e("#shipping_estimation").fadeIn("fast")}),!1});var S=function(){var t=e("#recommendations-box");t.length>0&&e.ajax({type:"POST",url:cfg.paths.ajax+"products/recommendations/"+t.data("shop-slug"),data:{is_ajax:!0},success:function(n){t.html(n).removeClass("loading-content").fadeIn("fast",function(){i.update({w:810,h:e("#site").outerHeight(!0),scroll_toTop:!1})})},error:function(e){t.removeClass("loading-content").hide()}})};S();var x=function(){var t=e("#external-recommendations-box");t.length>0&&e.ajax({type:"POST",url:cfg.paths.ajax+"products/external_recommendations/"+t.data("shop-slug"),data:{is_ajax:!0},success:function(n){t.html(n).removeClass("loading-content").fadeIn("fast",function(){i.update({w:810,h:e("#site").outerHeight(!0),scroll_toTop:!1})})},error:function(e){t.removeClass("loading-content").hide()}})};x(),e(".payment-method .error-message").hide(),e("select.payment-select").change(function(){var t=cfg.Payment.payOnDelivery_id,n=e(this).closest(".payment-select-box").find("p.payment-extra-info");e(this).val()==cfg.Payment.payOnDelivery_id?n.show():n.hide(),e(this).val()==cfg.Payment.payOnPickup_id||e(".payment-method").attr("data-onlyVirtualGoods")=="1"?(e("h2#shipping-address").text(cfg.i18n.Contact_details),e("#CustomerAddress").prev().html(cfg.i18n.Address+":<span>*</span>"),e("#CustomerZipcode").prev().html(cfg.i18n.Zip_code+":<span>*</span>"),e("#CustomerCity").prev().html(cfg.i18n.City+":<span>*</span>")):(e("h2.shipping-address").text(cfg.i18n.Shipping_address),e("#CustomerAddress").prev().html(cfg.i18n.Address+":"),e("#CustomerZipcode").prev().html(cfg.i18n.Zip_code+":"),e("#CustomerCity").prev().html(cfg.i18n.City+":")),e(".error-message").parent().removeClass("error")}),e("#CustomerCountryId").change(function(){e("#ShopCountryCode").val()=="BR"&&(e(this).val()==cfg.Shop.brazil_id+""?e("#CustomerShippingService").closest(".input.select").show():e("#CustomerShippingService").closest(".input.select").hide())}),e(".payment-method .button[type=submit]").click(function(){var t=e(this);return e("#CustomerCountryId").val()==cfg.Shop.brazil_id&&e("#ShopCountryCode").val()=="BR"?e.getJSON(cfg.paths.ajax+"shipping/estimate-price",{is_ajax:1,zipcode:e("#CustomerZipcode").val(),slug_shop:e("#ShopSlug").val(),shipping_type:e("#CustomerShippingService").val()},function(n){if(n.error==1){var i=e("#CustomerZipcode").closest("div.input"),s=i.children(".error-message");s.length?s.html(n.message).show():e('<div class="error-message">'+n.message+"</div>").appendTo(i).show(),i.addClass("error"),r()}else t.closest("form").submit()}):t.closest("form").submit(),!1}),e(".payment-iframe").length&&n(),e("#SaleComment").focusBlur(),e("#CustomerNewsletter").change(function(){e(this).is(":checked")?e("#CustomerEmailNewsletter").fadeIn(0):e("#CustomerEmailNewsletter").fadeOut("fast")}),e("#CustomerTermsOfUse").change(function(){e(this).is(":checked")&&e("#acceptToS").is(":visible")&&e("#acceptToS").fadeOut("fast")}),e("a.place-order").click(function(t){return t.preventDefault(),e(this).hasClass("disabled")?!1:e("#CustomerTermsOfUse").is(":checked")?(e("#acceptToS").fadeOut("fast"),typeof FB==undefined||js_data.is_localhost?(o(js_data),!1):(e(this).addClass("disabled"),e(this).attr("disabled","disabled"),FB.getLoginStatus(function(t){t.status==="connected"?FB.ui({method:"feed",caption:js_data.Shop.name,name:js_data.FB_dialog.name,link:js_data.FB_dialog.deepLinking_url+"/?ref="+js_data.Shop.id+"-share-pur",description:"...",properties:js_data.FB_dialog.properties,actions:js_data.FB_dialog.actions,display:"iframe"},function(t){e("#SaleOrderPublished").val(t==0?"0":"1"),o(js_data)}):o(js_data)},!0),!1)):(e("#acceptToS").show(),!1)}),e("select.custom").combobox(),e("select.custom-right").combobox({cb_class:"right"}),t.init()}};var t={init:function(){this._is_secondLevelAvailable=this._check_secondLevel(),this._init_firstLevel(),this._is_secondLevelAvailable&&this._init_secondLevel()},_init_firstLevel:function(){var t=this;e("select.product-variation-select").combobox({hide_label:!0,changed_callback:function(n){if(t._is_secondLevelAvailable){var r=e(n).val();e(".product-variation-2").hide(),e("#"+r).show(),e("#"+r).find(".product-variation-2-select").combobox("enable")}else t._set_productVariationId(e(n).val())}})},_init_secondLevel:function(){var t=this;e("select.product-variation-2-select").combobox({hide_label:!0,is_disabled:!0,changed_callback:function(n){t._set_productVariationId(e(n).val())}}),e(".product-variation-2").hide().eq(0).show()},_check_secondLevel:function(){return e(".product-variation-2").length>0?!0:!1},_set_productVariationId:function(t){e("#ProductVariationId").val(t)}},i={h_offset:20,max_loops:100,init:function(){var t=this,n=setInterval(function(){typeof FB!="undefined"&&(clearInterval(n),t.update({w:810,h:e("#site").outerHeight(!0),scroll_toTop:!0}),t.auto_grow())},5)},update:function(e){typeof FB!="undefined"&&(e.scroll_toTop==1&&FB.Canvas.scrollTo(0,0),FB.Canvas.setSize({width:e.w,height:e.h+this.h_offset}),setTimeout(function(){FB.Canvas.setSize()},1500));try{parent.socket!=undefined&&parent.socket.postMessage("resizeIframe|"+(e.h+this.h_offset))}catch(t){}},auto_grow:function(){var t=this,n=e("#site").outerHeight(!0),r=0,i=setInterval(function(){typeof FB!="undefined"&&(e("#site").outerHeight(true)!=n&&(n=e("#site").outerHeight(!0),t.update({w:810,h:n,scroll_toTop:!1})),++r>t.max_loops&&clearInterval(i))},200)}};e.fn.set_uniformHeight=function(){var t=e(this).parent().parent().hasClass("recommendations")?25:38,n=parseInt(e(this).attr("data-prods-per-row")),r=e(this).find(".product"),i=[];for(var s=0;s<=r.length;s++){if(s%n==0&&s>0||s==r.length){var o=!0,u=!0,a=!0;for(var f=0;f<i.length;f++)if(i[f].len>t){o=!1;break}for(var f=0;f<i.length;f++)if(i[f].len>t*2){u=!1;break}for(var f=0;f<i.length;f++)if(i[f].len>t*3){a=!1;break}if(o)for(var f=0;f<i.length;f++){var l=e(r[i[f].id]).find("h2");l.height(parseInt(l.height()/3)+2)}else if(u)for(var f=0;f<i.length;f++){var l=e(r[i[f].id]).find("h2");l.height(parseInt(l.height()/3)*2+2)}else if(a)for(var f=0;f<i.length;f++){var l=e(r[i[f].id]).find("h2");l.height(parseInt(l.height()/3)*3+2)}i=[]}i.push({id:s,len:e(r[s]).find("h2").text().length})}},e.fn.positionate_cover=function(){var t=850,n=315,r=parseInt(e(this).attr("data-offset-y")),i=e(this).width(),s=e(this).height(),o=t*s/i-n;e(this).css({top:parseInt(o*r/100*-1)+"px"})};var u={check_hash:function(){if(window.location.hash.length>1){var t=this,n=window.location.hash.substr(1);switch(n){case"tos":case"privacy_policy":case"return_policy":case"imprint":e("<a></a>").appendTo("body").lightbox({closeBtn_label:cfg.i18n.Close,onLoad_callback:t.init_inPopupLinks,contentAJAX:{url:cfg.paths.ajax+"shop/get-info/"+n,params:{is_ajax:!0}}}).click().remove();break;case"shipping-details":e("<a></a>").appendTo("body").lightbox({closeBtn_label:cfg.i18n.Close,onLoad_callback:t.init_inPopupLinks,contentAJAX:{url:cfg.paths.ajax+"shop/get-shipping-cost",params:{is_ajax:!0}}}).click().remove();break;case"payment-error":e("<a></a>").appendTo("body").lightbox({closeBtn_label:cfg.i18n.Cloase,content:"<h1>"+cfg.i18n.Error+'</h1><div class="content"><p>'+cfg.i18n.paymentFailure+"</p></div>"}).click().remove();break;case"terms-of-service":e("<a></a>").appendTo("body").lightbox({closeBtn_label:cfg.i18n.Cloase,content:'<div class="content"><p>'+cfg.i18n.acceptToS+"</p></div>"}).click().remove()}}},init_inPopupLinks:function(t,n){e('.lbox-content a[href^="#"]',n).click(function(){return window.location.hash=e(this).attr("href"),u.check_hash(),!1})}},a=function(t){var n={linkFn:function(t){t=="show"?this.animate({opacity:1},{duration:500}):this.animate({opacity:.3},{duration:500})},init:function(t,n){e(n.instance.prevLink,n.instance.nextLink).removeClass("show"),n.instance.nextLink.is(".show")||n.instance.nextLink.css({opacity:.3}),n.instance.prevLink.is(".show")||n.instance.prevLink.css({opacity:.3})}};e("div.teaser-wrapper",t).each(function(){e(".highlight",e(this)).length>1&&e(this).prepend('	<div class="pager"><div class="prev"><span> </span></div><div class="next"><span> </span></div></div>').scroller({prevLink:"div.prev span",nextLink:"div.next span",atoms:".highlight",diashow:7e3,init:n.init,linkFn:n.linkFn}).hover(function(){e(this).find(".pager").css("display","block")},function(){e(this).find(".pager").css("display","none")}),e(".highlight .box",e(this)).each(function(){var t=e(".box-arrow",this);t.css({top:parseInt(e(this).height()/2-t.height()/2)+"px"})})})};projectInit.immediate(),e(projectInit.domReadyOnce),e(function(){projectInit.everyDomReady(document)}),e(document).bind("dommodified",function(e){projectInit.everyDomReady(e.target)})}(jQuery);