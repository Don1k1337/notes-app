import {useNavigate} from 'react-router-dom';

export const useCustomNavigate = (path) => {
    const navigate = useNavigate();
    return () => navigate(path);
};
