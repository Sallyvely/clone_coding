$(".faq-question").click(function(){
    $(this.next)(".faq-answer").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    $(this).next(".faq-answer").siblings(".faq-answer").slideUp(300);
})