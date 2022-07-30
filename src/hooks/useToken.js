import { useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');
    return [token, setToken];
}
export default useToken;