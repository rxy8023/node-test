suite('"About" Page Test',function(){
	test('page should contain link to contact page', function(){
		assert($('a[href="/contract"]').length); //包含一个联系我们的页面
	})
})