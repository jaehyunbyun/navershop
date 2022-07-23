$(function(){
    
    $('.btn-all').click(function(){
        $('.gnb-list').toggleClass('hide')
        $('.tab-title, .tab-list, .ic-all').toggleClass('show')
    });

    gnbfix = $('.gnb-area').offset().top

    $(window).scroll(function(){
        if($(this).scrollTop() >= gnbfix){
            $('.header').addClass('fixed')
        } else{
            $('.header').removeClass('fixed')
        }
    })
    //sc-visual 슬라이드
    //centeredSlides: true, // true 인 경우 활성 슬라이드는 항상 왼쪽이 아닌 가운데에 배치됩니다.

    // var swiper = new Swiper(".visual", {
    //     loop: true,
    //     slidesPerView: 'auto',
    //     spaceBetween: 15,
    //     centeredSlides: true, // true 인 경우 활성 슬라이드는 항상 왼쪽이 아닌 가운데에 배치됩니다.
    //     pagination: {
    //         el: ".swiper-pagination",
    //     },
    //     autoplay: {
    //          delay: 3000, // 시간 설정
    //          disableOnInteraction: false, // false-스와이프 후 자동 재생       
    //          },

    // });

    //sc-banner
    // var swiper = new Swiper(".banner", {
    //     loop: true,
    //     slidesPerView: 'auto',
    //     // spaceBetween: 15,
    //     pagination: {
    //         el: ".swiper-pagination",
    //     },

    // });
    
    


    //sc-trend
    // var swiper = new Swiper(".trend", {
    //     loop: true,
    //     pagination: {
    //         el: ".pagination",
    //         type: "fraction",
    //     },
    //     navigation: {
    //         nextEl: ".btn-next",
    //         prevEl: ".btn-prev",
    //     },

    // });
    
    
        





    //footer 부분

    $('.btn-info').click(function(){
        $('.btn-ingo, .address-area01').toggleClass('active');
    });





























    //서브페이지 login.html

    // if( !$(this).hasClass('active') ) {
    //     }
    $('.btn-topbox .btn-find').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let idx = $(this).index();
        
        $('.common-find').eq(idx).addClass('active').siblings().removeClass('active');
        


        // let idx = $(this).index()
        // idx 라는 변수에 현재 선택된 객체의 순서값을 넣어줌


        // eq가 요소 순서 선택
        // $(this).index() 
        // 이거는 알아두면 되게 요긴하게씀

        // $(this) <== 이벤트가 일어난 객체
        // index() <-- 그 객체의 순서값을 받아와줌!
        // let idx = $(this).index();
        //  ㄴ 이벤트가 일어난 객체 순서값 반환해주는 변수

        // $(섹션태그).eq(idx).addClass('active').siblings().removeClass('active'); //eq는 요소 순서값으로 선택 할 수 있게 해주는 변수입니다 ex) $("element")eq(0) == 첫번째 요소 

        // $(섹션태그).eq(idx) 

        // 이거랑

        // btn-find 의 개수가 똑같고 보여져야 하는 순서도 똑같이 배치되어있기 때문에 반환되는 숫자가 똑같아요

        // console.log(idx)해보시면
        // 첫번째거 누르면 0 두번째거 누르면 1이 반환될건데요

        // idx 값 받아온걸 


        // $(섹션태그).eq(idx) 여기에 써먹고 나머지는 위에 
        // addClass 이거랑 같은거죠
        // 선택된 요소에 active 클래스 추가해주구 형제 요소에서 active 클래스 지워주구
        
    });

    // 메인슬라이드 제이슨
    // fetch('../asset/data/product.json')
    // .then((response) => response.json())
    // .then((json) => {
    //     mSlide = json.mainSlide
    //     // console.log(mSlide);
    //     html = '';
    //     mSlide.forEach(product => {
    //         html +=`<li class="swiper-slide">
    //         <a href="${product.href}" class="link-visual">
    //             <div class="img-box">
    //                 <img src="${product.thmbnail}" alt="매일유업 ~66% ↓">
    //                 <div class="label-box">
    //                     <span class="label-text">브랜드 데이</span>
    //                 </div>
    //             </div>
    //             <div class="txt-box">
    //                 <strong class="title">매일유업 ~66% ↓</strong>
    //                 <span class="desc">역대급 할인 혜택</span>
    //             </div>
    //         </a>
    //     </li>`
    //     })


    //     $('.sc-visual .swiper-wrapper').append(html);
        
    // });//end

    //메인슬라이드 부분
    fetch('https://jaehyunbyun.github.io/navershop/asset/data/product.json')
    .then((response) => response.json())
    .then((json) => {
        mSlide = json.mainSlide
        // console.log(mSlide);
        html = '';
        mSlide.forEach(slide => {

            html +=`<li class="swiper-slide">
                    <a href="${slide.href}" class="link-visual">
                    <div class="img-box">
                    <img src="${slide.thmbnail}" alt="매일유업 ~66% ↓">
                    <div class="label-box">
                    <span class="label-text">${slide.event}</span>
                    </div>
                    </div>
                    <div class="txt-box">
                    <strong class="title">${slide.title}</strong>
                    <span class="desc">${slide.subtitle}</span>
                    </div>
                    </a>
                    </li>`
        })
        $('.sc-visual .swiper-wrapper').append(html);
        var swiper = new Swiper(".visual", {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 15,
            centeredSlides: true, // true 인 경우 활성 슬라이드는 항상 왼쪽이 아닌 가운데에 배치됩니다.
            pagination: {
                el: ".swiper-pagination",
            },
            autoplay: {
                 delay: 3000, // 시간 설정
                 disableOnInteraction: false, // false-스와이프 후 자동 재생       
                 },
    
        });
    
    });


    fetch('https://jaehyunbyun.github.io/navershop/asset/data/product.json')
    .then((response) => response.json())
    .then((json) => {
        baNner = json.baanerSlide
        // console.log(baNner);
        html = '';

        baNner.forEach(bnr => {
            html += `<li class="swiper-slide">
            <a href="#" class="link-slide">
                <div class="img-box">
                    <img src="${bnr.thmbnail}" alt="[심쿡DAY] 비오면 생각나는 집쿡 요리! 여름이었다.">
                </div>
                <div class="txt-box">
                    <strong class="title">
                        <span class="title-text">${bnr.title}</span>
                        <span class="liveBanner"><svg width="33" height="22" viewBox="0 0 33 22" fill="none" class="liveBanner_icon_bubble__43Uqb"><mask id="iconLiveBubble_33x22_red_svg__a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="22"><path fill-rule="evenodd" clip-rule="evenodd" d="M32.089.001L.808 1.865a.85.85 0 00-.808.84v13.959a.85.85 0 00.808.84l3.78.226v3.848c0 .138.162.217.275.135l5.053-3.666 22.173 1.322a.853.853 0 00.911-.841V.84a.85.85 0 00-.858-.84l-.053.001" fill="#fff"></path></mask><g mask="url(#iconLiveBubble_33x22_red_svg__a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M32.089.001L.808 1.865a.85.85 0 00-.808.84v13.959a.85.85 0 00.808.84l3.78.226v3.848c0 .138.162.217.275.135l5.053-3.666 22.173 1.322a.853.853 0 00.911-.841V.84a.85.85 0 00-.858-.84l-.053.001" fill="#F52308"></path></g></svg><svg width="6" height="9" viewBox="0 0 6 9" fill="none" class="liveBanner_live_icon__1nYKZ liveBanner_icon_l__7Ux74"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.952 0H0v9h5.46V7.104H1.952V0z" fill="#fff"></path></svg><svg width="3" height="9" viewBox="0 0 3 9" fill="none" class="liveBanner_live_icon__1nYKZ liveBanner_icon_i__3Bju2"><path fill-rule="evenodd" clip-rule="evenodd" d="M.09 9h1.952V0H.09v9z" fill="#fff"></path></svg><svg width="8" height="9" viewBox="0 0 8 9" fill="none" class="liveBanner_live_icon__1nYKZ liveBanner_icon_v__JP3Sd"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.706 0l-1.69 6.72L2.326 0H.269l2.57 9h2.354l2.57-9H5.707z" fill="#fff"></path></svg><svg width="7" height="9" viewBox="0 0 7 9" fill="none" class="liveBanner_live_icon__1nYKZ liveBanner_icon_e__2ODyg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.546 1.895V0H.804v9h5.742V7.105h-3.79v-1.72h3.17V3.49h-3.17V1.895h3.79z" fill="#fff"></path></svg><span class="blind">라이브</span></span>
                    </strong>
                    <p class="desc">
                        ${bnr.subtitle}
                    </p>
                </div>
            </a>
        </li>`
        })

        $('.sc-banner .swiper-wrapper').append(html);

        var swiper = new Swiper(".banner", {
            loop: true,
            slidesPerView: 'auto',
            // spaceBetween: 15,
            pagination: {
                el: ".swiper-pagination",
            },
    
        });

    });//end

    //쇼핑라이브 부분

    fetch('https://jaehyunbyun.github.io/navershop/asset/data/product.json')
    .then((response) => response.json())
    .then((json) => {
        item = json.liveItems
        // console.log(item);
        html = '';
        item.forEach(product => {

            html +=`<div class="shoplive-area">
            <ul class="shoplive-list">
            <li class="shoplive-item">
            <a href="${product.href}" class="link-shoplive">
            <div class="img-box">
            <img src="${product.shopItemBig}" alt="JAJU 시원한 여름나기 최대 혜택전">
            <div class="livetime">
            <span class="blind">방송시간</span>
            <span class="date">6월 29일</span>
            <span class="hour">18:00</span>
            </div>
            </div>
            <div class="txt-box">
            <strong class="title">
            ${product.title}
            </strong>
            <div class="desc">
            <span class="thumbox">
            <img src="${product.shopItemSmall}" alt="JAJU 시원한 여름나기 썸네일 이미지">
            </span>
            
            <div class="prc">
            <span class="sub-title">
                ${product.subtitle}
            </span>
            <span class="sale">40%</span>
            <span class="curr-prc">23,900원</span>
            <span class="n-pay">
            <span class="blind">네이버페이 3% 적립</span>
            <svg width="50" height="13" viewBox="0 0 50 13" fill="none" class="liveCalendar_icon__3aU55">
            <rect width="28.533" height="13" rx="0.433" fill="#03C75A"></rect><path fill="#03C75A" d="M.867.867h11.267v11.267H.867z"></path><path d="M9.23 3.467H8.06v4.412L4.94 3.467H3.77v2.6H2.6v.866h1.17v2.6h1.17V5.121l3.12 4.412h1.17v-2.6h1.17v-.865H9.23V3.467zM13 .867h14.667v11.267H13z" fill="#fff"></path><path d="M17.437 9.606c1.426 0 2.374-.737 2.374-1.828v-.009c0-.83-.592-1.354-1.498-1.439v-.025c.716-.148 1.274-.643 1.274-1.405v-.008c0-.961-.846-1.604-2.162-1.604-1.283 0-2.142.694-2.226 1.752l-.005.05h1.173l.004-.038c.05-.474.457-.782 1.054-.782.6 0 .952.296.952.79v.01c0 .494-.415.833-1.054.833h-.681v.91h.698c.736 0 1.172.321 1.172.905v.009c0 .5-.423.85-1.079.85-.66 0-1.092-.325-1.147-.761l-.008-.047h-1.219l.004.055c.085 1.054.99 1.782 2.374 1.782z" fill="#03C75A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.788 6.637c-.639 0-1.055-.436-1.055-1.156 0-.726.418-1.148 1.055-1.148s1.057.419 1.057 1.148c0 .717-.414 1.156-1.057 1.156zm0-.57c.193 0 .326-.168.326-.586 0-.421-.13-.576-.326-.576-.19 0-.326.155-.326.576 0 .418.136.587.326.587zm-.196 2.53h.706l2.776-4.19h-.703l-2.779 4.19zm3.287.07c-.641 0-1.058-.436-1.058-1.156 0-.728.42-1.148 1.057-1.148s1.055.416 1.055 1.144c0 .72-.412 1.16-1.055 1.16zm.325-1.156c0 .415-.132.584-.326.584-.193 0-.325-.168-.325-.584 0-.424.132-.579.325-.579.194 0 .326.157.326.579z" fill="#03C75A"></path><path d="M31.204 2.74h1.97c-.034 1.474-.969 2.552-2.366 3.047l.76 1.012c.945-.33 1.98-1.243 2.276-2.2.418.902 1.386 1.661 2.123 1.925l.704-1.001c-1.1-.363-2.123-1.32-2.178-2.783h1.881V1.684h-5.17V2.74zm1.133 4.576v1.012h5.346v2.552h1.298V7.316h-6.644zm6.633-.506V1.068h-1.287v2.387h-1.452v1.034h1.452V6.81h1.287zm9.334 3.927V6.975h-1.276v.935h-3.883v-.924h-1.287v3.751h6.446zm-2.222-4.73l-.121-.979c-.76.22-2.75.363-3.971.297v-.99h3.179V1.552h-4.51v1.012h3.234v.803h-3.19v2.981h1.32c1.309 0 3.168-.132 4.059-.341zm2.222.473V1.068h-1.276V6.48h1.276zm-1.276 3.234h-3.883V8.9h3.883v.814z" fill="#03C75A"></path>
            </svg>
            </span>
            </div>
            </div>
            
            <span class="brand-name">${product.supplier}</span>
            
            <button class="btn-notice">
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" class="liveCalendar_icon__3aU55">
            <mask id="iconBellPlus_18x15_red_svg__a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="0" width="14" height="15"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.958.5H2v13.75h13.958V13H12.5v-2.5H11V6h4.958V.5z" fill="#C8C8C8"></path></mask><g mask="url(#iconBellPlus_18x15_red_svg__a)"><mask id="iconBellPlus_18x15_red_svg__b" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.875 1.75a4.583 4.583 0 00-4.583 4.583v3.5l-1 1.917h11.166l-1-1.917v-3.5A4.583 4.583 0 008.875 1.75z"></path></mask><path d="M4.292 9.834l.886.463a1 1 0 00.114-.463h-1zm-1 1.916l-.887-.463a1 1 0 00.887 1.463v-1zm1 0v1-1zm9.166 0v1-1zm1 0v1a1 1 0 00.887-1.463l-.886.463zm-1-1.917l.887-.462a1 1 0 00-.886-.538v1zm0 0h-1a1 1 0 001 1v-1zm-8.166-3.5A3.583 3.583 0 018.875 2.75v-2a5.583 5.583 0 00-5.583 5.583h2zm0 3.5v-3.5h-2v3.5h2zm-1.114 2.38l1-1.916-1.773-.926-1 1.916 1.773.926zm.114-1.463h-1v2h1v-2zm9.166 0H4.292v2h9.166v-2zm1 0h-1v2h1v-2zm-1.886-.454l1 1.917 1.773-.925-1-1.917-1.773.925zm.886.537v-2 2zm-1-4.5v3.5h2v-3.5h-2zM8.875 2.75a3.583 3.583 0 013.583 3.583h2c0-3.083-2.5-5.583-5.583-5.583v2z" fill="red" mask="url(#iconBellPlus_18x15_red_svg__b)"></path><path d="M6.64 11.632a2.293 2.293 0 004.47 0" stroke="red" stroke-linejoin="round"></path></g><path d="M14.708 6.333v5.834m2.917-2.917H11.79" stroke="red" stroke-width="1.25"></path>
            </svg>
            알림받기
            </button>
            </div>
            </a>
            </li>
            </ul>
            </div>`
        });


        $('.live-list').append(html);
        
    });//end
    
    
    //트렌드핏


    fetch('https://jaehyunbyun.github.io/navershop/asset/data/product.json')
    .then((response) => response.json())
    .then((json) => {
        trend = json.trendSlide
        // console.log(trend);
        html = '';
        trend.forEach(tnd => {
            html +=` <div class="swiper-slide">
            <ul class="trend-list">
                <li class="trend-item">
                    <a href="#" class="link-trend">
                        <div class="img-box">
                            <img src=${tnd.thmbnail} alt="원피스 무료배송">
                        </div>
                        <p class="desc">${tnd.event}</p>
                    </a>
                </li>
                <li class="trend-item">
                    <a href="#" class="link-trend">
                        <div class="img-box">
                            <img src=${tnd.thmbnail} alt="원피스 무료배송">
                        </div>
                        <p class="desc">${tnd.event}</p>
                    </a>
                </li>
                <li class="trend-item">
                    <a href="#" class="link-trend">
                        <div class="img-box">
                            <img src=${tnd.thmbnail} alt="원피스 무료배송">
                        </div>
                        <p class="desc">${tnd.event}</p>
                    </a>
                </li>
                <li class="trend-item">
                    <a href="#" class="link-trend">
                        <div class="img-box">
                            <img src=${tnd.thmbnail} alt="원피스 무료배송">
                        </div>
                        <p class="desc">${tnd.event}</p>
                    </a>
                </li>
                <li class="trend-item">
                    <a href="#" class="link-trend">
                        <div class="img-box">
                            <img src=${tnd.thmbnail} alt="원피스 무료배송">
                        </div>
                        <p class="desc">${tnd.event}</p>
                    </a>
                </li>
                <li class="trend-item">
                    <a href="#" class="link-trend">
                        <div class="img-box">
                            <img src=${tnd.thmbnail} alt="원피스 무료배송">
                        </div>
                        <p class="desc">${tnd.event}</p>
                    </a>
                </li>
                <li class="trend-item">
                    <a href="#" class="link-trend">
                        <div class="img-box">
                            <img src=${tnd.thmbnail} alt="원피스 무료배송">
                        </div>
                        <p class="desc">${tnd.event}</p>
                    </a>
                </li>
                <li class="trend-item">
                    <a href="#" class="link-trend">
                        <div class="img-box">
                            <img src=${tnd.thmbnail} alt="원피스 무료배송">
                        </div>
                        <p class="desc">${tnd.event}</p>
                    </a>
                </li>
                <li class="trend-item">
                    <a href="#" class="link-trend">
                        <div class="img-box">
                            <img src=${tnd.thmbnail} alt="원피스 무료배송">
                        </div>
                        <p class="desc">${tnd.event}</p>
                    </a>
                </li>
            </ul>
        </div>`
        })
        $('.sc-trend .swiper-wrapper').append(html);
        var swiper = new Swiper(".trend", {
            loop: true,
            pagination: {
                el: ".pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
            },
    
        });
    });//end
    



