$(document).ready(function () {
	var emailInput;
	$("input.email").on("change", function() {
		  emailInput = $(this).val();

		  if (validateEmail(emailInput)) {
		    $(this).css({
		      color: "white"
		    });
		  } else {
		    $(this).css({
		      color: "red"
		    });

		  }
		});
	function validateEmail(email) {
		  var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

		  return $.trim(email).match(pattern) ? true : false;
		}

	$(".back_signin").on( "click", function(){
		$('.f_pass_block').hide();
		$('.login_block').show();
	});
	$(".reset_link").on( "click", function(){
		if (validateEmail(emailInput) && $('.f_pass_block .form_control').val()  != '') {
		        $('.f_pass_block').hide();
				$('.pass_set_block').show();

	        }else{
	  			$('.f_pass_block .form_control').css("border-color", "red");
		        return false;
			}
		
	});
	$( '.pay_plan' ).on( "click", function(){
		var plan = $(this).attr('rel');
		if(plan == 'year_plan'){
			$('.plan_txt').text('1-year Plan');
		}else{
			$('.plan_txt').text('Lifetime Plan');
		}
		
	  $( '.account_tab a' ).trigger( "click" );
	  $( '.plan_rel' ).addClass( "active" );
	});

	$( '.pay_next' ).on( "click", function(){
		$('.accunt_form.create_form .form_control').each(function () {
	        if (validateEmail(emailInput) && $('.accunt_form.create_form .form_control.password').val()  != '') {
		        $( '.payment_tab a' ).trigger( "click" );
	  			$( '.account_rel' ).addClass( "active" );

	        }else{
	  			$('.accunt_form.create_form .form_control').css("border-color", "red");
		        return false;
			}

	    });
	});

	$( '.pay_back' ).on( "click", function(){
	  $( '.plan_tab a' ).trigger( "click" );
	  $('.plan_txt').text('Plan');
	  $( '.account_rel' ).removeClass( "active" );
	});
	$( '.account_back' ).on( "click", function(){
	  $( '.account_tab a' ).trigger( "click" );

	});
	$(".btn.method_back").on( "click", function(){
		$('.payment_method').show();
		$('.credit_method').hide();
		$('.crepto_method').hide();
	});
	$(".btn.method_next").click(function (){
		type = $("input[name=radio1]:checked").val();
		if(type == 'cre_card'){
			$('.credit_method').show();
		}else{
			$('.crepto_method').show();
		}
		$('.payment_method').hide();

		var plan_name = $(".plan_txt").text();
		if(plan_name == 'Lifetime Plan'){
			$(".order_dec").html("Lifetime subscription: <span>249 USD</span>")
			$(".pay_ammount").html("249")
			$(".renew_info").hide();
			
		}else{
			$(".order_dec").html("1-year subscription: <span>129 USD</span>")
		}	
	});
$(function(){

		  $('.hide-show').addClass('show')
		  
		  $('.hide-show').click(function(){
		    if( $(this).hasClass('show') ) {
		      $(this).text('Hide');
		      $('.password').attr('type','text');
		      $(this).removeClass('show');
		    } else {
		       $(this).text('Show');
		       $('.password').attr('type','password');
		       $(this).addClass('show');
		    }
		  });

		});
$(".login_block .submit").on("click", function() {
			if (validateEmail(emailInput) && $('.login_block .form_control').val()  != '') {
		       
	        }else{
	  			$('.login_block .form_control').css("border-color", "red");
		        return false;
			}
		    
		});
		

});