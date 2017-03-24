/**
 * 实现焦点图效果的指令：首页轮播图，明星单品，为您推荐
 */

angular.module("focusImgMd", [])
    .directive('focusImg', function factory($interval) {
        


        return {




            restrict: 'AE',
            replace: true,
            /*   templateUrl: function (a, b) {
             return 'js/directives/page/' + b.temp + '.html'
             },*/
            templateUrl: function (element, attrs) {
                if (attrs.template == "multiple") {
                    return 'js/directives/template/focusImgMultTpl.html'
                } else {
                    return 'js/directives/template/focusImgTpl.html'
                }
            },
            scope: {imgItems: '=', title: "@?"},
            link: function (scope, element, attrs) {
                scope.imgIndex = 0;
                var bannerWidth = element[0].querySelector('#focusImg').parentNode.clientWidth;
                var focusImgWidth = element[0].querySelector('#focusImg').clientWidth;
                var imgIndexNumber = Math.round(focusImgWidth / bannerWidth);

                var imgMargin = 0;
                if(attrs.template == "multiple")
                {
                    imgMargin = 15;
                }
                function animation(index) {
                    var offset = -index * (element[0].querySelector('#focusImg').parentNode.clientWidth+imgMargin);
                    element[0].querySelector('#focusImg').style.left = offset+ "px";
                }

                scope.changeImg = function (number) {
                    scope.imgIndex += number;
                    if (scope.imgIndex < 0) {
                        scope.imgIndex = imgIndexNumber - 1;
                    } else if (scope.imgIndex >= imgIndexNumber) {
                        scope.imgIndex = 0;
                    }
                    animation(scope.imgIndex);

                }
 // scope.timer = $interval(changeImg(1)
 //         ,2000);
 function changeImg(number){
                    scope.imgIndex += number;
                    if (scope.imgIndex < 0) {
                        scope.imgIndex = imgIndexNumber - 1;
                    } else if (scope.imgIndex >= imgIndexNumber) {
                        scope.imgIndex = 0;
                    }
                    animation(scope.imgIndex);

                }

scope.timer=$interval(function(){ if(attrs.template == "multiple"){changeImg(1) }}
         ,4000);
scope.timer1=$interval(function(){ if(attrs.template !== "multiple"){changeImg(1) }}
         ,6000);

// scope.timer=function(){if (attrs.template == "multiple")
//         {$interval(changeImg(1),2000);}
//                                  else if(attrs.template !== "multiple"){$interval(changeImg(1),3000)};}
    // scope.timer=function(){if (attrs.template == "multiple")
    //     {$interval(changeImg(1),2000);}}
                                  

    scope.btnClk = function (index) {
                    scope.imgIndex  = index;
                    animation(index);
                }
                var imgSize = 5;
                scope.imgTotalPage = scope.imgItems.length/imgSize-1;
            }
        }
    }
)
