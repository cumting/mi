angular.module('everyMd',[])
.directive('every',function(){
	return{
 restrict:"AE",
 replace:true,
 scope:{title:'@',
 kind1:'@',
  kind2:'@',
   kind3:'@',
   imgItems: '=',
   pic1:'@',
   pic2:'@'
},
 templateUrl:'js/directives/template/everyTpl.html',
	}
})