/**
 * 实现ul导航栏效果的指令，包括当前头部导航栏,content部分左边的导航栏
 */
angular.module("ulBoxMd", ["filterMd"])
    .directive('ulBox', function() {
        return{
            restrict:"AE",
            replace:true,
            templateUrl:"js/directives/template/ulBoxTpl.html",
            scope:{
                ulItems:'=',
                childrenContent:'=',
                childrenDivClass: '@'
            },
            link: function (scope, element, attrs) {
                if (attrs.ulType == 'nav') {
                    scope.typeSeq = 1
                } else if (attrs.ulType == 'heshe') {
                    scope.typeSeq = 0
                }
            }
        };
       
    })

    .directive('ulBoxChildContent', function factory() {
        var directiveDefinitionObject = {
            restrict:"AE",
            replace:true,
            templateUrl:"js/directives/template/ulBoxContentTplMult.html",
            require: '^?',
            scope:{
                parentItem:'=',
                childrenContent:'=',
                childrenDivClass: '@'
            },

            link: function (scope, element, attrs) {
                scope.ContentArray = [];
                scope.pageList = [];
                var pageSize = 6;



                // childrenContent为products.json中数据
                // parentItem为appjs中两个数组
                angular.forEach(scope.childrenContent, function (ContentItem) {
                    if (scope.parentItem.id == ContentItem.fl_id || scope.parentItem.id.indexOf('$'+ContentItem.fl_id+'$') != -1) {
                        scope.ContentArray.push(ContentItem)
                    }
                })
                scope.page = Math.ceil(scope.ContentArray.length / pageSize);
               // alert(scope.ContentArray.length);
                for(var i=0;i<scope.page;i++)
                {
                    scope.pageList.push(i+1);
                }
                scope.setClass = function()
                {
                    return 'class-col-' + scope.page;
                }

                scope.flag = false;
                scope.showContent = function () {
                    scope.flag = true;
                }
                scope.closeContent = function () {
                    scope.flag = false;
                }
            }
        };
        return directiveDefinitionObject;
    })

