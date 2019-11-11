import React from 'react';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleListWithAccordion, {ArticleList} from "./article-list";
import articles from '../fixtures';


Enzyme.configure({adapter: new Adapter()});
describe('ArticleList', () => {
    it('it should render article list', () => {
        const component = render(<ArticleList articles={articles}/>);
        expect(component.find('.test__article_list--item').length).toEqual(articles.length);
    });
    it('it should render closed render by default', () => {
        const component = render(<ArticleListWithAccordion articles={articles}/>);
        expect(component.find('.test__article--body').length).toEqual(0);
    });
    it('it should render onclick', () => {
        const component = mount(<ArticleListWithAccordion articles={articles}/>);
        component.find('.test__article--btn').at(0).simulate('click');
        expect(component.find('.test__article--body').length).toEqual(1);
    });
    it('it should triggered on fetched data', (done) => {
        mount(<ArticleListWithAccordion articles={[]} fetchData={done} />);

    });
});
