import {useNavigate} from 'react-router-dom';

export const useCustomNavigate = (path: string) => {
    const navigate = useNavigate();
    return () => navigate(path);
};
