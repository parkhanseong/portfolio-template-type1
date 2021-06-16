// 컨트롤러 생성
$(function(){
    // controller 생성
    var controller = new ScrollMagic.Controller();
    var logoImg = TweenMax.to('.logo-image', 1, {
        x: 10,
    }); 
    var leftTitleTween = TweenMax.to('.leftTitle', 1, {
        x: -300,
    }); 
    var rightTitleTween = TweenMax.to('.rightTitle', 1, {
        // x: 100,
        // autoAlpha: 0,
        rotation: 450,
        x: 70,
        y: 100
    }); 
    var center = TweenMax.to('.center', 1, {
        autoAlpha: 0,
        scale: 0
    }); 
    var greeting = TweenMax.to('.greeting', 1, {
        autoAlpha: 1,
        scale: 1.5,
        // y: -200
    }); 
    var greeting2 = TweenMax.to('.greeting', 1, {
        autoAlpha: 0,
        scale: 1.5,
        // y: -200
    }); 

    var logoImg = new ScrollMagic.Scene({
        triggerElement: 'header', /* 시작 위치 */
        triggerHook: 0, /* 0 ~ 1:  */
        offset: 0, /* start 위치 지정 */
        duration: "300%" /* 화면의 100% 높이 만큼 실행 */
    }).setTween(logoImg)
    .addTo(controller)
    // .addIndicators({
    //     name: '왼쪽 텍스트'
    // })

    var leftTitle = new ScrollMagic.Scene({
        triggerElement: 'header', /* 시작 위치 */
        triggerHook: 0, /* 0 ~ 1:  */
        offset: 0, /* start 위치 지정 */
        duration: "300%" /* 화면의 100% 높이 만큼 실행 */
    }).setTween(leftTitleTween)
    .addTo(controller)
    // .addIndicators({
    //     name: '왼쪽 텍스트'
    // })
    var rightTitle = new ScrollMagic.Scene({
        triggerElement: 'header',
        triggerHook: 0, 
        offset: 0,
        duration: "100%" 
    }).setTween(rightTitleTween)
    .addTo(controller)
    // .addIndicators({
    //     name: '오른쪽 텍스트'
    // })
    var center = new ScrollMagic.Scene({
        triggerElement: 'header', 
        triggerHook: 0, 
        offset: 0, 
        duration: "100%" 
    }).setTween(center)
    .addTo(controller)
    // .addIndicators({
    //     name: '비행기'
    // })
    var greeting = new ScrollMagic.Scene({
        triggerElement: 'header', 
        triggerHook: 0, 
        offset: 0, 
        duration: "100%" 
    })
    .setTween(greeting)
    .addTo(controller)
    // .addIndicators({
    //     name: '인사'
    // })
    var greeting = new ScrollMagic.Scene({
        triggerElement: 'header', 
        triggerHook: 0, 
        offset: 1000, 
        duration: "100%" 
    })
    .setTween(greeting2)
    .addTo(controller)
    // .addIndicators({
    //     name: '인사 end'
    // })


})    
