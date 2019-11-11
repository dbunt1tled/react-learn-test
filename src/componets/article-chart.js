import React, {PureComponent} from 'react';
import * as d3 from "d3";

class ArticleChart extends PureComponent{
    render() {
        return(
            <div ref={this.setContainerRef}>

            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // compare prevProps and newProps
        // update d3
    }
    componentWillUnmount() {
        //remove all d3 junk
    }

    setContainerRef = (ref) => {
        const {articles} = this.props;
        if (ref) {
            this.containerRef = ref;
        }
    }
}

export default ArticleChart
