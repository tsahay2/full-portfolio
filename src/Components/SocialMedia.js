import React, { Component } from 'react';
import TweetEmbed from 'react-tweet-embed';
class SocialMedia extends Component {
render() {

    if(this.props.data) {
        debugger;
        var tweets = this.props.data.twitter.map(function (tweet) {
            return <div key={tweet.tweetId}  className="columns portfolio-item">
                <div className="item-wrap">
                <TweetEmbed id={tweet.tweetId}/>
                </div>
            </div>
        });
    }

    return(
        <section id="twitter">
                <div className="row">
                    <div className="twelve columns collapsed">

                        <h1>Check Out Some of proud tweets.</h1>
                    </div>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <ul className="slides">
                            {tweets}
                        </ul>
                    </div>
                </div>

        </section>
            )
}
}
export default SocialMedia;