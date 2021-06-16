$(function(){
    var controller = new ScrollMagic.Controller();

    // scrollMagic TweenMax 객체 안에 to 메서드
    // 엘리먼트, 시간, 애니메이션 변화
    // 변수명은 자유

    /* 엘리먼트의 마지막 상태 지정 */
    var box = TweenMax.to('.box', 3, {
        x: 300, 
        y: 100,
        rotate: 360,
        background: "red",
        autoAlpha: 1,
        borderRadius: "50%"
    })

    // 변수명은 자유
    var scene = new ScrollMagic.Scene({
        /* 
            트리거를 발생시킬 엘리먼트(범위)
        */
        triggerElement: ".first",
        /* 
            trigger 위치 0 ~ 1
            window의 y축 0에서 시작
         */
        triggerHook: 0,    
        /* 
            triiger 시작 event 위치 지정
         */
        offset: 0,      
        duration: "100%"     
        /* trigger 마지막 event 위치 */
    })
    .setTween(box)
    .addTo(controller)
    .addIndicators({
        name: "box"
    })

    var background = TweenMax.to('.font', 1, {
        x: -800, 
        // autoAlpha: 0,
        color: "gold"
    })
    
    var scene2 = new ScrollMagic.Scene({
        triggerElement: ".second",
        triggerHook: 0,    
        offset: 0,      
        duration: "100%"     
    })
    .setTween(background)
    .addTo(controller)
    .addIndicators({
        name: "배경"
    })
    
})
