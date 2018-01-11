app.factory("ajaxServer",function($q,$http){
    return {
        ajax:function(url){
            var def = $q.defer();
            $http({
                url:url
            }).then(function(result){
                def.resolve(result)
            },function(error){
                def.reject(error)
            })
            return def.promise;
        }
        
    }
})