//scmall 상점리스트
    // fetch('../asset/data/product.json')
    // .then((response) => response.json())
    // .then((json) => {
    //     mallList = json.mallList
    //     // console.log(mallList);
    //     html = '';

    //     mallList.forEach(mlt => {
    //         html += `<li class="mallnav-item">
    //         <div class="btn-mall">
    //             <div class="img-box">
    //                 <img src=${mlt.thmbnail}  alt="걸스케이스" class="toptopShopping_image__25Bpc">
    //             </div>
    //             <strong class="title">${mlt.title}</strong>
    //         </div>
    //     </li>
    //     `
    //     })

    //     $('.sc-mall .mallnav-list').append(html);
    // })

// sc-mall상품들
    fetch('https://jaehyunbyun.github.io/navershop/asset/data/product.json')
    .then((response) => response.json())
    .then((json) => {
        mallItem = json.mallItems
        // console.log(mallList);
        html = '';

        mallItem.forEach(mli => {
            html += `<li class="mall-item">
            <a href=${mli.href} class="link-mall">
                <div class="img-box">
                    <img src=${mli.thmbnail} alt="걸스케이스 아이폰13 프로 맥스 미니 아이폰12 PRO 플라워 압화 젤리 케이스" class="toptopShopping_image__25Bpc">
                    <div class="label">
                    ${mli.event}
                    </div>
                </div>
                <div class="txt-box">
                    <span class="prc">${mli.prc}</span>
                    <strong class="title">
                        ${mli.title}
                    </strong>
                </div>
            </a>
        </li>`
        })

        $('.sc-mall .mall-list').append(html);
    })










    //잇걸
    fetch('https://jaehyunbyun.github.io/navershop/asset/data/product.json')
    .then((response) => response.json())
    .then((json) => {
        rankItem = json.rankingItem
        html = '';

        rankItem.forEach(rank => {
            html += `<li class="ranking-item">
            <a href=${rank.href} class="link-ranking">
                <div class="img-box">
                    <img src=${rank.thmbnail} alt="쭈꾸미 볶음">
                </div>
    
                <div class="label">
                    <em class="label-text">
                        ${rank.title}
                    </em>
                </div>
            </a>
        </li>`
        })

        $('.sc-ranking .itgirl').append(html);
    })
