import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.siteHeader = $(".site-header");
		this.headerTriggerPoint = $(".large-hero__title");
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.lazyImages = $(".lazyload");
		this.createHeaderWaypoint();
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll(); //refreshes all the waypoints stored in web browsers memory.
		});
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var mainItem = this;
		new Waypoint({
			element: this.headerTriggerPoint[0],
			handler: function(direction) {
				if(direction == "down") {
					mainItem.siteHeader.addClass("site-header--dark");
				} else {
					mainItem.siteHeader.removeClass("site-header--dark");
					mainItem.headerLinks.removeClass("is-current-link");
				}
			},
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link"); 
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "18%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link"); 
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "-40%"
			});
		});
	}
}

export default StickyHeader;