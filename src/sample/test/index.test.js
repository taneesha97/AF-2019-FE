import { getByTestId, render } from '@testing-library/react'
import CreateCategory from "../../components/createCategory/createCategory";

let container = null;

describe ( 'Testing Index file that contain a form', () => {
    beforeEach (() => {
        container  = render(<CreateCategory/>).container;
    })

    it('should render form tag' , () => {
        expect(getByTestId(container ,'form-tag-id')).toBeTruthy();
    });

    it('should render Title' , () => {
        expect(getByTestId(container ,'title-field')).toBeTruthy();
        expect(getByTestId(container, 'title-field').textContent).toBe('Create Category');
    });

    it('should render Input field' , () => {
        expect(getByTestId(container ,'input-field')).toBeTruthy();
    });

    it('should render Submit button' , () => {
        expect(getByTestId(container ,'submit-btn')).toBeTruthy();
    });
});
