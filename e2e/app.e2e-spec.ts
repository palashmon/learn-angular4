import { LearnAngular4Page } from './app.po';

describe('learn-angular4 App', () => {
    let page: LearnAngular4Page;

    beforeEach(() => {
        // page = new LearnAngular4Page();
        console.log('see.. this function is run EACH time, before each describe()');
    });

    it('should display welcome message', () => {
        // page.navigateTo();
        // expect(page.getParagraphText()).toEqual('Welcome to app!');
    });

    it('birds should fly', function() {
        /** ... */
    });
    it('horse should gallop', function() {
        /** ... */
    });
});