// 일간베스트
fetch('https://jaehyunbyun.github.io/navershop/asset/data/product.json')
    .then((response) => response.json())
    .then((json) => {
        rankBest = json.rankBest
        html = '';
        

        rankBest .forEach(rankbest => {
            html += `<li class="rBest-item">
            <a href=${rankbest.href} class="link-rBest">
                <div class="img-box">
                    <img src=${rankbest.thmbnail} alt="복숭아사진">
                    <em class="label-rank">
                        ${rankbest.number}
                        <span class="blind">위</span>
                    </em>
                </div>

                <div class="txt-box">
                    <strong class="title">
                        ${rankbest.title}
                    </strong>

                    <p class="prc">
                        <span>${rankbest.prc}</span>원
                    </p>
                </div>
            </a>
        </li>`
        })

        $('.sc-ranking .rBest-list').append(html);
    })

//브랜드 스토어





    fetch('https://jaehyunbyun.github.io/navershop/asset/data/product.json')
    .then((response) => response.json())
    .then((json) => {
        brnadlist = json.brandList
        // console.log(brnadlist);
        html = '';

        brnadlist.forEach(brandL => {
            html += `<li class="brand-item">
            <a href=${brandL.href} class="link-brand">
                <div class="img-box">
                    <img src=${brandL.thmbnail} alt="페브리즈공식몰">
                </div>
                <strong class="title">${brandL.title}</strong>
            </a>
        </li>`
        })


        $('.sc-brand .brand-list').append(html);
    })

    //핫딜
    fetch('https://jaehyunbyun.github.io/navershop/asset/data/product.json')
    .then((response) => response.json())
    .then((json) => {
        hotDeal = json.hotDeal
        // console.log(brnadlist);
        html = '';

        hotDeal.forEach(hd => {
            html += `<li class="hotdeal-item">
            <a href=${hd.href} class="link-hotdeal">
                <div class="img-box">
                    <img src=${hd.thmbnail} alt="구중구포 수제 흑삼겔 10g 20포">
                    <span class="sale">
                        <span class="blind">할인율</span>
                        ${hd.event}
                    </span>
                </div>
                <div class="txt-box">
                    <em class="time-box">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" class="hotDeal_icon__QYkjC"><circle cx="5.5" cy="5.5" r="5.25" stroke="#929292" stroke-width="0.5"></circle><path d="M5.5 3v3h3" stroke="#929292" stroke-width="0.5"></path></svg>
                        
                        남은시간
                        <span class="time">
                            03<span class="hotdeal-at">:</span> 
                            12<span class="hotdeal-at">:</span> 
                            31
                        </span>
                    </span>
                    </em>

                    <strong class="title">${hd.title}</strong>
                    <p class="prc">
                        <span class="emp">${hd.prc}</span>원
                    </p>
                </div>
            </a>
        </li>`
        })


        $('.sc-hotdeal .hotdeal-list').append(html);
    })





});