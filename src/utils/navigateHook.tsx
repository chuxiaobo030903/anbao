// 统一页面跳转方法
import { useNavigate } from 'react-router-dom';

export const useToPage = () => {
    const navigate = useNavigate();
    const NToXtest = ()=> navigate('/xtest');
    const NToLogin = ()=> navigate('/login');
    return { NToXtest,NToLogin }
}


