// Twitter Overrides -----------------------------------------------------------------------------
$('.twitter-feed').delegate('#twitter-widget-0', 'DOMSubtreeModified propertychange', function () {
    customizeTweetMedia();
});

var customizeTweetMedia = function () {
    // CSS Overrides

	//set background
    $('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Widget').css('background-color', 'white');

	//remove not needed nodes
	$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Header').remove();
	$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Tweet-author').remove();
	$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-LoadMore').remove();
	$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Tweet-actions').remove();
	$('.twitter-feed').find('.twitter-timeline').contents().find('.Icon--twitter').remove();
	$('.twitter-feed').find('.twitter-timeline').contents().find('.dt-updated').remove();
	$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Footer').remove();
	$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Tweet-text').remove();
	//$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Tweet  u-cf js-tweetIdInfo js-clickToOpenTarget').remove();

	//$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Header').remove();
	//$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-EmptyMessage').remove();
	//$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Footer').remove();
	//$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Tweet-text').remove();

	//$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-TweetList').css('list-style', 'none');
	//$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-TweetList-tweet').css('float', 'left');
	//$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-TweetList-tweet').css('margin', '0 20px');
	//$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-TweetList-tweet').css('width', '50%');
	//$('.twitter-feed').find('.twitter-timeline').css('display', 'block');
	var timelineTweet = $('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Tweet');
	timelineTweet.removeClass('timeline-Tweet');
	//timelineTweet.addClass('col-md-4 col-sm-6 nf-item spacing-grid blog-post');
	//timelineTweet.css('float', 'center');
	//https://www.w3schools.com/css/css_rwd_mediaqueries.asp
	//timelineTweet.css('width', '230px');

	//remove twitter styling, thus default styling will apear

    //col-md-4 col-sm-6 nf-item spacing-grid
	//$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Tweet-text').removeClass('timeline-Tweet-text');
	//$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Tweet-media').removeClass('timeline-Tweet-media');
	//$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Tweet-metadata').removeClass('timeline-Tweet-metadata');
	//$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Tweet-actions').removeClass('timeline-Tweet-actions');
	//$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Tweet-brand').removeClass('timeline-Tweet-brand');

   // $('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Widget').classList.add('blog-post');
    //$('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-Tweet-media').css('display', 'none');
     //$('.twitter-feed').find('.twitter-timeline').contents().find('img.Avatar').css('display', 'none');
    //$('.twitter-feed').find('.twitter-timeline').contents().find('span.TweetAuthor-avatar.Identity-avatar').remove();
    //$('.twitter-feed').find('.twitter-timeline').contents().find('span.TweetAuthor-screenName').css('font-size', '16px');
    //$('.twitter-feed').find('.twitter-timeline').contents().find('span.TweetAuthor-screenName').css('font-family', 'Raleway');
    //$('.twitter-feed').find('.twitter-timeline').contents().find('p.timeline-tweet-text').css('font-family', 'Libre Baskerville');
    //$('.twitter-feed').find('.twitter-timeline').contents().find('p.timeline-tweet-text').css('font-size', '16px');
    //$('.twitter-feed').find('.twitter-timeline').contents().find('p.timeline-tweet-text').css('line-height', '1.6');
    //$('.twitter-feed').find('.twitter-timeline').contents().find('ul.timeline-tweet-actions').css('display', 'none');

    $('.twitter-feed').find('.twitter-timeline').contents().find('.MediaCard-widthConstraint').css('display', 'block');
    $('.twitter-feed').find('.twitter-timeline').contents().find('.MediaCard-widthConstraint').css('margin-left', 'auto');
    $('.twitter-feed').find('.twitter-timeline').contents().find('.MediaCard-widthConstraint').css('margin-right', 'auto');
}

// Twitter kids service Overrides -----------------------------------------------------------------------------
$('.kids-service-feed').delegate('#twitter-widget-0', 'DOMSubtreeModified propertychange', function () {
    customizeTweetMediaForKids();
});

var customizeTweetMediaForKids = function () {
    //kids service
    $('.kids-service-feed').find('.twitter-timeline').contents().find('.timeline-Header').remove();
    $('.kids-service-feed').find('.twitter-timeline').contents().find('.TweetAuthor').remove();
    $('.kids-service-feed').find('.twitter-timeline').contents().find('.timeline-LoadMore').remove();
    $('.kids-service-feed').find('.twitter-timeline').contents().find('.timeline-Tweet-actions').remove();
    $('.kids-service-feed').find('.twitter-timeline').contents().find('.timeline-Tweet-text').remove();
    $('.kids-service-feed').find('.twitter-timeline').contents().find('.timeline-Tweet-author').remove();
    $('.kids-service-feed').find('.twitter-timeline').contents().find('.timeline-Tweet-brand').remove();
    $('.kids-service-feed').find('.twitter-timeline').contents().find('.timeline-Tweet-metadata').remove();
    $('.kids-service-feed').find('.twitter-timeline').contents().find('.timeline-Footer').remove();
    //alert('Sie sollten doch nicht drücken!');

    $('.kids-service-feed').find('.twitter-timeline').contents().find('.MediaCard-widthConstraint').css('display', 'block');
    $('.kids-service-feed').find('.twitter-timeline').contents().find('.MediaCard-widthConstraint').css('margin-left', 'auto');
    $('.kids-service-feed').find('.twitter-timeline').contents().find('.MediaCard-widthConstraint').css('margin-right', 'auto');

    var timelineTweet = $('.kids-service-feed').find('.twitter-timeline').contents().find('.timeline-Tweet');
    timelineTweet.removeClass('timeline-Tweet');
}