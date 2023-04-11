import Page from './page.js';

class AddRemovePage extends Page {
    
    get AddElement1 () {
        return $('//*[@id="content"]/div/button');
    }
    
    get AddElement2 () {
        return $('//*[@id="content"]/div/button');
    }

    get AddElement3 () {
        return $('//*[@id="content"]/div/button');
    }

    get AddElement4 () {
        return $('//*[@id="content"]/div/button');
    }

    get AddElement5 () {
        return $('//*[@id="content"]/div/button');
    }

    get RemoveElement1 () {
        return $('//*[@id="elements"]/button');
    }

    get RemoveElement2 () {
        return $('//*[@id="elements"]/button');
    }
    open() {
        return super.open('add_remove_elements/');
    }
}

export default new AddRemovePage();