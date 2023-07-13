// scrollAnim //
(function(){
	var iO = "IntersectionObserver" in window && 'isIntersecting' in window.IntersectionObserverEntry.prototype;
	var tagStr = 'js-animate';
	var tagStrActive = tagStr+"--active";
	var tags = document.querySelectorAll("."+tagStr);
	var activeOffset = 30;
	
	// if (iO) {
	// 	// console.log(1);
	// 	var previousY = 0;
	// 	var observer = new IntersectionObserver(
	// 		function (entries) {
	// 			Array.prototype.forEach.call(entries,function (entry) {
	// 				var currentY = entry.boundingClientRect.top;
	// 				var isIntersecting = entry.isIntersecting;
	// 				var target = entry.target;
					
	// 				// console.table(target.id, previousY, currentY);

	// 				if (isIntersecting) {
	// 					target.classList.add(tagStrActive);
	// 				} else if(currentY >= previousY) {
	// 					// console.log(currentY - previousY);
	// 					target.classList.remove(tagStrActive);
	// 					// console.log(target.id);
	// 				}
	// 				previousY = currentY;
	// 			});
	// 		}, {
	// 			root: null,
	// 			rootMargin: activeOffset + "px 0px "+ -activeOffset+"px",
	// 			threshold: [0, 1]
	// 		});
	// 	Array.prototype.forEach.call(tags, function (target) {
	// 		return observer.observe(target);
	// 	});
	// } else {
		// console.log(0);
		function scrollAnim() {
			var pageTop = document.documentElement.scrollTop || window.pageYOffset ||document.body.scrollTop;
			var pageBottom = pageTop + window.innerHeight;
			Array.prototype.forEach.call(tags, function(item){
				if ((item.getBoundingClientRect().top + pageTop) < pageBottom - activeOffset) {
					item.classList.add(tagStrActive);
				} else {
					item.classList.remove(tagStrActive);
				}
			});
		}
		scrollAnim(); // init
		// document.onscroll = scrollAnim;
		document.addEventListener("scroll", scrollAnim);
	// }
})();