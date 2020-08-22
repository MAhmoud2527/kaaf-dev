// === Dropdown === //

$('.ui.dropdown')
  .dropdown()
;

// === Model === //
$('.ui.modal')
  .modal({
    blurring: true
  })
  .modal('show')
;

// === Tab === //
$('.menu .item')
  .tab()
;

// === checkbox Toggle === //
$('.ui.checkbox')
  .checkbox()
;

// === Toggle === //
$('.enable.button')
  .on('click', function() {
    $(this)
      .nextAll('.checkbox')
        .checkbox('enable')
    ;
  })
;


// Home Live Stream
$('.live_stream').owlCarousel({
	items:10,
	loop:false,
	margin:10,
	nav:true,
	dots:false,
	navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
	responsive:{
		0:{
			items:2
		},
		600:{
			items:3
		},
		1000:{
			items:3
		},
		1200:{
			items:5
		},
		1400:{
			items:6
		}
	}
})

// Featured Courses home
$('.featured_courses').owlCarousel({
	items:10,
	loop:false,
	margin:20,
	nav:true,
	dots:false,
	navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:1
		},
		1200:{
			items:2
		},
		1400:{
			items:3
		}
	}
})

// Featured Courses home
$('.top_instrutors').owlCarousel({
	items:10,
	loop:false,
	margin:20,
	nav:true,
	dots:false,
	navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:1
		},
		1200:{
			items:2
		},
		1400:{
			items:3
		}
	}
})

// Student Says
$('.Student_says').owlCarousel({
	items:10,
	loop:false,
	margin:30,
	nav:true,
	dots:false,
	navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:2
		},
		1200:{
			items:3
		},
		1400:{
			items:3
		}
	}
})

// features Careers
$('.feature_careers').owlCarousel({
	items:4,
	loop:false,
	margin:20,
	nav:true,
	dots:false,
	navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		},
		1200:{
			items:1
		},
		1400:{
			items:1
		}
	}
})

/*Floating Code for Iframe Start*/
if (jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"],iframe[src*="https://player.vimeo.com/"]').length > 0) {
	/*Wrap (all code inside div) all vedio code inside div*/
	jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').wrap("<div class='iframe-parent-class'></div>");
	/*main code of each (particular) vedio*/
	jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').each(function(index) {

		/*Floating js Start*/
		var windows = jQuery(window);
		var iframeWrap = jQuery(this).parent();
		var iframe = jQuery(this);
		var iframeHeight = iframe.outerHeight();
		var iframeElement = iframe.get(0);
		windows.on('scroll', function() {
			var windowScrollTop = windows.scrollTop();
			var iframeBottom = iframeHeight + iframeWrap.offset().top;
			//alert(iframeBottom);

			if ((windowScrollTop > iframeBottom)) {
				iframeWrap.height(iframeHeight);
				iframe.addClass('stuck');
				jQuery(".scrolldown").css({"display": "none"});
			} else {
				iframeWrap.height('auto');
				iframe.removeClass('stuck');
			}
		});
		/*Floating js End*/
	});
}

/*Floating Code for Iframe End*/
$(".toggle-quiz").hide();
$("#toggle-lesson").click(function(){
    $(".toggle-quiz").hide().attr("formnovalidate");
    $(".toggle-lesson").show();
});

$("#toggle-quiz").click(function(){
    $(".toggle-lesson").hide().attr("formnovalidate");
    $(".toggle-quiz").show();
});

//  small Quiz
$(".add-quiz").hide();
$("#add_file").click(function(){
    $(".add-quiz").hide();
    $(".add-file").show();
});

$("#add_small_quiz").click(function(){
    $(".add-file").hide().attr("formnovalidate");
    $(".add-quiz").show();
});
// expand/collapse all Start

var headers = $('#accordion .accordion-header');
var contentAreas = $('#accordion .ui-accordion-content ').hide()
.first().show().end();
var expandLink = $('.accordion-expand-all');

// add the accordion functionality
headers.click(function() {
    // close all panels
    contentAreas.slideUp();
    // open the appropriate panel
    $(this).next().slideDown();
    // reset Expand all button
    expandLink.text('Expand all')
        .data('isAllOpen', false);
    // stop page scroll
    return false;
});

