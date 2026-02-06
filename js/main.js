console.log("JavaScriptの動作確認");

const hamburger = document.getElementById("hamburger")
console.log(hamburger);

const mobileNav = document.getElementById("mobile-nav")
console.log(mobileNav);

hamburger.addEventListener('click',function(){
    console.log("ハンバーガーメニューが押されました！")
    hamburger.classList.toggle('active')
    mobileNav.classList.toggle('active')
})

// 表示されたメニューがoffになる
document.querySelectorAll('.nav__item').forEach(item => {
    item.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// gsap アニメーション
// ヒーローエリア

//  window.addEventListener("load", () => {
//      gsap.to(".hero-container", {
//          opacity: 1,
//          duration: 0.5,
//          ease: "power2.out"
//      });
//  });

//  // タイトル（少し遅れて表示）
// gsap.to(".hero__title", {
//     opacity: 1,
//     y: 0,
//     duration: 1,
//     ease: "power2.out",
//     delay: 1
// });

// window.addEventListener("load", () => {
//     gsap.fromTo(
//         ".hero-container",
//         {
//             opacity: 0,
//             scale: 1.02
//         },
//         {
//             opacity: 1,
//             scale: 1,
//             duration: 0.5,
//             ease: "power2.out"
//         }
//     );
// });

// GSAP Timeline
const heroTl = gsap.timeline({
    defaults: {
        ease: "power2.out"
    }
});

// 背景をフェードイン
heroTl.to(".hero-container", {
    opacity: 1,
    duration: 1.5
});

// タイトルを少し遅れて、下からふわっと表示
heroTl.to(".hero__title", {
    opacity: 1,
    y: 0,
    duration: 1
}, "-=0.5");


// 商品ラインナップ
gsap.from(".product-link",{scrollTrigger:{
    trigger: ".product",
    start: "top 40%",
    markers: false},
    opacity: 0, 
    y:40, 
    duration: 0.8,
    stagger:0.2,
    ease: "power2.out"
})