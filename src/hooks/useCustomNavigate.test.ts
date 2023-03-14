import {useNavigate} from 'react-router-dom';
import {useCustomNavigate} from './useCustomNavigate';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('useCustomNavigate', () => {
    const path = '/path';

    beforeEach(() => {
        (useNavigate as jest.Mock).mockReturnValue(jest.fn());
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should call navigate with correct path when called', () => {
        const navigate = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(navigate);

        const navigateFn = useCustomNavigate(path);
        navigateFn();

        expect(navigate).toHaveBeenCalledWith(path);
    });
});