// hook up the expand/collapse all
expandLink.click(function(){
    var isAllOpen = !$(this).data('isAllOpen');
    console.log({isAllOpen: isAllOpen, contentAreas: contentAreas})
    contentAreas[isAllOpen? 'slideDown': 'slideUp']();
    
    expandLink.text(isAllOpen? 'غلق الكل': 'فتح الكل')
                .data('isAllOpen', isAllOpen);    
});

$("#watch-me").click(function()
  {
    $("#show-me:hidden").show('slow');
   $("#show-me-two").hide();
   $("#show-me-three").hide();
   });
   $("#watch-me").click(function()
  {
    if($('watch-me').prop('checked')===false)
   {
    $('#show-me').hide();
   }
  });
  
  
  
  
  
  
  $("#see-me").click(function()
  {
    $("#show-me-two:hidden").show('slow');
   $("#show-me").hide();
   $("#show-me-three").hide();
   });
   $("#see-me").click(function()
  {
    if($('see-me-two').prop('checked')===false)
   {
    $('#show-me-two').hide();
   }
  });
  
  
// Radio Button 
  
  
  $("#look-me").click(function()
  {
    $("#show-me-three:hidden").show('slow');
   $("#show-me").hide();
   $("#show-me-two").hide();
   });
   $("#look-me").click(function()
  {
    if($('see-me-three').prop('checked')===false)
   {
    $('#show-me-three').hide();
   }
  });


		// tree
		var list = [{
			"id": '1',
			"pid": '',
			"name": "فيزياء الكم",
		},
		{
			"id": '11',
			"pid": '1', // parent ID
			"name": "الدرس الاول شرح مقدمة الكم"
		},
		{
			"id": '12',
			"pid": '1',
			"name": "الدرس الثانى شرح الفصل الاول"
		},{
			"id": '13',
			"pid": '1',
			"name": "الدرس الثالث شرح الفصل الثانى"
		},{
			"id": '14',
			"pid": '1',
			"name": "الدرس الرابع شرح الفصل الثالث"
		},
		{
			"id": '2',
			"pid": '5',
			"name": "رياضيات الصف الثالث الثانوى"
		},
		{
			"id": '22',
			"pid": '2',
			"name": "حل معادلات الاحصاء"
		},
		{
			"id": '23',
			"pid": '2',
			"name": "شرح نسبة وتناسب مراجعه نهائية"
		},
		{
			"id": '',
			"pid": '23',
			"name": "شرح نسبة وتناسب مراجعه نهائية"
		},{
			"id": '9',
			"pid": '23',
			"name": "شرح نسبة وتناسب مراجعه نهائية"
		},{
			"id": '',
			"pid": '9',
			"name": "شرح نسبة وتناسب مراجعه نهائية"
		},{
			"id": '',
			"pid": '9',
			"name": "شرح نسبة وتناسب مراجعه نهائية"
		},{
			"id": '',
			"pid": '9',
			"name": "شرح نسبة وتناسب مراجعه نهائية"
		}
	];
				var tree = simTree({
					el: '#tree',
					data: list,
					check: true,
					linkParent: true,
					
				});

					

		//  Drag & Drop
		$(function() {
            $('.thumbnail-sortable').sortable({
                placeholderClass: 'col-sm-6 col-md-4'
            });
            $('.table-sortable tbody').sortable({
				placeholderClass: 'row-item'
			});
			
            $('.list-group-sortable').sortable({
                placeholderClass: 'list-group-item'
            });
            $('.list-group-sortable-exclude').sortable({
                placeholderClass: 'list-group-item',
                items: ':not(.disabled)'
            });
            $('.list-group-sortable-handles').sortable({
                placeholderClass: 'list-group-item',
                handle: 'span'
            });
            $('.list-group-sortable-connected').sortable({
                placeholderClass: 'list-group-item',
                connectWith: '.connected'
            });
		});

// Payment Method Accordion
$('input[name="paymentmethod"]').on('click', function () {
	var $value = $(this).attr('value');
	$('.return-departure-dts').slideUp();
	$('[data-method="' + $value + '"]').slideDown();
});

// Add new div
$("#button").click(function () {
    var clone = $("#show-me").find(".custom-file").last().clone();
     clone.attr("id","newId");
     $("#button").before(clone);
    });

