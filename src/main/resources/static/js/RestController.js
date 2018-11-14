var RestControllerModule = (function () {
//------------------Metodos Get------
  var getProducts = function (callback) {
	
    axios.get('/shopapi/products/')
    .then(function (response) {
     return callback.onSuccess(response.data);
    })
    .catch(function (error) {
      return callback.onFailed(error);
    });
  };
  var getProduct = function(productName, callback){			
	axios.get('/shopapi/products/'+productName)		
		.then(function(response){
			callback.onSuccess(response.data);			
		})
		.catch(function(error){
			callback.onFailed(error);
		});
	};
	var getActiveUser = function( callback){			
	axios.get('/shopapi/active')		
		.then(function(response){
			callback.onSuccess(response.data);			
		})
		.catch(function(error){
			callback.onFailed(error);
		});
	};
	var getSearchProducts = function(search, callback){			
	axios.get('/shopapi/searchproducts/'+search)		
		.then(function(response){
			callback.onSuccess(response.data);			
		})
		.catch(function(error){
			callback.onFailed(error);
		});
	};
	


  

  return {
	getActiveUser: getActiveUser,
    getProducts: getProducts,
	getProduct: getProduct,
    getSearchProducts: getSearchProducts

  };

})();